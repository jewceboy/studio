
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import TestimonialCard from '@/components/shared/TestimonialCard';
import { nicheInterestData } from '@/lib/data';
import type { GolfCourse } from '@/lib/constants';
import GolfCourseCard from '@/components/interests/GolfCourseCard';
import { BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL } from '@/lib/constants';
import Image from 'next/image';
import imageData from '@/lib/placeholder-images.json';

type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
  };
};

const images: ImageData = imageData;


export const metadata = {
  title: 'Golf in Costa del Sol | Your Guide to the Best Courses & Resorts',
  description: "Discover why Costa del Sol is called 'Costa del Golf'. Explore over 70 world-class golf courses, find luxury golf resorts, and plan your ultimate golf holiday.",
};


// Placeholder Data - In a real app, this would come from a database or CMS
const featuredCourses: GolfCourse[] = [
    {
        id: '1',
        name: 'Valderrama Golf Club',
        slug: 'valderrama',
        imageUrl: images['valderrama-golf'].url,
        imageHint: images['valderrama-golf'].hint,
        description: 'Renowned for its challenging layout and pristine condition, Valderrama has hosted numerous professional tournaments, including the Ryder Cup.',
        keyFeatures: [
            { label: 'Difficulty', value: 'Very High' },
            { label: 'Designer', value: 'Robert Trent Jones Sr.' },
        ],
        websiteUrl: '#',
        nearbyHotelsAffiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL
    },
    {
        id: '2',
        name: 'Finca Cortesin Golf Club',
        slug: 'finca-cortesin',
        imageUrl: images['finca-cortesin-golf'].url,
        imageHint: images['finca-cortesin-golf'].hint,
        description: 'A masterpiece of landscape design, Finca Cortesin offers a perfect balance of natural beauty and a challenging game, with impeccable service.',
        keyFeatures: [
            { label: 'Difficulty', value: 'High' },
            { label: 'Known for', value: 'Solheim Cup 2023 Host' },
        ],
        websiteUrl: '#',
        nearbyHotelsAffiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL
    },
    {
        id: '3',
        name: 'La Reserva Club Sotogrande',
        slug: 'la-reserva-sotogrande',
        imageUrl: images['la-reserva-golf'].url,
        imageHint: images['la-reserva-golf'].hint,
        description: 'Set within an exclusive community, La Reserva provides a luxurious golfing experience with wide fairways and spectacular views.',
        keyFeatures: [
            { label: 'Difficulty', value: 'High' },
            { label: 'Amenities', value: 'Beach Club, Tennis' },
        ],
        websiteUrl: '#',
        nearbyHotelsAffiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL
    }
];

const testimonials = [
  {
    quote: "The courses on the Costa del Sol are second to none. Our group had an unforgettable trip thanks to the fantastic planning resources available.",
    author: "John D., Golf Enthusiast",
    source: "Golfers' Weekly",
  },
  {
    quote: "From the championship layouts to the stunning coastal views, every round was a pleasure. The resorts are just as impressive as the courses.",
    author: "Sarah L., Travel Blogger",
    source: "Sunny Fairways Blog",
  }
];


export default function GolfPage() {
  const golfData = nicheInterestData.golf;

  return (
    <div>
        {/* Hero Section */}
        <div className="relative h-80 md:h-96 -mt-8 -mx-4 sm:-mx-container-padding overflow-hidden">
            <Image
                src={golfData.heroImage}
                alt={`Panoramic view of ${golfData.name}`}
                fill
                priority
                className="object-cover"
                data-ai-hint={golfData.imageHint}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white p-4">
                    <h1 className="font-anton text-4xl md:text-6xl mb-2">{golfData.name}</h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90">{golfData.intro}</p>
                </div>
            </div>
        </div>

      <Section title="Explore Golf on the Coast">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {golfData.subCategories.map((category) => (
            <InfoCard
              key={category.slug}
              title={category.name}
              imageUrl={category.imageUrl}
              imageAlt={`Explore ${category.name}`}
              description={category.description}
              linkHref={`/interests/golf/${category.slug}`}
              linkText="Learn More"
              imageHint={category.imageHint}
            />
          ))}
        </div>
      </Section>

      <Section title="Featured Championship Courses" className="bg-secondary/20">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredCourses.map((course) => (
                <GolfCourseCard key={course.id} course={course} />
            ))}
        </div>
      </Section>

      <Section title="What Golfers Are Saying">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              source={testimonial.source}
            />
          ))}
        </div>
      </Section>

    </div>
  );
}
