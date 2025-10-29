
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import imageData from '@/lib/placeholder-images.json';
import Image from 'next/image';
import Link from 'next/link';

type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
  };
};

const images: ImageData = imageData;

export const metadata = {
  title: 'Marbella Travel Guide | Costa del Sol Navigator',
  description: 'Your complete 2024 travel guide to Marbella. Discover the best hotels, things to do, beaches, restaurants, and nightlife in this luxurious Costa del Sol destination.',
};

const marbellaCategories = [
    {
        slug: 'hotels',
        name: 'Marbella Hotels',
        description: 'From opulent 5-star resorts on the Golden Mile to charming boutique hotels in the Old Town.',
        imageKey: 'luxury-hotel-malaga',
        linkHref: '/destinations/marbella/hotels',
        linkText: 'Find Hotels',
    },
    {
        slug: 'things-to-do',
        name: 'Things to Do in Marbella',
        description: 'Explore the historic Old Town, the glamorous Puerto Banús, and vibrant local markets.',
        imageKey: 'marbella-old-town',
        linkHref: '/destinations/marbella/things-to-do',
        linkText: 'Discover Activities',
    },
    {
        slug: 'beaches',
        name: 'Marbella Beaches',
        description: 'Relax at world-famous beach clubs or find your own quiet spot on 27km of coastline.',
        imageKey: 'luxury-beach-club',
        linkHref: '/destinations/marbella/beaches',
        linkText: 'Explore Beaches',
    },
    {
        slug: 'nightlife',
        name: 'Marbella Nightlife',
        description: 'Experience the legendary nightlife, from exclusive clubs in Puerto Banús to chic rooftop bars.',
        imageKey: 'marbella-nightclub',
        linkHref: '/destinations/marbella/nightlife',
        linkText: 'Discover Nightlife',
    },
    {
        slug: 'restaurants',
        name: 'Marbella Restaurants',
        description: 'Dine at Michelin-starred restaurants, enjoy fresh seafood at a chiringuito, or savor tapas.',
        imageKey: 'fine-dining-plate',
        linkHref: '/destinations/marbella/restaurants',
        linkText: 'Find Restaurants',
    },
    {
        slug: 'shopping',
        name: 'Shopping in Marbella',
        description: 'Indulge in retail therapy, from high-end designer boutiques to unique local shops.',
        imageKey: 'luxury-shopping-street',
        linkHref: '/destinations/marbella/shopping',
        linkText: 'Go Shopping',
    },
];

