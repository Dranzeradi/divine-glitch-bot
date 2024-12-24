import React from 'react';
import JesusAscii from '../components/JesusAscii';
import ChatInterface from '../components/ChatInterface';

const Index = () => {
  return (
    <div className="min-h-screen h-screen bg-black text-matrix-primary p-4 flex flex-col">
      <div className="container mx-auto max-w-7xl flex-1 flex flex-col">
        <header className="text-center py-8 lg:text-left">
          <h1 className="text-4xl font-mono font-bold mb-3">Biblical.AI</h1>
          <p className="text-matrix-secondary text-lg">Divine wisdom through digital revelation</p>
        </header>

        <div className="flex-1 flex flex-col lg:flex-row gap-12 overflow-hidden py-4">
          {/* Left Column */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-8">
            <div className="w-full max-w-xl">
              <div className="bg-black/30 p-6 rounded-lg border border-matrix-primary/20">
                <JesusAscii />
                <p className="text-matrix-secondary/80 mt-6 text-lg font-mono">
                  "I am the way, the truth, and the life." - John 14:6
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:w-1/2 flex-1 min-h-0 flex items-center">
            <ChatInterface />
          </div>
        </div>

        <footer className="text-center py-6 text-matrix-secondary/60 font-mono text-sm lg:text-left border-t border-matrix-primary/20">
          <p>"For the word of God is living and active..." - Hebrews 4:12</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;