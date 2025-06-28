import React from 'react';

const TemplateSelector = ({ templates, selectedTemplate, onSelectTemplate }) => {
  return (
    <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
      {templates.map((template) => (
        <button
          key={template.id}
          onClick={() => onSelectTemplate(template)}
          className={`relative rounded-lg overflow-hidden transition-all duration-200 transform hover:scale-105 ${
            selectedTemplate.id === template.id
              ? 'ring-4 ring-yellow-400 shadow-lg'
              : 'ring-2 ring-white/20 hover:ring-white/40'
          }`}
        >
          <img
            src={template.imageUrl}
            alt={template.name}
            className="w-full h-24 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white text-xs font-semibold text-center px-2">
              {template.name}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default TemplateSelector;
