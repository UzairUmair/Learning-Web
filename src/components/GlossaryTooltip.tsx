import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/roadmapData';
import { Info } from 'lucide-react';

interface GlossaryTooltipProps {
  term: string;
  children?: React.ReactNode;
}

export const GlossaryTooltip: React.FC<GlossaryTooltipProps> = ({ term, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const found = GLOSSARY_TERMS.find(g => g.term.toLowerCase() === term.toLowerCase());

  if (!found) {
    return <span className="font-semibold text-white">{children || term}</span>;
  }

  return (
    <span className="relative inline-block font-mono">
      <button
        type="button"
        id={`glossary-btn-${term.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="inline-flex items-center gap-1 font-bold text-[#00E5FF] underline decoration-dotted underline-offset-4 hover:text-white transition-colors focus:outline-none"
        aria-label={`Glossary definition for ${found.term}`}
      >
        {children || found.term}
        <Info className="w-3 h-3 opacity-60" />
      </button>

      {isOpen && (
        <span
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-[#111111] text-[#E0E0E0] text-xs border border-white/20 shadow-xl pointer-events-none transition-all duration-150 animate-in fade-in zoom-in-95"
          role="tooltip"
        >
          <span className="block font-bold text-[#00E5FF] text-xs uppercase mb-1">{found.term}</span>
          <span className="block text-[#AAAAAA] font-sans leading-relaxed">{found.definition}</span>
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#111111]"></span>
        </span>
      )}
    </span>
  );
};
