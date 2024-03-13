import React from 'react';
import { Smile, Frown, Meh, Camera } from 'lucide-react';

const AIAssistantUI = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Emotion AI Assistant</h2>
        <p className="text-gray-600 text-center mb-8">Recognizing and responding to your emotions in real-time.</p>
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <Camera className="w-12 h-12 text-gray-400" />
          </div>
        </div>
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4">
            Analyze Emotion
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <Smile className="w-8 h-8 text-green-500" />
            <span className="text-sm text-gray-600 mt-1">Happy</span>
          </div>
          <div className="flex flex-col items-center">
            <Frown className="w-8 h-8 text-red-500" />
            <span className="text-sm text-gray-600 mt-1">Sad</span>
          </div>
          <div className="flex flex-col items-center">
            <Meh className="w-8 h-8 text-yellow-500" />
            <span className="text-sm text-gray-600 mt-1">Neutral</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantUI;
