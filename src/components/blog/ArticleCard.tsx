

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
      <Card className={cn('overflow-hidden shadow-none hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-card border-0', className)}>
        <CardHeader className="p-0 relative aspect-video">
            <Image
              src={article.imageUrl}
              alt={`Cover image for ${article.title}`}
              fill={true}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={article.imageHint || "blog article"}
            />
        </CardHeader>
        <CardContent className="p-0 pt-6 flex-grow">
          <CardTitle className="font-display text-2xl font-semibold text-text-primary mb-3 leading-tight group-hover:text-primary transition-colors">{article.title}</CardTitle>
           <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
              {article.date && (
                <span className="flex items-center">
                  <CalendarDays className="h-3.5 w-3.5 mr-1.5" /> {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              )}
           </div>
          <p className="text-base text-text-secondary line-clamp-3">{article.excerpt}</p>
        </CardContent>
        <CardFooter className="p-0 pt-4 mt-auto">
           <div className="text-text-primary font-bold text-sm flex items-center tracking-widest">
             READ MORE <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
           </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
