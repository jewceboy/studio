
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import imageData from '@/lib/placeholder-images.json';
import { MapPin, Star, Building, Compass, Anchor, Train } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
  };
};

const images: ImageData = imageData;

export const metadata = {
  title: 'Costa del Sol Destinations | Ultimate Guide to Towns & Cities',
  description: 'The ultimate guide to the best destinations in the Costa del Sol. Explore our guides to Málaga, Marbella, Mijas, Nerja, and other stunning towns and cities.',
};


const mainDestinationCategories = [
    {
        slug: 'marbella',
        name: 'Marbella',
        description: 'The capital of glamour, famous for luxury yachts, designer shopping, and its enchanting Old Town.',
        imageKey: 'marbella-old-town',
        linkHref: '/destinations/marbella',
        linkText: 'Explore Marbella',
    },
    {
        slug: 'mijas-pueblo',
        name: 'Mijas Pueblo',
        description: 'A picture-perfect white-washed village nestled in the hills with stunning coastal views.',
        imageKey: 'mijas-pueblo-village',
        linkHref: '/destinations/mijas-pueblo',
        linkText: 'Explore Mijas',
    },
     {
        slug: 'benalmadena',
        name: 'Benalmádena',
        description: 'A diverse resort offering a stunning marina, a traditional old town, and a cable car with panoramic views.',
        imageKey: 'benalmadena-puerto',
        linkHref: '/destinations/benalmadena',
        linkText: 'See Benalmádena',
    },
    {
        slug: 'fuengirola',
        name: 'Fuengirola',
        description: 'Known for its long sandy beaches, bustling promenade, and the historic Sohail Castle.',
        imageKey: 'fuengirola-castle',
        linkHref: '/destinations/fuengirola',
        linkText: 'Discover Fuengirola',
    },
    {
        slug: 'nerja',
        name: 'Nerja',
        description: 'Famous for the breathtaking Balcón de Europa and the magnificent Nerja Caves.',
        imageKey: 'nerja-coast',
        linkHref: '/destinations/nerja',
        linkText: 'Visit Nerja',
    },
     {
        slug: 'puerto-banus',
        name: 'Puerto Banús',
        description: 'Experience the epitome of luxury, superyachts, and high-end nightlife near Marbella.',
        imageKey: 'puerto-banus-marina',
        linkHref: '/destinations/puerto-banus',
        linkText: 'Visit Puerto Banús',
    },
];

const quickLinks = [
    { href: '#explore', label: 'Explore Top Towns' },
    { href: '#malaga', label: 'Málaga City' },
    { href: '#marbella', label: 'Marbella' },
    { href: '#mijas', label: 'Mijas Pueblo' },
    { href: '#nerja', label: 'Nerja' },
    { href: '#family', label: 'Family Fun' },
];

