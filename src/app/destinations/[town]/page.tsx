import { notFound } from 'next/navigation';
import Image from 'next/image';
import { destinationsData } from '@/lib/data';
import type { Destination } from '@/lib/constants';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, MapPin, Utensils, Info } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return Object.keys(destinationsData).map((town) => ({
    town: town,
  }));
}

export async function generateMetadata({ params }: { params: { town: string } }): Promise<Metadata> {
  const town = params.town;
  const destination: Destination = destinationsData[town];

  if (!destination) {
    return {
      title: 'Destination Not Found',
    }
  }

  return {
    title: `Explore ${destination.name} | Your Guide to ${destination.name}`,
    description: destination.overview,
     alternates: {
      canonical: `/destinations/${destination.slug}`,
    },
  };
}


export default function DestinationPage({ params }: { params: { town: string } }) {
  const destination: Destination = destinationsData[params.town];

  if (!destination) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4">
       {/* Hero Image */}
        <div className="relative h-80 md:h-96 -mt-8 -mx-4 sm:-mx-container-padding overflow-hidden">
            <Image
                src={destination.heroImage}
                alt={`Panoramic view of ${destination.name}`}
                fill
                priority
                className="object-cover"
                data-ai-hint={destination.imageHint || destination.name.toLowerCase()}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white p-4">
                    <h1 className="font-anton text-4xl md:text-6xl mb-2">{destination.name}</h1>
                </div>
            </div>
        </div>

      <Section title={`An Introduction to ${destination.name}`}>
        <p className="text-lg text-center max-w-3xl mx-auto text-muted-foreground">{destination.overview}</p>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Section title="Things to Do" className="pt-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-primary"/> Top Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {destination.thingsToDo.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Section>
        
        {destination.beaches && (
           <Section title="Beaches" className="pt-0">
            <Card>
                <CardHeader>
                <CardTitle className="flex items-center"><MapPin className="mr-2 h-5 w-5 text-primary"/> Best Beaches</CardTitle>
                </CardHeader>
                <CardContent>
                <ul className="list-disc list-inside space-y-2">
                    {destination.beaches.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
                </CardContent>
            </Card>
           </Section>
        )}
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Section title="Food & Drink" className="pt-0">
            <Card>
            <CardHeader>
                <CardTitle className="flex items-center"><Utensils className="mr-2 h-5 w-5 text-primary"/> Culinary Scene</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{destination.foodAndDrink}</p>
            </CardContent>
            </Card>
        </Section>

        <Section title="Practical Info" className="pt-0">
            <Card>
            <CardHeader>
                <CardTitle className="flex items-center"><Info className="mr-2 h-5 w-5 text-primary"/> Travel Tips</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{destination.practicalInfo}</p>
            </CardContent>
            </Card>
        </Section>
      </div>

       {destination.hotelsIntro && (
        <Section title={`Accommodation in ${destination.name}`} className="bg-secondary/20">
          <div className="text-center">
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground mb-6">{destination.hotelsIntro}</p>
          </div>
        </Section>
      )}

    </div>
  );
}