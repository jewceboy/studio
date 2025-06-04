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
      const errorBodyText = await response.text();
      console.error('n8n webhook responded with an error:', response.status, errorBodyText);
      let displayMessage = `Error: Received status ${response.status} from the n8n webhook. Please check your n8n workflow logs for details.`;
      try {
        const errorJson = JSON.parse(errorBodyText);
        if (errorJson && typeof errorJson.message === 'string') {
          displayMessage = `n8n Error (${response.status}): ${errorJson.message}`;
        } else if (errorJson && typeof errorJson.error === 'string') {
          displayMessage = `n8n Error (${response.status}): ${errorJson.error}`;
        } else if (errorBodyText.length > 0 && errorBodyText.length < 250 && !errorBodyText.toLowerCase().includes('<html')) {
          // If it's not JSON but short and not HTML, it might be a plain text error
          displayMessage = `n8n Error (${response.status}): ${errorBodyText.substring(0,180)}${errorBodyText.length > 180 ? '...' : ''}. Check n8n logs.`;
        }
      } catch (e) {
        // Parsing failed, or no specific message found.
        // If errorBodyText is short and not HTML, include a snippet.
        if (errorBodyText.length > 0 && errorBodyText.length < 250 && !errorBodyText.toLowerCase().includes('<html')) {
            displayMessage = `Error: Received status ${response.status} from n8n. Response: ${errorBodyText.substring(0,180)}${errorBodyText.length > 180 ? '...' : ''}. Please check n8n logs.`;
        }
      }
      return {
        id: Date.now(),
        content: displayMessage,
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
        content: "Received an unexpected response format from the AI. Ensure n8n sends { \"reply\": \"...\" }.",
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
