// src/components/custom/MarbellaHero.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function MarbellaHero() {
  return (
    <div className="relative h-[calc(100vh-80px)] min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center -mt-8 -mx-4 sm:-mx-container-padding">
      <Image
        src="https://placehold.co/1920x1080.png?text="
        alt="Envision the stunning beauty of Marbella: sun-drenched coasts and luxurious lifestyle"
        fill={true}
        priority
        className="absolute inset-0 z-0 opacity-90 object-cover"
        data-ai-hint="Marbella luxury lifestyle sea view woman sunglasses"
      />
      <div className="relative z-20 container mx-auto px-4">
        <h1 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-dark mb-8 leading-tight">
          Experience Marbella's Splendor
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-primary-dark mb-10 max-w-3xl mx-auto font-inter leading-relaxed">
          Discover a world of golden beaches, azure waters, and vibrant luxury. Your unforgettable Marbella story begins now.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-accent-1-red text-primary-light hover:bg-accent-1-red-hover text-lg px-10 py-7 font-montserrat font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Link href="/destinations/marbella">
            Explore Marbella <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
