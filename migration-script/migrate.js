const admin = require('firebase-admin');
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const csv = require('csv-parser');
const slugify = require('slugify');

// --- CONFIGURATION ---
// IMPORTANT: Make sure you have the 'service-account.json' and your CSV export in this folder.
const SERVICE_ACCOUNT_FILE = './service-account.json';
const CSV_EXPORT_FILE = './MTG_wordpress_export.csv';
// Get this from your Firebase project settings: Project settings > General > Your apps > Web app > Add Firebase SDK
const FIREBASE_STORAGE_BUCKET = "your-project-id.appspot.com"; // <-- IMPORTANT: REPLACE THIS

if (FIREBASE_STORAGE_BUCKET.includes("your-project-id")) {
    console.error("\n\n*** ACTION REQUIRED ***");
    console.error("Please open 'migrate.js' and replace 'your-project-id.appspot.com' with your actual Firebase Storage bucket name.");
    console.error("You can find this in your Firebase project settings.\n\n");
    process.exit(1);
}


// --- INITIALIZATION ---
try {
    const serviceAccount = require(SERVICE_ACCOUNT_FILE);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        storageBucket: FIREBASE_STORAGE_BUCKET
    });
} catch (error) {
    console.error("\n\n*** ACTION REQUIRED ***");
    console.error(`Failed to initialize Firebase. Make sure '${SERVICE_ACCOUNT_FILE}' is in this directory.`);
    console.error("You can download this file from your Firebase project settings under 'Service Accounts'.\n\n");
    process.exit(1);
}


const db = admin.firestore();
const bucket = admin.storage().bucket();

// --- HELPER FUNCTIONS ---

// Helper function to upload image to Firebase Storage
async function uploadImageToFirebase(imageUrl, slug) {
  try {
    if (!imageUrl || !imageUrl.startsWith('http')) {
        console.log(`   - Skipping invalid image URL: ${imageUrl}`);
        return null;
    }

    // Create a unique filename
    const imageName = imageUrl.split('/').pop().split('?')[0]; // Clean query params
    const destination = `blog-images/${slug}/${slugify(imageName, { lower: true, strict: true })}`;

    console.log(`   - Uploading ${imageName} to ${destination}`);

    // Download image
    const response = await axios({ url: imageUrl, responseType: 'stream' });
    
    // Upload to Firebase Storage
    const file = bucket.file(destination);
    await new Promise((resolve, reject) => {
        const writeStream = file.createWriteStream({
            metadata: { contentType: response.headers['content-type'] }
        });
        response.data.pipe(writeStream);
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });

    // Make it public
    await file.makePublic();
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${destination}`;
    console.log(`   - Success: ${publicUrl}`);
    return publicUrl;
  } catch (error) {
    console.error(`   - FAILED to upload ${imageUrl}:`, error.message);
    return imageUrl; // Keep original URL if upload fails as a fallback
  }
}

// --- MIGRATION LOGIC ---

async function migrate() {
    const results = [];
    if (!fs.existsSync(CSV_EXPORT_FILE)) {
        console.error(`\n\n*** ACTION REQUIRED ***`);
        console.error(`The file '${CSV_EXPORT_FILE}' was not found in this directory.`);
        console.error(`Please make sure your WordPress export CSV file is here and named correctly.\n\n`);
        return;
    }

    fs.createReadStream(CSV_EXPORT_FILE)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            console.log(`Found ${results.length} posts in the CSV file. Starting migration...`);
            console.log('--------------------------------------------------');

            for (const post of results) {
                // Assuming CSV columns are named 'Title', 'Content', etc. Case-sensitive.
                // Adjust these keys if your CSV columns are different.
                const title = post.Title || post.title;
                const content = post.Content || post.content || '';
                const date = post.Date || post.date;
                const exportedSlug = post.Slug || post.slug || slugify(title, { lower: true, strict: true });
                const category = post.Category || post.category || 'Uncategorized';
                const featuredImageUrl = post['Featured Image URL'] || post.featured_image_url || post.featuredImage;

                console.log(`\nProcessing post: "${title}"`);

                // A. Parse Content to find images
                const $ = cheerio.load(content);
                const imageTags = $('img');
                console.log(` - Found ${imageTags.length} images in content.`);

                // B. Loop through all images in the post content
                for (let i = 0; i < imageTags.length; i++) {
                    const img = imageTags[i];
                    const oldSrc = $(img).attr('src');
                    
                    if (oldSrc) {
                        const newSrc = await uploadImageToFirebase(oldSrc, exportedSlug);
                        if (newSrc) {
                            $(img).attr('src', newSrc);
                        }
                    }
                }

                // C. Upload Featured Image
                console.log(' - Processing featured image...');
                const newFeaturedImage = await uploadImageToFirebase(featuredImageUrl, exportedSlug);

                // D. Prepare data for Firestore
                const docData = {
                    title: title,
                    slug: exportedSlug,
                    content: $.html(), // The new HTML with Firebase image links
                    excerpt: post.Excerpt || post.excerpt || content.substring(0, 150),
                    publishedAt: admin.firestore.Timestamp.fromDate(new Date(date || Date.now())),
                    featuredImage: newFeaturedImage || null,
                    category: category,
                };

                // E. Save to Firestore
                await db.collection('posts').doc(exportedSlug).set(docData);
                console.log(` - Successfully saved Firestore doc: ${exportedSlug}`);
                console.log('--------------------------------------------------');
            }
            console.log("\nMigration complete! Your posts should now be in your Firestore database under the 'posts' collection.");
        });
}

migrate();
