import React from 'react';
import { ActiveTab, CourseId, UserProgress } from '../types';
import { COURSES } from '../data/coursesData';
import { CODING_CHALLENGES } from '../data/challengesData';
import { GUIDED_PROJECTS } from '../data/projectsData';
import {
  Code2,
  Palette,
  FileCode2,
  Play,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Flame,
  Swords,
  Layers,
  Award,
  Terminal,
  BookOpen,
  Check
} from 'lucide-react';

interface HomeViewProps {
  progress: UserProgress;
  setActiveTab: (tab: ActiveTab) => void;
  setSelectedCourseId: (courseId: CourseId) => void;
  onSelectLesson: (lessonId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  progress,
  setActiveTab,
  setSelectedCourseId,
  onSelectLesson
}) => {
  const handleStartCourse = (courseId: CourseId) => {
    setSelectedCourseId(courseId);
    setActiveTab(courseId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCourseCompletedCount = (courseId: CourseId) => {
    return Object.keys(progress.completedLessons).filter(id => id.startsWith(courseId)).length;
  };

  const dailyChallenge = CODING_CHALLENGES[3]; // e.g. Largest number challenge

  return (
    <div className="w-full space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative pt-10 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-[#FF3D00]/40 text-[#FF3D00] text-[10px] font-mono uppercase tracking-[0.25em]">
                <span className="w-1.5 h-1.5 bg-[#FF3D00] animate-pulse"></span>
                <span>CODEPATH STUDIO // ARCHITECTURAL EDITION</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] uppercase">
                MASTER MODERN <br />
                <span className="text-[#FF3D00]">
                  WEB ENGINEERING
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed max-w-2xl font-sans">
                Comprehensive step-by-step curriculum for <strong className="text-white">HTML, CSS, and modern JavaScript</strong> with real-time sandbox execution, architectural mental models, interactive quizzes, and production-ready portfolio capstones.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="button"
                  id="hero-btn-start-learning"
                  onClick={() => handleStartCourse('html')}
                  className="flex items-center gap-3 px-6 py-3.5 bg-[#FF3D00] hover:bg-[#FF5722] text-black font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-lg shadow-[#FF3D00]/20 active:scale-95"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Start Learning Track</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  id="hero-btn-open-playground"
                  onClick={() => setActiveTab('playground')}
                  className="flex items-center gap-2 px-6 py-3.5 bg-[#111111] hover:bg-[#181818] text-white font-bold text-xs uppercase tracking-[0.2em] border border-white/15 transition-all active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                  <span>Open Playground</span>
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 flex flex-wrap gap-6 text-xs font-mono text-[#777777]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500"></span>
                  <span>100% Client-Side Engine</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#00E5FF]"></span>
                  <span>Zero Local Setup Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF3D00]"></span>
                  <span>Auto-Synced Local Storage</span>
                </div>
              </div>
            </div>

            {/* Right Hero Interactive Code Window Teaser */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden bg-[#0A0A0A] border border-white/15 shadow-2xl">
                {/* Mock Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#111111] border-b border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#FF3D00]/80"></span>
                    <span className="w-2.5 h-2.5 bg-[#FFD600]/80"></span>
                    <span className="w-2.5 h-2.5 bg-emerald-500/80"></span>
                    <span className="ml-2 text-[11px] text-[#A0A0A0]">index.html</span>
                  </div>
                  <span className="text-[9px] text-[#FF3D00] font-bold uppercase tracking-[0.2em] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#FF3D00] animate-ping"></span>
                    LIVE SANDBOX
                  </span>
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-xs text-[#E0E0E0] space-y-2 overflow-x-auto leading-relaxed bg-[#0A0A0A]">
                  <p><span className="text-[#FF3D00]">&lt;div</span> <span className="text-[#FFD600]">class</span>=<span className="text-emerald-400">"dev-card"</span><span className="text-[#FF3D00]">&gt;</span></p>
                  <p className="pl-4"><span className="text-[#FF3D00]">&lt;h1&gt;</span>Hello, World! <span className="text-[#FF3D00]">&lt;/h1&gt;</span></p>
                  <p className="pl-4"><span className="text-[#FF3D00]">&lt;p&gt;</span>Master modern HTML, CSS &amp; JS.<span className="text-[#FF3D00]">&lt;/p&gt;</span></p>
                  <p className="pl-4"><span className="text-[#FF3D00]">&lt;button</span> <span className="text-[#FFD600]">id</span>=<span className="text-emerald-400">"learnBtn"</span><span className="text-[#FF3D00]">&gt;</span>Launch Career<span className="text-[#FF3D00]">&lt;/button&gt;</span></p>
                  <p><span className="text-[#FF3D00]">&lt;/div&gt;</span></p>
                  
                  <div className="pt-2 border-t border-white/10 text-[11px] text-[#888888]">
                    <p><span className="text-[#00E5FF]">const</span> btn = document.<span className="text-[#FFD600]">querySelector</span>(<span className="text-emerald-400">'#learnBtn'</span>);</p>
                    <p>btn.<span className="text-[#FFD600]">addEventListener</span>(<span className="text-emerald-400">'click'</span>, () =&gt; &#123;</p>
                    <p className="pl-4 text-emerald-400">console.<span className="text-[#FFD600]">log</span>(<span className="text-emerald-400">"Welcome to CodePath Studio! // 60FPS"</span>);</p>
                    <p>&#125;);</p>
                  </div>
                </div>

                {/* Result Preview Strip */}
                <div className="p-4 bg-[#111111] border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 border border-white/20 bg-white/5 text-[#FF3D00] flex items-center justify-center font-bold text-xs">
                      ⚡
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white font-mono uppercase">Sandboxed Execution</p>
                      <p className="text-[10px] text-[#888888] font-mono">Zero-delay compilation engine</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab('playground')}
                    className="px-3 py-1.5 bg-white text-black hover:bg-[#FF3D00] font-bold text-[10px] uppercase tracking-wider transition-colors"
                  >
                    Try Editor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Challenge Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-[#111111] border border-[#FF3D00]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border border-[#FF3D00] bg-[#FF3D00]/10 text-[#FF3D00] flex items-center justify-center font-extrabold text-xl">
              🔥
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#FF3D00] font-bold">
                  Daily Challenge
                </span>
                <span className="px-2 py-0.5 border border-[#FF3D00]/30 bg-[#FF3D00]/10 text-[#FF3D00] text-[10px] font-mono font-bold">
                  +50 XP
                </span>
              </div>
              <h3 className="text-base font-bold text-white mt-0.5">
                {dailyChallenge.title}
              </h3>
              <p className="text-xs text-[#A0A0A0] line-clamp-1">
                {dailyChallenge.description}
              </p>
            </div>
          </div>

          <button
            type="button"
            id="home-btn-daily-challenge"
            onClick={() => setActiveTab('challenges')}
            className="self-stretch md:self-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-[#FF3D00] hover:bg-[#FF5722] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            <Swords className="w-3.5 h-3.5" />
            <span>Solve Challenge</span>
          </button>
        </div>
      </section>

      {/* Three Major Courses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#FF3D00]">Curriculum Pathways</div>
          <h2 className="text-3xl font-black text-white tracking-tight uppercase">
            Comprehensive Learning Tracks
          </h2>
          <p className="text-xs sm:text-sm text-[#A0A0A0]">
            Progress sequentially from core structure through responsive styling to complex asynchronous JavaScript logic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course, idx) => {
            const completed = getCourseCompletedCount(course.id);
            const total = course.totalLessons;
            const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

            const isHtml = course.id === 'html';
            const isCss = course.id === 'css';
            const courseNumber = idx === 0 ? '01' : idx === 1 ? '02' : '03';

            return (
              <div
                key={course.id}
                id={`course-card-${course.id}`}
                className="group relative flex flex-col justify-between p-6 bg-[#111111] border border-white/10 hover:border-white/30 transition-all duration-200"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 border flex items-center justify-center font-bold text-lg ${
                        isHtml
                          ? 'border-[#FF3D00] bg-[#FF3D00]/10 text-[#FF3D00]'
                          : isCss
                          ? 'border-[#00E5FF] bg-[#00E5FF]/10 text-[#00E5FF]'
                          : 'border-[#FFD600] bg-[#FFD600]/10 text-[#FFD600]'
                      }`}
                    >
                      {isHtml ? <Code2 className="w-5 h-5" /> : isCss ? <Palette className="w-5 h-5" /> : <FileCode2 className="w-5 h-5" />}
                    </div>

                    <span className="text-[10px] font-mono text-[#888888] tracking-widest">
                      {courseNumber} // {total} LESSONS
                    </span>
                  </div>

                  {/* Course Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#FF3D00] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#888888] mb-3">
                    {course.subtitle}
                  </p>
                  <p className="text-xs text-[#A0A0A0] leading-relaxed mb-6">
                    {course.description}
                  </p>
                </div>

                {/* Progress Bar & CTA */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-[#888888] mb-1.5">
                      <span>{completed} / {total} Completed</span>
                      <span className="text-white font-bold">{percent}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1A1A1A] overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          isHtml ? 'bg-[#FF3D00]' : isCss ? 'bg-[#00E5FF]' : 'bg-[#FFD600]'
                        }`}
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>

                  <button
                    type="button"
                    id={`btn-start-${course.id}`}
                    onClick={() => handleStartCourse(course.id)}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 ${
                      isHtml
                        ? 'bg-[#FF3D00] hover:bg-[#FF5722] text-black'
                        : isCss
                        ? 'bg-[#00E5FF] hover:bg-[#00E5FF]/80 text-black'
                        : 'bg-[#FFD600] hover:bg-[#FFD600]/80 text-black'
                    }`}
                  >
                    <span>{completed > 0 ? `Continue ${course.title}` : `Start ${course.title}`}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-[#111111] border border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#FF3D00]">Architecture</div>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Engineered for Deep Retention
            </h2>
            <p className="text-xs sm:text-sm text-[#888888]">
              Designed according to cognitive learning principles for maximum speed and hands-on developer skill mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-[#0A0A0A] border border-white/10 space-y-2">
              <div className="w-8 h-8 border border-[#FF3D00]/40 bg-[#FF3D00]/10 text-[#FF3D00] flex items-center justify-center font-bold">
                <Play className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-sm">Interactive Sandbox</h4>
              <p className="text-xs text-[#888888] leading-relaxed">
                Edit code live inside your browser and inspect rendered DOM output instantly without installing anything.
              </p>
            </div>

            <div className="p-5 bg-[#0A0A0A] border border-white/10 space-y-2">
              <div className="w-8 h-8 border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <Award className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-sm">Automated Test Suites</h4>
              <p className="text-xs text-[#888888] leading-relaxed">
                Validate code requirements against runtime test assertions with detailed feedback and explanation hints.
              </p>
            </div>

            <div className="p-5 bg-[#0A0A0A] border border-white/10 space-y-2">
              <div className="w-8 h-8 border border-purple-500/40 bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-sm">Portfolio Projects</h4>
              <p className="text-xs text-[#888888] leading-relaxed">
                Construct guided real-world applications including calculators, todo engines, weather apps, and portfolios.
              </p>
            </div>

            <div className="p-5 bg-[#0A0A0A] border border-white/10 space-y-2">
              <div className="w-8 h-8 border border-[#FFD600]/40 bg-[#FFD600]/10 text-[#FFD600] flex items-center justify-center font-bold">
                <Flame className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-sm">Streaks &amp; Levels</h4>
              <p className="text-xs text-[#888888] leading-relaxed">
                Stay consistent with XP leveling, continuous streak monitoring, achievement badges, and milestone confetti.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
