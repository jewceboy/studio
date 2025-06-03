'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MapPin, Utensils, Umbrella, BedDouble, Info, Camera } from 'lucide-react';
import type { Destination } from '@/lib/constants';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';
import TestimonialCard from '@/components/shared/TestimonialCard';


// Placeholder data - replace with actual data fetching
const destinationsData: { [key: string]: Destination } = {
  malaga: {
    id: 'malaga',
    name: 'Málaga City',
    slug: 'malaga',
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400),
    imageHint: 'Malaga beach',
    overview: 'Málaga, the vibrant capital of the Costa del Sol, offers a rich tapestry of history, art, and culture. From ancient fortresses to modern museums, sun-kissed beaches to bustling tapas bars, Málaga captivates every visitor.',
    thingsToDo: ['Explore the Alcazaba and Gibralfaro Castle', 'Visit the Picasso Museum', 'Stroll along Muelle Uno waterfront', 'Relax on Malagueta Beach'],
    beaches: ['Malagueta Beach', 'La Misericordia Beach', 'Pedregalejo Beach'],
    hotelsIntro: 'Málaga boasts a wide range of accommodations, from luxurious hotels with stunning sea views to charming boutique guesthouses in the historic center. Find your perfect stay and enjoy Andalusian hospitality.',
    foodAndDrink: 'Indulge in Málaga\'s culinary delights, from fresh seafood and traditional espetos (sardine skewers) to innovative tapas and sweet Málaga wine. The Atarazanas Market is a must-visit for food lovers.',
    practicalInfo: 'Málaga is well-connected with an international airport (AGP). The city is easily navigable on foot, and public transport is efficient. Best time to visit is spring or autumn for pleasant weather.'
  },
  marbella: {
    id: 'marbella',
    name: 'Marbella',
    slug: 'marbella',
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400),
    imageHint: 'Marbella port',
    overview: 'Marbella is synonymous with luxury, glamour, and sophistication. Famous for its upscale boutiques, Michelin-starred restaurants, exclusive beach clubs, and the dazzling Puerto Banús marina, Marbella is a playground for the rich and famous.',
    thingsToDo: ['Wander through Marbella Old Town (Casco Antiguo)', 'Shop at luxury boutiques in Puerto Banús', 'Relax at Nikki Beach Marbella', 'Play golf at world-class courses'],
    beaches: ['Playa de Puerto Banús', 'Cabopino Beach', 'Playa de Fontanilla'],
    hotelsIntro: 'Experience opulent stays in Marbella, with a plethora of five-star resorts, lavish villas, and chic beachfront hotels. Pamper yourself with top-notch amenities and impeccable service.',
    foodAndDrink: 'Marbella offers a gastronomic paradise, from high-end dining experiences to traditional chiringuitos serving fresh seafood. Enjoy international cuisine and vibrant nightlife.',
    practicalInfo: 'Marbella is about a 45-minute drive from Málaga Airport. Taxis and car rentals are readily available. The Golden Mile connects Marbella town with Puerto Banús.'
  },
   mijas: {
    id: 'mijas',
    name: 'Mijas Pueblo',
    slug: 'mijas',
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400),
    imageHint: 'Mijas village',
    overview: 'Mijas Pueblo is a picturesque white-washed Andalusian village nestled in the mountainside, offering stunning panoramic views of the Mediterranean coast. Its charming narrow streets, donkey-taxis, and traditional crafts make it a popular day trip.',
    thingsToDo: ['Take a donkey-taxi ride', 'Visit the Ermita de la Virgen de la Peña', 'Explore the Plaza de Toros (bullring)', 'Enjoy the views from the Mirador'],
    beaches: ['Mijas Costa offers several beaches like La Cala de Mijas, a short drive away.'],
    hotelsIntro: 'While Mijas Pueblo has charming guesthouses, many visitors opt for hotels in nearby Mijas Costa for beach access. Options range from family-friendly resorts to quiet retreats.',
    foodAndDrink: 'Savor traditional Andalusian cuisine in Mijas Pueblo\'s cozy restaurants. Enjoy tapas, local wines, and homemade desserts while soaking in the village atmosphere.',
    practicalInfo: 'Mijas Pueblo is about a 30-minute drive from Málaga Airport. It can get crowded, especially during peak season. Wear comfortable shoes for walking the hilly streets.'
  },
   nerja: {
    id: 'nerja',
    name: 'Nerja',
    slug: 'nerja',
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400),
    imageHint: 'Nerja coast',
    overview: 'Nerja, located on the eastern tip of the Costa del Sol, is famed for its spectacular Nerja Caves, the stunning Balcón de Europa viewpoint, and its beautiful coves and beaches. It retains a more traditional Spanish charm compared to some other coastal towns.',
    thingsToDo: ['Explore the Nerja Caves (Cuevas de Nerja)', 'Walk along the Balcón de Europa', 'Kayak to Maro waterfalls', 'Hike in the Sierra de Almijara Natural Park'],
    beaches: ['Burriana Beach', 'Playa de Maro', 'Playa Carabeillo', 'Calahonda Beach'],
    hotelsIntro: 'Nerja offers a variety of accommodations, including beachfront hotels, charming villas with private pools, and budget-friendly apartments. Many options provide easy access to beaches and town amenities.',
    foodAndDrink: 'Enjoy fresh seafood paella at chiringuitos on Burriana Beach, sample local tapas in the old town, and try regional specialties. Nerja has a lively dining scene with options for all tastes.',
    practicalInfo: 'Nerja is about an hour\'s drive east of Málaga Airport. The town center is pedestrian-friendly. Consider renting a car to explore the surrounding natural parks and villages.'
  }
};

