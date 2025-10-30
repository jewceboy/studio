
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import imageData from '@/lib/placeholder-images.json';

type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
    width: number;
    height: number;
  };
};
const images: ImageData = imageData;

export default function GuideSignup() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    toast({
      title: "Success!",
      description: "Thanks for subscribing. Your guide is on its way to your inbox.",
    });
    // Here you would typically handle the form submission, e.g., send data to your newsletter service
  };

  return (
    <Card className="my-12 overflow-hidden shadow-lg">
      <CardContent className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src={images['costa-del-sol-guide-cover'].url}
            alt="Cover of the free Costa del Sol PDF guide"
            width={images['costa-del-sol-guide-cover'].width}
            height={images['costa-del-sol-guide-cover'].height}
            className="rounded-md shadow-md transform transition-transform hover:scale-105"
            data-ai-hint={images['costa-del-sol-guide-cover'].hint}
          />
        </div>
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl font-bold text-primary mb-2">Get Your Free Costa del Sol Guide!</h3>
          <p className="text-text-secondary mb-4">
            Subscribe to our monthly newsletter to receive new stories, exclusive travel deals, and behind-the-scenes updates direct to your inbox. As a thank-you, we'll send you a free copy of our PDF guide: <strong>Top 25 Things to Do in Costa del Sol</strong>.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="text" 
                name="first_name"
                placeholder="First Name" 
                required 
                className="flex-1"
              />
              <Input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                required 
                className="flex-1"
              />
            </div>
             <div className="flex items-start space-x-3">
              <Checkbox id="terms" name="terms" required />
              <Label htmlFor="terms" className="text-xs text-muted-foreground font-normal">
                I agree to my personal data being used for interest-based advertising as outlined in the <Link href="/privacy-policy" className="underline hover:text-primary">Privacy Notice</Link>.
              </Label>
            </div>
            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
              {isLoading ? 'Subscribing...' : 'SUBSCRIBE'}
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
