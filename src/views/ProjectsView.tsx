import React, { useState } from 'react';
import { GuidedProject, UserProgress } from '../types';
import { GUIDED_PROJECTS } from '../data/projectsData';
import { InteractiveEditor } from '../components/InteractiveEditor';
import { triggerConfetti } from '../utils/confetti';
import { saveProgress } from '../utils/storage';
import {
  Layers,
  Clock,
  Award,
  CheckCircle2,
  Play,
  Sparkles,
  ArrowRight,
  Code2,
  ChevronRight,
  RotateCcw,
  Check
} from 'lucide-react';

interface ProjectsViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ progress, setProgress }) => {
  const [selectedProject, setSelectedProject] = useState<GuidedProject>(GUIDED_PROJECTS[0]);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [showSolutionPreview, setShowSolutionPreview] = useState(false);

  const handleToggleCompleteProject = () => {
    const isDone = !!progress.completedProjects[selectedProject.id];
    const newDone = !isDone;

    const newCompleted = { ...progress.completedProjects };
    if (newDone) {
      newCompleted[selectedProject.id] = true;
      triggerConfetti('fireworks');
    } else {
      delete newCompleted[selectedProject.id];
    }

    const updated: UserProgress = {
      ...progress,
      completedProjects: newCompleted,
      xp: newDone ? progress.xp + 100 : Math.max(0, progress.xp - 100)
    };

    setProgress(updated);
    saveProgress(updated);
  };

  const isProjectCompleted = !!progress.completedProjects[selectedProject.id];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 font-mono">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 border border-[#FF3D00]/40 bg-[#FF3D00]/10 text-[#FF3D00] text-[10px] font-bold uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO CAPSTONES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Guided Projects
          </h1>
          <p className="text-xs sm:text-sm text-[#888888] mt-1 font-sans">
            Synthesize HTML, CSS, and modern JavaScript into production-ready web apps for your engineering portfolio.
          </p>
        </div>
      </div>

