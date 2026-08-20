import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Code2, Palette, FileCode2, Terminal, Layers, ArrowRight } from 'lucide-react';
import { getAllLessons } from '../data/coursesData';
import { CODING_CHALLENGES } from '../data/challengesData';
import { GUIDED_PROJECTS } from '../data/projectsData';
import { CHEAT_SHEETS } from '../data/cheatsheetsData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateLesson: (lessonId: string) => void;
  onNavigateTab: (tab: any) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigateLesson,
  onNavigateTab
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();
  const allLessons = getAllLessons();

  const matchedLessons = normalizedQuery
    ? allLessons.filter(
        item =>
          item.lesson.title.toLowerCase().includes(normalizedQuery) ||
          item.lesson.concept.toLowerCase().includes(normalizedQuery) ||
          item.module.title.toLowerCase().includes(normalizedQuery)
      ).slice(0, 6)
    : [];

  const matchedChallenges = normalizedQuery
    ? CODING_CHALLENGES.filter(
        c =>
          c.title.toLowerCase().includes(normalizedQuery) ||
          c.description.toLowerCase().includes(normalizedQuery) ||
          c.category.toLowerCase().includes(normalizedQuery)
      ).slice(0, 3)
    : [];

  const matchedProjects = normalizedQuery
    ? GUIDED_PROJECTS.filter(
        p =>
          p.title.toLowerCase().includes(normalizedQuery) ||
          p.description.toLowerCase().includes(normalizedQuery) ||
          p.skillsLearned.some(s => s.toLowerCase().includes(normalizedQuery))
      ).slice(0, 3)
    : [];

  const matchedCheatSheets = normalizedQuery
    ? CHEAT_SHEETS.flatMap(cs =>
        cs.items
          .filter(
            item =>
              item.term.toLowerCase().includes(normalizedQuery) ||
              item.description.toLowerCase().includes(normalizedQuery) ||
              item.syntax.toLowerCase().includes(normalizedQuery)
          )
          .map(item => ({ ...item, courseId: cs.courseId }))
      ).slice(0, 3)
    : [];

  const totalResults =
    matchedLessons.length + matchedChallenges.length + matchedProjects.length + matchedCheatSheets.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150 font-mono">
      <div className="w-full max-w-2xl bg-[#111111] border border-white/20 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-[#0A0A0A]">
          <Search className="w-5 h-5 text-[#FF3D00]" />
          <input
            ref={inputRef}
            id="global-search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SEARCH CURRICULUM, TOPICS, SYNTAX..."
            className="flex-1 bg-transparent text-white placeholder-[#888888] focus:outline-none text-sm uppercase font-bold"
          />
          {query && (
            <button
              type="button"
              id="clear-search-btn"
              onClick={() => setQuery('')}
              className="p-1 text-[#888888] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block bg-[#111111] text-[#888888] text-[10px] px-2 py-0.5 border border-white/15">
            ESC
          </kbd>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {!normalizedQuery && (
            <div className="text-center py-8">
              <div className="inline-flex p-3 bg-[#0A0A0A] border border-white/10 text-[#FF3D00] mb-3">
                <Search className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-white uppercase">Search Architecture Index</p>
              <p className="text-xs text-[#888888] mt-1 font-sans">Try searching for "Flexbox", "async await", "Semantic HTML", or "DOM Events"</p>
            </div>
          )}

          {normalizedQuery && totalResults === 0 && (
            <div className="text-center py-8 text-[#888888]">
              <p className="text-sm font-bold uppercase">NO RESULTS FOR "{query}"</p>
              <p className="text-xs mt-1 font-sans">Check terminology or query broader concepts like "CSS" or "Variables"</p>
            </div>
          )}

          {/* Matched Lessons */}
          {matchedLessons.length > 0 && (
            <div>
              <span className="text-[10px] font-bold text-[#888888] uppercase tracking-wider px-2 mb-2 block">
                LESSONS ({matchedLessons.length})
              </span>
              <div className="space-y-1">
                {matchedLessons.map(({ lesson, course, module }) => (
                  <button
                    key={lesson.id}
                    type="button"
                    id={`search-res-${lesson.id}`}
                    onClick={() => {
                      onNavigateLesson(lesson.id);
                      onClose();
                    }}
                    className="w-full text-left p-3 bg-[#0A0A0A] border border-white/5 hover:border-[#FF3D00]/50 transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 ${
                        course.id === 'html' ? 'bg-[#FF3D00]/10 text-[#FF3D00]' :
                        course.id === 'css' ? 'bg-[#00E5FF]/10 text-[#00E5FF]' :
                        'bg-[#FFD600]/10 text-[#FFD600]'
                      }`}>
                        {course.id === 'html' ? <Code2 className="w-4 h-4" /> :
                         course.id === 'css' ? <Palette className="w-4 h-4" /> :
                         <FileCode2 className="w-4 h-4" />}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase group-hover:text-[#FF3D00] transition-colors">
                          {lesson.title}
                        </h4>
                        <p className="text-[11px] text-[#888888] font-sans">
                          {course.title} &rarr; {module.title}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#888888] group-hover:text-[#FF3D00] group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Challenges */}
          {matchedChallenges.length > 0 && (
            <div>
              <span className="text-[10px] font-bold text-[#888888] uppercase tracking-wider px-2 mb-2 block">
                CODING ASSESSMENTS ({matchedChallenges.length})
              </span>
              <div className="space-y-1">
                {matchedChallenges.map((ch) => (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => {
                      onNavigateTab('challenges');
                      onClose();
                    }}
                    className="w-full text-left p-3 bg-[#0A0A0A] border border-white/5 hover:border-emerald-500/50 transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-500/10 text-emerald-400">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase">{ch.title}</h4>
                        <p className="text-[11px] text-[#888888] font-sans">{ch.difficulty} &bull; +{ch.xp} XP</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#888888] group-hover:text-emerald-400 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Projects */}
          {matchedProjects.length > 0 && (
            <div>
              <span className="text-[10px] font-bold text-[#888888] uppercase tracking-wider px-2 mb-2 block">
                PROJECT WORKSHOPS ({matchedProjects.length})
              </span>
              <div className="space-y-1">
                {matchedProjects.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      onNavigateTab('projects');
                      onClose();
                    }}
                    className="w-full text-left p-3 bg-[#0A0A0A] border border-white/5 hover:border-[#00E5FF]/50 transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#00E5FF]/10 text-[#00E5FF]">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase">{p.title}</h4>
                        <p className="text-[11px] text-[#888888] font-sans">{p.difficulty} &bull; {p.estimatedTime}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#888888] group-hover:text-[#00E5FF] transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