const testimonials = [
  { quote: "Malaga was amazing! The guide helped us find the best spots.", author: "Sarah L.", source: "TripAdvisor" },
  { quote: "Loved the detailed info on beaches and food. Highly recommend!", author: "John B.", source: "Travel Blog" },
];


export async function generateStaticParams() {
  return Object.keys(destinationsData).map((town) => ({
    town,
  }));
}

export default function DestinationPage({ params }: { params: { town: string } }) {
  const destination = destinationsData[params.town];

  if (!destination) {
    notFound();
  }

  return (
    <div>
      <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-xl">
        <Image
          src={destination.heroImage}
          alt={`Hero image for ${destination.name}`}
          layout="fill"
          objectFit="cover"
          priority
          data-ai-hint={destination.imageHint || destination.name.toLowerCase()}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="font-anton text-5xl md:text-7xl text-white text-center shadow-text">{destination.name}</h1>
        </div>
      </div>
       <style jsx>{`
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
        }
      `}</style>

      <Section title="Overview" className="pt-0">
        <p className="text-lg text-foreground leading-relaxed">{destination.overview}</p>
      </Section>

      <Section title="Things to Do" className="bg-secondary/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {destination.thingsToDo.map((activity, index) => (
            <div key={index} className="flex items-start p-4 bg-card rounded-lg shadow">
              <Camera className="h-6 w-6 text-accent-1-red mr-4 mt-1 shrink-0" />
              <p className="text-foreground">{activity}</p>
            </div>
          ))}
        </div>
        {/* Placeholder for GetYourGuide CTAs */}
        <div className="mt-8 text-center">
          <Button variant="default" className="bg-accent-1-red text-primary-light">
            <Link href={`https://getyourguide.com/${destination.slug}-activities?partner_id=YOUR_PARTNER_ID`} target="_blank" rel="noopener noreferrer">
              Find Tours in {destination.name}
            </Link>
          </Button>
        </div>
      </Section>

      {destination.beaches && (
        <Section title="Beaches">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {destination.beaches.map((beach, index) => (
              <div key={index} className="flex items-center p-3 bg-card rounded-md shadow-sm">
                <Umbrella className="h-5 w-5 text-accent-3-light-blue mr-3 shrink-0" />
                <span className="text-foreground">{beach}</span>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section title="Hotels" className="bg-secondary/10">
         <div className="text-center">
          <BedDouble className="h-12 w-12 text-accent-1-red mx-auto mb-4" />
          <p className="text-lg text-foreground mb-6 leading-relaxed max-w-2xl mx-auto">{destination.hotelsIntro}</p>
          <Button asChild variant="default" size="lg" className="bg-accent-1-red text-primary-light">
            <Link href={`/destinations/${destination.slug}/hotels`}>
              Find Hotels in {destination.name}
            </Link>
          </Button>
        </div>
      </Section>

      <Section title="Food & Drink">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
             <Utensils className="h-24 w-24 text-accent-1-red" />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-foreground leading-relaxed">{destination.foodAndDrink}</p>
          </div>
        </div>
      </Section>

      <Section title="Practical Information" className="bg-secondary/10">
         <div className="flex items-start p-6 bg-card rounded-lg shadow">
            <Info className="h-8 w-8 text-accent-3-light-blue mr-4 mt-1 shrink-0" />
            <p className="text-foreground leading-relaxed">{destination.practicalInfo}</p>
          </div>
      </Section>
      
      <Section title={`What People Say About ${destination.name}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </Section>

    </div>
  );
}