      {/* Main Grid: Projects Selector & Active Studio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Project Selector List */}
        <div className="lg:col-span-4 space-y-3 font-mono">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888] px-1 block">
            SELECT PROJECT // ({GUIDED_PROJECTS.length})
          </span>

          <div className="space-y-2.5">
            {GUIDED_PROJECTS.map((project) => {
              const isSelected = project.id === selectedProject.id;
              const isDone = !!progress.completedProjects[project.id];

              return (
                <button
                  key={project.id}
                  type="button"
                  id={`project-card-${project.id}`}
                  onClick={() => {
                    setSelectedProject(project);
                    setActiveStepIndex(0);
                    setShowSolutionPreview(false);
                  }}
                  className={`w-full text-left p-4 border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#FF3D00] text-black font-bold border-[#FF3D00]'
                      : 'bg-[#111111] border-white/10 text-white hover:border-white/30'
                  }`}
                >
                  <div className="space-y-1.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider ${
                        isSelected
                          ? 'bg-black text-white'
                          : project.difficulty === 'Beginner'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : project.difficulty === 'Intermediate'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                      }`}>
                        {project.difficulty}
                      </span>
                      <span className={`text-[10px] flex items-center gap-1 ${isSelected ? 'text-black/80' : 'text-[#888888]'}`}>
                        <Clock className="w-3 h-3" />
                        {project.estimatedTime}
                      </span>
                    </div>

                    <h4 className={`text-xs font-bold uppercase truncate ${isSelected ? 'text-black' : 'text-white'}`}>
                      {project.title}
                    </h4>

                    <p className={`text-xs line-clamp-1 font-sans ${isSelected ? 'text-black/80' : 'text-[#888888]'}`}>
                      {project.description}
                    </p>
                  </div>

                  {isDone ? (
                    <CheckCircle2 className={`w-4 h-4 shrink-0 ${isSelected ? 'text-black' : 'text-[#FF3D00]'}`} />
                  ) : (
                    <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-black' : 'text-[#888888]'}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Project Workspace */}
        <div className="lg:col-span-8 space-y-6">
          {/* Project Header Info */}
          <div className="p-6 bg-[#111111] border border-white/10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 font-mono">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase">
                  {selectedProject.title}
                </h2>
                <p className="text-xs text-[#888888] mt-1 font-sans">
                  {selectedProject.description}
                </p>
              </div>

              <button
                type="button"
                id="btn-complete-project"
                onClick={handleToggleCompleteProject}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95 ${
                  isProjectCompleted
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-black'
                    : 'bg-[#FF3D00] hover:bg-[#FF5722] text-black'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>{isProjectCompleted ? 'Completed (+100 XP)' : 'Mark Complete (+100 XP)'}</span>
              </button>
            </div>

            {/* Skills Learned Badges */}
            <div className="flex items-center gap-2 flex-wrap text-xs font-mono">
              <span className="font-bold text-[#888888] text-[10px] uppercase tracking-wider">SKILLS MATRIX:</span>
              {selectedProject.skillsLearned.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 border border-white/15 bg-white/5 text-white text-[10px] uppercase font-bold"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Step By Step Guide Tabs */}
            <div className="pt-2 border-t border-white/10 space-y-3 font-mono">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888] block">
                IMPLEMENTATION MILESTONES
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {selectedProject.steps.map((step, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveStepIndex(idx)}
                    className={`p-3 text-left border text-xs transition-all ${
                      activeStepIndex === idx
                        ? 'bg-[#00E5FF] text-black font-bold border-[#00E5FF]'
                        : 'bg-[#0A0A0A] border-white/10 text-[#CCCCCC] hover:border-white/30'
                    }`}
                  >
                    <span className={`block text-[9px] uppercase font-bold ${activeStepIndex === idx ? 'text-black/80' : 'text-[#888888]'}`}>
                      MILESTONE 0{idx + 1}
                    </span>
                    <span className="truncate block font-bold mt-0.5">{step.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Step Content */}
              <div className="p-4 bg-[#0A0A0A] border border-white/10 text-xs text-[#CCCCCC] leading-relaxed space-y-1">
                <p className="font-bold text-white uppercase text-[11px]">
                  Phase {activeStepIndex + 1}: {selectedProject.steps[activeStepIndex].title}
                </p>
                <p className="font-sans text-[#AAAAAA]">{selectedProject.steps[activeStepIndex].description}</p>
              </div>
            </div>

            {/* Live Solution Preview Toggle */}
            <div className="flex items-center justify-between pt-2 font-mono">
              <span className="text-[10px] text-[#888888] uppercase">
                {showSolutionPreview ? 'VIEWING COMPLETE REFERENCE CODE' : 'WORKING ON ACTIVE STARTER TEMPLATE'}
              </span>
              <button
                type="button"
                id="btn-toggle-solution-preview"
                onClick={() => setShowSolutionPreview(!showSolutionPreview)}
                className="px-3 py-1.5 bg-[#0A0A0A] border border-white/15 hover:bg-white/5 text-white text-xs uppercase font-bold transition-colors"
              >
                {showSolutionPreview ? 'LOAD STARTER CODE' : 'PEEK REFERENCE CODE'}
              </button>
            </div>
          </div>

          {/* Interactive Project Editor Sandbox */}
          <InteractiveEditor
            key={`${selectedProject.id}-${showSolutionPreview}`}
            initialHtml={showSolutionPreview ? selectedProject.solutionCode.html : selectedProject.starterCode.html}
            initialCss={showSolutionPreview ? selectedProject.solutionCode.css : selectedProject.starterCode.css}
            initialJs={showSolutionPreview ? selectedProject.solutionCode.js : selectedProject.starterCode.js}
            height="520px"
          />
        </div>
      </div>
    </div>
  );
};
