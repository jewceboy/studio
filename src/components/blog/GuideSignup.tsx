
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import imageData from '@/lib/placeholder-images.json';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { X } from 'lucide-react';

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
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Trigger once when 50% is visible

  useEffect(() => {
    if (isInView && !isOpen) {
      setIsOpen(true);
    }
  }, [isInView, isOpen]);

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
    // Close the modal on successful submission
    setIsOpen(false);
  };

  return (
    <>
      {/* This invisible div is the trigger for the modal */}
      <div ref={ref} className="h-1" />

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            <div className="hidden md:flex justify-center p-8 bg-secondary/30 h-full items-center">
              <Image
                src={images['costa-del-sol-guide-cover'].url}
                alt="Cover of the free Costa del Sol PDF guide"
                width={images['costa-del-sol-guide-cover'].width}
                height={images['costa-del-sol-guide-cover'].height}
                className="rounded-md shadow-lg transform transition-transform hover:scale-105"
                data-ai-hint={images['costa-del-sol-guide-cover'].hint}
              />
            </div>
            <div className="md:col-span-2 p-8 md:p-10">
               <DialogHeader className="mb-4">
                 <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-primary">Get Your Free Costa del Sol Guide!</DialogTitle>
                 <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                </DialogClose>
              </DialogHeader>
              <p className="text-text-secondary mb-6">
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
                 <div className="flex items-start space-x-3 pt-2">
                  <Checkbox id="terms-modal" name="terms" required />
                  <Label htmlFor="terms-modal" className="text-xs text-muted-foreground font-normal">
                    I agree to my personal data being used for interest-based advertising as outlined in the <Link href="/privacy-policy" className="underline hover:text-primary">Privacy Notice</Link>.
                  </Label>
                </div>
                <Button type="submit" disabled={isLoading} className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 mt-2">
                  {isLoading ? 'Subscribing...' : 'SUBSCRIBE'}
                </Button>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

