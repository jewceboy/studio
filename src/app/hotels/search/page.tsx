
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import { allHotels } from '@/lib/hotel-data';
import type { Hotel } from '@/lib/constants';
import HotelCard from '@/components/hotels/HotelCard';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from 'lucide-react';
import type { Metadata } from 'next';
import { hotelSiloData } from '@/lib/data';

interface HotelSearchPageProps {
  searchParams?: {
    category?: string;
    region?: string;
    q?: string;
  };
}

function getCategoryName(slug: string | undefined) {
    if (!slug) return 'Hotels';
    for (const region in hotelSiloData) {
        const foundCategory = hotelSiloData[region].categories.find(cat => cat.slug === slug);
        if (foundCategory) {
            return foundCategory.name;
        }
    }
    return 'Hotels';
}

export async function generateMetadata({ searchParams }: HotelSearchPageProps): Promise<Metadata> {
  const categorySlug = searchParams?.category;
  const regionSlug = searchParams?.region;
  const query = searchParams?.q;

  let title = 'Find Hotels in Costa del Sol';
  let description = 'Search for hotels, resorts, and apartments across the Costa del Sol. Find the perfect accommodation for your trip.';

  if (query) {
    title = `Search results for "${query}"`;
    description = `Find hotels matching your search for "${query}" in Costa del Sol.`;
  } else if (categorySlug) {
    const categoryName = getCategoryName(categorySlug);
    title = `${categoryName} | Costa del Sol Navigator`;
    description = `Explore the best ${categoryName.toLowerCase()} in Costa del Sol. Book your perfect stay.`;
  } else if (regionSlug) {
    const regionName = hotelSiloData[regionSlug]?.name || 'Costa del Sol';
    title = `Hotels in ${regionName} | Costa del Sol Navigator`;
    description = `Find the best hotels in ${regionName}. Compare prices and book your stay.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `/hotels/search`,
    },
  };
}


export default function HotelSearchPage({ searchParams }: HotelSearchPageProps) {
  const category = searchParams?.category;
  const region = searchParams?.region;
  const query = searchParams?.q?.toLowerCase();

  const filteredHotels: Hotel[] = allHotels.filter(hotel => {
    let matches = true;
    if (category) {
      matches = matches && hotel.categories.includes(category);
    }
    if (region) {
      matches = matches && hotel.region === region;
    }
    if (query) {
      matches = matches && (
        hotel.name.toLowerCase().includes(query) ||
        hotel.description.toLowerCase().includes(query)
      );
    }
    return matches;
  });

  const title = query ? `Search results for "${query}"` : getCategoryName(category || region) || 'All Hotels';
  const subtitle = `Showing ${filteredHotels.length} results for your selection.`;

  return (
    <div>
      <PageHeader title={title} subtitle={subtitle} />
      <Section>
        {filteredHotels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredHotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        ) : (
          <Alert className="max-w-xl mx-auto">
            <Info className="h-4 w-4" />
            <AlertTitle>No Hotels Found</AlertTitle>
            <AlertDescription>
              We couldn't find any hotels matching your current selection. Please try different filters or broaden your search.
            </AlertDescription>
          </Alert>
        )}
      </Section>
    </div>
  );
}
