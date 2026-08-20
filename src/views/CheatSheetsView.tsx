import React, { useState } from 'react';
import { CHEAT_SHEETS } from '../data/cheatsheetsData';
import { CourseId } from '../types';
import { FileText, Copy, Check, Search, Code2, Palette, FileCode2 } from 'lucide-react';

export const CheatSheetsView: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const filteredSheets = CHEAT_SHEETS.filter(sheet => {
    if (selectedCourse !== 'all' && sheet.courseId !== selectedCourse) return false;
    return true;
  });

  const handleCopy = async (id: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 font-mono">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 border border-[#00E5FF]/40 bg-[#00E5FF]/10 text-[#00E5FF] text-[10px] font-bold uppercase tracking-wider mb-2">
            <FileText className="w-3.5 h-3.5" />
            <span>QUICK-REFERENCE // SYNTAX MATRIX</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Cheat Sheets
          </h1>
          <p className="text-xs sm:text-sm text-[#888888] mt-1 font-sans">
            Reference syntax guides for HTML5 tags, CSS Flexbox/Grid properties, and modern ECMAScript APIs.
          </p>
        </div>

        {/* Search & Tabs */}
        <div className="flex items-center gap-2 flex-wrap font-mono">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="cheatsheet-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH SYNTAX..."
              className="pl-8 pr-3 py-1.5 bg-[#111111] text-xs text-white border border-white/15 focus:outline-none w-48 uppercase font-bold"
            />
          </div>

          <div className="flex items-center gap-1 bg-[#111111] p-1 border border-white/15">
            <button
              type="button"
              onClick={() => setSelectedCourse('all')}
              className={`px-3 py-1 text-xs uppercase font-bold transition-colors ${
                selectedCourse === 'all' ? 'bg-[#FF3D00] text-black' : 'text-[#888888] hover:text-white'
              }`}
            >
              ALL
            </button>
            <button
              type="button"
              onClick={() => setSelectedCourse('html')}
              className={`px-3 py-1 text-xs uppercase font-bold transition-colors ${
                selectedCourse === 'html' ? 'bg-[#FF3D00] text-black' : 'text-[#888888] hover:text-white'
              }`}
            >
              HTML
            </button>
            <button
              type="button"
              onClick={() => setSelectedCourse('css')}
              className={`px-3 py-1 text-xs uppercase font-bold transition-colors ${
                selectedCourse === 'css' ? 'bg-[#00E5FF] text-black' : 'text-[#888888] hover:text-white'
              }`}
            >
              CSS
            </button>
            <button
              type="button"
              onClick={() => setSelectedCourse('javascript')}
              className={`px-3 py-1 text-xs uppercase font-bold transition-colors ${
                selectedCourse === 'javascript' ? 'bg-[#FFD600] text-black' : 'text-[#888888] hover:text-white'
              }`}
            >
              JS
            </button>
          </div>
        </div>
      </div>

      {/* Sheets Content Grid */}
      <div className="space-y-8 font-mono">
        {filteredSheets.map((sheet, sIdx) => {
          const matchingItems = sheet.items.filter(item => {
            if (!searchQuery) return true;
            const q = searchQuery.toLowerCase();
            return (
              item.term.toLowerCase().includes(q) ||
              item.description.toLowerCase().includes(q) ||
              item.syntax.toLowerCase().includes(q)
            );
          });

          if (matchingItems.length === 0) return null;

          const isHtml = sheet.courseId === 'html';
          const isCss = sheet.courseId === 'css';

          return (
            <div
              key={sIdx}
              className="p-6 bg-[#111111] border border-white/10 space-y-4"
            >
              <div className="flex items-center gap-2.5 border-b border-white/10 pb-3">
                <div className={`p-1.5 ${
                  isHtml ? 'bg-[#FF3D00]/10 text-[#FF3D00]' : isCss ? 'bg-[#00E5FF]/10 text-[#00E5FF]' : 'bg-[#FFD600]/10 text-[#FFD600]'
                }`}>
                  {isHtml ? <Code2 className="w-4 h-4" /> : isCss ? <Palette className="w-4 h-4" /> : <FileCode2 className="w-4 h-4" />}
                </div>
                <h3 className="font-bold text-white text-base uppercase">{sheet.title}</h3>
                <span className="text-[10px] text-[#888888] ml-auto uppercase font-bold">{sheet.courseId} SPEC</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchingItems.map((item, iIdx) => {
                  const uniqueKey = `${sIdx}-${iIdx}`;
                  const isCopied = copiedIndex === uniqueKey;

                  return (
                    <div
                      key={iIdx}
                      className="p-4 bg-[#0A0A0A] border border-white/10 space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-1">
                        <h4 className="font-bold text-white text-xs uppercase">{item.term}</h4>
                        <p className="text-xs text-[#888888] font-sans leading-relaxed">{item.description}</p>
                      </div>

                      <div className="relative bg-[#111111] border border-white/15 p-2.5 flex items-center justify-between font-mono text-xs text-[#00E5FF]">
                        <span className="truncate pr-6">{item.syntax}</span>
                        <button
                          type="button"
                          id={`btn-copy-cheat-${uniqueKey}`}
                          onClick={() => handleCopy(uniqueKey, item.syntax)}
                          className="p-1 text-[#888888] hover:text-white transition-colors"
                          title="Copy snippet"
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
