import React from 'react';
import { STUDY_ROADMAP } from '../data/roadmapData';
import { UserProgress, ActiveTab } from '../types';
import { Map, CheckCircle2, Circle, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface RoadmapViewProps {
  progress: UserProgress;
  onSelectLesson: (lessonId: string) => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  progress,
  onSelectLesson,
  setActiveTab
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header Banner */}
      <div className="text-center space-y-3 font-mono">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00E5FF]/40 bg-[#00E5FF]/10 text-[#00E5FF] text-[10px] font-bold uppercase tracking-wider">
          <Map className="w-3.5 h-3.5" />
          <span>CURRICULUM PATHWAY // SEQUENCE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Engineering Roadmap
        </h1>
        <p className="text-xs sm:text-sm text-[#888888] max-w-xl mx-auto font-sans">
          Sequential technical pathway designed to build robust, production-grade frontend engineering competence.
        </p>
      </div>

      {/* Roadmap Steps Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-8 my-8 font-mono">
        {STUDY_ROADMAP.map((step, idx) => {
          const isTargetDone = step.targetLessonId ? !!progress.completedLessons[step.targetLessonId] : false;

          return (
            <div key={step.id} className="relative group">
              {/* Step Number Dot / Checkmark */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-2 w-8 h-8 flex items-center justify-center font-bold text-xs border ${
                  isTargetDone
                    ? 'bg-[#FF3D00] text-black border-[#FF3D00]'
                    : 'bg-[#111111] text-white border-white/20'
                }`}
              >
                {isTargetDone ? <CheckCircle2 className="w-4 h-4" /> : step.stepNumber}
              </div>

              {/* Step Content Card */}
              <div className="p-6 bg-[#111111] border border-white/10 space-y-3 group-hover:border-[#FF3D00]/50 transition-all">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 border border-white/15 bg-white/5 text-white text-[10px] uppercase font-bold">
                    {step.category}
                  </span>

                  {isTargetDone && (
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      MILESTONE MASTERED
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-black text-white uppercase">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#AAAAAA] font-sans leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-2 flex items-center justify-end font-mono">
                  {step.targetLessonId ? (
                    <button
                      type="button"
                      id={`roadmap-btn-step-${step.stepNumber}`}
                      onClick={() => step.targetLessonId && onSelectLesson(step.targetLessonId)}
                      className="flex items-center gap-1.5 px-4 py-2 bg-[#FF3D00] hover:bg-[#FF5722] text-black text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{isTargetDone ? 'REVIEW LESSON' : 'START LESSON'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveTab('projects')}
                      className="flex items-center gap-1.5 px-4 py-2 bg-[#00E5FF] hover:bg-[#18FFFF] text-black text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
                    >
                      <span>EXPLORE PROJECTS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
