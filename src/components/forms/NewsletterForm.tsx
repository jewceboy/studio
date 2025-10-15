
'use client';

import { useState, type FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    toast({
      title: "Subscribed!",
      description: "Thanks for signing up to our newsletter.",
    });
    setEmail('');
  };

  return (
    <div className="bg-secondary/50 p-8 rounded-lg shadow-md">
      <div className="text-center">
        <h3 className="font-montserrat text-2xl font-bold text-primary-dark mb-3">
          Get Your Free Costa del Sol Itinerary Planner!
        </h3>
        <p className="text-muted-foreground mb-6">
          Sign up for our newsletter and receive exclusive tips, updates, and your free itinerary planner.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow bg-primary-light border-primary-dark/30 focus:ring-accent-1-red"
          aria-label="Email for newsletter"
        />
        <Button type="submit" disabled={isLoading} className="bg-accent-1-red text-primary-light hover:bg-accent-1-red/90 font-montserrat font-medium">
          <Mail className="mr-2 h-4 w-4" />
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
    </div>
  );
}
