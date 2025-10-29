
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ticket, Mountain, Info, MapPin } from 'lucide-react';
import imageData from '@/lib/placeholder-images.json';

type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
  };
};
const images: ImageData = imageData;


export const metadata = {
  title: 'Caminito del Rey Walk | Your Ultimate 2024 Hiking Guide',
  description: 'Your complete guide to the Caminito del Rey walk & hike. Get 2024 tips on booking tickets, trail difficulty, how to get there, and the famous bridge for this breathtaking hike near Malaga.',
};

export default function CaminitoDelReyPage() {
  return (
    <div>
      <PageHeader
        title="Your Ultimate Guide to the Caminito del Rey"
        subtitle="Once the world's most dangerous footpath, now a spectacular and safe adventure."
      />

      <Section className="pt-0">
        <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video mb-l rounded-lg overflow-hidden shadow-lg">
                <Image
                    src={images['Caminito-del-Rey-path'].url}
                    alt="Dramatic view of the boardwalks on Caminito del Rey"
                    fill
                    priority
                    className="object-cover"
                    data-ai-hint="gorge boardwalk hike"
                />
            </div>

            <div className="prose lg:prose-xl max-w-none prose-headings:font-display prose-a:text-primary prose-strong:text-text-primary">
                <p>
                    Are you ready for one of the most breathtaking walks of your life? The Caminito del Rey (The King's Little Path) is a spectacular trail pinned along the steep walls of a narrow gorge in the province of Málaga. Once notoriously known as the world's most dangerous footpath, it has since been fully restored into a safe, accessible, and utterly unforgettable experience.
                </p>
                <p>
                    This guide has everything you need to plan your visit, from securing those hard-to-get tickets to knowing what to expect on the trail. Get ready to walk on boardwalks suspended 100 meters over the Guadalhorce River, cross a thrilling suspension bridge, and soak in some of Andalusia's most stunning natural scenery.
                </p>

                <h2 id="booking-tickets">Booking Your Tickets: The Golden Rule</h2>
                <p>
                    This is the most important tip: **Book your tickets well in advance!** Tickets, especially for weekends and peak seasons, sell out weeks or even months beforehand. Spontaneous visits are almost never possible.
                </p>
                 <figure className="my-6">
                    <Image src="https://picsum.photos/seed/caminito-booking/800/400" alt="Official booking website for Caminito del Rey" width={800} height={400} className="rounded-lg shadow-md w-full h-auto" data-ai-hint="website screenshot booking"/>
                    <figcaption className="text-xs text-center text-muted-foreground mt-2">The official website is the best place to book tickets directly.</figcaption>
                </figure>
                <p>
                    You have two main options for booking:
                </p>
                <ul>
                    <li><strong>Official Website:</strong> The cheapest way is to book directly through the <a href="https://www.caminitodelrey.info/" target="_blank" rel="noopener noreferrer">official Caminito del Rey website</a>. Be persistent, as the site can be busy.</li>
                    <li><strong>Guided Tours:</strong> Many companies offer guided tours from Málaga and other Costa del Sol towns. While more expensive, they often include transportation, entrance tickets (even when the official site is sold out), and a knowledgeable guide. This is a hassle-free option.</li>
                </ul>
                 <div className="my-6 p-4 info-box-custom-bg border-l-4">
                    <h4 className="font-display font-semibold text-foreground">Insider Tip:</h4>
                    <p className="text-muted-foreground">If official tickets are sold out, check the availability of guided tours. They have separate ticket allocations and are often your best bet for last-minute planning.</p>
                </div>

                <h2 id="the-hike">The Hike: What to Expect</h2>
                <p>
                    The Caminito del Rey is a linear path, not a loop. The total distance is 7.7 km, but the most famous part (the boardwalks) covers about 2.9 km of that. Here's a breakdown:
                </p>
                 <figure className="my-6">
                    <Image src="https://picsum.photos/seed/caminito-bridge/800/500" alt="The suspension bridge at the end of the hike" width={800} height={500} className="rounded-lg shadow-md w-full h-auto" data-ai-hint="suspension bridge gorge"/>
                    <figcaption className="text-xs text-center text-muted-foreground mt-2">The thrilling suspension bridge near the exit.</figcaption>
                </figure>
                <ul>
                    <li><strong>Total Distance:</strong> 7.7 km (approx. 4.8 miles)</li>
                    <li><strong>Estimated Time:</strong> 3-4 hours</li>
                    <li><strong>Difficulty:</strong> Easy to moderate. The path is mostly flat, but it's long and not recommended for people with a severe fear of heights or mobility issues.</li>
                    <li><strong>The Route:</strong> You'll walk from the northern access point (Ardales) to the southern exit (El Chorro). From the exit, a shuttle bus will take you back to the northern car park area where you started.</li>
                </ul>

                 <h2 id="getting-there">How to Get There</h2>
                <Card className="my-8">
                  <CardHeader>
                    <CardTitle className="flex items-center"><MapPin className="mr-2 h-5 w-5"/>Getting to Caminito del Rey</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <p>The starting point is near Ardales. The easiest way to get there is by car. There are several car parks near the northern access point. Remember to allow plenty of time as you'll need to walk from the car park to the official entrance (about 1.5km - 2.5km depending on where you park).</p>
                     <p className="mt-4">Alternatively, you can take a train to El Chorro station (the exit point) and then catch the shuttle bus up to the entrance.</p>
                  </CardContent>
                </Card>

                <h2 id="tips">Top Tips for Your Visit</h2>
                 <ul>
                    <li><strong>Wear Comfortable Shoes:</strong> Trainers or hiking shoes are a must. No flip-flops or open-toed shoes are allowed.</li>
                    <li><strong>Arrive Early:</strong> Give yourself at least one hour before your ticketed time to park and walk to the entrance.</li>
                    <li><strong>Check the Weather:</strong> The path can close due to high winds or bad weather. Check the official website for updates before you leave.</li>
                    <li><strong>Bring Water and Snacks:</strong> There are no shops along the path itself. Pack enough water for a 3-4 hour walk.</li>
                     <li><strong>Children:</strong> Children must be over 8 years old to enter. Make sure to bring their ID for age verification.</li>
                </ul>

            </div>
        </div>
      </Section>
    </div>
  );
}
