
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import imageData from '@/lib/placeholder-images.json';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Building, Users, Briefcase, Plane } from 'lucide-react';
import GuideSignup from '@/components/blog/GuideSignup';


type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
  };
};

const images: ImageData = imageData;

export const metadata = {
  title: 'Business & MICE Tourism in Costa del Sol | The Ultimate 2025 Guide',
  description: 'The ultimate 2025 guide to hosting successful corporate events, conferences, and incentive trips in Costa del Sol. Find venues, hotels, and services tailored for business.',
};

const businessCategories = [
  {
    slug: 'mice-events',
    name: 'MICE Events & Venues',
    description: 'Find state-of-the-art congress centers and venues for meetings, incentives, conferences, and exhibitions.',
    imageKey: 'conference-hall',
    linkHref: '/business/mice-events',
    linkText: 'Explore MICE Venues',
  },
  {
    slug: 'corporate-retreats',
    name: 'Corporate & Leadership Retreats',
    description: 'Organize impactful team-building and executive retreats in inspiring, luxurious settings.',
    imageKey: 'corporate-team-building',
    linkHref: '/business/corporate-retreats',
    linkText: 'Plan a Retreat',
  },
  {
    slug: 'business-hotels',
    name: 'Business Hotels & Services',
    description: 'Select from top hotels equipped with modern business facilities, meeting rooms, and executive services.',
    imageKey: 'business-hotel-lobby',
    linkHref: '/business/business-hotels',
    linkText: 'Find Business Hotels',
  },
];

export default function BusinessPage() {
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <PageHeader
          title="Business & MICE Tourism in Costa del Sol"
          subtitle="Elevate your corporate events with world-class infrastructure, exceptional hospitality, and the stunning backdrop of the Mediterranean."
        />
      </div>
       <Section className="pt-0">
        <div className="prose lg:prose-xl max-w-4xl mx-auto prose-headings:font-display prose-a:text-primary prose-strong:text-text-primary">
            <p>
               The Costa del Sol has masterfully evolved from a premier holiday destination into a leading international hub for Business and MICE (Meetings, Incentives, Conferences, and Exhibitions) tourism. Combining modern, state-of-the-art infrastructure with an enviable climate and an atmosphere of sophisticated leisure, the region offers a powerful value proposition for companies looking to host impactful and memorable corporate events.
            </p>
             <p>
              From large-scale international conferences in Málaga's trade palace to exclusive leadership retreats in Marbella's luxury villas, the possibilities are endless. This guide serves as your comprehensive resource for navigating the corporate landscape of the Costa del Sol, connecting you with the venues, hotels, and services necessary to ensure your business objectives are met with style and efficiency.
            </p>

            <h2>Your Guide to Corporate Events on the Coast</h2>
            <p>
                Planning a corporate event in the Costa del Sol is an opportunity to inspire your team and impress your clients. Our resources are categorized to help you easily find the information you need, whether you are planning a large conference or an intimate executive offsite.
            </p>
        </div>
      </Section>

      <Section className="py-0">
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {businessCategories.map((category) => (
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
                <h3><Plane className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Why Host Your Corporate Event Here?</h3>
                <p>
                   The Costa del Sol provides a strategic advantage for MICE tourism. Its unique combination of professional facilities and a desirable lifestyle environment makes it a compelling choice for businesses worldwide.
                </p>
                <ul>
                    <li><strong>Exceptional Infrastructure:</strong> The region boasts major conference centers like the Trade Fairs and Congress Center of Málaga (FYCMA), numerous <Link href="/business/business-hotels/conference-venues">5-star hotels with extensive meeting facilities</Link>, and a high-speed rail network.</li>
                    <li><strong>International Accessibility:</strong> Málaga-Costa del Sol Airport (AGP) is one of Europe's best-connected airports, offering direct flights to over 100 destinations and making it easy to bring in international teams.</li>
                     <li><strong>Aspirational Destination:</strong> The allure of the Mediterranean lifestyle, golf courses, and luxury amenities makes the Costa del Sol a highly attractive destination for <Link href="/business/corporate-retreats/incentive-travel">incentive travel</Link>, helping to motivate and reward top performers.</li>
                     <li><strong>Diverse Accommodation:</strong> From large-scale <Link href="/business/business-hotels">business hotels</Link> designed for conferences to private villas perfect for discreet <Link href="/business/corporate-retreats/leadership">leadership retreats</Link>, the range of accommodation can be tailored to any corporate need.</li>
                </ul>
            </div>

            <div id="mice-events" className="scroll-mt-24 mt-12">
                 <h3><Briefcase className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />MICE: Meetings, Incentives, Conferences, & Exhibitions</h3>
                <p>
                    The Costa del Sol is fully equipped to handle every aspect of the MICE industry with professionalism and flair.
                </p>
                 <ul>
                    <li><strong>Meetings & Conferences:</strong> Host your <Link href="/business/mice-events/conferences">executive conferences</Link> or board meetings in state-of-the-art venues. Hotels in Málaga and Marbella offer flexible <Link href="/business/business-hotels/meeting-rooms">meeting rooms</Link> with the latest technology.</li>
                    <li><strong>Incentive Travel:</strong> Design unforgettable reward trips for your team. Combine luxury stays with unique experiences like private yacht charters, exclusive golf tournaments, and VIP nightlife access.</li>
                    <li><strong>Corporate Events:</strong> From product launches to gala dinners, the stunning venues and professional event management services in the Costa del Sol ensure your <Link href="/business/mice-events/corporate-events">corporate events</Link> make a lasting impression.</li>
                 </ul>
                 <Button asChild variant="outline">
                    <Link href="/business/mice-events">Explore MICE Services & Venues</Link>
                </Button>
            </div>

             <div id="retreats" className="scroll-mt-24 mt-12">
                <h3><Users className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Corporate Retreats & Team Building</h3>
                <p>
                    Move beyond the boardroom and inspire your team in a new environment. The Costa del Sol is the perfect location for corporate retreats that foster connection, creativity, and strategic thinking.
                </p>
                <ul>
                    <li><strong>Leadership Retreats:</strong> Host your C-suite or leadership team in a private, luxurious setting in the Andalusian hills for focused strategic planning sessions away from daily distractions.</li>
                    <li><strong>Team Building:</strong> Strengthen your team's bond with unique <Link href="/business/mice-events/team-building">team-building activities</Link>. Options are limitless, from sailing regattas and cooking challenges to hiking excursions and CSR initiatives.</li>
                    <li><strong>Workations:</strong> For remote teams, the Costa del Sol offers the perfect "workation" environment, blending productivity with the benefits of a Mediterranean lifestyle.</li>
                </ul>
                 <Button asChild variant="outline">
                    <Link href="/business/corporate-retreats">Plan a Corporate Retreat</Link>
                </Button>
            </div>
            
        </div>
        <GuideSignup />
      </Section>
    </div>
  );
}
