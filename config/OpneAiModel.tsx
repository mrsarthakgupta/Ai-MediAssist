import OpenAI from 'openai';

export const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPEN_ROUTER_API_KEY || '', // Use env variable
  defaultHeaders: {
    'HTTP-Referer': process.env.SITE_URL || '', // Use env variable
    'X-Title': process.env.SITE_NAME || '',     // Use env variable
  },
});
