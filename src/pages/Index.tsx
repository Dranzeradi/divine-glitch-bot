import React from 'react';
import JesusAscii from '../components/JesusAscii';
import ChatInterface from '../components/ChatInterface';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-matrix-primary p-4">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-mono font-bold mb-2">Biblical.AI</h1>
          <p className="text-matrix-secondary">Divine wisdom through digital revelation</p>
        </header>

        <div className="flex flex-col items-center gap-8">
          <div className="w-full max-w-xl mx-auto text-center">
            <JesusAscii />
          </div>
          
          <ChatInterface />
        </div>

        <footer className="text-center mt-8 text-matrix-secondary/60 font-mono text-sm">
          <p>"For the word of God is living and active..." - Hebrews 4:12</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;