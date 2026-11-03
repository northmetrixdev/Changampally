"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_NAME } from "@/lib/constants";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  sources?: string[];
}

const INITIAL_WELCOME_MESSAGE: Message = {
  id: "welcome-1",
  sender: "bot",
  text: "Welcome to Changampally Integrated Healthcare. Rooted in our Vaidya tradition since 1300 AD, how may we assist you today? You can inquire about our 5 centres, Ayurvedic treatments, oncology rehabilitation, or doctors.",
  timestamp: "Now",
};

const SUGGESTED_QUERIES = [
  "Tell me about Remedium centre",
  "Ayurvedic oncology care",
  "Panchakarma therapy",
  "Our Chief Physician",
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([INITIAL_WELCOME_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Auto-focus input on desktop
      if (window.innerWidth >= 640) {
        setTimeout(() => inputRef.current?.focus(), 300);
      }
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const timeString = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: timeString,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: query,
          history: messages
            .filter((m) => m.id !== "welcome-1")
            .map((m) => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: m.text,
            })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text:
          data.message ||
          "The chatbot is currently unavailable. We apologize for the inconvenience and appreciate your patience.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        sources: data.sources,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      // Clean fallback: no raw API stack traces exposed
      const fallbackMessage: Message = {
        id: `bot-fallback-${Date.now()}`,
        sender: "bot",
        text: "The chatbot is currently unavailable. We apologize for the inconvenience and appreciate your patience.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* ── Chat Window Popup ────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[390px] md:w-[410px] h-[550px] max-h-[82vh] flex flex-col rounded-2xl bg-ivory shadow-2xl border border-plum/15 overflow-hidden"
            role="dialog"
            aria-label={`${SITE_NAME} Healthcare Assistant`}
          >
            {/* ── Header ────────────────────────────────────────────── */}
            <div className="bg-plum text-ivory px-5 py-4 flex items-center justify-between shadow-md shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-ivory/10 border border-ivory/20 flex items-center justify-center p-1">
                  <Image
                    src="/assets/Changampally Remedium_logo-light.png"
                    alt={`${SITE_NAME} Emblem`}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3
                    className="font-serif font-light text-base tracking-wide leading-tight text-ivory"
                    style={{ fontFamily: "var(--font-juana)" }}
                  >
                    Changampally Assistant
                  </h3>
                  <p className="font-sans text-[10px] tracking-wider uppercase text-ivory/70 mt-0.5">
                    Integrated Ayurvedic Guide
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat Window"
                className="w-8 h-8 rounded-full flex items-center justify-center text-ivory/80 hover:text-ivory hover:bg-ivory/10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* ── Conversation Area with 20% Opacity Logo Watermark ──── */}
            <div className="relative flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-sandstone/30">
              
              {/* Subtle Logo Watermark (20% Opacity, Preserved Aspect Ratio) */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
                aria-hidden="true"
              >
                <div className="relative w-64 h-64 opacity-20">
                  <Image
                    src="/assets/Changampally Remedium_logo.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Message List (Layered cleanly on top of watermark) */}
              <div className="relative z-10 space-y-3.5">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`px-4 py-3 rounded-2xl text-[13.5px] leading-relaxed break-words ${
                        msg.sender === "user"
                          ? "bg-plum text-ivory rounded-tr-sm max-w-[85%] shadow-sm"
                          : "bg-ivory border border-plum/10 text-charcoal rounded-tl-sm max-w-[88%] shadow-soft"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                      
                      {/* Optional source citations */}
                      {msg.sources && msg.sources.length > 0 && (
                        <div className="mt-2 pt-2 border-t border-plum/10 text-[10px] text-taupe space-y-0.5">
                          <span className="font-medium uppercase tracking-wider block">Sources:</span>
                          {msg.sources.map((src, idx) => (
                            <span key={idx} className="block text-plum font-sans truncate">
                              • {src}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-taupe/70 mt-1 px-1 font-sans">
                      {msg.timestamp}
                    </span>
                  </div>
                ))}

                {/* Loading typing indicator */}
                {isLoading && (
                  <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-ivory border border-plum/10 max-w-[80px] shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-plum/60 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-plum/60 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-plum/60 animate-bounce [animation-delay:0.4s]" />
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* ── Suggested Questions Chips ────────────────────────────── */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 bg-ivory/80 border-t border-plum/10 flex gap-2 overflow-x-auto no-scrollbar shrink-0">
                {SUGGESTED_QUERIES.map((query) => (
                  <button
                    key={query}
                    type="button"
                    onClick={() => handleSendMessage(query)}
                    className="whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-sans tracking-wide bg-sandstone/60 text-charcoal border border-plum/15 hover:bg-plum hover:text-ivory transition-all shrink-0 active:scale-95"
                  >
                    {query}
                  </button>
                ))}
              </div>
            )}

            {/* ── Text-in / Text-out Input Bar ─────────────────────────── */}
            <div className="p-3 bg-ivory border-t border-plum/15 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a question about Changampally..."
                  disabled={isLoading}
                  maxLength={500}
                  className="flex-1 px-4 py-2.5 rounded-full text-xs sm:text-sm bg-sandstone/40 border border-plum/20 text-charcoal placeholder:text-taupe/70 focus:outline-none focus:border-plum focus:ring-1 focus:ring-plum/30 transition-all disabled:opacity-60"
                  aria-label="Chat input text"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  aria-label="Send Message"
                  className="w-10 h-10 rounded-full bg-plum text-ivory flex items-center justify-center hover:bg-plum-dark transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0 active:scale-95 shadow-sm"
                >
                  <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Launcher Button (Bottom-Right Corner) ───────────────── */}
      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close Assistant" : "Open Changampally Healthcare Assistant"}
        aria-expanded={isOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-plum text-ivory shadow-xl border border-ivory/20 flex items-center justify-center hover:bg-plum-dark focus-visible:outline-plum focus-visible:outline-offset-4 transition-all duration-300"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="chat-icon"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center"
            >
              {/* Chat bubble icon with subtle leaf emblem */}
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {/* Subtle online pulse indicator */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sage" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}

