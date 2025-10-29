

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, UserCircle, ArrowRight } from 'lucide-react';
import type { Article } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface ArticleCardProps {
  article: Pick<Article, 'title' | 'slug' | 'imageUrl' | 'imageHint' | 'excerpt' | 'date' | 'author' | 'categories'>;
  className?: string;
}

export default function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <Link href={`/blog/${article.slug}`} className="group block h-full">
      <Card className={cn('overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-card', className)}>
        <CardHeader className="p-0 relative aspect-video">
            <Image
              src={article.imageUrl}
              alt={`Cover image for ${article.title}`}
              fill={true}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={article.imageHint || "blog article"}
            />
          {article.categories && article.categories.length > 0 && (
            <Badge variant="default" className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-montserrat font-medium px-2 py-1 rounded">
              {article.categories[0]}
            </Badge>
          )}
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="font-montserrat text-xl font-bold text-foreground mb-3 leading-tight line-clamp-2 transition-colors group-hover:text-primary">{article.title}</CardTitle>
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{article.excerpt}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex items-center justify-between text-xs text-muted-foreground mt-auto">
           <div className="flex items-center space-x-3">
              {article.author && (
                <span className="flex items-center">
                  <UserCircle className="h-3.5 w-3.5 mr-1.5" /> {article.author}
                </span>
              )}
               {article.date && (
                <span className="flex items-center">
                  <CalendarDays className="h-3.5 w-3.5 mr-1.5" /> {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              )}
           </div>
           <span className="text-primary font-semibold flex items-center">
             Read More <ArrowRight className="h-4 w-4 ml-1 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
           </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
