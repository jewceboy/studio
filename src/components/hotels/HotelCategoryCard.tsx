
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { HotelCategory } from '@/types';

interface HotelCategoryCardProps {
  category: HotelCategory;
  className?: string;
}

export default function HotelCategoryCard({ category, className }: HotelCategoryCardProps) {
  return (
    <Card className={cn('overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-card group', className)}>
      <CardHeader className="p-0 relative aspect-video">
        <Image
          src={category.imageUrl}
          alt={`Image representing ${category.name}`}
          fill={true}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={category.imageHint}
        />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-montserrat text-xl font-semibold text-primary-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">{category.name}</CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-3">{category.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="default" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat font-medium">
          <Link href={`/hotels/search?category=${category.slug}`}>
             Explore {category.name} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
