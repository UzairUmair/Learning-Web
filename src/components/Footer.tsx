import React from 'react';
import { ActiveTab, CourseId } from '../types';
import { Code2, Github, Heart, BookOpen, Terminal, Sparkles, Shield, Compass } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  setSelectedCourseId: (courseId: CourseId) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, setSelectedCourseId }) => {
  const handleCourseClick = (courseId: CourseId) => {
    setSelectedCourseId(courseId);
    setActiveTab(courseId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0A0A0A] border-t border-white/10 text-[#A0A0A0] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand & Slogan */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 border border-[#FF3D00] bg-[#FF3D00]/10 flex items-center justify-center text-[#FF3D00]">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-sm text-white tracking-tight uppercase">CodePath Studio</span>
                <span className="text-[8px] uppercase tracking-[0.25em] text-[#FF3D00]">Architectural Edition</span>
              </div>
            </div>
            <p className="text-xs text-[#888888] leading-relaxed">
              An accelerated interactive engineering curriculum combining live browser sandbox execution, structured lessons, quizzes, coding challenges, and capstones.
            </p>
            <div className="text-xs font-mono text-[#FF3D00] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF3D00]"></span>
              <span>LEARN // PRACTICE // DEPLOY</span>
            </div>
          </div>

          {/* Column 2: Learn */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white mb-3 font-mono">
              Core Tracks
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#A0A0A0]">
              <li>
                <button type="button" onClick={() => handleCourseClick('html')} className="hover:text-[#FF3D00] transition-colors">
                  &gt; HTML5 Structure &amp; Semantics
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleCourseClick('css')} className="hover:text-[#00E5FF] transition-colors">
                  &gt; CSS3 Modern Layouts &amp; Flex
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleCourseClick('javascript')} className="hover:text-[#FFD600] transition-colors">
                  &gt; JavaScript ES6+ &amp; DOM Engine
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleTabClick('challenges')} className="hover:text-[#FF3D00] transition-colors">
                  &gt; Coding Challenges Arena
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleTabClick('projects')} className="hover:text-purple-400 transition-colors">
                  &gt; Guided Portfolio Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white mb-3 font-mono">
              Interactive Tools
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#A0A0A0]">
              <li>
                <button type="button" onClick={() => handleTabClick('playground')} className="hover:text-emerald-400 transition-colors">
                  // In-Browser Code Playground
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleTabClick('cheatsheets')} className="hover:text-cyan-400 transition-colors">
                  // Developer Cheat Sheets
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleTabClick('roadmap')} className="hover:text-amber-400 transition-colors">
                  // Career Study Roadmap
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleTabClick('dashboard')} className="hover:text-white transition-colors">
                  // Student Analytics &amp; Streaks
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quality & Specs */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white mb-3 font-mono">
              Engine Status
            </h4>
            <div className="space-y-2 text-xs font-mono text-[#A0A0A0]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500"></span>
                <span>100% Client-Side Local Storage</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00E5FF]"></span>
                <span>Instant In-Browser Sandboxing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FFD600]"></span>
                <span>Automated Test Evaluation Suite</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FF3D00]"></span>
                <span>XP Points &amp; Achievement Engine</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#777777] gap-4">
          <p>© {new Date().getFullYear()} CodePath Studio Edition. Free &amp; Open Interactive Web Development.</p>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider">
            <span className="text-white font-bold">ARTISTIC FLAIR</span>
            <span>&bull;</span>
            <span className="text-[#FF3D00]">PRECISION ENGINEERED</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
