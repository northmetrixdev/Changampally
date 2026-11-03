/**
 * @file lib/rag/types.ts
 * Types for the website-specific RAG knowledge retrieval and generation system.
 */

export interface KnowledgeChunk {
  id: string;
  title: string;
  category: "legacy" | "centre" | "department" | "doctor" | "contact" | "general";
  content: string;
  keywords: string[];
  embedding?: number[];
}

export interface RetrievalResult {
  chunk: KnowledgeChunk;
  score: number;
}

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp?: number;
}

export interface ChatRequest {
  message: string;
  history?: ChatMessage[];
}

export interface ChatResponse {
  message: string;
  available: boolean;
  sources?: string[];
  error?: string;
}

