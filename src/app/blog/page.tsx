
import PageHeader from '@/components/shared/PageHeader';
import ArticleCard from '@/components/blog/ArticleCard';
import type { Article } from '@/lib/constants';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Rss, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Section from '@/components/shared/Section';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export const revalidate = 60; // Revalidate every 60 seconds

async function getArticles(): Promise<Pick<Article, 'title' | 'slug' | 'imageUrl' | 'imageHint' | 'excerpt' | 'date' | 'author' | 'categories'>[]> {
  try {
    const articlesCol = collection(db, 'posts');
    const q = query(articlesCol, orderBy('publishedAt', 'desc'));
    const articleSnapshot = await getDocs(q);

    if (articleSnapshot.empty) {
      console.log("No articles found in Firestore.");
      return [];
    }

    const articleList = articleSnapshot.docs.map(doc => {
      const data = doc.data();
      // Ensure publishedAt exists and is a timestamp before converting
      const date = data.publishedAt?.toDate ? data.publishedAt.toDate().toISOString() : new Date().toISOString();
      
      return {
        slug: data.slug || '',
        title: data.title || 'Untitled',
        imageUrl: data.featuredImage || 'https://picsum.photos/seed/placeholder/600/400',
        imageHint: 'blog article',
        excerpt: data.excerpt || '',
        date: date,
        author: data.author || 'Travel Guide',
        categories: data.category ? [data.category] : ['Uncategorized'],
      };
    });
    return articleList;
  } catch (error) {
    console.error("Error fetching articles from Firestore:", error);
    // In case of error (e.g., Firestore rules), return an empty array to prevent crashing the page.
    return [];
  }
}


export const metadata = {
  title: 'Blog | Costa del Sol Navigator',
  description: 'Discover articles, guides, and stories about Costa del Sol. Get tips on travel, food, culture, and more.',
};

export default async function BlogPage() {
  const articles = await getArticles();
  const recentPosts = articles.slice(0, 3);
  const categories = [...new Set(articles.flatMap(article => article.categories || []))].filter(Boolean);

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground text-lg">No articles found. Once you run your migration script, your posts will appear here.</p>
            )}
            {/* Pagination (Placeholder) */}
            {articles.length > 6 && (
                <div className="mt-12 flex justify-center space-x-2">
                    <Button variant="outline">Previous</Button>
                    <Button variant="default" className="bg-primary text-primary-foreground">1</Button>
                    <Button variant="outline">2</Button>
                    <Button variant="outline">Next</Button>
                </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Search Bar */}
            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="font-montserrat text-lg font-semibold text-primary-dark mb-4">Search Blog</h3>
              <form className="flex gap-2">
                <Input type="search" placeholder="Keywords..." className="flex-grow bg-background border-border focus:ring-primary" />
                <Button type="submit" variant="default" size="icon" className="bg-primary text-primary-foreground">
                  <Search className="h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Categories */}
            {categories.length > 0 && (
                <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="font-montserrat text-lg font-semibold text-primary-dark mb-4">Categories</h3>
                <ul className="space-y-1">
                    {categories.map((category) => (
                    <li key={category}>
                        <Link href={`/blog/category/${category.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`} className="flex items-center justify-between text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors rounded-md p-2">
                        <span>{category}</span>
                        <ArrowRight className="h-4 w-4" />
                        </Link>
                    </li>
                    ))}
                </ul>
                </div>
            )}

            {/* Recent Posts */}
            {recentPosts.length > 0 && (
                <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="font-montserrat text-lg font-semibold text-primary-dark mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                    {recentPosts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`} className="text-foreground hover:text-primary transition-colors font-semibold block leading-snug">
                        {post.title}
                        </Link>
                        <p className="text-xs text-muted-foreground/80 mt-1">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    </li>
                    ))}
                </ul>
                </div>
            )}
            
            {/* RSS Feed (Example) */}
            <div className="bg-accent/80 text-white p-6 rounded-lg text-center">
                 <Rss className="h-8 w-8 text-white mx-auto mb-2"/>
                <h3 className="font-montserrat text-lg font-semibold text-white mb-2">Stay Updated</h3>
                <p className="text-sm text-white/80 mb-4">Subscribe to our RSS feed for the latest articles.</p>
                <Button variant="outline" className="w-full border-white/50 text-white hover:bg-white hover:text-accent">
                   Subscribe to RSS
                </Button>
            </div>
          </aside>
        </div>
      </Section>
    </div>
  );
}
