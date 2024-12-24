import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);

    // Simulated bot response - replace with actual AI integration
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: "Behold, I process your query with divine algorithms. [Bot response placeholder]"
      }]);
    }, 1000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-black/50 rounded-lg p-4 h-[400px] overflow-y-auto mb-4 border border-matrix-primary/30">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.type === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className={`inline-block rounded px-4 py-2 ${
                message.type === 'user'
                  ? 'bg-matrix-primary/20 text-matrix-primary'
                  : 'bg-matrix-secondary/20 text-matrix-accent'
              }`}
            >
              <span className="font-mono">{message.content}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-black border border-matrix-primary/30 rounded-lg px-4 py-2 text-matrix-primary font-mono focus:outline-none focus:border-matrix-primary focus:ring-1 focus:ring-matrix-primary"
          placeholder="Ask your question..."
        />
        <button
          type="submit"
          className="bg-matrix-primary/20 text-matrix-primary px-4 py-2 rounded-lg hover:bg-matrix-primary/30 transition-colors duration-200 flex items-center justify-center"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;