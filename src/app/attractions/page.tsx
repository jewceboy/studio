
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import imageData from '@/lib/placeholder-images.json';
import { Building, Users, Mountain, Palette, Castle, Ship, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import GuideSignup from '@/components/blog/GuideSignup';

type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
  };
};

const images: ImageData = imageData;

export const metadata = {
  title: 'Things to do in Malaga & Costa del Sol | The Ultimate 2025 Guide',
  description: 'The ultimate 2025 guide to the best attractions and things to do in Malaga and the Costa del Sol. Discover historic sites, family fun, adventure activities, and more.',
};

const attractionCategories = [
    {
        slug: 'malaga-city',
        name: 'Malaga City Attractions',
        description: 'Explore the vibrant heart of the Costa del Sol, from historic sites to modern museums.',
        imageKey: 'malaga-city-skyline',
        linkHref: '/attractions/malaga-city',
        linkText: 'Explore the City',
    },
    {
        slug: 'family-attractions',
        name: 'Family Attractions',
        description: 'Discover attractions suitable for the whole family, from water parks to theme parks.',
        imageKey: 'family-at-theme-park',
        linkHref: '/attractions/family-attractions',
        linkText: 'Find Family Fun',
    },
    {
        slug: 'adventure-activities',
        name: 'Adventure Activities',
        description: 'From hiking scenic trails to thrilling water sports, discover your next adventure.',
        imageKey: 'hiking-mountain-trail',
        linkHref: '/attractions/adventure-activities',
        linkText: 'Seek Adventure',
    },
];

