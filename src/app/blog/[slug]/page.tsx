
'use client'; // Added due to onClick for print

import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Article } from '@/lib/constants';
import { CalendarDays, UserCircle, MessageSquare, Share2, Printer, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import Section from '@/components/shared/Section';
import ArticleCard from '@/components/blog/ArticleCard';
import imageData from '@/lib/placeholder-images.json';
import { Metadata } from 'next';


type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
  };
};

const images: ImageData = imageData;


// Placeholder data - replace with actual data fetching logic
const articlesData: { [key: string]: Article } = {
  'best-tapas-malaga': {
    id: '1', slug: 'best-tapas-malaga', title: 'Best Tapas Bars in Málaga Old Town', 
    imageUrl: images['Malaga-tapas-bar'].url, imageHint: images['Malaga-tapas-bar'].hint,
    date: '2024-05-15', author: 'Elena Rodriguez', 
    excerpt: 'A culinary journey through Málaga\'s most authentic tapas spots, from traditional bites to modern creations.',
    content: `<p>Málaga's old town is a labyrinth of charming streets, and hidden within are some of the best tapas bars you'll ever encounter. This guide will take you on a flavorful journey, highlighting must-try dishes and local favorites. From centuries-old taverns serving classic Andalusian recipes to innovative kitchens putting a modern spin on tapas, there's something for every palate.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">El Tapeo de Cervantes</h3>
    <p>A popular spot known for its creative tapas and extensive wine list. Booking is recommended. Their mini burgers and cod confit are divine.</p>
    <figure class="my-6">
      <img src="${images['restaurant-interior'].url}" alt="Interior of El Tapeo de Cervantes" class="rounded-lg shadow-md" data-ai-hint="${images['restaurant-interior'].hint}"/>
      <figcaption class="text-xs text-center text-muted-foreground mt-2">El Tapeo de Cervantes offers a cozy atmosphere.</figcaption>
    </figure>
    <h3 class="text-2xl font-montserrat font-semibold my-4">Casa Lola</h3>
    <p>Vibrant and always bustling, Casa Lola offers a wide array of traditional tapas. Try their 'montaditos' and vermouth on tap.</p>
    <p>Exploring these culinary gems provides not just a meal, but an authentic taste of Malagueño culture. ¡Buen provecho!</p>
    <div class="my-6 p-4 info-box-custom-bg border-l-4"> {/* Updated class for info box */}
        <h4 class="font-montserrat font-semibold text-foreground">Insider Tip:</h4>
        <p class="text-muted-foreground">Many bars offer a free tapa with your first drink. Don't be afraid to ask or observe what locals are doing!</p>
    </div>
    <h3 class="text-2xl font-montserrat font-semibold my-4">Relevant Tours & Hotels</h3>
    <p>Enhance your culinary journey by booking a guided tapas tour or staying in a hotel conveniently located in the Old Town. Check out these options:</p>
    <ul class="list-disc list-inside my-4 space-y-2">
        <li><a href="/restaurants/culinary-experiences/food-tours" class="text-primary hover:underline">Malaga Old Town Tapas Tour</a></li>
        <li><a href="/hotels/search?category=boutique-hotels-malaga" class="text-primary hover:underline">Boutique Hotels in Malaga Center</a></li>
    </ul>
    `,
    categories: ['Food & Drink', 'Malaga'],
    tags: ['tapas', 'old town', 'restaurants', 'malaga city']
  },
  'hidden-beaches-costa-del-sol': {
    id: '2', slug: 'hidden-beaches-costa-del-sol', title: 'Top 5 Hidden Beaches on the Costa del Sol',
    imageUrl: images['secluded-cove-beach'].url, imageHint: images['secluded-cove-beach'].hint,
    date: '2024-05-10', author: 'Mark Stevenson',
    excerpt: 'Discover tranquil coves and pristine sands away from the crowds for a perfect day of relaxation.',
    content: `<p>Escape the bustling tourist spots and discover the serene beauty of Costa del Sol's hidden beaches. This guide unveils five secluded gems where you can enjoy pristine sands and crystal-clear waters in peace. From hidden coves accessible only by foot to quiet stretches of coastline loved by locals, these beaches offer a perfect retreat.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">Playa de Maro</h3>
    <p>Often cited as one of Spain's best beaches, Playa de Maro is a stunning cove near Nerja, boasting turquoise waters perfect for snorkeling and kayaking. Its protected status means marine life is abundant.</p>
    <figure class="my-6">
      <img src="https://picsum.photos/seed/maro-beach-kayak/800/400" alt="Kayaking at Playa de Maro" class="rounded-lg shadow-md" data-ai-hint="kayak beach cove"/>
      <figcaption class="text-xs text-center text-muted-foreground mt-2">The clear waters of Maro are ideal for water sports.</figcaption>
    </figure>
    <p>Each of these hidden spots provides a unique coastal experience, far from the typical tourist trail. Pack a picnic, bring your sunscreen, and get ready to discover the tranquil side of the Costa del Sol.</p>`,
    categories: ['Beaches', 'Travel Tips'],
    tags: ['beaches', 'costa del sol', 'nerja', 'hidden gems']
  },
  'day-trip-ronda': {
    id: '3', slug: 'day-trip-ronda', title: 'A Day Trip to Ronda: What to See and Do',
    imageUrl: images['Ronda-bridge-view'].url, imageHint: images['Ronda-bridge-view'].hint,
    date: '2024-05-01', author: 'Sofia Chen',
    excerpt: 'Explore the dramatic landscapes, iconic bridge, and historic charm of the stunning town of Ronda.',
    content: `<p>Perched dramatically atop the El Tajo gorge, Ronda is one of Andalusia's most breathtaking towns and makes for an unforgettable day trip from the Costa del Sol. This guide covers the must-see sights for a perfect visit.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">Puente Nuevo (New Bridge)</h3>
    <p>The iconic Puente Nuevo is Ronda's most famous landmark, spanning the 120-meter-deep chasm. The views from the bridge are spectacular, but be sure to hike down into the gorge for the most impressive photo opportunities.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">Plaza de Toros</h3>
    <p>Visit one of Spain's oldest and most revered bullrings, the Plaza de Toros. Its museum offers fascinating insights into the history of bullfighting. Whether you agree with the tradition or not, the architectural and historical significance is undeniable.</p>`,
    categories: ['Day Trips'],
    tags: ['ronda', 'day trip', 'andalucia', 'sightseeing']
  },
  'caminito-del-rey-guide': {
    id: '4', slug: 'caminito-del-rey-guide', title: 'Ultimate Guide to Hiking Caminito del Rey',
    imageUrl: images['Caminito-del-Rey-path'].url, imageHint: images['Caminito-del-Rey-path'].hint,
    date: '2024-04-25', author: 'Carlos Gomez',
    excerpt: 'Everything you need to know before tackling one of Spain\'s most breathtaking hiking trails.',
    content: `<p>Once known as the world's most dangerous footpath, the Caminito del Rey has been transformed into a safe and stunningly beautiful hiking trail. Suspended along the walls of the Gaitanes Gorge, this trail offers breathtaking views and a thrilling experience.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">Booking Tickets</h3>
    <p>Tickets for the Caminito del Rey sell out weeks or even months in advance, especially during peak season. It is crucial to book online through the official website or a registered tour operator. Do not show up expecting to buy tickets on the day.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">The Trail</h3>
    <p>The hike is a one-way route of about 7.7 kilometers in total, which takes around 3-4 hours. Most of the path is flat, but it includes sections on boardwalks suspended over 100 meters above the river below. It is not suitable for those with a severe fear of heights.</p>`,
    categories: ['Adventure', 'Hiking'],
    tags: ['caminito del rey', 'hiking', 'adventure', 'malaga']
  },
  'malaga-christmas-lights': {
    id: '5', slug: 'malaga-christmas-lights', title: 'Málaga Christmas Lights: A Festive Spectacle',
    imageUrl: images['Christmas-lights-street'].url, imageHint: images['Christmas-lights-street'].hint,
    date: '2023-12-01', author: 'Laura Schmidt',
    excerpt: 'Experience the magic of Calle Larios adorned with spectacular Christmas lights and music.',
    content: `<p>Each year, Málaga transforms into a winter wonderland, with its spectacular Christmas light display on Calle Larios being the main event. Millions of LED lights create a stunning architectural structure, synchronized with popular Christmas music.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">The Main Show</h3>
    <p>The music and light shows on Calle Larios typically run several times each evening from late November until early January. It's a hugely popular free event, so expect large crowds. Arrive early to get a good viewing spot.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">Beyond Calle Larios</h3>
    <p>While Calle Larios is the star, the entire historic center is beautifully decorated. Explore the surrounding streets, visit the Christmas markets at Paseo del Parque, and enjoy the festive atmosphere throughout the city.</p>`,
    categories: ['Festivals', 'Malaga'],
    tags: ['christmas', 'malaga', 'festivals', 'lights']
  },
  'andalusian-white-villages': {
    id: '6', slug: 'andalusian-white-villages', title: 'Exploring the Charm of Andalusian White Villages',
    imageUrl: images['white-village-street'].url, imageHint: images['white-village-street'].hint,
    date: '2024-03-18', author: 'David Miller',
    excerpt: 'A guide to the most picturesque "pueblos blancos" near Costa del Sol, rich in history and beauty.',
    content: `<p>The 'pueblos blancos,' or white villages of Andalusia, are a photographer's dream. Characterized by their simple white-washed walls, narrow cobbled streets, and vibrant floral displays, these villages offer a glimpse into a more traditional way of life.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">Mijas Pueblo</h3>
    <p>One of the most accessible from the Costa del Sol, Mijas Pueblo is famous for its charming streets and donkey-taxis. The views of the coastline from its elevated position are simply stunning.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">Frigiliana</h3>
    <p>Often voted the prettiest village in Spain, Frigiliana, near Nerja, is a maze of immaculate, winding streets. Its well-preserved Moorish old quarter is a delight to explore.</p>`,
    categories: ['Culture', 'Day Trips'],
    tags: ['pueblos blancos', 'andalucia', 'day trips', 'mijas', 'frigiliana']
  },
};

