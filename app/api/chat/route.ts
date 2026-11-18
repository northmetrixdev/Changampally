/**
 * @file app/api/chat/route.ts
 * Dedicated API route for the Changampally RAG Chatbot.
 * Handles credential checks, vector retrieval, and Gemini response generation.
 */

import { NextRequest, NextResponse } from "next/server";
import { retrieveRelevantChunks } from "@/lib/rag/retrieval";
import { generateRAGResponse } from "@/lib/rag/generator";
import { ChatRequest, ChatResponse } from "@/lib/rag/types";

const UNAVAILABLE_MESSAGE =
  "The chatbot is currently unavailable. We apologize for the inconvenience and appreciate your patience.";

// Gemini can take >10s; allow room for primary + fallback calls.
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY?.trim();
    const isEnabled = process.env.CHATBOT_ENABLED?.toLowerCase() === "true";

    // ── Initial Unavailable State Check ────────────────────────────────
    // If API key is missing or the chatbot is explicitly disabled,
    // cleanly return the unavailable message without throwing API errors.
    if (!apiKey || !isEnabled) {
      const response: ChatResponse = {
        message: UNAVAILABLE_MESSAGE,
        available: false,
      };
      return NextResponse.json(response, { status: 200 });
    }

    const body: ChatRequest = await req.json();
    const query = body.message?.trim();

    if (!query) {
      return NextResponse.json(
        { error: "Message content cannot be empty." },
        { status: 400 }
      );
    }

    // ── Vector Similarity Retrieval ────────────────────────────────────
    // Retrieve top relevant chunks (does NOT send entire website)
    const retrievedChunks = retrieveRelevantChunks(query, 6);
    const sourceTitles = retrievedChunks.map((r) => r.chunk.title);

    // ── LLM Generation with Context ────────────────────────────────────
    const answer = await generateRAGResponse(query, retrievedChunks, body.history || []);

    const response: ChatResponse = {
      message: answer,
      available: true,
      sources: sourceTitles,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error: unknown) {
    console.error("Chat API handler error:", error);

    // Return a graceful error message without exposing backend internals
    const response: ChatResponse = {
      message:
        "We are temporarily unable to process your request. Please try again shortly or contact our front desk at +91 9072666104.",
      available: true,
      error: error instanceof Error ? error.message : "Internal error",
    };

    return NextResponse.json(response, { status: 200 });
  }
}

