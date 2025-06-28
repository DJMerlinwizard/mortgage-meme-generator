import React, { forwardRef } from 'react';

const MemeCanvas = forwardRef(({ template, topText, bottomText }, ref) => {
  return (
    <div 
      ref={ref}
      className="relative bg-white rounded-lg overflow-hidden shadow-2xl"
      style={{ width: '500px', height: '500px' }}
    >
      {/* Background Image */}
      <img
        src={template.imageUrl}
        alt={template.name}
        className="w-full h-full object-cover"
        crossOrigin="anonymous"
      />
      
      {/* Top Text */}
      {topText && (
        <div className="absolute top-4 left-4 right-4 text-center">
          <div 
            className="text-white font-black text-2xl leading-tight uppercase tracking-wide"
            style={{
              textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000, 2px 2px 5px rgba(0,0,0,0.5)',
              fontFamily: 'Impact, Arial Black, sans-serif'
            }}
          >
            {topText}
          </div>
        </div>
      )}
      
      {/* Bottom Text */}
      {bottomText && (
        <div className="absolute bottom-4 left-4 right-4 text-center">
          <div 
            className="text-white font-black text-2xl leading-tight uppercase tracking-wide"
            style={{
              textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000, 2px 2px 5px rgba(0,0,0,0.5)',
              fontFamily: 'Impact, Arial Black, sans-serif'
            }}
          >
            {bottomText}
          </div>
        </div>
      )}
    </div>
  );
});

MemeCanvas.displayName = 'MemeCanvas';

export default MemeCanvas;
