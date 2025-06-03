
import { Suspense } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MapPin, Activity, Hotel, Info, Mail, ExternalLink } from 'lucide-react';
import type { TripRecommendation } from '@/types'; // Using the type from global types
import { generatePersonalizedTrip, type PersonalizedTripInput } from '@/ai/flows/generate-personalized-trip';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Sparkles } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface ResultsPageProps {
  searchParams: {
    town?: string;
    activities?: string;
    accommodations?: string;
    error?: string;
    // For direct AI call fallback (if query params are not enough or direct call is preferred)
    travelStyle?: string;
    interests?: string; // comma-separated
    duration?: string;
    budget?: string;
  };
}

async function RecommendationContent({ searchParams }: ResultsPageProps) {
  let recommendation: TripRecommendation | null = null;
  let errorMessage = searchParams.error || null;

  if (searchParams.town && searchParams.activities && searchParams.accommodations && !errorMessage) {
    recommendation = {
      townRecommendation: searchParams.town,
      suggestedActivities: searchParams.activities.split(','),
      idealAccommodations: searchParams.accommodations,
    };
  } else if (searchParams.travelStyle && searchParams.interests && searchParams.duration && searchParams.budget && !errorMessage) {
    // Fallback: if critical params for direct AI call are present, try to generate
    // This is useful if redirection logic changes or for direct links to results with full quiz data
    try {
      const input: PersonalizedTripInput = {
        travelStyle: searchParams.travelStyle,
        interests: searchParams.interests.split(','),
        duration: parseInt(searchParams.duration),
        budget: searchParams.budget,
      };
      const aiResult = await generatePersonalizedTrip(input);
      recommendation = {
        townRecommendation: aiResult.townRecommendation,
        suggestedActivities: aiResult.suggestedActivities,
        idealAccommodations: aiResult.idealAccommodations,
      };
    } catch (e) {
      console.error("Error re-generating trip on results page:", e);
      errorMessage = "Could not retrieve your personalized plan. Please try the quiz again.";
    }
  } else if (!errorMessage) {
     errorMessage = "No recommendation data found. Please complete the quiz to get your personalized plan.";
  }


  if (errorMessage) {
    return (
      <Alert variant="destructive" className="max-w-2xl mx-auto">
        <Sparkles className="h-4 w-4" />
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
     // Should be caught by errorMessage above, but as a safeguard:
    return <p className="text-center text-muted-foreground">Loading your amazing trip plan...</p>;
  }


  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <Card className="bg-card shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-montserrat font-semibold text-primary-dark flex items-center">
            <MapPin className="h-6 w-6 mr-3 text-accent-1-red" /> Recommended Town
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-medium text-foreground">{recommendation.townRecommendation}</p>
          <p className="text-muted-foreground mt-1">
            Based on your preferences, this town offers the perfect blend of experiences for your trip.
          </p>
          <Button asChild variant="link" className="px-0 text-accent-1-red">
            <Link href={`/destinations/${recommendation.townRecommendation.toLowerCase().replace(/\s+/g, '-')}`}>
              Learn more about {recommendation.townRecommendation} <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-card shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-montserrat font-semibold text-primary-dark flex items-center">
            <Activity className="h-6 w-6 mr-3 text-accent-1-red" /> Suggested Activities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            {recommendation.suggestedActivities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
          <Button asChild variant="default" className="mt-6 bg-accent-1-red text-primary-light">
            <Link href="/activities">Explore All Activities</Link>
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-card shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-montserrat font-semibold text-primary-dark flex items-center">
            <Hotel className="h-6 w-6 mr-3 text-accent-1-red" /> Ideal Accommodations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">{recommendation.idealAccommodations}</p>
           <Button asChild variant="default" className="mt-6 bg-accent-1-red text-primary-light">
            <Link href={`/hotels/${recommendation.townRecommendation.toLowerCase().replace(/\s+/g, '-')}`}>
              Find Hotels in {recommendation.townRecommendation}
            </Link>
          </Button>
        </CardContent>
      </Card>

      {recommendation.insiderTips && (
        <Card className="bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-montserrat font-semibold text-primary-dark flex items-center">
              <Info className="h-6 w-6 mr-3 text-accent-1-red" /> Insider Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">{recommendation.insiderTips}</p>
          </CardContent>
        </Card>
      )}

      <Card className="bg-accent-3-light-blue/10 p-6 text-center">
        <h3 className="font-montserrat text-xl font-semibold text-primary-dark mb-3">Happy with your plan?</h3>
        <p className="text-muted-foreground mb-4">
          You can refine your choices or start booking your adventure now! For more options, try adjusting your quiz answers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="outline" className="border-accent-1-red text-accent-1-red hover:bg-accent-1-red hover:text-primary-light">
                <Link href="/plan-your-trip">Take Quiz Again</Link>
            </Button>
            {/* Placeholder for email functionality */}
            <Button variant="default" className="bg-primary-dark text-primary-light hover:bg-primary-dark/90">
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
    </div>
  );
}


export default function TripResultsPage({ searchParams }: ResultsPageProps) {
  const userName = "Explorer"; // Could be personalized if quiz collects name

  return (
    <div>
      <PageHeader
        title={`Your Personalized Costa del Sol Plan, ${userName}!`}
        subtitle="Here's a unique itinerary crafted just for you based on your preferences. Get ready for an unforgettable adventure!"
      />
      <Suspense fallback={<RecommendationSkeleton />}>
        <RecommendationContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

export const metadata = {
  title: 'Your Personalized Trip Plan | Costa del Sol Navigator',
  description: 'View your AI-generated personalized trip plan for Costa del Sol, including recommended towns, activities, and accommodations.',
};
