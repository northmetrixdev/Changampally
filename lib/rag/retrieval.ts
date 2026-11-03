/**
 * @file lib/rag/retrieval.ts
 * Retrieval engine: finds the most relevant knowledge chunks using vector / TF-IDF similarity.
 * Operates purely with static precomputed index — zero database dependency.
 */

import knowledgeIndex from "./knowledge-index.json";
import { KnowledgeChunk, RetrievalResult } from "./types";

const STOPWORDS = new Set([
  'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and',
  'any', 'are', 'as', 'at', 'be', 'because', 'been', 'before', 'being', 'below',
  'between', 'both', 'but', 'by', 'can', 'cannot', 'could', 'did', 'do', 'does',
  'down', 'during', 'each', 'few', 'for', 'from', 'further', 'had', 'has', 'have',
  'he', 'her', 'here', 'hers', 'him', 'his', 'how', 'i', 'if', 'in', 'into', 'is',
  'it', 'its', 'let', 'me', 'more', 'most', 'my', 'no', 'nor', 'not', 'of', 'off',
  'on', 'once', 'only', 'or', 'other', 'our', 'out', 'over', 'own', 'same', 'she',
  'should', 'so', 'some', 'such', 'than', 'that', 'the', 'their', 'theirs', 'them',
  'then', 'there', 'these', 'they', 'this', 'those', 'through', 'to', 'too', 'under',
  'until', 'up', 'very', 'was', 'we', 'were', 'what', 'when', 'where', 'which',
  'while', 'who', 'whom', 'why', 'with', 'would', 'you', 'your'
]);

function tokenizeQuery(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 1 && !STOPWORDS.has(token));
}

/**
 * Calculates vector cosine similarity between query tokens and pre-indexed chunks.
 */
export function retrieveRelevantChunks(query: string, topK: number = 4): RetrievalResult[] {
  const queryTokens = tokenizeQuery(query);
  if (queryTokens.length === 0) {
    return [];
  }

  const { docCount, df, chunks } = (knowledgeIndex as unknown) as {
    docCount: number;
    df: Record<string, number>;
    chunks: Array<{
      id: string;
      title: string;
      category: string;
      content: string;
      keywords: string[];
      weights: Record<string, number>;
    }>;
  };

  // Compute query weights
  const queryTf: Record<string, number> = {};
  for (const token of queryTokens) {
    queryTf[token] = (queryTf[token] || 0) + 1;
  }

  const queryWeights: Record<string, number> = {};
  let queryNormSq = 0;
  for (const [token, count] of Object.entries(queryTf)) {
    const idf = Math.log(1 + docCount / (df[token] || 1));
    const w = (count / queryTokens.length) * idf;
    queryWeights[token] = w;
    queryNormSq += w * w;
  }
  const queryNorm = Math.sqrt(queryNormSq) || 1;

  const results: RetrievalResult[] = [];

  for (const chunk of chunks) {
    let dotProduct = 0;
    let chunkNormSq = 0;

    for (const [token, wChunk] of Object.entries(chunk.weights)) {
      chunkNormSq += wChunk * wChunk;
      if (queryWeights[token]) {
        dotProduct += queryWeights[token] * wChunk;
      }
    }

    const chunkNorm = Math.sqrt(chunkNormSq) || 1;
    let score = dotProduct / (queryNorm * chunkNorm);

    // Boost score for exact keyword matches
    const lowerQuery = query.toLowerCase();
    for (const kw of chunk.keywords) {
      if (lowerQuery.includes(kw.toLowerCase())) {
        score += 0.25;
      }
    }

    // Boost for title mention
    if (lowerQuery.includes(chunk.title.toLowerCase().slice(0, 15))) {
      score += 0.35;
    }

    if (score > 0.05) {
      results.push({
        chunk: chunk as unknown as KnowledgeChunk,
        score,
      });
    }
  }

  // Sort descending by score
  results.sort((a, b) => b.score - a.score);

  return results.slice(0, topK);
}
