'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { subscribeToNewsletter } from '@/app/actions';
import { useEffect, useRef } from 'react';

const initialState = {
  success: false,
  message: '',
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button 
      type="submit" 
      disabled={pending}
      className="bg-primary text-white text-button-label px-m py-s rounded-2xl transition-colors hover:bg-primary-dark disabled:bg-gray-400"
    >
      {pending ? 'Sending...' : 'SEND ME'}
    </button>
  );
}

export function NewsletterForm() {
  const [state, formAction] = useFormState(subscribeToNewsletter, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="w-full flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
        <div className="flex-1 min-w-0">
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            className="w-full p-3 rounded-lg border border-border bg-background text-text-primary placeholder:text-text-light focus:ring-2 focus:ring-primary focus:border-primary transition"
          />
          {state?.errors?.firstName && (
            <p className="text-red-500 text-sm mt-1">{state.errors.firstName[0]}</p>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <input 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            className="w-full p-3 rounded-lg border border-border bg-background text-text-primary placeholder:text-text-light focus:ring-2 focus:ring-primary focus:border-primary transition"
          />
           {state?.errors?.email && (
            <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>
          )}
        </div>
        <SubmitButton />
      </div>
      
      {state.message && (
        <p className={`w-full text-center mt-4 text-sm ${state.success ? 'text-green-600' : 'text-red-600'}`}>
          {state.message}
        </p>
      )}
    </form>
  );
}

export default NewsletterForm;
