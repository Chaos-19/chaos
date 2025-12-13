import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Terminal, ChevronRight } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'init', role: 'model', text: 'System Online. Query database for candidate details.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) throw new Error("API_KEY_MISSING");

      const ai = new GoogleGenAI({ apiKey });
      const historyContext = messages.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.text}`).join('\n');
      const fullPrompt = `${historyContext}\nUser: ${userMsg}\nAssistant:`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: fullPrompt,
        config: { systemInstruction: SYSTEM_INSTRUCTION }
      });

      const responseText = response.text || "Data corrupted. Please retry.";
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'model', text: responseText }]);

    } catch (error) {
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'model', text: "Connection error." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* HUD Window */}
      {isOpen && (
        <div className="mb-4 w-[360px] max-w-[calc(100vw-48px)] h-[450px] bg-[#0a0a0a] border border-white/20 shadow-2xl flex flex-col overflow-hidden animate-fade-in-up font-mono text-sm relative">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white"></div>

          {/* Header */}
          <div className="p-3 border-b border-white/10 bg-white/5 flex justify-between items-center">
            <div className="flex items-center gap-2 text-white/70">
              <Terminal size={14} />
              <span className="tracking-wider text-xs">AI_ASSISTANT_V1.0</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
              <X size={16} />
            </button>
          </div>

          {/* Terminal Output */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`mt-1 flex-shrink-0 ${msg.role === 'user' ? 'text-white' : 'text-blue-400'}`}>
                    {msg.role === 'user' ? <ChevronRight size={14}/> : <Bot size={14}/>}
                </div>
                <div className={`text-xs leading-relaxed ${msg.role === 'user' ? 'text-white/90' : 'text-blue-200/90'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex gap-2 text-blue-400 text-xs items-center">
                  <Bot size={14} />
                  <span className="animate-pulse">PROCESSING_DATA...</span>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Command Input */}
          <form onSubmit={handleSend} className="p-2 border-t border-white/10 bg-black">
            <div className="relative flex items-center">
              <span className="absolute left-3 text-white/50"><ChevronRight size={14}/></span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ENTER_QUERY..."
                className="w-full bg-transparent border-none text-white text-xs py-2 pl-8 pr-10 focus:ring-0 placeholder-white/30 font-mono"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className="absolute right-2 text-white/50 hover:text-white disabled:opacity-30 transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-12 h-12 bg-white text-black hover:bg-white/90 transition-colors border border-white/20"
      >
        <div className="absolute inset-0 border border-black/10 m-1"></div>
        {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
      </button>
    </div>
  );
};

export default ChatWidget;