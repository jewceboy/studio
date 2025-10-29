
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
                <h3 className="font-anton text-2xl md:text-3xl text-gray-500 text-center">{title}</h3>
            </div>
        </div>
    );
  }

  // Default card style
  return (
    <Link href={linkHref} className="group block h-full">
        <Card className={cn('overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-card', className)}>
            <CardHeader className="p-0 relative aspect-video">
                <Image
                src={imageUrl}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={imageHint}
                />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
                <CardTitle className="font-montserrat text-xl font-semibold text-primary-dark mb-2 line-clamp-2 transition-colors group-hover:text-primary">{title}</CardTitle>
                {description && <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>}
            </CardContent>
            <CardFooter className="p-6 pt-0 mt-auto">
                 <div
                    className={cn(
                        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full font-montserrat",
                        buttonClassName ? buttonClassName : "bg-primary text-primary-foreground hover:bg-primary/90"
                    )}
                    >
                    {linkText} <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
            </CardFooter>
        </Card>
    </Link>
  );
}
