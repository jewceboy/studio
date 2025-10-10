'use client'; // Added due to onClick for print

import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Article } from '@/lib/constants';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';
import { CalendarDays, UserCircle, MessageSquare, Share2, Printer, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import Section from '@/components/shared/Section';
import ArticleCard from '@/components/blog/ArticleCard';

// Placeholder data - replace with actual data fetching logic
const articlesData: { [key: string]: Article } = {
  'best-tapas-malaga': {
    id: '1', slug: 'best-tapas-malaga', title: 'Best Tapas Bars in Málaga Old Town', 
    imageUrl: PLACEHOLDER_IMAGE_URL(1200, 500, 'Malaga tapas bar'), imageHint: 'Malaga tapas bar',
    date: '2024-05-15', author: 'Elena Rodriguez', 
    excerpt: 'A culinary journey through Málaga\'s most authentic tapas spots, from traditional bites to modern creations.',
    content: `<p>Málaga's old town is a labyrinth of charming streets, and hidden within are some of the best tapas bars you'll ever encounter. This guide will take you on a flavorful journey, highlighting must-try dishes and local favorites. From centuries-old taverns serving classic Andalusian recipes to innovative kitchens putting a modern spin on tapas, there's something for every palate.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">El Tapeo de Cervantes</h3>
    <p>A popular spot known for its creative tapas and extensive wine list. Booking is recommended. Their mini burgers and cod confit are divine.</p>
    <figure class="my-6">
      <img src="${PLACEHOLDER_IMAGE_URL(800,400, 'restaurant interior')}" alt="Interior of El Tapeo de Cervantes" class="rounded-lg shadow-md" data-ai-hint="restaurant interior cozy"/>
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
        <li><a href="#" class="text-accent hover:underline">Malaga Old Town Tapas Tour</a></li>
        <li><a href="#" class="text-accent hover:underline">Boutique Hotels in Malaga Center</a></li>
    </ul>
    `,
    categories: ['Food & Drink', 'Malaga'],
    tags: ['tapas', 'old town', 'restaurants', 'malaga city']
  },
  // Add more articles as needed
};

const relatedArticles = Object.values(articlesData).slice(0,3).filter(a => a.slug !== 'best-tapas-malaga');


// generateStaticParams should be in a Server Component or a separate file if this page must be client
// For now, commenting out as this page is 'use client' due to onClick for print button.
// export async function generateStaticParams() {
//   return Object.keys(articlesData).map((slug) => ({
//     slug,
//   }));
// }

// generateMetadata should ideally be in a Server Component.
// If this page remains 'use client', metadata should be handled differently or this moved.
// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const article = articlesData[params.slug];
//   if (!article) {
//     return { title: 'Article Not Found' }
//   }
//   return {
//     title: `${article.title} | Costa del Sol Navigator Blog`,
//     description: article.excerpt,
//   }
// }


export default function SinglePostPage({ params }: { params: { slug: string } }) {
  const article = articlesData[params.slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4">
      <article className="max-w-3xl mx-auto">
        {/* Article Header */}
        <header className="mb-8 text-center">
          <div className="mb-4">
            {article.categories?.map(cat => (
              <Badge key={cat} variant="secondary" className="mr-2 bg-secondary/20 text-secondary-foreground font-montserrat">{cat}</Badge>
            ))}
          </div>
          <h1 className="font-anton text-4xl md:text-5xl font-bold text-foreground mb-4">{article.title}</h1>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <span className="flex items-center"><CalendarDays className="h-4 w-4 mr-1.5" /> {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            {article.author && <span className="flex items-center"><UserCircle className="h-4 w-4 mr-1.5" /> By {article.author}</span>}
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl mb-8">
          <Image
            src={article.imageUrl}
            alt={`Featured image for ${article.title}`}
            fill={true}
            priority
            className="object-cover"
            data-ai-hint={article.imageHint || "article feature"}
          />
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none text-foreground font-inter prose-headings:font-montserrat prose-headings:text-foreground prose-a:text-accent hover:prose-a:underline prose-img:rounded-lg prose-img:shadow-md"
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
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
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
