'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InfoCardProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  description?: string;
  linkHref: string;
  linkText?: string;
  className?: string;
  imageHint?: string;
}

export default function InfoCard({
  title,
  imageUrl,
  imageAlt,
  description,
  linkHref,
  linkText = 'Explore',
  className,
  imageHint,
}: InfoCardProps) {
  return (
    <Card className={cn('overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-card group', className)}>
      <CardHeader className="p-0 relative aspect-video">
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={imageHint}
        />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-montserrat text-xl font-semibold text-primary-dark mb-2 line-clamp-2 group-hover:text-accent transition-colors">{title}</CardTitle>
        {description && <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>}
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="default" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat font-medium">
          <Link href={linkHref}>
            {linkText} <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
