// src/app/chat-demo/actions.ts
'use server';

interface N8NResponse {
  reply?: string; 
  error?: string;
}

export async function sendMessageToN8N(message: string, sessionId: string): Promise<{ id: number; content: string; sender: 'ai' | 'user'; error?: boolean }> {
  const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
  const n8nAuthHeaderName = process.env.N8N_AUTH_HEADER_NAME || 'Authorization';
  const n8nAuthHeaderValue = process.env.N8N_AUTH_HEADER_VALUE;

  if (!n8nWebhookUrl) {
    console.error('N8N_WEBHOOK_URL is not defined in environment variables.');
    return {
      id: Date.now(),
      content: 'Configuration error: Webhook URL is missing. Please contact support.',
      sender: 'ai',
      error: true,
    };
  }

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (n8nAuthHeaderValue) {
    headers[n8nAuthHeaderName] = n8nAuthHeaderValue;
  }

  try {
    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ message, sessionId }), // Send the user's message and sessionId
    });

    if (!response.ok) {
      const errorBodyText = await response.text();
      console.error('n8n webhook responded with an error:', response.status, errorBodyText);
      let displayMessage = `Error: Received status ${response.status} from the n8n webhook. Please check your n8n workflow logs for details.`;
      
      if (response.status === 401) {
        displayMessage = `Error: Received status 401 (Unauthorized) from n8n. Ensure N8N_AUTH_HEADER_NAME and N8N_AUTH_HEADER_VALUE are correctly set in your .env file if authentication is required. Raw n8n response: ${errorBodyText.substring(0,100)}${errorBodyText.length > 100 ? '...' : ''}`;
      } else {
         try {
            const errorJson = JSON.parse(errorBodyText);
            if (errorJson && typeof errorJson.message === 'string') {
            displayMessage = `n8n Error (${response.status}): ${errorJson.message}`;
            } else if (errorJson && typeof errorJson.error === 'string') {
            displayMessage = `n8n Error (${response.status}): ${errorJson.error}`;
            } else if (errorBodyText.length > 0 && errorBodyText.length < 250 && !errorBodyText.toLowerCase().includes('<html')) {
            displayMessage = `n8n Error (${response.status}): ${errorBodyText.substring(0,180)}${errorBodyText.length > 180 ? '...' : ''}. Check n8n logs.`;
            }
        } catch (e) {
            if (errorBodyText.length > 0 && errorBodyText.length < 250 && !errorBodyText.toLowerCase().includes('<html')) {
                displayMessage = `Error: Received status ${response.status} from n8n. Response: ${errorBodyText.substring(0,180)}${errorBodyText.length > 180 ? '...' : ''}. Please check n8n logs.`;
            }
        }
      }
      return {
        id: Date.now(),
        content: displayMessage,
        sender: 'ai',
        error: true,
      };
    }

    let data: N8NResponse;
    try {
      data = await response.json();
    } catch (jsonError) {
      const responseText = await response.text(); 
      console.error('Failed to parse JSON response from n8n:', jsonError);
      console.error('n8n raw response text:', responseText);
      return {
        id: Date.now(),
        content: `Error: n8n sent a response that was not valid JSON. Raw response: ${responseText.substring(0, 100)}${responseText.length > 100 ? '...' : ''}`,
        sender: 'ai',
        error: true,
      };
    }

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
      console.error('n8n response did not contain a "reply" field. Actual data received:', JSON.stringify(data, null, 2));
      return {
        id: Date.now(),
        content: "Received an unexpected response format from the AI. Ensure n8n sends { \"reply\": \"...\" }. Check server logs for details.",
        sender: 'ai',
        error: true,
      };
    }

  } catch (error) {
    console.error('Failed to send message to n8n or process its response:', error);
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
