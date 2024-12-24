import React from 'react';
import JesusAscii from '../components/JesusAscii';
import ChatInterface from '../components/ChatInterface';

const Index = () => {
  return (
    <div className="min-h-screen h-screen bg-black text-matrix-primary p-4 flex flex-col">
      <div className="container mx-auto max-w-4xl flex-1 flex flex-col">
        <header className="text-center py-4">
          <h1 className="text-3xl font-mono font-bold mb-2">Biblical.AI</h1>
          <p className="text-matrix-secondary">Divine wisdom through digital revelation</p>
        </header>

        <div className="flex-1 flex flex-col justify-center gap-8 overflow-hidden">
          <div className="w-full max-w-xl mx-auto text-center flex-shrink-0">
            <JesusAscii />
          </div>
          
          <div className="flex-1 min-h-0">
            <ChatInterface />
          </div>
        </div>

        <footer className="text-center py-4 text-matrix-secondary/60 font-mono text-sm">
          <p>"For the word of God is living and active..." - Hebrews 4:12</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;