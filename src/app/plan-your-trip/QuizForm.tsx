
'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from "@/components/ui/progress";
import { useToast } from '@/hooks/use-toast';
import { submitQuiz } from './actions';
import type { QuizAnswers } from '@/types';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

const quizSteps = [
  { id: 'travelStyle', title: "What's your ideal travel style?" },
  { id: 'interests', title: 'What are your main interests for this trip?' },
  { id: 'duration', title: 'How long is your trip?' },
  { id: 'budget', title: "What's your approximate budget?" },
];

const travelStyles = ['Luxury', 'Budget-friendly', 'Adventure', 'Relaxing', 'Family-oriented', 'Cultural Immersion'];
const interestsOptions = ['Beaches', 'History & Museums', 'Food & Wine', 'Nightlife & Entertainment', 'Nature & Hiking', 'Shopping', 'Sports & Activities'];
const durationOptions = [
  { label: 'A quick getaway (1-3 days)', value: '3' },
  { label: 'A nice break (4-6 days)', value: '5' },
  { label: 'A full exploration (7-10 days)', value: '7' },
  { label: 'An extended adventure (10+ days)', value: '10' },
];
const budgetOptions = ['Low (Backpacker/Saver)', 'Medium (Comfortable/Mid-range)', 'High (Luxury/Indulgent)'];


export default function QuizForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({
    interests: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleInputChange = (field: keyof QuizAnswers, value: any) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const handleMultiCheckboxChange = (field: keyof QuizAnswers, value: string, checked: boolean) => {
    setAnswers((prev: any) => {
      const currentValues = prev[field] || [];
      if (checked) {
        return { ...prev, [field]: [...currentValues, value] };
      } else {
        return { ...prev, [field]: currentValues.filter((item: string) => item !== value) };
      }
    });
  };

  const nextStep = () => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Validate all answers are present
      if (!answers.travelStyle || answers.interests?.length === 0 || !answers.duration || !answers.budget) {
        toast({ title: "Missing Information", description: "Please complete all questions.", variant: "destructive" });
        setIsLoading(false);
        return;
      }
      
      // The server action now handles redirection.
      // We don't need to handle 'success' or 'data' here if redirection is the primary flow.
      await submitQuiz(answers as QuizAnswers);
      // setLoading(false) will not be reached if redirect happens.
      // If there's an error and redirect doesn't happen, it's handled in catch.

    } catch (error) {
      console.error("Quiz submission error:", error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to submit quiz. Please try again.',
        variant: 'destructive',
      });
      setIsLoading(false);
    }
  };
  
  const progressValue = ((currentStep + 1) / quizSteps.length) * 100;

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-4 md:p-8 bg-card rounded-lg shadow-xl max-w-2xl mx-auto">
      <Progress value={progressValue} className="w-full mb-4 [&>div]:bg-primary" />
      <h3 className="font-montserrat text-2xl font-semibold text-primary-dark text-center">
        {quizSteps[currentStep].title}
      </h3>
      
      {quizSteps[currentStep].id === 'travelStyle' && (
        <RadioGroup
          onValueChange={(value) => handleInputChange('travelStyle', value)}
          value={answers.travelStyle}
          className="space-y-3"
        >
          {travelStyles.map((style) => (
            <div key={style} className="flex items-center space-x-3 p-3 border rounded-md hover:bg-secondary/30 transition-colors">
              <RadioGroupItem value={style} id={`style-${style}`} />
              <Label htmlFor={`style-${style}`} className="text-md font-normal cursor-pointer flex-grow">{style}</Label>
            </div>
          ))}
        </RadioGroup>
      )}

      {quizSteps[currentStep].id === 'interests' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {interestsOptions.map((interest) => (
            <div key={interest} className="flex items-center space-x-3 p-3 border rounded-md hover:bg-secondary/30 transition-colors">
              <Checkbox
                id={`interest-${interest}`}
                checked={answers.interests?.includes(interest)}
                onCheckedChange={(checked) => handleMultiCheckboxChange('interests', interest, !!checked)}
              />
              <Label htmlFor={`interest-${interest}`} className="text-md font-normal cursor-pointer flex-grow">{interest}</Label>
            </div>
          ))}
        </div>
      )}

      {quizSteps[currentStep].id === 'duration' && (
         <Select onValueChange={(value) => handleInputChange('duration', parseInt(value))} value={answers.duration?.toString()}>
            <SelectTrigger className="w-full text-md h-12">
              <SelectValue placeholder="Select trip duration" />
            </SelectTrigger>
            <SelectContent>
              {durationOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value} className="text-md">{opt.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
      )}

      {quizSteps[currentStep].id === 'budget' && (
        <RadioGroup
          onValueChange={(value) => handleInputChange('budget', value)}
          value={answers.budget}
          className="space-y-3"
        >
          {budgetOptions.map((budget) => (
            <div key={budget} className="flex items-center space-x-3 p-3 border rounded-md hover:bg-secondary/30 transition-colors">
              <RadioGroupItem value={budget} id={`budget-${budget}`} />
              <Label htmlFor={`budget-${budget}`} className="text-md font-normal cursor-pointer flex-grow">{budget}</Label>
            </div>
          ))}
        </RadioGroup>
      )}

      <div className="flex justify-between items-center pt-6">
        <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 0 || isLoading} className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        {currentStep < quizSteps.length - 1 ? (
          <Button type="button" onClick={nextStep} disabled={isLoading} className="bg-primary text-primary-foreground hover:bg-primary/90">
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button type="submit" disabled={isLoading} className="bg-primary text-primary-foreground hover:bg-primary/90">
            {isLoading ? 'Generating...' : 'Get My Plan'} <Sparkles className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </