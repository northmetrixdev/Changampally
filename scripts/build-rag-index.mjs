/**
 * @file scripts/build-rag-index.mjs
 * Build-time script to compile and structure the Changampally RAG knowledge index.
 * Generates `lib/rag/knowledge-index.json`.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STOPWORDS = new Set([
  'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and',
  'any', 'are', 'aren\'t', 'as', 'at', 'be', 'because', 'been', 'before', 'being',
  'below', 'between', 'both', 'but', 'by', 'can', 'cannot', 'could', 'did', 'do',
  'does', 'doing', 'down', 'during', 'each', 'few', 'for', 'from', 'further',
  'had', 'has', 'have', 'having', 'he', 'her', 'here', 'hers', 'herself', 'him',
  'himself', 'his', 'how', 'i', 'if', 'in', 'into', 'is', 'it', 'its', 'itself',
  'let\'s', 'me', 'more', 'most', 'my', 'myself', 'no', 'nor', 'not', 'of', 'off',
  'on', 'once', 'only', 'or', 'other', 'ought', 'our', 'ours', 'ourselves', 'out',
  'over', 'own', 'same', 'she', 'should', 'so', 'some', 'such', 'than', 'that',
  'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there', 'these', 'they',
  'this', 'those', 'through', 'to', 'too', 'under', 'until', 'up', 'very', 'was',
  'we', 'were', 'what', 'when', 'where', 'which', 'while', 'who', 'whom', 'why',
  'with', 'would', 'you', 'your', 'yours', 'yourself', 'yourselves'
]);

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(token => token.length > 1 && !STOPWORDS.has(token));
}

// Read knowledge-data.ts or import knowledge chunks
const knowledgeDataPath = path.join(__dirname, '..', 'lib', 'rag', 'knowledge-data.ts');
const rawTs = fs.readFileSync(knowledgeDataPath, 'utf-8');

// Extract the chunks array using regex or compile
const chunksMatch = rawTs.match(/export const KNOWLEDGE_CHUNKS: KnowledgeChunk\[\] = (\[[\s\S]*?\]);\s*$/);
if (!chunksMatch) {
  console.error("Could not parse KNOWLEDGE_CHUNKS from file");
  process.exit(1);
}

// Clean and parse JS object safely
const sanitizedJs = chunksMatch[1]
  .replace(/`([^`]*)`/g, (_, content) => JSON.stringify(content));

const chunks = (new Function(`return ${sanitizedJs}`))();

console.log(`Found ${chunks.length} knowledge chunks to index.`);

// Calculate term frequencies and document frequencies
const docCount = chunks.length;
const df = {};
const indexedChunks = chunks.map(chunk => {
  const fullText = `${chunk.title} ${chunk.content} ${chunk.keywords.join(' ')}`;
  const tokens = tokenize(fullText);
  
  const tf = {};
  for (const token of tokens) {
    tf[token] = (tf[token] || 0) + 1;
  }

  // Update doc frequency
  const uniqueTokens = new Set(tokens);
  for (const token of uniqueTokens) {
    df[token] = (df[token] || 0) + 1;
  }

  return {
    ...chunk,
    tokenCount: tokens.length,
    tf,
  };
});

// Compute TF-IDF sparse vector representations for local high-accuracy cosine retrieval
const finalIndex = {
  version: "1.0.0",
  createdAt: new Date().toISOString(),
  docCount,
  df,
  chunks: indexedChunks.map(chunk => {
    // Calculate tf-idf weights
    const weights = {};
    for (const [token, count] of Object.entries(chunk.tf)) {
      const idf = Math.log(1 + docCount / (df[token] || 1));
      weights[token] = (count / chunk.tokenCount) * idf;
    }

    return {
      id: chunk.id,
      title: chunk.title,
      category: chunk.category,
      content: chunk.content,
      keywords: chunk.keywords,
      weights,
    };
  })
};

const outputPath = path.join(__dirname, '..', 'lib', 'rag', 'knowledge-index.json');
fs.writeFileSync(outputPath, JSON.stringify(finalIndex, null, 2), 'utf-8');
console.log(`Successfully generated static RAG index at: ${outputPath}`);

