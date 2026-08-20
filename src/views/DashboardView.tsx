import React, { useState } from 'react';
import { UserProgress, CourseId, ActiveTab } from '../types';
import { COURSES, getLessonById } from '../data/coursesData';
import { BADGES } from '../data/roadmapData';
import { getUserLevel, getXpForNextLevel, resetProgress, saveProgress } from '../utils/storage';
import {
  Flame,
  Award,
  BookOpen,
  Bookmark,
  FileText,
  RotateCcw,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Layers,
  Swords,
  Lock,
  Unlock,
  Check
} from 'lucide-react';

interface DashboardViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  onSelectLesson: (lessonId: string) => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  progress,
  setProgress,
  onSelectLesson,
  setActiveTab
}) => {
  const [confirmReset, setConfirmReset] = useState(false);

  const userLevel = getUserLevel(progress.xp);
  const xpInfo = getXpForNextLevel(progress.xp);

  const totalCompletedLessons = Object.keys(progress.completedLessons).length;
  const totalCompletedChallenges = Object.keys(progress.completedChallenges).length;
  const totalCompletedProjects = Object.keys(progress.completedProjects).length;

  const lastLesson = progress.lastOpenedLessonId ? getLessonById(progress.lastOpenedLessonId) : null;

  // 7-day visualizer
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const todayIndex = (new Date().getDay() + 6) % 7; // Monday = 0

  const handleReset = () => {
    const fresh = resetProgress();
    setProgress(fresh);
    setConfirmReset(false);
  };

  const handleRemoveBookmark = (lessonId: string) => {
    const updated = {
      ...progress,
      bookmarks: progress.bookmarks.filter(id => id !== lessonId)
    };
    setProgress(updated);
    saveProgress(updated);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* User Header & XP Level Stats */}
      <div className="p-8 bg-[#111111] border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF3D00]/5 blur-3xl pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 font-mono">
          {/* Level Avatar & Greeting */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#FF3D00] text-black flex items-center justify-center font-black text-3xl">
                {userLevel.level}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF3D00]">
                  RANK TIER // LEVEL {userLevel.level}
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  {userLevel.title}
                </h1>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#CCCCCC] font-sans">
              Accumulated <strong className="text-[#FF3D00] font-mono">{progress.xp} XP</strong> across structured lessons, coding assessment suites, and interactive projects.
            </p>

            {/* XP Progress Bar */}
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-[11px] font-bold uppercase text-[#888888]">
                <span>PROGRESSION DELTA</span>
                <span>{xpInfo.next - xpInfo.needed} / {xpInfo.next} XP &rarr; LEVEL {userLevel.level + 1}</span>
              </div>
              <div className="w-full h-2.5 bg-[#0A0A0A] border border-white/15 overflow-hidden">
                <div
                  className="h-full bg-[#FF3D00] transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.max(5, (1 - xpInfo.needed / (xpInfo.next || 100)) * 100))}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* 7-Day Streak Habit Tracker */}
          <div className="lg:col-span-5 p-5 bg-[#0A0A0A] border border-white/15 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#FFD600] font-bold text-xs uppercase tracking-wider">
                <Flame className="w-4 h-4 fill-current" />
                <span>{progress.streak} DAY CADENCE</span>
              </div>
              <span className="text-[10px] text-[#888888] uppercase">7-DAY ACTIVITY</span>
            </div>

            <div className="grid grid-cols-7 gap-1.5 text-center">
              {daysOfWeek.map((day, idx) => {
                const isToday = idx === todayIndex;
                const isDayActive = idx <= todayIndex && progress.streak > 0;

                return (
                  <div key={day} className="space-y-1">
                    <span className="text-[9px] font-bold text-[#888888] uppercase block">{day}</span>
                    <div
                      className={`h-9 flex items-center justify-center font-bold text-xs border transition-colors ${
                        isDayActive
                          ? 'bg-[#FF3D00] text-black border-[#FF3D00]'
                          : isToday
                          ? 'bg-white/10 text-white border-white/30'
                          : 'bg-[#111111] text-[#666666] border-white/5'
                      }`}
                    >
                      {isDayActive ? '🔥' : '•'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Resume Card */}
      {lastLesson && (
        <div className="p-6 bg-[#111111] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/5 border border-white/15 text-[#00E5FF] flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888]">
                RESUME SESSION
              </span>
              <h3 className="text-base font-bold text-white uppercase">
                {lastLesson.lesson.title}
              </h3>
              <p className="text-xs text-[#AAAAAA] font-sans">
                {lastLesson.course.title} &rarr; {lastLesson.module.title}
              </p>
            </div>
          </div>

          <button
            type="button"
            id="btn-resume-last-lesson"
            onClick={() => onSelectLesson(lastLesson.lesson.id)}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#FF3D00] hover:bg-[#FF5722] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
          >
            <span>RESUME LESSON</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Course Completion Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
        {COURSES.map((c) => {
          const completed = Object.keys(progress.completedLessons).filter(id => id.startsWith(c.id)).length;
          const total = c.totalLessons;
          const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

          return (
            <div
              key={c.id}
              className="p-5 bg-[#111111] border border-white/10 space-y-3"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white text-xs uppercase">{c.title} Progress</h4>
                <span className="text-xs font-bold text-[#FF3D00]">{pct}%</span>
              </div>

              <div className="w-full h-2 bg-[#0A0A0A] border border-white/10 overflow-hidden">
                <div
                  className="h-full bg-[#FF3D00] transition-all duration-500"
                  style={{ width: `${pct}%` }}
                ></div>
              </div>

              <div className="flex justify-between text-[11px] text-[#888888]">
                <span>{completed} / {total} units</span>
                <button
                  type="button"
                  onClick={() => setActiveTab(c.id)}
                  className="font-bold text-white hover:text-[#FF3D00] uppercase"
                >
                  VIEW COURSE &rarr;
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Badges & Achievements Section */}
      <div className="space-y-4 font-mono">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#FFD600]" />
            <h2 className="text-lg font-black text-white uppercase">Achievements &amp; Badges</h2>
          </div>
          <span className="text-xs text-[#888888] uppercase">
            {BADGES.filter(b => b.isUnlocked(progress)).length} / {BADGES.length} UNLOCKED
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BADGES.map((b) => {
            const unlocked = b.isUnlocked(progress);

            return (
              <div
                key={b.id}
                className={`p-4 border transition-all flex flex-col justify-between ${
                  unlocked
                    ? 'bg-[#111111] border-[#FFD600]/40'
                    : 'bg-[#0A0A0A] border-white/10 opacity-50'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{unlocked ? '🏆' : '🔒'}</span>
                    <span className="text-[9px] font-bold px-2 py-0.5 border border-white/15 bg-white/5 text-white uppercase">
                      +{b.xpReward} XP
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-xs uppercase">{b.title}</h4>
                  <p className="text-xs text-[#888888] font-sans leading-relaxed">{b.description}</p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[10px] uppercase">
                  <span className={unlocked ? 'text-[#FFD600] font-bold' : 'text-[#666666]'}>
                    {unlocked ? 'UNLOCKED' : 'LOCKED'}
                  </span>
                  {unlocked && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bookmarks & Saved Notes Manager Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-mono">
        {/* Bookmarked Lessons */}
        <div className="p-6 bg-[#111111] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 border-b border-white/10 pb-3">
            <Bookmark className="w-4 h-4 text-[#FFD600]" />
            <h3 className="font-bold text-white text-xs uppercase tracking-wider">Bookmarked Lessons</h3>
            <span className="text-xs text-[#888888] ml-auto">({progress.bookmarks.length})</span>
          </div>

          {progress.bookmarks.length === 0 ? (
            <p className="text-xs text-[#888888] italic py-4 font-sans">No bookmarked lessons yet. Click the bookmark icon on any lesson to save it here for quick access.</p>
          ) : (
            <div className="space-y-2 max-h-56 overflow-y-auto">
              {progress.bookmarks.map((bId) => {
                const item = getLessonById(bId);
                if (!item) return null;
                return (
                  <div
                    key={bId}
                    className="p-3 bg-[#0A0A0A] border border-white/10 flex items-center justify-between gap-3 text-xs"
                  >
                    <button
                      type="button"
                      onClick={() => onSelectLesson(bId)}
                      className="font-bold text-[#E0E0E0] hover:text-[#FF3D00] text-left truncate flex-1 uppercase"
                    >
                      {item.lesson.title}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemoveBookmark(bId)}
                      className="text-[#888888] hover:text-[#FF3D00] transition-colors text-sm font-bold"
                      title="Remove bookmark"
                    >
                      &times;
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Saved Personal Notes */}
        <div className="p-6 bg-[#111111] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 border-b border-white/10 pb-3">
            <FileText className="w-4 h-4 text-[#00E5FF]" />
            <h3 className="font-bold text-white text-xs uppercase tracking-wider">Lesson Notes Registry</h3>
            <span className="text-xs text-[#888888] ml-auto">({Object.keys(progress.notes).length})</span>
          </div>

          {Object.keys(progress.notes).length === 0 ? (
            <p className="text-xs text-[#888888] italic py-4 font-sans">No notes created yet. Click "My Notes" inside any lesson to jot down key concepts.</p>
          ) : (
            <div className="space-y-2 max-h-56 overflow-y-auto">
              {Object.entries(progress.notes).map(([nLessonId, noteText]) => {
                const item = getLessonById(nLessonId);
                return (
                  <div
                    key={nLessonId}
                    onClick={() => onSelectLesson(nLessonId)}
                    className="p-3 bg-[#0A0A0A] border border-white/10 hover:border-[#00E5FF]/40 cursor-pointer space-y-1 transition-all"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-white uppercase">
                      <span className="truncate">{item ? item.lesson.title : nLessonId}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#888888]" />
                    </div>
                    <p className="text-[11px] text-[#AAAAAA] line-clamp-2 font-sans">
                      {noteText}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Danger Zone: Reset Progress */}
      <div className="p-6 bg-[#111111] border border-rose-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono">
        <div>
          <h4 className="text-xs font-bold uppercase text-white">RESET LEARNING STORAGE</h4>
          <p className="text-xs text-[#888888] font-sans mt-0.5">Flush completed lessons, quiz scores, XP points, and streak cache from local browser persistence.</p>
        </div>

        {!confirmReset ? (
          <button
            type="button"
            id="btn-confirm-reset"
            onClick={() => setConfirmReset(true)}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-rose-400 border border-rose-500/40 hover:bg-rose-500/10 transition-colors"
          >
            RESET PROGRESS
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              type="button"
              id="btn-perform-reset"
              onClick={handleReset}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              CONFIRM FLUSH
            </button>
            <button
              type="button"
              onClick={() => setConfirmReset(false)}
              className="px-3 py-2 text-xs font-bold uppercase text-[#888888] hover:text-white"
            >
              CANCEL
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