export default function AttractionsPage() {
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <PageHeader
          title="Attractions & Things To Do in Costa del Sol"
          subtitle="From ancient fortresses and world-class art museums to sun-drenched water parks and breathtaking mountain trails, your unforgettable Andalusian adventure starts here."
        />
      </div>
      <Section className="pt-0">
        <div className="prose lg:prose-xl max-w-4xl mx-auto prose-headings:font-display prose-a:text-primary prose-strong:text-text-primary">
            <p>
                The Costa del Sol is so much more than its famous coastline. It's a region brimming with an astonishing variety of attractions that cater to every type of traveler. Whether you're a history buff eager to walk through ancient Moorish castles, an art aficionado ready to explore the birthplace of Picasso, a family seeking laughter-filled days at theme parks, or an adventurer looking to conquer dramatic landscapes, you'll find it all here under the warm Spanish sun.
            </p>
             <p>
               This guide is your gateway to the very best experiences the region has to offer. We've organized the top attractions into easy-to-navigate categories, helping you plan a holiday that's packed with unforgettable moments. Discover the cultural treasures of Málaga City, find the perfect spots for family fun, or get your adrenaline pumping with our top adventure picks.
            </p>

            <h2>Explore by Category</h2>
             <p>
                To help you find exactly what you're looking for, we've grouped the region's top attractions into three main categories. Whether you're planning a day of cultural immersion, a fun-filled family outing, or a thrilling adventure, start your journey here.
            </p>
        </div>
      </Section>

      <Section className="py-0">
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {attractionCategories.map((category) => (
                    <InfoCard
                    key={category.slug}
                    title={category.name}
                    imageUrl={images[category.imageKey].url}
                    imageHint={images[category.imageKey].hint}
                    imageAlt={`Explore ${category.name}`}
                    description={category.description}
                    linkHref={category.linkHref}
                    linkText={category.linkText}
                    />
                ))}
            </div>
        </div>
      </Section>

      <Section>
        <div className="prose lg:prose-xl max-w-4xl mx-auto prose-headings:font-display prose-a:text-primary prose-strong:text-text-primary">
            
            <div id="malaga-city" className="scroll-mt-24">
                <h3><Building className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Málaga City: A Hub of History and Art</h3>
                <p>
                   The vibrant heart of the Costa del Sol, Málaga has transformed itself from a simple port city into a must-visit cultural destination. Its beautifully restored historic center is a treasure trove of sights, sounds, and flavors. Here, millennia of history live side-by-side with a thriving modern art scene.
                </p>
                <ul>
                    <li><strong>Historic Wonders:</strong> Step back in time by exploring the imposing <Link href="/attractions/malaga-city/historic-sites">Moorish Alcazaba</Link>, a palatial fortress offering stunning views of the port. Just below it lies a beautifully preserved Roman Theatre, a testament to the city's ancient roots. For even more breathtaking panoramas, make the climb up to the Gibralfaro Castle.</li>
                    <li><strong>World-Class Museums:</strong> As the birthplace of Pablo Picasso, Málaga proudly honors its most famous son with the <Link href="/attractions/malaga-city/museums">Museo Picasso Málaga</Link>. But the artistic journey doesn't stop there. The city is home to over 30 museums, including the Carmen Thyssen Museum, the Centre Pompidou Málaga, and the intriguing Automobile and Fashion Museum.</li>
                     <li><strong>Modern & Vibrant Spaces:</strong> Stroll along the Muelle Uno waterfront, a chic promenade lined with shops, restaurants, and bars right by the port. Dive into the culinary heart of the city at the Atarazanas Market, a bustling market hall filled with fresh local produce, seafood, and tapas stalls.</li>
                </ul>
                <p>
                    From <Link href="/attractions/malaga-city/walking-tours">guided walking tours</Link> of the old town to <Link href="/attractions/malaga-city/sightseeing">hop-on-hop-off bus tours</Link> that cover all the major sights, exploring Málaga City is an essential part of any Costa del Sol itinerary.
                </p>
            </div>

            <div id="family-attractions" className="scroll-mt-24 mt-12">
                 <h3><Users className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Family Attractions: Fun for All Ages</h3>
                <p>
                    The Costa del Sol is a paradise for families, offering endless opportunities for fun and excitement. Beyond the beautiful beaches, you'll find a host of attractions designed to delight visitors of all ages, from toddlers to teenagers.
                </p>
                 <ul>
                    <li><strong>Water Parks:</strong> When the summer sun gets hot, there's no better way to cool down than at one of the region's fantastic <Link href="/attractions/family-attractions/water-parks">water parks</Link>. Aqualand in Torremolinos and Aquamijas offer a thrilling array of slides, wave pools, and splash zones for a perfect family day out.</li>
                    <li><strong>Theme Parks & Aquariums:</strong> Head to Benalmádena to visit the iconic Tivoli World amusement park or get up close with marine life at the Sea Life Aquarium. In Estepona, Selwo Aventura offers a unique safari park experience where you can see animals from across the globe in semi-wild habitats.</li>
                    <li><strong>More Kids' Activities:</strong> From the interactive exhibits at the Principia Science Centre in Málaga to the enchanting Butterfly Park in Benalmádena, you'll never run out of <Link href="/attractions/family-attractions/kids-activities">activities to keep the little ones entertained</Link>.</li>
                 </ul>
            </div>

             <div id="adventure" className="scroll-mt-24 mt-12">
                <h3><Mountain className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Adventure Activities: Thrills in Nature</h3>
                <p>
                    For those who seek a dose of adrenaline and the beauty of the great outdoors, the Costa del Sol delivers in spades. The region's dramatic landscapes, from rugged mountains to the sparkling Mediterranean, provide the perfect backdrop for a wide range of thrilling activities.
                </p>
                <ul>
                    <li><strong>Caminito del Rey:</strong> Once known as the world's most dangerous footpath, the <Link href="/attractions/adventure-activities/caminito-del-rey">Caminito del Rey</Link> has been beautifully restored into a safe but spectacular walkway. Pinned along the walls of a breathtaking gorge, this hike offers jaw-dropping views and an unforgettable experience.</li>
                    <li><strong>Hiking Trails:</strong> The mountains that backdrop the coast are crisscrossed with incredible <Link href="/attractions/adventure-activities/hiking">hiking trails</Link>. From the challenging ascent of La Concha mountain behind Marbella for panoramic views, to the scenic coastal paths, there's a trail for every fitness level.</li>
                    <li><strong>Water Sports:</strong> Take to the sea for a different kind of adventure. The Mediterranean is your playground for a variety of <Link href="/attractions/adventure-activities/water-sports">water sports</Link>, including jet-skiing, paddleboarding, kayaking in the clear waters near Nerja, or even scuba diving to explore the marine life below.</li>
                </ul>
            </div>
            
        </div>
        <GuideSignup />
      </Section>
    </div>
  );
}
