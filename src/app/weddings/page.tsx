
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import imageData from '@/lib/placeholder-images.json';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart, Diamond, Sun, Users, Briefcase } from 'lucide-react';
import GuideSignup from '@/components/blog/GuideSignup';

type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
  };
};

const images: ImageData = imageData;


export const metadata = {
  title: 'Weddings in Costa del Sol | The Ultimate 2025 Luxury Guide',
  description: 'The ultimate 2025 guide to planning a luxury wedding or event in the Costa del Sol. Discover exclusive venues in Marbella, top-tier planners, and bespoke services for your dream day.',
};

const weddingCategories = [
  {
    slug: 'wedding-venues',
    name: 'Exquisite Wedding Venues',
    description: 'Explore breathtaking villas, beachfront hotels, and rustic fincas perfect for your ceremony.',
    imageKey: 'wedding-venue-setting',
    linkHref: '/weddings/wedding-venues',
    linkText: 'Discover Venues',
  },
  {
    slug: 'wedding-planning',
    name: 'Elite Wedding Planning',
    description: 'Connect with expert planners to manage every detail of your special day flawlessly.',
    imageKey: 'wedding-planning-details',
    linkHref: '/weddings/wedding-planning',
    linkText: 'Find a Planner',
  },
  {
    slug: 'honeymoons',
    name: 'Luxury Honeymoons',
    description: 'Start your new life together with a romantic and luxurious honeymoon in southern Spain.',
    imageKey: 'honeymoon-couple-beach',
    linkHref: '/weddings/honeymoons',
    linkText: 'Plan Your Honeymoon',
  },
];

