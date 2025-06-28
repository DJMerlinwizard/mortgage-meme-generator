import React, { useState, useRef } from 'react';
import { Download, RefreshCw, Home, DollarSign, TrendingUp } from 'lucide-react';
import html2canvas from 'html2canvas';
import MemeCanvas from './components/MemeCanvas';
import TemplateSelector from './components/TemplateSelector';
import TextEditor from './components/TextEditor';
import { memeTemplates } from './data/memeTemplates';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(memeTemplates[0]);
  const [topText, setTopText] = useState('WHEN YOU FINALLY GET PRE-APPROVED');
  const [bottomText, setBottomText] = useState('BUT THEN SEE THE INTEREST RATE');
  const [isGenerating, setIsGenerating] = useState(false);
  const memeRef = useRef(null);

  const handleDownload = async () => {
    if (!memeRef.current) return;
    
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(memeRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        allowTaint: true
      });
      
      const link = document.createElement('a');
      link.download = 'mortgage-meme.png';
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error('Error generating meme:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRandomize = () => {
    const randomTemplate = memeTemplates[Math.floor(Math.random() * memeTemplates.length)];
    const randomTopText = randomTemplate.defaultTopText || 'YOUR TOP TEXT HERE';
    const randomBottomText = randomTemplate.defaultBottomText || 'YOUR BOTTOM TEXT HERE';
    
    setSelectedTemplate(randomTemplate);
    setTopText(randomTopText);
    setBottomText(randomBottomText);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Mortgage Meme Generator</h1>
                <p className="text-blue-100 text-sm">Create hilarious mortgage memes in seconds</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-yellow-300" />
              <TrendingUp className="w-5 h-5 text-green-300" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Template Selector */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <RefreshCw className="w-5 h-5 mr-2" />
                Choose Template
              </h2>
              <TemplateSelector
                templates={memeTemplates}
                selectedTemplate={selectedTemplate}
                onSelectTemplate={setSelectedTemplate}
              />
            </div>

            {/* Text Editor */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-white mb-4">Edit Text</h2>
              <TextEditor
                topText={topText}
                bottomText={bottomText}
                onTopTextChange={setTopText}
                onBottomTextChange={setBottomText}
              />
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleRandomize}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Random Meme</span>
              </button>
              
              <button
                onClick={handleDownload}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>{isGenerating ? 'Generating...' : 'Download Meme'}</span>
              </button>
            </div>
          </div>

          {/* Right Panel - Meme Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-white mb-6 text-center">Your Meme Preview</h2>
              <div className="flex justify-center">
                <MemeCanvas
                  ref={memeRef}
                  template={selectedTemplate}
                  topText={topText}
                  bottomText={bottomText}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-white/70">
            <p>© 2024 Mortgage Meme Generator. Making home buying humor accessible to all! 🏠</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