export default function MarbellaHubPage() {
  return (
    <div>
        <div className="relative h-80 md:h-96 -mt-16 -mx-4 sm:-mx-container-padding overflow-hidden">
            <Image
                src={images['Marbella-panoramic-beach-luxury'].url}
                alt="Stunning panoramic view of Marbella's luxurious beach and coastline"
                fill
                priority
                className="object-cover"
                data-ai-hint="Marbella panoramic beach"
            />
            <div className="absolute inset-0 bg-black/40" />
        </div>
      <PageHeader
        title="Marbella Travel Guide"
        subtitle="Welcome to the jewel of the Costa del Sol. Discover a world of sun-drenched luxury, timeless Andalusian charm, and vibrant energy."
      />
      <Section className="pt-0">
        <div className="prose max-w-4xl mx-auto text-lg text-text-secondary text-center">
            <p>
                Marbella is more than just a destination; it's a lifestyle. Famed globally for its unparalleled glamour, this sun-kissed town on the Mediterranean coast masterfully blends the jet-set allure of superyachts and designer boutiques with the enchanting history of its whitewashed Old Town. Whether you're seeking the thrill of world-class nightlife in Puerto Banús, the tranquility of a five-star spa retreat, a round of golf on a championship course, or simply a perfect day on a golden-sand beach, Marbella offers an endless array of sophisticated experiences. Our comprehensive guide is your key to unlocking the very best of this luxurious enclave, from its Michelin-starred dining scene to its hidden cultural gems. Start planning your unforgettable journey here.
            </p>
        </div>
      </Section>

      <Section title="Explore Marbella" className="bg-secondary/20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {marbellaCategories.map((category) => (
                <InfoCard
                key={category.slug}
                title={category.name}
                imageUrl={images[category.imageKey].url}
                imageAlt={`Explore ${category.name}`}
                description={category.description}
                linkHref={category.linkHref}
                linkText={category.linkText}
                imageHint={images[category.imageKey].hint}
                />
            ))}
        </div>
      </Section>

       <Section title="The Heart of Marbella: Old Town & Puerto Banús">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
                <h3 className="font-display text-h3 text-text-primary mb-2">The Enchanting Old Town (Casco Antiguo)</h3>
                <p className="text-body-l text-text-secondary mb-4">
                    Get ready to fall in love! Step back in time as you wander the labyrinthine cobblestone streets of Marbella's Casco Antiguo. This beautifully preserved historic quarter is a total feast for the senses, with vibrant bougainvillea spilling from wrought-iron balconies and the sweet scent of orange blossom filling the air. The heart of it all is the Plaza de los Naranjos (Orange Square), the perfect spot to grab a coffee and watch the world go by. You'll spend hours exploring unique boutiques, discovering ancient city walls, and finding countless photo ops in one of the most charming old towns in Andalusia.
                </p>
                 <Link href="/destinations/marbella/things-to-do/old-town" className="text-primary hover:underline font-semibold">
                    Explore the Old Town Guide &rarr;
                </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
                <Image src={images['marbella-old-town'].url} alt="Charming street in Marbella's Old Town" width={600} height={400} className="w-full h-auto object-cover" />
            </div>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
            <div className="md:order-2">
                <h3 className="font-display text-h3 text-text-primary mb-2">The Glamour of Puerto Banús</h3>
                <p className="text-body-l text-text-secondary mb-4">
                   Ready to see how the other half lives? Puerto Banús is the world-famous epicenter of glamour and luxury. This glittering marina is where you'll find superyachts the size of houses, high-performance sports cars you've only seen in movies, and an endless parade of designer boutiques like Dior, Gucci, and Louis Vuitton. By day, it's a sun-drenched haven for shopping and people-watching from a waterfront cafe. By night, it transforms into one of Europe's most famous nightlife destinations, with exclusive clubs and sophisticated bars coming alive.
                </p>
                 <Link href="/destinations/marbella/things-to-do/puerto-banus" className="text-primary hover:underline font-semibold">
                    An Insider's Guide to Puerto Banús &rarr;
                </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg md:order-1">
                 <Image src={images['puerto-banus-marina'].url} alt="Superyachts in Puerto Banús marina" width={600} height={400} className="w-full h-auto object-cover" />
            </div>
        </div>
      </Section>
       <Section title="The Costa del Golf: A Golfer's Paradise" className="bg-secondary/20">
        <div className="prose max-w-4xl mx-auto text-lg text-text-secondary text-center">
             <h3 className="font-display text-h3 text-text-primary mb-2">Tee Off in Style</h3>
            <p>
                They don't call it the "Costa del Golf" for nothing! Marbella is the undisputed capital of golf in Europe, boasting an incredible concentration of world-class courses. Picture this: lush, manicured fairways with breathtaking views of the Mediterranean sea and dramatic mountains. Whether you're a seasoned pro looking for a challenge at a championship course like Valderrama or just want a relaxed round in the sun, there's a perfect course for you. Planning your entire <Link href="/sports/golf/golf-holidays" className="text-primary hover:underline">Marbella golf holiday</Link> is a breeze with our guides to the best <Link href="/sports/golf/golf-resorts" className="text-primary hover:underline">golf resorts and packages</Link>.
            </p>
            <Link href="/sports/golf" className="text-primary hover:underline font-semibold">
                Discover Marbella's Best Golf Courses &rarr;
            </Link>
        </div>
      </Section>
    </div>
  );
}

    