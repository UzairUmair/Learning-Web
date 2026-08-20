import React, { useState } from 'react';
import { ActiveTab, CourseId, UserProgress } from '../types';
import { getUserLevel } from '../utils/storage';
import {
  Code2,
  Terminal,
  Palette,
  FileCode2,
  Sun,
  Moon,
  Search,
  Flame,
  LayoutDashboard,
  Play,
  Swords,
  Layers,
  Menu,
  X,
  BookOpen,
  FileText,
  Map
} from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedCourseId: CourseId;
  setSelectedCourseId: (courseId: CourseId) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  progress: UserProgress;
  onOpenSearch: () => void;
  onSelectLesson: (lessonId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  selectedCourseId,
  setSelectedCourseId,
  theme,
  onToggleTheme,
  progress,
  onOpenSearch,
  onSelectLesson
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const userLevel = getUserLevel(progress.xp);

  const handleNav = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const handleCourseNav = (courseId: CourseId) => {
    setSelectedCourseId(courseId);
    setActiveTab(courseId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0A0A0A]/95 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <button
            type="button"
            id="nav-logo-btn"
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group focus:outline-none text-left"
          >
            <div className="w-8 h-8 rounded-none border border-[#FF3D00] bg-[#FF3D00]/10 flex items-center justify-center text-[#FF3D00] shadow-sm group-hover:bg-[#FF3D00] group-hover:text-black transition-all">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-base tracking-tighter text-white uppercase">
                  CODEPATH
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#FF3D00] font-bold px-1.5 py-0.5 border border-[#FF3D00]/40 bg-[#FF3D00]/10">
                  STUDIO
                </span>
              </div>
              <span className="text-[8px] uppercase tracking-[0.3em] text-[#A0A0A0] mt-0.5">
                EDITION // 2025
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] font-bold text-[#A0A0A0]">
            <button
              type="button"
              id="nav-link-home"
              onClick={() => handleNav('home')}
              className={`px-3 py-1.5 transition-all ${
                activeTab === 'home'
                  ? 'text-white border-b-2 border-[#FF3D00]'
                  : 'hover:text-white'
              }`}
            >
              Home
            </button>

            <button
              type="button"
              id="nav-link-html"
              onClick={() => handleCourseNav('html')}
              className={`flex items-center gap-1.5 px-3 py-1.5 transition-all ${
                activeTab === 'html'
                  ? 'text-[#FF3D00] border-b-2 border-[#FF3D00]'
                  : 'hover:text-[#FF3D00]'
              }`}
            >
              <span className="w-1.5 h-1.5 bg-[#FF3D00]"></span>
              HTML
            </button>

            <button
              type="button"
              id="nav-link-css"
              onClick={() => handleCourseNav('css')}
              className={`flex items-center gap-1.5 px-3 py-1.5 transition-all ${
                activeTab === 'css'
                  ? 'text-[#00E5FF] border-b-2 border-[#00E5FF]'
                  : 'hover:text-[#00E5FF]'
              }`}
            >
              <span className="w-1.5 h-1.5 bg-[#00E5FF]"></span>
              CSS
            </button>

            <button
              type="button"
              id="nav-link-javascript"
              onClick={() => handleCourseNav('javascript')}
              className={`flex items-center gap-1.5 px-3 py-1.5 transition-all ${
                activeTab === 'javascript'
                  ? 'text-[#FFD600] border-b-2 border-[#FFD600]'
                  : 'hover:text-[#FFD600]'
              }`}
            >
              <span className="w-1.5 h-1.5 bg-[#FFD600]"></span>
              JS
            </button>

            <button
              type="button"
              id="nav-link-playground"
              onClick={() => handleNav('playground')}
              className={`flex items-center gap-1.5 px-3 py-1.5 transition-all ${
                activeTab === 'playground'
                  ? 'text-white border-b-2 border-emerald-500'
                  : 'hover:text-white'
              }`}
            >
              <Play className="w-3 h-3 text-emerald-400" />
              Playground
            </button>

            <button
              type="button"
              id="nav-link-challenges"
              onClick={() => handleNav('challenges')}
              className={`flex items-center gap-1.5 px-3 py-1.5 transition-all ${
                activeTab === 'challenges'
                  ? 'text-white border-b-2 border-[#FF3D00]'
                  : 'hover:text-white'
              }`}
            >
              <Swords className="w-3 h-3 text-[#FF3D00]" />
              Challenges
            </button>

            <button
              type="button"
              id="nav-link-projects"
              onClick={() => handleNav('projects')}
              className={`flex items-center gap-1.5 px-3 py-1.5 transition-all ${
                activeTab === 'projects'
                  ? 'text-white border-b-2 border-purple-400'
                  : 'hover:text-white'
              }`}
            >
              <Layers className="w-3 h-3 text-purple-400" />
              Projects
            </button>

            <button
              type="button"
              id="nav-link-cheatsheets"
              onClick={() => handleNav('cheatsheets')}
              className={`flex items-center gap-1.5 px-3 py-1.5 transition-all ${
                activeTab === 'cheatsheets'
                  ? 'text-white border-b-2 border-cyan-400'
                  : 'hover:text-white'
              }`}
            >
              <FileText className="w-3 h-3 text-cyan-400" />
              Cheat Sheets
            </button>

            <button
              type="button"
              id="nav-link-roadmap"
              onClick={() => handleNav('roadmap')}
              className={`flex items-center gap-1.5 px-3 py-1.5 transition-all ${
                activeTab === 'roadmap'
                  ? 'text-white border-b-2 border-amber-400'
                  : 'hover:text-white'
              }`}
            >
              <Map className="w-3 h-3 text-amber-400" />
              Roadmap
            </button>
          </nav>
        </div>

        {/* Right Action Icons & User Status */}
        <div className="flex items-center gap-2.5">
          {/* Quick Search Button */}
          <button
            type="button"
            id="nav-btn-search"
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#A0A0A0] bg-[#111111] hover:bg-[#181818] border border-white/10 transition-colors"
            title="Search (Ctrl + K)"
          >
            <Search className="w-3.5 h-3.5 text-[#FF3D00]" />
            <span className="hidden md:inline text-[10px] uppercase tracking-wider font-mono">Search</span>
            <kbd className="hidden md:inline bg-[#1A1A1A] text-[#A0A0A0] text-[9px] px-1.5 py-0.5 border border-white/10 font-mono">
              ⌘K
            </kbd>
          </button>

          {/* Streak Badge */}
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 bg-[#111111] text-[#FF3D00] border border-[#FF3D00]/30 text-xs font-mono font-bold"
            title={`${progress.streak} Day Streak`}
          >
            <Flame className="w-3.5 h-3.5 fill-current animate-pulse text-[#FF3D00]" />
            <span className="text-[11px]">{progress.streak}D STREAK</span>
          </div>

          {/* XP & Level Badge */}
          <div
            onClick={() => handleNav('dashboard')}
            className="cursor-pointer hidden sm:flex items-center gap-2 px-2.5 py-1 bg-[#111111] hover:border-white/30 text-white border border-white/10 text-xs font-mono font-semibold transition-colors"
            title={`Level ${userLevel.level}: ${userLevel.title} (${progress.xp} XP)`}
          >
            <span className="w-1.5 h-1.5 bg-[#FF3D00]"></span>
            <span>LV.{userLevel.level}</span>
            <span className="text-[10px] text-[#A0A0A0]">{progress.xp} XP</span>
          </div>

          {/* Dashboard Button */}
          <button
            type="button"
            id="nav-btn-dashboard"
            onClick={() => handleNav('dashboard')}
            className={`p-2 border border-white/10 transition-colors ${
              activeTab === 'dashboard'
                ? 'bg-[#FF3D00] text-black font-bold'
                : 'text-[#E0E0E0] bg-[#111111] hover:bg-[#181818]'
            }`}
            title="Student Dashboard"
          >
            <LayoutDashboard className="w-4 h-4" />
          </button>

          {/* Theme Switcher */}
          <button
            type="button"
            id="nav-btn-theme-toggle"
            onClick={onToggleTheme}
            className="p-2 text-[#A0A0A0] bg-[#111111] hover:text-white border border-white/10 transition-colors"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-300" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            id="nav-btn-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#E0E0E0] bg-[#111111] border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#0A0A0A] px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              type="button"
              onClick={() => handleNav('home')}
              className={`p-2.5 text-left text-xs uppercase tracking-wider font-bold border border-white/10 ${
                activeTab === 'home' ? 'bg-[#FF3D00] text-black' : 'text-[#E0E0E0] bg-[#111111]'
              }`}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => handleNav('dashboard')}
              className={`p-2.5 text-left text-xs uppercase tracking-wider font-bold border border-white/10 ${
                activeTab === 'dashboard' ? 'bg-[#FF3D00] text-black' : 'text-[#E0E0E0] bg-[#111111]'
              }`}
            >
              Dashboard
            </button>
          </div>

          <div className="pt-2 border-t border-white/10">
            <span className="text-[9px] font-mono uppercase text-[#A0A0A0] tracking-[0.25em]">Courses</span>
            <div className="mt-1.5 space-y-1">
              <button
                type="button"
                onClick={() => handleCourseNav('html')}
                className="w-full flex items-center gap-2 p-2 text-xs font-mono uppercase text-[#E0E0E0] bg-[#111111] border border-white/5 hover:border-[#FF3D00]"
              >
                <span className="w-2 h-2 bg-[#FF3D00]"></span>
                HTML Course
              </button>
              <button
                type="button"
                onClick={() => handleCourseNav('css')}
                className="w-full flex items-center gap-2 p-2 text-xs font-mono uppercase text-[#E0E0E0] bg-[#111111] border border-white/5 hover:border-[#00E5FF]"
              >
                <span className="w-2 h-2 bg-[#00E5FF]"></span>
                CSS Course
              </button>
              <button
                type="button"
                onClick={() => handleCourseNav('javascript')}
                className="w-full flex items-center gap-2 p-2 text-xs font-mono uppercase text-[#E0E0E0] bg-[#111111] border border-white/5 hover:border-[#FFD600]"
              >
                <span className="w-2 h-2 bg-[#FFD600]"></span>
                JavaScript Course
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10">
            <span className="text-[9px] font-mono uppercase text-[#A0A0A0] tracking-[0.25em]">Interactive Studio</span>
            <div className="mt-1.5 space-y-1">
              <button
                type="button"
                onClick={() => handleNav('playground')}
                className="w-full flex items-center gap-2 p-2 text-xs font-mono uppercase text-[#E0E0E0] bg-[#111111] border border-white/5"
              >
                <Play className="w-3.5 h-3.5 text-emerald-400" />
                Code Playground
              </button>
              <button
                type="button"
                onClick={() => handleNav('challenges')}
                className="w-full flex items-center gap-2 p-2 text-xs font-mono uppercase text-[#E0E0E0] bg-[#111111] border border-white/5"
              >
                <Swords className="w-3.5 h-3.5 text-[#FF3D00]" />
                Coding Challenges
              </button>
              <button
                type="button"
                onClick={() => handleNav('projects')}
                className="w-full flex items-center gap-2 p-2 text-xs font-mono uppercase text-[#E0E0E0] bg-[#111111] border border-white/5"
              >
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                Guided Projects
              </button>
              <button
                type="button"
                onClick={() => handleNav('cheatsheets')}
                className="w-full flex items-center gap-2 p-2 text-xs font-mono uppercase text-[#E0E0E0] bg-[#111111] border border-white/5"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                Cheat Sheets
              </button>
              <button
                type="button"
                onClick={() => handleNav('roadmap')}
                className="w-full flex items-center gap-2 p-2 text-xs font-mono uppercase text-[#E0E0E0] bg-[#111111] border border-white/5"
              >
                <Map className="w-3.5 h-3.5 text-amber-400" />
                Study Roadmap
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