export default function DestinationsPage() {
  return (
    <div>
      <PageHeader
        title="Costa del Sol Destinations Guide"
        subtitle="From the vibrant, historic streets of Málaga to the sun-drenched glamour of Marbella, discover the unique soul of each town along Spain's sunshine coast."
      />

       <div className="sticky top-16 bg-background/80 backdrop-blur-md z-40 border-b border-border mb-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center overflow-x-auto">
                     <nav className="flex space-x-4 sm:space-x-6 py-3">
                        {quickLinks.map(link => (
                            <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap px-2 py-1 rounded-md">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>

      <Section className="pt-0">
        <div className="prose lg:prose-xl max-w-4xl mx-auto prose-headings:font-display prose-a:text-primary prose-strong:text-text-primary">
            <p>
                The Costa del Sol, Spain's legendary "Coast of the Sun," is far more than just a string of beautiful beaches. It's a vibrant mosaic of diverse destinations, each offering its own unique flavor, history, and charm. Stretching for over 150 kilometers along the Mediterranean, this region is a place of beautiful contrasts. Here, you'll find the glittering luxury of world-famous marinas sitting just a short drive from timeless, white-washed Andalusian villages ("pueblos blancos") that seem untouched by time.
            </p>
             <p>
               Whether you're seeking the cultural heartbeat of a historic capital, the adrenaline of adventure sports, the tranquility of a hidden cove, or the glamour of high-end nightlife, there's a perfect spot waiting for you. This guide is your starting point for exploring the most popular and captivating destinations the Costa del Sol has to offer. Use our insights to find the ideal base for your holiday or to plan the perfect day trip.
            </p>

            <h2 id="explore">Explore the Top Towns & Cities</h2>
            <p>
               While dozens of towns dot the coastline, a few key destinations capture the essence of the region. From the bustling capital to glamorous resorts and charming villages, these are the places that should be on every traveler's radar.
            </p>
        </div>
      </Section>
      
      <Section className="py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mainDestinationCategories.map((category) => (
            <InfoCard
              key={category.slug}
              title={category.name}
              imageUrl={images[category.imageKey]?.url}
              imageHint={images[category.imageKey]?.hint}
              imageAlt={`Explore ${category.name}`}
              description={category.description}
              linkHref={category.linkHref}
              linkText={category.linkText}
            />
          ))}
        </div>
      </Section>

      <Section>
        <div className="prose lg:prose-xl max-w-4xl mx-auto prose-headings:font-display prose-a:text-primary prose-strong:text-text-primary">
            <h2 id="locations">A Deeper Dive: Finding Your Perfect Base</h2>
            <p>
                Choosing the right town as your home base can define your entire holiday experience. Are you looking for history and art, or sun-drenched beaches and family fun? Below, we break down the character of the Costa del Sol's most popular destinations.
            </p>

            <div id="malaga" className="scroll-mt-24">
                <h3><Building className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Málaga: The Historic & Cultural Capital</h3>
                <p>
                   No longer just a gateway to the coast, Málaga has transformed into a world-class cultural destination in its own right. As the region's capital, it offers a perfect blend of ancient history and modern energy. The historic center is a captivating maze of pedestrian streets where you can explore Roman ruins, a Moorish fortress (the Alcazaba), and over 30 museums, including the renowned Picasso Museum. The vibrant port area, Muelle Uno, is lined with shops and restaurants, while city beaches like La Malagueta offer a convenient escape.
                </p>
                <ul>
                    <li><strong>Best For:</strong> City breaks, art and history lovers, foodies, and those who want a base with excellent transport links to explore the rest of Andalusia.</li>
                    <li><strong>Don't Miss:</strong> The Alcazaba, Picasso Museum, Atarazanas Market, and watching the sunset from a rooftop bar overlooking the cathedral.</li>
                </ul>
                <Button asChild variant="outline">
                    <Link href="/destinations/malaga">Explore our Málaga City Guide</Link>
                </Button>
            </div>

            <div id="marbella" className="scroll-mt-24 mt-12">
                 <h3><Star className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Marbella: Unrivaled Glamour & Luxury</h3>
                <p>
                    Marbella is the undisputed queen of glamour on the Costa del Sol. It is a world of five-star resorts, designer boutiques, and Michelin-starred dining. The legendary "Golden Mile" connects Marbella town to the world-famous Puerto Banús marina, a playground for superyachts and celebrities. But Marbella is not just about modern luxury; its charming Old Town (Casco Antiguo) is a beautiful labyrinth of whitewashed streets, flower-filled squares, and traditional tapas bars.
                </p>
                 <ul>
                    <li><strong>Best For:</strong> Luxury travel, high-end shopping, fine dining, world-class nightlife, and golf enthusiasts.</li>
                    <li><strong>Don't Miss:</strong> Strolling through the Old Town's Plaza de los Naranjos, window shopping in Puerto Banús, and spending a day at an exclusive beach club.</li>
                 </ul>
                 <Button asChild variant="outline">
                    <Link href="/destinations/marbella">Explore our Marbella Travel Guide</Link>
                </Button>
            </div>

            <div id="mijas" className="scroll-mt-24 mt-12">
                 <h3><Compass className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Mijas: A Tale of Two Worlds</h3>
                <p>
                    Mijas offers two distinct experiences: Mijas Pueblo and Mijas Costa. Mijas Pueblo is the quintessential Andalusian "white village," perched in the mountains with breathtaking views down to the Mediterranean. It's famous for its narrow, cobbled streets, artisan shops, and charming donkey-taxis. Down on the coast, Mijas Costa is a 12km stretch of beach towns, the most popular being La Cala de Mijas, a lively former fishing village with a beautiful beach and a scenic coastal boardwalk.
                </p>
                 <ul>
                    <li><strong>Best For:</strong> Those seeking traditional charm, spectacular views, and a mix of mountain and sea.</li>
                    <li><strong>Don't Miss:</strong> A walk through Mijas Pueblo, taking in the panoramic views from the viewpoint, and strolling the coastal path in La Cala.</li>
                 </ul>
                 <Button asChild variant="outline">
                    <Link href="/destinations/mijas-pueblo">Explore our Mijas Pueblo Guide</Link>
                </Button>
            </div>

             <div id="nerja" className="scroll-mt-24 mt-12">
                <h3><Anchor className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Nerja: Natural Beauty & Coastal Coves</h3>
                <p>
                    Located on the eastern edge of the Costa del Sol, Nerja offers a more rugged and dramatic coastline. It's famous for two unmissable attractions: the Balcón de Europa, a stunning viewpoint built on the site of an old fortress, and the magnificent Nerja Caves, a vast system of caverns with prehistoric paintings. The coastline is dotted with beautiful, sheltered coves and beaches, like the famous Burriana Beach, making it a haven for beach lovers and water sports enthusiasts.
                </p>
                <ul>
                    <li><strong>Best for:</strong> Nature lovers, families, and travelers looking for a slightly more relaxed and traditional beach town vibe.</li>
                    <li><strong>Don't miss:</strong> The Nerja Caves, the views from the Balcón de Europa, and kayaking or paddleboarding to the Maro waterfalls.</li>
                </ul>
                 <Button asChild variant="outline">
                    <Link href="/destinations/nerja">Explore our Nerja Travel Guide</Link>
                </Button>
            </div>
            
             <div id="family" className="scroll-mt-24 mt-12 p-6 rounded-lg bg-background-alt info-box-custom-bg">
                <h3><Users className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Best for Families: Benalmádena & Fuengirola</h3>
                 <p>While most towns are family-friendly, Benalmádena and Fuengirola are particularly geared towards family holidays. Both offer long, sandy beaches with calm waters, extensive promenades, and a huge range of activities.</p>
                <ul>
                    <li><strong>Benalmádena</strong> boasts the award-winning Puerto Marina, Sea Life aquarium, Selwo Marina dolphinarium, and a thrilling cable car ride up Mount Calamorro.</li>
                    <li><strong>Fuengirola</strong> is home to the fantastic Bioparc (a zoo with immersive habitats), Sohail Castle, and a huge weekly market that's fun for all ages. Both are connected by a convenient coastal train line.</li>
                </ul>
                 <div className="flex flex-wrap gap-4 mt-4">
                    <Button asChild variant="outline" className="text-sm">
                        <Link href="/destinations/benalmadena">Benalmádena Guide</Link>
                    </Button>
                     <Button asChild variant="outline" className="text-sm">
                        <Link href="/destinations/fuengirola">Fuengirola Guide</Link>
                    </Button>
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
}
