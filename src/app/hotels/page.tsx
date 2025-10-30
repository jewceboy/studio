
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import imageData from '@/lib/placeholder-images.json';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MapPin, Star, Users, Wallet, Building, Compass, LifeBuoy } from 'lucide-react';

type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
  };
};

const images: ImageData = imageData;


export const metadata = {
  title: 'Hotels in Malaga & Costa del Sol | The Ultimate 2025 Guide',
  description: 'The complete 2025 guide to hotels in Malaga and the Costa del Sol. Find your perfect stay, from 5-star luxury resorts in Marbella to charming boutique hotels in Malaga and budget-friendly options.',
};

const mainHotelCategories = [
  {
    slug: 'luxury-hotels-malaga',
    name: 'Luxury Hotels',
    description: 'Indulge in opulent stays with top-tier amenities and services in Malaga city and beyond.',
    imageKey: 'luxury-hotel-malaga',
    linkHref: '/hotels/luxury-hotels-malaga',
    linkText: 'Explore Luxury Stays',
  },
  {
    slug: 'budget-hotels-malaga',
    name: 'Budget-Friendly Hotels',
    description: 'Discover great value stays, from stylish hostels to affordable and comfortable hotels.',
    imageKey: 'budget-hotel-malaga',
    linkHref: '/hotels/budget-hotels-malaga',
    linkText: 'Find Budget Options',
  },
  {
    slug: 'family-hotels-malaga',
    name: 'Family-Friendly Hotels',
    description: 'Find hotels with kids\' clubs, family pools, and amenities for all ages.',
    imageKey: 'family-hotel-malaga',
    linkHref: '/hotels/family-hotels-malaga',
    linkText: 'See Family Hotels',
  },
  {
    slug: 'costa-del-sol-resorts',
    name: 'All-Inclusive Resorts',
    description: 'Explore the best all-inclusive and large-scale resorts across the Costa del Sol for a hassle-free holiday.',
    imageKey: 'costa-del-sol-resort',
    linkHref: '/hotels/costa-del-sol-resorts',
    linkText: 'Discover Resorts',
  },
];

const quickLinks = [
    { href: '#types', label: 'Hotel Types' },
    { href: '#malaga', label: 'Málaga City' },
    { href: '#marbella', label: 'Marbella' },
    { href: '#nerja', label: 'Nerja' },
    { href: '#mijas', label: 'Mijas' },
    { href: '#tips', label: 'Booking Tips' },
];

