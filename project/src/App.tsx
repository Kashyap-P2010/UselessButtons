import React, { useState } from 'react';
import { 
  Coffee, 
  Cookie, 
  Banana, 
  Bird, 
  Cloud, 
  Ghost,
  Sandwich,
  Sparkles,
  Umbrella
} from 'lucide-react';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState('');
  const [rotation, setRotation] = useState(0);
  const [buttonSize, setButtonSize] = useState(1);

  const uselessMessages = [
    "Congratulations! You've wasted another second!",
    "This button literally does nothing important",
    "Why are you still clicking?",
    "Your productivity is decreasing...",
    "Here's a medal for being unproductive! 🏆",
    "Still here? Don't you have better things to do?",
    "This button counts your wasted clicks",
    "Achievement unlocked: Master of Uselessness",
    "Your boss would be so proud!",
    "Click harder, maybe something will happen (it won't)"
  ];

  const handleUselessClick = () => {
    setClickCount(prev => prev + 1);
    setMessage(uselessMessages[Math.floor(Math.random() * uselessMessages.length)]);
    setRotation(prev => prev + 45);
    setButtonSize(Math.random() * 0.5 + 0.8);
  };

  const randomEmoji = () => {
    const emojis = ['🎈', '🌈', '🦄', '🍕', '🎪', '🎭', '🎪', '🎡'];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-white shadow-lg">
          The Most Useless Buttons Ever! 🎉
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <button
            onClick={handleUselessClick}
            style={{ transform: `rotate(${rotation}deg) scale(${buttonSize})` }}
            className="bg-yellow-400 hover:bg-yellow-500 text-white p-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Coffee className="w-6 h-6" />
            <span>Click for Nothing ({clickCount})</span>
          </button>

          <button 
            onClick={() => setMessage("This button is even more useless!")}
            className="bg-green-400 hover:bg-green-500 text-white p-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Cookie className="w-6 h-6" />
            <span>Absolutely Pointless</span>
          </button>

          <button 
            className="bg-blue-400 hover:bg-blue-500 text-white p-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
            onClick={() => setMessage(randomEmoji())}
          >
            <Banana className="w-6 h-6" />
            <span>Random Emoji Generator</span>
          </button>

          <button 
            className="bg-red-400 hover:bg-red-500 text-white p-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
            onClick={() => setMessage("Loading... (not really)")}
          >
            <Bird className="w-6 h-6" />
            <span>Fake Loading Button</span>
          </button>

          <button 
            className="bg-purple-400 hover:bg-purple-500 text-white p-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
            onClick={() => setMessage("Error 404: Purpose not found")}
          >
            <Ghost className="w-6 h-6" />
            <span>Purpose Not Found</span>
          </button>

          <button 
            className="bg-pink-400 hover:bg-pink-500 text-white p-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
            onClick={() => setMessage("Achievement Unlocked: Time Wasted!")}
          >
            <Sparkles className="w-6 h-6" />
            <span>Achievement Button</span>
          </button>
        </div>

        {message && (
          <div className="mt-8 p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg text-center text-white text-xl animate-bounce">
            {message}
          </div>
        )}

        <div className="mt-12 text-center text-white opacity-70">
          <p>Time wasted here: {Math.floor(clickCount * 1.5)} seconds</p>
          <p className="mt-2">Productivity decreased by: {Math.min(clickCount * 2, 100)}%</p>
        </div>
      </div>
    </div>
  );
}

export default App;