export default function WeddingsPage() {
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <PageHeader
          title="Weddings & Luxury Events in Costa del Sol"
          subtitle="Your journey to a breathtaking and unforgettable celebration begins here. We provide access to the most exclusive venues and services on the coast."
        />
      </div>
      <Section className="pt-0">
        <div className="prose lg:prose-xl max-w-4xl mx-auto prose-headings:font-display prose-a:text-primary prose-strong:text-text-primary">
            <p>
                Imagine exchanging your vows with the gentle sound of the Mediterranean waves as your soundtrack, celebrating in a centuries-old Andalusian palace, or hosting a glamorous event in a lavish private villa overlooking the sea. This is the promise of the Costa del Sol, a destination that has rightfully earned its reputation as one of the world's premier locations for luxury weddings and exclusive events.
            </p>
             <p>
               With its unique blend of sun-drenched glamour, timeless charm, and world-class infrastructure, the "Sunshine Coast" offers an unparalleled canvas for creating unforgettable moments. From the opulent hotspots of Marbella to the hidden gems of the Andalusian countryside, the possibilities are as limitless as the stunning coastal views. This guide is your first step towards bringing that vision to life, connecting you with the most sought-after venues, elite planners, and bespoke services the region has to offer.
            </p>

            <h2>Plan Your Celebration</h2>
             <p>
                Whether you're dreaming of an intimate elopement, a grand society wedding, or a high-profile corporate gala, planning your event on the Costa del Sol is an exciting journey. We've structured our resources to guide you through every key decision.
            </p>
        </div>
      </Section>

      <Section className="py-0">
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {weddingCategories.map((category) => (
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
            
            <div id="why-costa-del-sol" className="scroll-mt-24">
                <h3><Sun className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Why Choose the Costa del Sol?</h3>
                <p>
                   What makes this stretch of Spanish coastline the ultimate choice for a destination event? It's a combination of unique factors that create a truly magical experience for you and your guests.
                </p>
                <ul>
                    <li><strong>Unbeatable Climate:</strong> With over 320 days of sunshine a year, the Costa del Sol offers a reliable and beautiful setting for your celebration, no matter the season.</li>
                    <li><strong>Stunning & Diverse Venues:</strong> From luxurious <Link href="/weddings/wedding-venues/beach-weddings">beach clubs</Link> in Marbella to private <Link href="/weddings/wedding-venues/villa-weddings">villas</Link> with panoramic sea views and rustic-chic <Link href="/weddings/wedding-venues/cortijo-weddings">cortijos</Link> (country estates), the variety is simply unmatched.</li>
                     <li><strong>World-Class Service:</strong> The region is home to a host of seasoned professionals, from Michelin-starred caterers to internationally acclaimed <Link href="/weddings/wedding-planning/luxury-planners">luxury wedding planners</Link>, all dedicated to flawless execution.</li>
                     <li><strong>Accessibility:</strong> Málaga-Costa del Sol Airport (AGP) is a major international hub, making it easy for guests to travel from all over the world.</li>
                </ul>
            </div>

            <div id="venues" className="scroll-mt-24 mt-12">
                 <h3><Diamond className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Finding Your Dream Venue</h3>
                <p>
                    The venue is the heart of your event, setting the tone for the entire celebration. The Costa del Sol offers a venue for every dream. Consider what style best reflects your vision:
                </p>
                 <ul>
                    <li><strong>Luxury Villas:</strong> For ultimate privacy and exclusivity, a private villa offers a blank canvas to create a truly bespoke event. Perfect for multi-day celebrations where guests can stay on-site.</li>
                    <li><strong>Beachfront Locations:</strong> Nothing says "destination wedding" like a ceremony on the sand. Choose from glamorous beach clubs with full-service amenities or five-star hotels with private beachfronts.</li>
                    <li><strong>Historic Fincas & Cortijos:</strong> For a touch of authentic Andalusian romance, these traditional country estates offer historic charm, beautiful courtyards, and stunning rural landscapes.</li>
                    <li><strong>5-Star Hotels & Resorts:</strong> For a seamless, all-in-one experience, the luxury hotels along the coast provide comprehensive packages, on-site accommodation, and impeccable service.</li>
                 </ul>
                 <Button asChild variant="outline">
                    <Link href="/weddings/wedding-venues">Explore All Wedding Venues</Link>
                </Button>
            </div>

             <div id="planning" className="scroll-mt-24 mt-12">
                <h3><Users className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />The Importance of Expert Planning</h3>
                <p>
                    Planning a destination wedding or event comes with its own unique set of challenges. Engaging a professional wedding planner is not a luxury; it's an essential investment in ensuring your day is stress-free and executed to perfection.
                </p>
                <ul>
                    <li><strong>Local Expertise:</strong> A local planner has invaluable knowledge of the best suppliers, from florists and photographers to musicians and transport companies.</li>
                    <li><strong>Logistical Management:</strong> They handle all the complexities, including legal paperwork, contracts, and on-the-day coordination, allowing you to relax and enjoy the moment.</li>
                    <li><strong>Creative Vision:</strong> Top planners are creative partners who can take your initial ideas and transform them into a cohesive, beautifully designed event that exceeds your expectations.</li>
                </ul>
                 <Button asChild variant="outline">
                    <Link href="/weddings/wedding-planning">Connect with Wedding Planners</Link>
                </Button>
            </div>

             <div id="honeymoons" className="scroll-mt-24 mt-12 p-6 rounded-lg bg-background-alt info-box-custom-bg">
                <h3><Heart className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Beyond the Big Day: Honeymoons in Paradise</h3>
                <p>
                    Why leave when the party's over? The Costa del Sol is also one of Europe's most romantic honeymoon destinations. After your celebration, transition seamlessly into a blissful escape. Indulge in a stay at a <Link href="/weddings/honeymoons/romantic-hotels">romantic hotel</Link> with a private plunge pool, book into an opulent <Link href="/weddings/honeymoons/luxury-suites">honeymoon suite</Link> with breathtaking sea views, and enjoy private dinners, spa treatments, and the unparalleled beauty of southern Spain.
                </p>
                <Button asChild variant="link" className="text-sm">
                    <Link href="/weddings/honeymoons">Plan Your Dream Honeymoon &rarr;</Link>
                </Button>
            </div>
            
        </div>
        <GuideSignup />
      </Section>
    </div>
  );
}
