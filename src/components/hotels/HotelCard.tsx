'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Tag, CheckCircle, ExternalLink } from 'lucide-react';
import type { Hotel } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface HotelCardProps {
  hotel: Hotel;
  className?: string;
}

export default function HotelCard({ hotel, className }: HotelCardProps) {
  return (
    <Card className={cn('overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-card', className)}>
      <CardHeader className="p-0 relative aspect-[16/10]">
        <Image
          src={hotel.imageUrl}
          alt={`Image of ${hotel.name}`}
          fill={true}
          className="object-cover"
          data-ai-hint={hotel.imageHint || "hotel exterior"}
        />
        {(hotel.userScore || hotel.priceGuide) && (
          <div className="absolute top-2 right-2 flex items-center space-x-2">
            {hotel.userScore && (
              <Badge variant="default" className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                <Star className="w-3 h-3 mr-1 fill-current" /> {hotel.userScore.toFixed(1)}
              </Badge>
            )}
            {hotel.priceGuide && (
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                <Tag className="w-3 h-3 mr-1" /> {hotel.priceGuide}
              </Badge>
            )}
          </div>
        )}
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-montserrat text-xl font-semibold text-primary-dark mb-2 line-clamp-2">{hotel.name}</CardTitle>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{hotel.description}</p>
        {hotel.features && hotel.features.length > 0 && (
          <ul className="space-y-1 text-sm mb-3">
            {hotel.features.slice(0, 3).map((feature, index) => ( // Show max 3 features
              <li key={index} className="flex items-center text-muted-foreground">
                <CheckCircle className="w-4 h-4 mr-2 text-accent shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="default" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat font-medium">
          <Link href={hotel.affiliateLink} target="_blank" rel="noopener noreferrer">
            Check Prices & Availability <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
