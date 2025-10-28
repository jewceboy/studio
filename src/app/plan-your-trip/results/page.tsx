'use client'; // Added 'use client' as it uses Button and Link from client components, and searchParams

import { Suspense } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MapPin, Activity, Hotel, Info, Mail, ExternalLink } from 'lucide-react';
import type { TripRecommendation } from '@/types'; 
// Removed direct AI call logic as this page should primarily consume query params or show error/loading
// import { generatePersonalizedTrip, type PersonalizedTripInput } from '@/ai/flows/generate-personalized-trip';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Sparkles } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useSearchParams } from 'next/navigation'; // For reading query params on client

interface ResultsPageProps {
  // searchParams are now read via useSearchParams hook on the client
}

function RecommendationContent() {
  const searchParams = useSearchParams();
  let recommendation: TripRecommendation | null = null;
  let errorMessage = searchParams.get('error') || null;

  const town = searchParams.get('town');
  const activitiesString = searchParams.get('activities');
  const accommodations = searchParams.get('accommodations');

  if (town && activitiesString && accommodations && !errorMessage) {
    recommendation = {
      townRecommendation: town,
      suggestedActivities: activitiesString.split(','),
      idealAccommodations: accommodations,
      // insiderTips: searchParams.get('insiderTips') || undefined, // If you add this
    };
  } else if (!errorMessage) {
     errorMessage = "No recommendation data found. Please complete the quiz to get your personalized plan.";
  }


  if (errorMessage) {
    return (
      <Alert variant="destructive" className="max-w-2xl mx-auto">
        <Sparkles className="h-4 w-4" /> {/* Use appropriate icon */}
        <AlertTitle>Oops! Something went wrong.</AlertTitle>
        <AlertDescription>
          {errorMessage}
          <div className="mt-4">
            <Button asChild>
              <Link href="/plan-your-trip">Try the Quiz Again</Link>
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    );
  }
  
  if (!recommendation) {
    return <RecommendationSkeleton />; // Show skeleton while confirming params or if none
  }


  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <Card className="bg-card shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-montserrat font-semibold text-foreground flex items-center">
            <MapPin className="h-6 w-6 mr-3 text-primary" /> Recommended Town
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-medium text-foreground">{recommendation.townRecommendation}</p>
          <p className="text-muted-foreground mt-1">
            Based on your preferences, this town offers the perfect blend of experiences for your trip.
          </p>
          <Button asChild variant="link" className="px-0 text-primary">
            <Link href={`/destinations/${recommendation.townRecommendation.toLowerCase().replace(/\s+/g, '-')}`}>
              Learn more about {recommendation.townRecommendation} <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-card shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-montserrat font-semibold text-foreground flex items-center">
            <Activity className="h-6 w-6 mr-3 text-primary" /> Suggested Activities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            {recommendation.suggestedActivities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
          <Button asChild variant="default" className="mt-6 bg-primary text-primary-foreground">
            <Link href="/attractions">Explore All Activities</Link> {/* Assuming /attractions exists */}
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-card shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-montserrat font-semibold text-foreground flex items-center">
            <Hotel className="h-6 w-6 mr-3 text-primary" /> Ideal Accommodations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">{recommendation.idealAccommodations}</p>
           <Button asChild variant="default" className="mt-6 bg-primary text-primary-foreground">
            <Link href={`/hotels/search?q=${recommendation.townRecommendation}`}>
              Find Hotels in {recommendation.townRecommendation}
            </Link>
          </Button>
        </CardContent>
      </Card>

      {recommendation.insiderTips && (
        <Card className="bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-montserrat font-semibold text-foreground flex items-center">
              <Info className="h-6 w-6 mr-3 text-primary" /> Insider Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">{recommendation.insiderTips}</p>
          </CardContent>
        </Card>
      )}

      <Card className="bg-secondary/30 p-6 text-center info-box-custom-bg"> {/* Updated class for info box */}
        <h3 className="font-montserrat text-xl font-semibold text-foreground mb-3">Happy with your plan?</h3>
        <p className="text-muted-foreground mb-4">
          You can refine your choices or start booking your adventure now! For more options, try adjusting your quiz answers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/plan-your-trip">Take Quiz Again</Link>
            </Button>
            <Button variant="default" className="bg-foreground text-background hover:bg-foreground/90">
                 <Mail className="mr-2 h-4 w-4" /> Email My Results (Coming Soon)
            </Button>
        </div>
      </Card>
    </div>
  );
}

function RecommendationSkeleton() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {[1, 2, 3].map(i => (
        <Card key={i} className="bg-card shadow-lg">
          <CardHeader>
            <Skeleton className="h-8 w-3/4" />
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-10 w-1/2 mt-4" />
          </CardContent>
        </Card>
      ))}
      <Card className="bg-secondary/30 p-6 text-center info-box-custom-bg">
         <Skeleton className="h-8 w-1/2 mx-auto mb-3" />
         <Skeleton className="h-4 w-3/4 mx-auto mb-4" />
         <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-40" />
         </div>
      </Card>
    </div>
  );
}


export default function TripResultsPage({ searchParams: serverSearchParams }: ResultsPageProps) {
  // serverSearchParams can be used for <Suspense key={...}> if needed, or initial checks
  // but main logic now uses useSearchParams on client
  const userName = "Explorer"; 

  return (
    <div>
      <PageHeader
        title={`Your Personalized Costa del Sol Plan, ${userName}!`}
        subtitle="Here's a unique itinerary crafted just for you based on your preferences. Get ready for an unforgettable adventure!"
      />
      {/* 
        The Suspense key might need to be dynamic if we expect searchParams to change
        and want to force a re-render of RecommendationContent. For now, it's static.
        A simple way to make it dynamic: key={JSON.stringify(serverSearchParams)}
        However, with useSearchParams, RecommendationContent will react to changes internally.
      */}
      <Suspense fallback={<RecommendationSkeleton />}>
        <RecommendationContent />
      </Suspense>
    </div>
  );
}

// Metadata remains server-side
// export const metadata = {
//   title: 'Your Personalized Trip Plan | Costa del Sol Navigator',
//   description: 'View your AI-generated personalized trip plan for Costa del Sol, including recommended towns, activities, and accommodations.',
// };
