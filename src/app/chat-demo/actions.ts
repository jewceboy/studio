// src/app/chat-demo/actions.ts
'use server';

interface N8NResponse {
  reply?: string; // Assuming n8n responds with an object containing a 'reply' field
  error?: string;
}

export async function sendMessageToN8N(message: string): Promise<{ id: number; content: string; sender: 'ai' | 'user'; error?: boolean }> {
  const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

  if (!n8nWebhookUrl) {
    console.error('N8N_WEBHOOK_URL is not defined in environment variables.');
    return {
      id: Date.now(),
      content: 'Configuration error: Webhook URL is missing. Please contact support.',
      sender: 'ai',
      error: true,
    };
  }

  try {
    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }), // Send the user's message to n8n
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('n8n webhook responded with an error:', response.status, errorBody);
      return {
        id: Date.now(),
        content: `Error: Received status ${response.status} from the webhook.`,
        sender: 'ai',
        error: true,
      };
    }

    const data: N8NResponse = await response.json();

    if (data.error) {
      console.error('n8n returned an error in the response body:', data.error);
      return {
        id: Date.now(),
        content: data.error,
        sender: 'ai',
        error: true,
      };
    }
    
    if (data.reply) {
      return {
        id: Date.now(),
        content: data.reply,
        sender: 'ai',
      };
    } else {
      console.error('n8n response did not contain a "reply" field.');
      return {
        id: Date.now(),
        content: "Received an unexpected response format from the AI.",
        sender: 'ai',
        error: true,
      };
    }

  } catch (error) {
    console.error('Failed to send message to n8n or parse response:', error);
    let errorMessage = 'An unexpected error occurred while trying to reach the AI assistant.';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return {
      id: Date.now(),
      content: errorMessage,
      sender: 'ai',
      error: true,
    };
  }
}
