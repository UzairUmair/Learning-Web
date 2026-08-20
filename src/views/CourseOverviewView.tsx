import React from 'react';
import { CourseId, UserProgress } from '../types';
import { COURSES } from '../data/coursesData';
import {
  Code2,
  Palette,
  FileCode2,
  CheckCircle2,
  Circle,
  ArrowRight,
  Clock,
  BookOpen,
  Award,
  Layers,
  Sparkles
} from 'lucide-react';

interface CourseOverviewViewProps {
  courseId: CourseId;
  progress: UserProgress;
  onSelectLesson: (lessonId: string) => void;
  onNavigateTab: (tab: any) => void;
}

export const CourseOverviewView: React.FC<CourseOverviewViewProps> = ({
  courseId,
  progress,
  onSelectLesson,
  onNavigateTab
}) => {
  const course = COURSES.find(c => c.id === courseId) || COURSES[0];
  const isHtml = course.id === 'html';
  const isCss = course.id === 'css';

  const completedCount = Object.keys(progress.completedLessons).filter(id => id.startsWith(courseId)).length;
  const totalLessons = course.totalLessons;
  const percentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  // Find first uncompleted lesson
  const allLessons = course.modules.flatMap(m => m.lessons);
  const nextLesson = allLessons.find(l => !progress.completedLessons[l.id]) || allLessons[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Course Hero Banner */}
      <div className={`p-8 border bg-[#111111] transition-all ${
        isHtml
          ? 'border-[#FF3D00]/40'
          : isCss
          ? 'border-[#00E5FF]/40'
          : 'border-[#FFD600]/40'
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 border flex items-center justify-center font-bold text-2xl ${
                isHtml
                  ? 'border-[#FF3D00] bg-[#FF3D00]/10 text-[#FF3D00]'
                  : isCss
                  ? 'border-[#00E5FF] bg-[#00E5FF]/10 text-[#00E5FF]'
                  : 'border-[#FFD600] bg-[#FFD600]/10 text-[#FFD600]'
              }`}>
                {isHtml ? <Code2 className="w-6 h-6" /> : isCss ? <Palette className="w-6 h-6" /> : <FileCode2 className="w-6 h-6" />}
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#888888]">
                  {course.subtitle} // TRACK
                </span>
                <h1 className="text-3xl font-black text-white tracking-tight uppercase">
                  {course.title} Curriculum
                </h1>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A0A0A0] max-w-2xl leading-relaxed">
              {course.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                id="btn-course-continue"
                onClick={() => nextLesson && onSelectLesson(nextLesson.id)}
                className={`flex items-center gap-3 px-6 py-3 font-bold text-xs uppercase tracking-wider transition-all active:scale-95 ${
                  isHtml
                    ? 'bg-[#FF3D00] hover:bg-[#FF5722] text-black'
                    : isCss
                    ? 'bg-[#00E5FF] hover:bg-[#00E5FF]/80 text-black'
                    : 'bg-[#FFD600] hover:bg-[#FFD600]/80 text-black'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>{completedCount > 0 ? 'Resume Next Lesson' : 'Start First Lesson'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigateTab('cheatsheets')}
                className="px-4 py-3 bg-[#0A0A0A] text-white border border-white/15 text-xs font-mono uppercase tracking-wider hover:bg-white/5 transition-colors"
              >
                View {course.title} Cheat Sheet
              </button>
            </div>
          </div>

          {/* Right Progress Card */}
          <div className="lg:col-span-4 p-6 bg-[#0A0A0A] border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#888888]">Curriculum Progress</h3>
              <span className="text-[10px] font-mono text-[#FF3D00]">{completedCount}/{totalLessons}</span>
            </div>
            
            <div className="flex items-baseline justify-between">
              <span className="text-4xl font-black text-white">{percentage}%</span>
              <span className="text-xs font-mono text-[#888888]">
                {totalLessons - completedCount} remaining
              </span>
            </div>

            <div className="w-full h-1.5 bg-[#1A1A1A] overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  isHtml ? 'bg-[#FF3D00]' : isCss ? 'bg-[#00E5FF]' : 'bg-[#FFD600]'
                }`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>

            <div className="pt-2 border-t border-white/10 text-xs font-mono text-[#888888] space-y-1.5">
              <div className="flex justify-between">
                <span>Structure:</span>
                <span className="text-white">{course.modules.length} Detailed Modules</span>
              </div>
              <div className="flex justify-between">
                <span>Target Pace:</span>
                <span className="text-white">Self-Paced Sandboxed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modules & Lessons Curriculum Breakdown */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#FF3D00]">Syllabus</div>
            <h2 className="text-xl font-black text-white tracking-tight uppercase">
              Curriculum Breakdown
            </h2>
          </div>
          <span className="text-xs font-mono text-[#888888]">
            {course.modules.length} MODULES &bull; {totalLessons} LESSONS
          </span>
        </div>

        <div className="space-y-6">
          {course.modules.map((mod, modIdx) => {
            const modCompletedCount = mod.lessons.filter(l => progress.completedLessons[l.id]).length;
            const isModComplete = modCompletedCount === mod.lessons.length;

            return (
              <div
                key={mod.id}
                className="bg-[#111111] border border-white/10 overflow-hidden"
              >
                {/* Module Header */}
                <div className="p-5 bg-[#0D0D0D] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 border border-white/20 bg-white/5 text-[#FF3D00] font-mono font-bold text-xs flex items-center justify-center">
                      {modIdx + 1 < 10 ? `0${modIdx + 1}` : modIdx + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-white text-base">{mod.title}</h3>
                      <p className="text-xs text-[#888888]">{mod.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-xs text-[#888888]">
                      {modCompletedCount}/{mod.lessons.length} DONE
                    </span>
                    {isModComplete && (
                      <span className="px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] uppercase font-bold tracking-wider">
                        COMPLETE
                      </span>
                    )}
                  </div>
                </div>

                {/* Lessons in Module */}
                <div className="divide-y divide-white/5">
                  {mod.lessons.map((lesson) => {
                    const done = !!progress.completedLessons[lesson.id];

                    return (
                      <div
                        key={lesson.id}
                        onClick={() => onSelectLesson(lesson.id)}
                        className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-white/[0.03] cursor-pointer transition-colors group"
                      >
                        <div className="flex items-start sm:items-center gap-3 min-w-0">
                          {done ? (
                            <CheckCircle2 className="w-4 h-4 text-[#FF3D00] shrink-0 mt-0.5 sm:mt-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-[#444444] shrink-0 mt-0.5 sm:mt-0" />
                          )}

                          <div className="min-w-0">
                            <h4 className="text-sm font-bold text-white group-hover:text-[#FF3D00] transition-colors truncate">
                              {lesson.title}
                            </h4>
                            <p className="text-xs text-[#888888] line-clamp-1 mt-0.5 font-mono">
                              {lesson.concept}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0 font-mono">
                          <span className="hidden sm:flex items-center gap-1 text-[11px] text-[#777777]">
                            <Clock className="w-3 h-3" />
                            {lesson.estimatedMinutes}m
                          </span>

                          <span className="hidden sm:inline px-2 py-0.5 border border-white/10 bg-white/5 text-[#888888] text-[10px] uppercase">
                            {lesson.level}
                          </span>

                          <button
                            type="button"
                            id={`btn-open-lesson-${lesson.id}`}
                            className="p-2 text-[#777777] group-hover:text-[#FF3D00] group-hover:translate-x-0.5 transition-all"
                          >
                            <ArrowRight className="w-4 h-4" />
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
    </div>
  );
};
