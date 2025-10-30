
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
      <Card className={cn('overflow-hidden shadow-none hover:shadow-card transition-shadow duration-300 flex flex-col h-full bg-card border-border rounded-lg', className)}>
        <CardHeader className="p-0 relative aspect-[16/10]">
            <Image
              src={article.imageUrl}
              alt={`Cover image for ${article.title}`}
              fill={true}
              className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-lg"
              data-ai-hint={article.imageHint || "blog article"}
            />
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-3 leading-tight group-hover:text-primary transition-colors">{article.title}</CardTitle>
           <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
              {article.author && (
                <span className="flex items-center">
                  <UserCircle className="h-3.5 w-3.5 mr-1.5" /> {article.author}
                </span>
              )}
              {article.date && (
                <span className="flex items-center">
                  <CalendarDays className="h-3.5 w-3.5 mr-1.5" /> {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              )}
           </div>
          <p className="text-base text-text-secondary line-clamp-3">{article.excerpt}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0 mt-auto">
           <div className="text-primary font-semibold text-sm flex items-center tracking-widest uppercase">
             Read More
           </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
