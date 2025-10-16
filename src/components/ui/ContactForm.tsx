
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, User, MessageSquare, Send, CheckCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const AnimatedInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: string
    error?: string
    icon?: React.ReactNode
  }
>(({ className, type, label, error, icon, ...props }, ref) => {
  const id = React.useId()
  const [isFocused, setIsFocused] = React.useState(false)
  const [hasValue, setHasValue] = React.useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value.length > 0)
    props.onChange?.(e)
  }

  return (
    <div className="relative">
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/70 z-10">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          id={id}
          type={type}
          className={cn(
            "flex h-12 w-full rounded-lg border border-input bg-background text-sm text-foreground shadow-sm shadow-black/5 transition-all duration-200",
            "placeholder:text-transparent",
            "focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20",
            "disabled:cursor-not-allowed disabled:opacity-50",
            icon ? "px-10 py-3" : "px-3 py-3",
            error && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20",
            className
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
          {...props}
        />
        <label
          htmlFor={id}
          className={cn(
            "absolute left-3 top-1/2 -translate-y-1/2 cursor-text text-sm text-muted-foreground/70 transition-all duration-200 pointer-events-none",
            "origin-left",
            icon && "left-10",
            (isFocused || hasValue) && [
              "top-0 -translate-y-1/2 scale-75 font-medium text-foreground",
              "bg-background px-2 -ml-2"
            ],
            error && (isFocused || hasValue) && "text-red-500"
          )}
        >
          {label}
        </label>
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-500 animate-in slide-in-from-top-1 duration-200">
          {error}
        </p>
      )}
    </div>
  )
})
AnimatedInput.displayName = "AnimatedInput";


const AnimatedTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string
    error?: string
    icon?: React.ReactNode
  }
>(({ className, label, error, icon, ...props }, ref) => {
  const id = React.useId()
  const [isFocused, setIsFocused] = React.useState(false)
  const [hasValue, setHasValue] = React.useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHasValue(e.target.value.length > 0)
    props.onChange?.(e)
  }

  return (
    <div className="relative">
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-4 text-muted-foreground/70 z-10">
            {icon}
          </div>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            "flex min-h-[120px] w-full rounded-lg border border-input bg-background text-sm text-foreground shadow-sm shadow-black/5 transition-all duration-200",
            "placeholder:text-transparent resize-none",
            "focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20",
            "disabled:cursor-not-allowed disabled:opacity-50",
            icon ? "px-10 py-3 pt-4" : "px-3 py-3 pt-4",
            error && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20",
            className
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
          {...props}
        />
        <label
          htmlFor={id}
          className={cn(
            "absolute left-3 top-4 cursor-text text-sm text-muted-foreground/70 transition-all duration-200 pointer-events-none",
            "origin-left",
            icon && "left-10",
            (isFocused || hasValue) && [
              "top-0 -translate-y-1/2 scale-75 font-medium text-foreground",
              "bg-background px-2 -ml-2"
            ],
            error && (isFocused || hasValue) && "text-red-500"
          )}
        >
          {label}
        </label>
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-500 animate-in slide-in-from-top-1 duration-200">
          {error}
        </p>
      )}
    </div>
  )
})
AnimatedTextarea.displayName = "AnimatedTextarea";

const GradientButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean
    children: React.ReactNode
  }
>(({ className, isLoading, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white transition-all duration-200",
        "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
        "shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        "transform hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          Sending...
        </>
      ) : (
        children
      )}
    </button>
  )
})
GradientButton.displayName = "GradientButton";

function ContactForm() {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    message: ""
  })
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsLoading(false)
    setIsSubmitted(true)
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto p-8 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
          <p className="text-muted-foreground">
            Thank you for your message. We'll get back to you soon.
          </p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto p-8">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
          <p className="text-muted-foreground">
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatedInput
            label="Full Name"
            type="text"
            value={formData.name}
            onChange={handleInputChange("name")}
            error={errors.name}
            icon={<User className="h-4 w-4" />}
          />

          <AnimatedInput
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleInputChange("email")}
            error={errors.email}
            icon={<Mail className="h-4 w-4" />}
          />

          <AnimatedTextarea
            label="Your Message"
            value={formData.message}
            onChange={handleInputChange("message")}
            error={errors.message}
            icon={<MessageSquare className="h-4 w-4" />}
          />

          <GradientButton
            type="submit"
            isLoading={isLoading}
            className="w-full"
          >
            <Send className="h-4 w-4" />
            Send Message
          </GradientButton>
        </form>
      </div>
    </Card>
  )
}

export default ContactForm
