
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, UserCircle, ArrowRight } from 'lucide-react';
import type { Article } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  article: Pick<Article, 'title' | 'slug' | 'imageUrl' | 'imageHint' | 'excerpt' | 'date' | 'author' | 'categories'>;
  className?: string;
}

export default function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <Card className={cn('overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-card group', className)}>
      <CardHeader className="p-0 relative aspect-video">
        <Link href={`/blog/${article.slug}`} className="block w-full h-full">
          <Image
            src={article.imageUrl}
            alt={`Cover image for ${article.title}`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={article.imageHint || "blog article"}
          />
        </Link>
        {article.categories && article.categories.length > 0 && (
          <span className="absolute top-3 left-3 bg-accent-1-red text-primary-light text-xs font-montserrat font-medium px-2 py-1 rounded">
            {article.categories[0]}
          </span>
        )}
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-montserrat text-xl font-semibold text-primary-dark mb-2 line-clamp-2 group-hover:text-accent-1-red transition-colors">
          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
        </CardTitle>
        <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
          {article.date && (
            <span className="flex items-center">
              <CalendarDays className="h-3.5 w-3.5 mr-1.5" /> {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          )}
          {article.author && (
            <span className="flex items-center">
              <UserCircle className="h-3.5 w-3.5 mr-1.5" /> {article.author}
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3">{article.excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="link" className="px-0 text-accent-1-red font-montserrat font-medium group-hover:underline">
          <Link href={`/blog/${article.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
