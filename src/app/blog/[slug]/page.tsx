
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Article } from '@/lib/constants';
import { CalendarDays, UserCircle, Tag } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import Section from '@/components/shared/Section';
import ArticleCard from '@/components/blog/ArticleCard';
import { Metadata } from 'next';
import ArticleActions from '@/components/blog/ArticleActions';
import { db } from '@/lib/firebase';
import { doc, getDoc, collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

export const revalidate = 60; // Revalidate every 60 seconds

async function getPost(slug: string): Promise<Article | null> {
  try {
    const docRef = doc(db, 'posts', slug);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      console.warn(`Article with slug "${slug}" not found.`);
      return null;
    }
    const data = docSnap.data();
    const date = data.publishedAt?.toDate ? data.publishedAt.toDate().toISOString() : new Date().toISOString();
    
    return {
      id: docSnap.id,
      slug: data.slug || slug,
      title: data.title || 'Untitled Post',
      imageUrl: data.featuredImage || 'https://picsum.photos/seed/placeholder/1200/500',
      imageHint: 'blog article hero',
      date: date,
      author: data.author || 'Travel Guide',
      excerpt: data.excerpt || '',
      content: data.content || '<p>No content available.</p>',
      categories: data.category ? [data.category] : ['Uncategorized'],
      tags: data.tags || [],
    } as Article;
  } catch (error) {
    console.error(`Error fetching post "${slug}":`, error);
    return null;
  }
}

const getRelatedArticles = async (currentArticleSlug: string): Promise<Pick<Article, 'title' | 'slug' | 'imageUrl' | 'imageHint' | 'excerpt' | 'date' | 'author' | 'categories'>[]> => {
  try {
    const articlesCol = collection(db, 'posts');
    // Fetch 4 latest articles, then filter out the current one, ensuring we have 3.
    const q = query(articlesCol, orderBy('publishedAt', 'desc'), limit(4));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return [];
    }

    const related = snapshot.docs
      .map(doc => {
          const data = doc.data();
          const date = data.publishedAt?.toDate ? data.publishedAt.toDate().toISOString() : new Date().toISOString();
          return {
            slug: data.slug || doc.id,
            title: data.title || 'Untitled',
            imageUrl: data.featuredImage || 'https://picsum.photos/seed/placeholder/600/400',
            imageHint: 'blog article',
            excerpt: data.excerpt || '',
            date: date,
            author: data.author || 'Travel Guide',
            categories: data.category ? [data.category] : ['Uncategorized'],
          };
      })
      .filter(a => a.slug !== currentArticleSlug)
      .slice(0, 3);

    return related;
  } catch (error) {
    console.error("Error fetching related articles:", error);
    return [];
  }
};

export async function generateStaticParams() {
  try {
    const articlesCol = collection(db, 'posts');
    const articleSnapshot = await getDocs(articlesCol);
    if (articleSnapshot.empty) {
        return [];
    }
    const paths = articleSnapshot.docs.map(doc => ({
      slug: doc.data().slug,
    }));
    return paths.filter(p => p.slug); // Only return paths with a valid slug
  } catch(error) {
    console.error("Error generating static params for blog posts:", error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getPost(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
     alternates: {
      canonical: `/blog/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getPost(params.slug);

  if (!article) {
    notFound();
  }
  
  const relatedArticles = await getRelatedArticles(article.slug);

  return (
    <div className="bg-background">
      <article>
        {/* Article Header */}
        <header className="container mx-auto px-4 pt-12 text-center max-w-4xl">
           {article.categories && article.categories.length > 0 && (
                <div className="mb-4">
                  {article.categories.map(category => (
                      <Link key={category} href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`} passHref>
                          <Badge variant="secondary" className="text-sm font-normal">
                              {category}
                          </Badge>
                      </Link>
                  ))}
                </div>
            )}
            <h1 className="text-h1 font-bold mb-4">{article.title}</h1>
            <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground mb-8">
              {article.author && (
                <div className="flex items-center space-x-2">
                  <UserCircle className="h-5 w-5" />
                  <span>By {article.author}</span>
                </div>
              )}
               {article.date && (
                <div className="flex items-center space-x-2">
                  <CalendarDays className="h-5 w-5" />
                  <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                </div>
              )}
            </div>
        </header>

        {/* Featured Image */}
        <div className="container mx-auto px-4 my-l">
            <div className="relative aspect-video max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
                <Image
                src={article.imageUrl}
                alt={`Featured image for ${article.title}`}
                fill
                priority
                className="object-cover"
                data-ai-hint={article.imageHint || "blog article hero"}
                />
            </div>
        </div>

        {/* Article Body */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-end mb-4">
                <ArticleActions />
            </div>
            <div
              className="prose lg:prose-xl max-w-none font-sans text-lg text-text-secondary prose-headings:font-display prose-headings:text-text-primary prose-headings:font-bold prose-a:text-primary prose-strong:text-text-primary"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-12 flex items-center flex-wrap gap-2">
                <Tag className="h-5 w-5 text-muted-foreground" />
                {article.tags.map(tag => (
                   <Link key={tag} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`} passHref>
                      <Badge variant="outline">{tag}</Badge>
                   </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <Section title="You Might Also Like" className="mt-xl bg-background-alt">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle) => (
              <ArticleCard key={relatedArticle.slug} article={relatedArticle} />
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}
