'use client';

import { useState, type FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function NewsletterForm() {
  const [firstName, setFirstName] = useState('');
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
      description: "Thanks for signing up! You'll get the best tips straight to your inbox.",
    });
    setFirstName('');
    setEmail('');
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
        <h3 className="text-xl md:text-2xl font-bold text-white uppercase text-center md:text-left flex-shrink-0">
          Get my best tips sent<br className="hidden sm:block" /> straight to you!
        </h3>
        <div className="w-full md:w-auto md:flex-grow flex flex-col sm:flex-row gap-4">
            <Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full bg-white text-gray-900 placeholder:text-gray-500 border-gray-300 focus:ring-blue-500"
              aria-label="First Name"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white text-gray-900 placeholder:text-gray-500 border-gray-300 focus:ring-blue-500"
              aria-label="Email for newsletter"
            />
        </div>
        <div className="w-full md:w-auto">
          <Button 
            type="submit" 
            disabled={isLoading} 
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-6 py-3"
            size="lg"
            >
            {isLoading ? 'Sending...' : 'SEND ME TIPS'}
          </Button>
        </div>
      </form>
    </div>
  );
}