const allArticles = Object.values(articlesData);

// This is a server-side function, but it's okay to have it in a 'use client' file
// as Next.js will correctly handle it during the build process.
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articlesData[params.slug];
  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for does not exist.',
    }
  }

  const siteUrl = 'https://malagatravelguide.net';
  const articleUrl = `${siteUrl}/blog/${article.slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
        title: article.title,
        description: article.excerpt,
        url: articleUrl,
        type: 'article',
        publishedTime: article.date,
        authors: article.author ? [article.author] : [],
        images: [
            {
                url: article.imageUrl,
                width: 1200,
                height: 630,
                alt: article.title,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: article.title,
        description: article.excerpt,
        images: [article.imageUrl],
    },
    other: {
      // JSON-LD for Article Schema
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': articleUrl,
        },
        'headline': article.title,
        'description': article.excerpt,
        'image': article.imageUrl,
        'author': {
          '@type': 'Person',
          'name': article.author || 'Malaga Travel Guide',
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Malaga Travel Guide',
          'logo': {
            '@type': 'ImageObject',
            'url': `${siteUrl}/logo.png`, // Replace with actual logo
          },
        },
        'datePublished': article.date,
        'dateModified': article.date,
      }, null, 2),
    },
  }
}


export default function SinglePostPage({ params }: { params: { slug: string } }) {
  const article = articlesData[params.slug];

  if (!article) {
    notFound();
  }

  const relatedArticles = allArticles.filter(a => a.slug !== params.slug).slice(0, 3);


  return (
    <div className="container mx-auto px-4">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <div className="mb-4">
            {article.categories?.map(cat => (
              <Badge key={cat} variant="secondary" className="mr-2 bg-secondary/20 text-secondary-foreground font-montserrat">{cat}</Badge>
            ))}
          </div>
          <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-xl">
            <Image
              src={article.imageUrl}
              alt={`Hero image for ${article.title}`}
              fill={true}
              priority
              className="object-cover"
              data-ai-hint={article.imageHint || article.title.toLowerCase()}
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
              <h1 
                className="font-anton text-4xl md:text-6xl text-white text-center"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
              >
                {article.title}
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <span className="flex items-center"><CalendarDays className="h-4 w-4 mr-1.5" /> {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            {article.author && <span className="flex items-center"><UserCircle className="h-4 w-4 mr-1.5" /> By {article.author}</span>}
          </div>
        </header>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none text-foreground font-inter prose-headings:font-montserrat prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline prose-img:rounded-lg prose-img:shadow-md"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
            <div className="mt-8 py-4 border-t border-b">
                <span className="font-montserrat font-semibold mr-2 text-foreground">Tags:</span>
                {article.tags.map(tag => (
                    <Link key={tag} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Badge variant="outline" className="mr-2 mb-2 hover:bg-secondary/20 transition-colors">#{tag}</Badge>
                    </Link>
                ))}
            </div>
        )}

        {/* Author Bio (Placeholder) */}
        {article.author && (
          <div className="mt-12 p-6 bg-card rounded-lg shadow-md flex items-start space-x-4">
            <UserCircle className="h-16 w-16 text-muted-foreground shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground font-montserrat">WRITTEN BY</p>
              <h4 className="font-montserrat text-xl font-semibold text-foreground mb-1">{article.author}</h4>
              <p className="text-sm text-muted-foreground">
                {article.author} is a passionate travel writer specializing in Andalusian culture and cuisine. Loves exploring hidden gems and sharing them with the world.
              </p>
              {/* Add social links for author if available */}
            </div>
          </div>
        )}

        {/* Social Sharing and Actions */}
        <div className="mt-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex space-x-3">
                <Button variant="outline" size="icon" aria-label="Share on Facebook"><Share2 className="h-5 w-5 text-foreground" /></Button>
                <Button variant="outline" size="icon" aria-label="Share on Twitter"><Share2 className="h-5 w-5 text-foreground" /></Button>
                <Button variant="outline" size="icon" aria-label="Share on Pinterest"><Share2 className="h-5 w-5 text-foreground" /></Button>
                 <Button variant="outline" size="icon" aria-label="Print article" onClick={() => typeof window !== 'undefined' && window.print()}><Printer className="h-5 w-5 text-foreground" /></Button>
            </div>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <MessageSquare className="mr-2 h-4 w-4" /> Leave a Comment (Coming Soon)
            </Button>
        </div>
      </article>

       {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <Section title="You Might Also Like" className="mt-12 pt-12 border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {relatedArticles.map((relatedArticle) => (
              <ArticleCard key={relatedArticle.slug} article={relatedArticle} />
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}

    