// src/components/custom/MarbellaHero.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export default function MarbellaHero() {
  return (
    <div className="relative h-[calc(100vh-80px)] min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center -mt-8 -mx-4 sm:-mx-container-padding">
      <Image
        src={PLACEHOLDER_IMAGE_URL(1920, 1080, 'Marbella panoramic beach luxury')}
        alt="Envision the stunning beauty of Marbella: sun-drenched coasts and luxurious lifestyle"
        fill={true}
        priority
        className="absolute inset-0 z-0 object-cover w-full h-full"
        data-ai-hint="Marbella panoramic beach luxury"
      />
      {/* Color Overlay for Text Impact */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>

      <div className="relative z-20 container mx-auto px-4">
        <h1 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
          Experience Marbella's Splendor
        </h1>
        <p className="font-inter text-lg sm:text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Discover a world of golden beaches, azure waters, and vibrant luxury. Your unforgettable Marbella story begins now.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-7 font-montserrat font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Link href="/destinations/marbella">
            Explore Marbella <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
