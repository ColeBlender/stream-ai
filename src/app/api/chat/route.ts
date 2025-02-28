// src/app/api/chat/route.ts

import client from "@/ai";
import { createAIChatStreamRouteHandlers } from "next-ai-stream/server";

export const dynamic = "force-dynamic";

export const { GET, POST } = createAIChatStreamRouteHandlers({
  client,
  model: "grok-2-latest", // use whatever model you want
});