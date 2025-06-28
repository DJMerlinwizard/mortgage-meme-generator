import React from 'react';

const TextEditor = ({ topText, bottomText, onTopTextChange, onBottomTextChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Top Text
        </label>
        <textarea
          value={topText}
          onChange={(e) => onTopTextChange(e.target.value)}
          placeholder="Enter top text..."
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
          rows="2"
        />
      </div>
      
      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Bottom Text
        </label>
        <textarea
          value={bottomText}
          onChange={(e) => onBottomTextChange(e.target.value)}
          placeholder="Enter bottom text..."
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
          rows="2"
        />
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={() => onTopTextChange('')}
          className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-200 py-2 px-3 rounded-lg text-sm transition-colors"
        >
          Clear Top
        </button>
        <button
          onClick={() => onBottomTextChange('')}
          className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-200 py-2 px-3 rounded-lg text-sm transition-colors"
        >
          Clear Bottom
        </button>
      </div>
    </div>
  );
};

export default TextEditor;
