
import PageHeader from '@/components/shared/PageHeader';
import QuizForm from './QuizForm'; // Client Component

export const metadata = {
  title: 'Plan Your Personalized Costa del Sol Trip | Costa del Sol Navigator',
  description: 'Answer a few questions and get a personalized trip plan for your Costa del Sol adventure, including town recommendations, activities, and accommodation ideas.',
};

export default function PlanYourTripPage() {
  return (
    <div>
      <PageHeader
        title="Create Your Personalized Costa del Sol Itinerary"
        subtitle="Tell us about your dream trip, and we'll craft a unique plan just for you. Answer a few quick questions to get started!"
      />
      <QuizForm />
    </div>
  );
}
