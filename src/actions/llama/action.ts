'use server';

const TIMEOUT_SECONDS = 20;

export const getResponse = async (input: string) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(
    () => controller.abort(),
    TIMEOUT_SECONDS * 1000
  );

  const api = process.env.NEXT_PUBLIC_LLAMA_BOT_URL!;
  try {
    const response = await fetch(`${api}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_input: input }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    if (response.ok) {
      return response.json();
    }

    throw new Error('Error in fetching chat');
  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw new Error('Request timed out');
    }
    throw error;
  }
};
