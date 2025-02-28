// src/ai/index.ts
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.API_KEY,
  baseURL: "https://api.x.ai/v1", // can use xAI API since it's compatible with OpenAI SDK
});

export default client;