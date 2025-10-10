// src/app/chat-demo/page.tsx
"use client"

import { useState, FormEvent, useEffect, useRef } from "react"
import { Bot, Paperclip, Mic, CornerDownLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat-bubble"
import { ChatInput } from "@/components/ui/chat-input"
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "@/components/ui/expandable-chat"
import { ChatMessageList } from "@/components/ui/chat-message-list"
import { sendMessageToN8N } from "./actions"; 

interface ChatMessage {
  id: number;
  content: string;
  sender: 'user' | 'ai';
  error?: boolean;
}

export default function ExpandableChatDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      content: "Hello! How can I help you today?",
      sender: "ai",
    },
  ]);

  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    // Generate a simple, unique session ID when the component mounts
    setSessionId(Date.now().toString() + Math.random().toString(36).substring(2, 15));
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim() || !sessionId) return

    const userMessage: ChatMessage = {
      id: Date.now(),
      content: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const aiResponse = await sendMessageToN8N(userMessage.content, sessionId);
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          content: "Sorry, I couldn't connect to the assistant. Please try again.",
          sender: "ai",
          error: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAttachFile = () => {
    // Placeholder for file attachment logic
  }

  const handleMicrophoneClick = () => {
    // Placeholder for microphone input logic
  }

  return (
    <ExpandableChat
      size="lg"
      position="bottom-right"
      icon={<Bot className="h-6 w-6" />}
    >
      <ExpandableChatHeader className="flex-col text-center justify-center">
        <h1 className="text-xl font-semibold">Chat with AI ✨</h1>
        <p className="text-sm text-muted-foreground">
          Ask me anything about the components
        </p>
      </ExpandableChatHeader>

      <ExpandableChatBody>
        <ChatMessageList>
          {messages.filter(message => message != null).map((message) => (
            <ChatBubble
              key={message.id}
              variant={message.sender === "user" ? "sent" : "received"}
            >
              <ChatBubbleAvatar
                className="h-8 w-8 shrink-0"
                src={
                  message.sender === "user"
                    ? "https://picsum.photos/seed/user-avatar/64/64"
                    : "https://picsum.photos/seed/ai-avatar/64/64"
                }
                data-ai-hint={message.sender === "user" ? "man face" : "woman face"}
                fallback={message.sender === "user" ? "US" : "AI"}
              />
              <ChatBubbleMessage
                variant={message.sender === "user" ? "sent" : "received"}
                className={message.error ? "bg-destructive text-destructive-foreground" : ""}
              >
                {message.content}
              </ChatBubbleMessage>
            </ChatBubble>
          ))}

          {isLoading && (
            <ChatBubble variant="received">
              <ChatBubbleAvatar
                className="h-8 w-8 shrink-0"
                src="https://picsum.photos/seed/ai-avatar/64/64"
                data-ai-hint="woman face"
                fallback="AI"
              />
              <ChatBubbleMessage isLoading />
            </ChatBubble>
          )}
        </ChatMessageList>
      </ExpandableChatBody>

      <ExpandableChatFooter>
        <form
          onSubmit={handleSubmit}
          className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
        >
          <ChatInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
          />
          <div className="flex items-center p-3 pt-0 justify-between">
            <div className="flex">
              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={handleAttachFile}
              >
                <Paperclip className="size-4" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={handleMicrophoneClick}
              >
                <Mic className="size-4" />
              </Button>
            </div>
            <Button type="submit" size="sm" className="ml-auto gap-1.5" disabled={isLoading || !sessionId}>
              {isLoading ? 'Sending...' : 'Send Message'}
              {!isLoading && <CornerDownLeft className="size-3.5" />}
            </Button>
          </div>
        </form>
      </ExpandableChatFooter>
    </ExpandableChat>
  )
}
