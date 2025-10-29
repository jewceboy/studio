
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
  imageWidth?: number;
  imageHeight?: number;
  imageAlt: string;
  linkHref: string;
  description?: string;
  linkText?: string;
  className?: string;
  imageHint?: string;
  buttonClassName?: string;
  variant?: 'default';
}

export default function InfoCard({
  title,
  imageUrl,
  imageWidth = 600,
  imageHeight = 400,
  imageAlt,
  linkHref,
  description,
  linkText = 'Explore',
  className,
  imageHint,
  buttonClassName,
}: InfoCardProps) {

  if (!imageUrl) {
    // Return a placeholder or null if no image is provided to avoid crashing
    return (
        <div className={cn('group block relative overflow-hidden rounded-lg aspect-video bg-gray-200 animate-pulse', className)}>
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="font-display text-2xl md:text-3xl text-gray-500 text-center">{title}</h3>
            </div>
        </div>
    );
  }

  // Default card style
  return (
    <Link href={linkHref} className="group block h-full">
        <Card className={cn('overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-card rounded-lg border-border', className)}>
            <CardHeader className="p-0 relative aspect-video">
                <Image
                src={imageUrl}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 rounded-t-lg"
                data-ai-hint={imageHint}
                />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
                <CardTitle className="font-display text-xl font-bold text-text-primary mb-2 line-clamp-2 transition-colors group-hover:text-primary">{title}</CardTitle>
                {description && <p className="text-sm text-text-secondary line-clamp-3">{description}</p>}
            </CardContent>
            <CardFooter className="p-6 pt-0 mt-auto">
                 <div className="text-primary font-semibold flex items-center text-sm">
                   {linkText} <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
            </CardFooter>
        </Card>
    </Link>
  );
}
