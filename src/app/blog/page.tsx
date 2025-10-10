
import PageHeader from '@/components/shared/PageHeader';
import ArticleCard from '@/components/blog/ArticleCard';
import type { Article } from '@/lib/constants';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Rss } from 'lucide-react';
import Link from 'next/link';
import Section from '@/components/shared/Section';

// Placeholder data - replace with actual data fetching
const articles: Pick<Article, 'title' | 'slug' | 'imageUrl' | 'imageHint' | 'excerpt' | 'date' | 'author' | 'categories'>[] = [
  { slug: 'best-tapas-malaga', title: 'Best Tapas Bars in Málaga Old Town', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, 'tapas food variety'), imageHint: 'tapas food variety', excerpt: 'A culinary journey through Málaga\'s most authentic tapas spots, from traditional bites to modern creations.', date: '2024-05-15', author: 'Elena Rodriguez', categories: ['Food & Drink'] },
  { slug: 'hidden-beaches-costa-del-sol', title: 'Top 5 Hidden Beaches on the Costa del Sol', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, 'secluded cove beach'), imageHint: 'secluded cove beach', excerpt: 'Discover tranquil coves and pristine sands away from the crowds for a perfect day of relaxation.', date: '2024-05-10', author: 'Mark Stevenson', categories: ['Beaches', 'Travel Tips'] },
  { slug: 'day-trip-ronda', title: 'A Day Trip to Ronda: What to See and Do', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, 'Ronda bridge view'), imageHint: 'Ronda bridge view', excerpt: 'Explore the dramatic landscapes, iconic bridge, and historic charm of the stunning town of Ronda.', date: '2024-05-01', author: 'Sofia Chen', categories: ['Day Trips'] },
  { slug: 'caminito-del-rey-guide', title: 'Ultimate Guide to Hiking Caminito del Rey', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, 'Caminito del Rey path'), imageHint: 'Caminito Rey path', excerpt: 'Everything you need to know before tackling one of Spain\'s most breathtaking hiking trails.', date: '2024-04-25', author: 'Carlos Gomez', categories: ['Adventure', 'Hiking'] },
  { slug: 'malaga-christmas-lights', title: 'Málaga Christmas Lights: A Festive Spectacle', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, 'Christmas lights street'), imageHint: 'Christmas lights street', excerpt: 'Experience the magic of Calle Larios adorned with spectacular Christmas lights and music.', date: '2023-12-01', author: 'Laura Schmidt', categories: ['Festivals', 'Malaga'] },
  { slug: 'andalusian-white-villages', title: 'Exploring the Charm of Andalusian White Villages', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, 'white village street'), imageHint: 'white village street', excerpt: 'A guide to the most picturesque "pueblos blancos" near Costa del Sol, rich in history and beauty.', date: '2024-03-18', author: 'David Miller', categories: ['Culture', 'Day Trips'] },
];

const categories = ['Food & Drink', 'Beaches', 'Travel Tips', 'Day Trips', 'Adventure', 'Culture', 'Festivals'];
const recentPosts = articles.slice(0, 3);


export const metadata = {
  title: 'Blog | Costa del Sol Navigator',
  description: 'Discover articles, guides, and stories about Costa del Sol. Get tips on travel, food, culture, and more.',
};

export default function BlogPage() {
  return (
    <div>
      <PageHeader
        title="Costa del Sol Travel Blog"
        subtitle="Your source for insider tips, inspiring stories, and practical guides to make the most of your adventure in Southern Spain."
      />
      <Section className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Articles Grid */}
          <div className="lg:col-span-8">
            {articles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground text-lg">No articles found. Check back soon!</p>
            )}
            {/* Pagination (Placeholder) */}
            {articles.length > 6 && (
                <div className="mt-12 flex justify-center space-x-2">
                    <Button variant="outline">Previous</Button>
                    <Button variant="default" className="bg-accent-1-red text-primary-light">1</Button>
                    <Button variant="outline">2</Button>
                    <Button variant="outline">Next</Button>
                </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Search Bar */}
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat text-lg font-semibold text-primary-dark mb-3">Search Blog</h3>
              <form className="flex gap-2">
                <Input type="search" placeholder="Keywords..." className="flex-grow bg-primary-light border-primary-dark/30 focus:ring-accent-1-red" />
                <Button type="submit" variant="default" size="icon" className="bg-accent-1-red text-primary-light">
                  <Search className="h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Categories */}
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat text-lg font-semibold text-primary-dark mb-3">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <Link href={`/blog/category/${category.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`} className="text-muted-foreground hover:text-accent-1-red transition-colors block py-1">
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat text-lg font-semibold text-primary-dark mb-3">Recent Posts</h3>
              <ul className="space-y-3">
                {recentPosts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="text-muted-foreground hover:text-accent-1-red transition-colors font-medium block leading-snug">
                      {post.title}
                    </Link>
                    <p className="text-xs text-muted-foreground/70">{new Date(post.date).toLocaleDateString()}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* RSS Feed (Example) */}
            <div className="bg-card p-6 rounded-lg shadow-md text-center">
                 <Rss className="h-8 w-8 text-accent-1-red mx-auto mb-2"/>
                <h3 className="font-montserrat text-lg font-semibold text-primary-dark mb-2">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-3">Subscribe to our RSS feed for the latest articles.</p>
                <Button variant="outline" className="w-full border-accent-3-light-blue text-accent-3-light-blue hover:bg-accent-3-light-blue hover:text-primary-light">
                   Subscribe to RSS
                </Button>
            </div>
          </aside>
        </div>
      </Section>
    </div>
  );
}
