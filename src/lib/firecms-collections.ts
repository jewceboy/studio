import { buildCollection, buildProperty } from "firecms";

const postsCollection = buildCollection({
    name: "Blog Posts",
    path: "posts", // This must match the collection name in your migration script
    properties: {
        title: buildProperty({
            name: "Title",
            dataType: "string",
            validation: { required: true }
        }),
        slug: buildProperty({
            name: "Slug (URL)",
            dataType: "string",
            description: "The part of the URL after the domain",
            validation: { required: true }
        }),
        content: buildProperty({
            name: "Content",
            dataType: "string",
            markdown: true, // This enables the WYSIWYG/Markdown editor!
            validation: { required: true }
        }),
        featuredImage: buildProperty({
            name: "Featured Image",
            dataType: "string",
            storage: {
                storagePath: "blog-images", // Uploads images here automatically
                acceptedFiles: ["image/*"]
            }
        }),
        category: buildProperty({
            name: "Category",
            dataType: "string",
            enumValues: {
                malaga: "Malaga",
                spain: "Spain",
                tips: "Travel Tips"
            }
        }),
        publishedAt: buildProperty({
            name: "Publish Date",
            dataType: "date"
        })
    }
});

export const myCollections = [postsCollection];