export default function HotelsPage() {
  return (
    <div>
      <PageHeader
        title="Hotels in Malaga & Costa del Sol: The Ultimate 2025 Guide"
        subtitle="From sun-drenched luxury resorts in Marbella to chic boutique hotels in Málaga's historic heart, your perfect stay on the sun coast awaits. Let's find it."
      />

        {/* Quick Links Navigation */}
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
                Welcome to the definitive guide to accommodation on the Costa del Sol. Finding the right hotel is the cornerstone of any unforgettable holiday, and Spain’s sunshine coast offers a dazzling array of options to suit every taste, budget, and travel style. Whether you dream of waking up to the gentle sound of Mediterranean waves in a five-star luxury suite, exploring ancient streets from a charming boutique hotel, or enjoying a budget-friendly holiday with the whole family, this guide is your key to unlocking the perfect home away from home.
            </p>
             <p>
                We've sifted through hundreds of properties, from the glamorous hotspots of Marbella to the traditional charm of Mijas and the vibrant energy of Málaga city, to bring you a curated look at the best places to stay.
            </p>

            <h2 id="types">Finding Your Perfect Stay: Decoding Hotel Types</h2>
            <p>
                The Costa del Sol's accommodation landscape is incredibly diverse. Understanding the main categories will help you narrow down your search and find the perfect match for your vacation style. We've broken down our top recommendations into four main categories.
            </p>
        </div>
      </Section>

      <Section className="py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {mainHotelCategories.map((category) => (
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
            <h2 id="locations">Accommodation by Area: Where to Stay on the Costa del Sol</h2>
            <p>
                Location is everything. The vibe, scenery, and activities can change dramatically from one town to the next. Below, we explore the most popular areas to stay along the coast, helping you choose the perfect base for your adventures.
            </p>

            <div id="malaga" className="scroll-mt-24">
                <h3><MapPin className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Málaga City: Culture, History, and Urban Buzz</h3>
                <p>
                    For those who crave culture, history, and the vibrant energy of a city, staying in Málaga itself is a must. The historic center is a maze of charming streets, packed with world-class museums (including the Picasso Museum), bustling tapas bars, and fantastic shopping. You get the best of both worlds: a rich cultural experience combined with easy access to city beaches like La Malagueta.
                </p>
                <ul>
                    <li><strong>Best for:</strong> Culture vultures, foodies, short breaks, and travelers who want to explore without a car.</li>
                    <li><strong>Don't miss:</strong> The Alcazaba fortress, Atarazanas Market, and the rooftop bars overlooking the cathedral.</li>
                </ul>
                <Button asChild variant="outline">
                    <Link href="/hotels/malaga">Explore Hotels in Málaga City</Link>
                </Button>
            </div>

            <div id="marbella" className="scroll-mt-24 mt-12">
                 <h3><Star className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Marbella: Glamour, Luxury, and High-End Living</h3>
                <p>
                    Marbella is the undisputed capital of glamour on the Costa del Sol. Home to the world-famous Puerto Banús marina, the luxurious Golden Mile, and a wealth of designer boutiques and Michelin-starred restaurants. If your idea of a holiday involves high-end beach clubs, superyachts, and world-class golf courses, Marbella is your destination. Don't forget to explore its surprisingly charming and beautiful Old Town (Casco Antiguo).
                </p>
                 <ul>
                    <li><strong>Best for:</strong> Luxury travelers, nightlife lovers, golfers, and those looking for a sophisticated beach holiday.</li>
                    <li><strong>Don't miss:</strong> People-watching in Puerto Banús, strolling through the Old Town's Plaza de los Naranjos, and a day at a luxury beach club.</li>
                </ul>
                 <Button asChild variant="outline">
                    <Link href="/hotels/marbella">Explore Hotels in Marbella</Link>
                </Button>
            </div>

             <div id="nerja" className="scroll-mt-24 mt-12">
                <h3><Compass className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Nerja: Natural Beauty and Traditional Charm</h3>
                <p>
                    Situated on the eastern edge of the Costa del Sol, Nerja offers a more traditional and relaxed atmosphere. It's famous for its stunning Balcón de Europa viewpoint, the magnificent Nerja Caves, and a coastline dotted with beautiful, sheltered coves. It's an excellent base for exploring the region's natural parks and pretty white villages like Frigiliana.
                </p>
                <ul>
                    <li><strong>Best for:</strong> Couples, nature lovers, and those seeking a more authentic Andalusian experience with beautiful beaches.</li>
                    <li><strong>Don't miss:</strong> The Nerja Caves, kayaking to the Maro waterfalls, and enjoying the views from the Balcón de Europa.</li>
                </ul>
                 <Button asChild variant="outline">
                    <Link href="/hotels/nerja">Explore Hotels in Nerja</Link>
                </Button>
            </div>

             <div id="mijas" className="scroll-mt-24 mt-12">
                <h3><Building className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Mijas: The Best of Both Worlds</h3>
                <p>
                    Mijas is unique in that it offers two distinct experiences. There's Mijas Pueblo, a stunning white-washed village perched in the mountains with breathtaking coastal views, and Mijas Costa, the 12km stretch of coastline below with popular beach towns like La Cala de Mijas. You can stay by the sea and take a day trip to the village, or stay in the village for a more traditional feel.
                </p>
                 <ul>
                    <li><strong>Best for:</strong> Those wanting a mix of beach and tradition, families, and golfers (Mijas Golf Valley is renowned).</li>
                    <li><strong>Don't miss:</strong> A walk through Mijas Pueblo, the coastal boardwalk in La Cala de Mijas, and the local markets.</li>
                </ul>
                 <Button asChild variant="outline">
                    <Link href="/hotels/mijas">Explore Hotels in Mijas</Link>
                </Button>
            </div>
            
            <div id="tips" className="scroll-mt-24 mt-12 p-6 rounded-lg bg-background-alt info-box-custom-bg">
                <h3><LifeBuoy className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Insider's Guide to Booking Your Hotel</h3>
                 <p>Follow these tips to secure the best stay for your needs:</p>
                <ul>
                    <li><strong>Book in Advance, Especially for Summer:</strong> The best hotels, especially family resorts and boutique gems, get booked up months in advance for July and August.</li>
                    <li><strong>Consider Mid-Week Stays:</strong> If your dates are flexible, you can often find better rates by checking in on a Sunday or Monday compared to a Friday.</li>
                    <li><strong>Location is Key:</strong> Check the map! A "beachfront" hotel might still be a 15-minute walk from the main town center. Decide what your priority is—beach access or proximity to restaurants and nightlife.</li>
                    <li><strong>Read Recent Reviews:</strong> Pay attention to reviews from the last 6 months. They provide the most current insight into cleanliness, service, and the state of the facilities.</li>
                </ul>
            </div>
        </div>
      </Section>
    </div>
  );
}
