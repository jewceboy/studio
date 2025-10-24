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
  variant?: 'default' | 'overlay';
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
  variant = 'default',
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

  if (variant === 'overlay') {
    return (
      <Link href={linkHref} className={cn('group block relative overflow-hidden rounded-lg aspect-[4/3]', className)}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={imageHint}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center p-4">
          <h3 className="font-anton text-2xl md:text-3xl text-white text-center leading-tight" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
            {title}
          </h3>
        </div>
      </Link>
    );
  }

  // Default card style
  return (
    <Card className={cn('overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-card group', className)}>
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
        <CardTitle className="font-montserrat text-xl font-semibold text-primary-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">{title}</CardTitle>
        {description && <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>}
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          asChild
          variant="default"
          className={cn(
            "w-full font-montserrat font-medium",
            buttonClassName ? buttonClassName : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          <Link href={linkHref}>
            {linkText} <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />