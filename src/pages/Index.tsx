import React from 'react';
import JesusAscii from '../components/JesusAscii';
import ChatInterface from '../components/ChatInterface';

const Index = () => {
  return (
    <div className="min-h-screen h-screen bg-black text-matrix-primary p-4 flex flex-col">
      <div className="container mx-auto max-w-7xl flex-1 flex flex-col">
        <header className="text-center py-4 lg:text-left">
          <h1 className="text-3xl font-mono font-bold mb-2">Biblical.AI</h1>
          <p className="text-matrix-secondary">Divine wisdom through digital revelation</p>
        </header>

        <div className="flex-1 flex flex-col lg:flex-row gap-8 overflow-hidden">
          {/* Left Column */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
            <div className="w-full max-w-xl text-center lg:text-left">
              <JesusAscii />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:w-1/2 flex-1 min-h-0">
            <ChatInterface />
          </div>
        </div>

        <footer className="text-center py-4 text-matrix-secondary/60 font-mono text-sm lg:text-left">
          <p>"For the word of God is living and active..." - Hebrews 4:12</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;