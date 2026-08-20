import React, { useState, useEffect } from 'react';
import { CourseId, Lesson, UserProgress } from '../types';
import { COURSES, getLessonById, getAllLessons } from '../data/coursesData';
import { InteractiveEditor } from '../components/InteractiveEditor';
import { GlossaryTooltip } from '../components/GlossaryTooltip';
import { NotesDrawer } from '../components/NotesDrawer';
import { triggerConfetti } from '../utils/confetti';
import { saveProgress } from '../utils/storage';
import {
  CheckCircle2,
  Circle,
  Bookmark,
  BookmarkCheck,
  FileText,
  Lightbulb,
  AlertTriangle,
  Award,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Eye,
  EyeOff,
  RotateCcw,
  Check,
  HelpCircle,
  BookOpen,
  Code2,
  Clock,
  Sparkles
} from 'lucide-react';

interface LessonViewProps {
  lessonId: string;
  courseId: CourseId;
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  onSelectLesson: (id: string) => void;
  onNavigateCourse: (courseId: CourseId) => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lessonId,
  courseId,
  progress,
  setProgress,
  onSelectLesson,
  onNavigateCourse
}) => {
  const lessonData = getLessonById(lessonId);
  const course = COURSES.find(c => c.id === courseId) || COURSES[0];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Scroll to top when lesson changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowSolution(false);
    setSelectedAnswers({});
    setQuizSubmitted(false);

    // Record last opened lesson
    const updated = {
      ...progress,
      lastOpenedLessonId: lessonId
    };
    setProgress(updated);
    saveProgress(updated);
  }, [lessonId]);

  if (!lessonData) {
    return (
      <div className="max-w-4xl mx-auto p-12 text-center text-slate-500">
        <p className="text-lg font-bold">Lesson not found.</p>
        <button
          type="button"
          onClick={() => onNavigateCourse(courseId)}
          className="mt-4 px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-semibold"
        >
          Return to Course
        </button>
      </div>
    );
  }

  const { lesson, module } = lessonData;
  const isCompleted = !!progress.completedLessons[lesson.id];
  const isBookmarked = progress.bookmarks.includes(lesson.id);

  // Compute previous and next lesson IDs
  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex(item => item.lesson.id === lesson.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1].lesson : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1].lesson : null;

  const handleToggleComplete = () => {
    const nextState = !isCompleted;
    const newCompleted = { ...progress.completedLessons };

    if (nextState) {
      newCompleted[lesson.id] = true;
      triggerConfetti('milestone');
    } else {
      delete newCompleted[lesson.id];
    }

    const newXp = nextState ? progress.xp + 10 : Math.max(0, progress.xp - 10);
    const updated: UserProgress = {
      ...progress,
      completedLessons: newCompleted,
      xp: newXp
    };

    setProgress(updated);
    saveProgress(updated);
  };

  const handleToggleBookmark = () => {
    let newBookmarks = [...progress.bookmarks];
    if (isBookmarked) {
      newBookmarks = newBookmarks.filter(id => id !== lesson.id);
    } else {
      newBookmarks.push(lesson.id);
    }

    const updated: UserProgress = {
      ...progress,
      bookmarks: newBookmarks
    };

    setProgress(updated);
    saveProgress(updated);
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
    let correctCount = 0;
    lesson.quiz.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });

    const total = lesson.quiz.length;
    const percentage = Math.round((correctCount / total) * 100);

    const updatedScores = {
      ...progress.quizScores,
      [lesson.id]: {
        score: correctCount,
        total,
        percentage,
        timestamp: Date.now()
      }
    };

    let earnedXp = progress.xp;
    if (percentage >= 70 && !progress.quizScores[lesson.id]) {
      earnedXp += 20;
      triggerConfetti('standard');
    }

    const updated: UserProgress = {
      ...progress,
      quizScores: updatedScores,
      xp: earnedXp
    };

    setProgress(updated);
    saveProgress(updated);
  };

  const quizScore = progress.quizScores[lesson.id];

  return (
    <div className="w-full flex">
      {/* Course Sidebar for Desktop & Mobile */}
      <aside
        id="course-sidebar"
        className={`fixed inset-y-0 left-0 z-30 w-72 bg-[#0A0A0A] border-r border-white/10 transition-transform duration-200 lg:static lg:translate-x-0 overflow-y-auto ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ top: '64px', height: 'calc(100vh - 64px)' }}
      >
        <div className="p-4 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#0A0A0A] z-10 font-mono">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF3D00]">
              {course.title} TRACK
            </span>
            <h3 className="text-xs font-bold text-white uppercase">Curriculum Index</h3>
          </div>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 text-[#888888] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modules List */}
        <div className="p-3 space-y-4">
          {course.modules.map((mod, modIdx) => (
            <div key={mod.id} className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#777777] px-2 uppercase tracking-wider block">
                {modIdx + 1 < 10 ? `0${modIdx + 1}` : modIdx + 1} // {mod.title}
              </span>
              <div className="space-y-0.5 font-mono">
                {mod.lessons.map((l) => {
                  const done = !!progress.completedLessons[l.id];
                  const active = l.id === lesson.id;
                  return (
                    <button
                      key={l.id}
                      type="button"
                      id={`sidebar-lesson-${l.id}`}
                      onClick={() => {
                        onSelectLesson(l.id);
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-2.5 py-2 text-xs text-left transition-colors ${
                        active
                          ? 'bg-[#FF3D00] text-black font-bold'
                          : 'text-[#A0A0A0] hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {done ? (
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${active ? 'text-black' : 'text-[#FF3D00]'}`} />
                      ) : (
                        <Circle className={`w-3.5 h-3.5 shrink-0 ${active ? 'text-black' : 'text-[#444444]'}`} />
                      )}
                      <span className="truncate flex-1">{l.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Lesson Content Area */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 min-w-0">
        {/* Top Controls & Breadcrumb Header */}
        <div className="flex items-center justify-between gap-4 font-mono">
          {/* Mobile Sidebar Toggle Button */}
          <button
            type="button"
            id="btn-toggle-sidebar"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 bg-[#111111] text-xs text-white border border-white/15"
          >
            <Menu className="w-4 h-4" />
            <span>Curriculum</span>
          </button>

          {/* Breadcrumbs */}
          <nav className="text-xs text-[#888888] flex items-center gap-1.5 truncate">
            <button
              type="button"
              onClick={() => onNavigateCourse(course.id)}
              className="hover:text-[#FF3D00] transition-colors"
            >
              {course.title}
            </button>
            <span>/</span>
            <span className="truncate">{module.title}</span>
            <span>/</span>
            <span className="text-white font-bold truncate">{lesson.title}</span>
          </nav>

          {/* Action Icons: Bookmark & Notes */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              id="btn-lesson-bookmark"
              onClick={handleToggleBookmark}
              className={`p-2 border transition-colors ${
                isBookmarked
                  ? 'bg-[#FFD600]/10 text-[#FFD600] border-[#FFD600]/40'
                  : 'bg-[#111111] text-[#888888] border-white/10 hover:text-white'
              }`}
              title={isBookmarked ? 'Remove Bookmark' : 'Bookmark this Lesson'}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>

            <button
              type="button"
              id="btn-lesson-notes"
              onClick={() => setNotesOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#111111] text-xs font-mono text-white border border-white/15 hover:bg-white/5 transition-colors"
              title="Open My Notes"
            >
              <FileText className="w-3.5 h-3.5 text-[#FF3D00]" />
              <span className="hidden sm:inline">NOTES</span>
            </button>
          </div>
        </div>

        {/* Lesson Title Banner & Metadata */}
        <div className="space-y-3 pb-6 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-3 font-mono">
            <span className="px-2 py-0.5 border border-[#FF3D00]/40 bg-[#FF3D00]/10 text-[#FF3D00] text-[10px] uppercase font-bold tracking-wider">
              LEVEL // {lesson.level}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#888888]">
              <Clock className="w-3.5 h-3.5" />
              {lesson.estimatedMinutes} MIN READ
            </span>
            {isCompleted && (
              <span className="flex items-center gap-1 text-xs font-bold text-emerald-400">
                <Check className="w-3.5 h-3.5" />
                COMPLETED
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            {lesson.title}
          </h1>
        </div>

        {/* 1. Concept Introduction */}
        <section className="space-y-3 bg-[#111111] p-6 border border-white/10">
          <div className="flex items-center gap-2 text-[#FF3D00] font-mono text-xs uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <h2 className="font-bold">01 // Concept Introduction</h2>
          </div>
          <p className="text-sm text-[#CCCCCC] leading-relaxed">
            {lesson.concept}
          </p>
        </section>

        {/* 2. Real-Life Analogy */}
        <section className="p-6 bg-[#0A0A0A] border border-[#FFD600]/30 space-y-2">
          <div className="flex items-center gap-2 text-[#FFD600] font-mono font-bold text-xs uppercase tracking-wider">
            <Lightbulb className="w-4 h-4 text-[#FFD600]" />
            <span>02 // Architectural Analogy</span>
          </div>
          <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed italic">
            "{lesson.analogy}"
          </p>
        </section>

        {/* 3. Syntax Block */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-white font-mono text-xs uppercase tracking-wider">
            <Code2 className="w-4 h-4 text-[#00E5FF]" />
            <h2 className="font-bold">03 // Syntax Reference</h2>
          </div>
          <div className="overflow-hidden bg-[#0A0A0A] border border-white/10 shadow-md">
            <div className="px-4 py-2 bg-[#111111] border-b border-white/10 text-[10px] font-mono text-[#888888] uppercase tracking-wider flex justify-between">
              <span>{lesson.syntaxLanguage} SYNTAX</span>
              <span className="text-[#FF3D00]">SCHEMA</span>
            </div>
            <pre className="p-4 font-mono text-xs text-[#00E5FF] overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {lesson.syntaxCode}
            </pre>
          </div>
        </section>

        {/* 4. Working Example & 5. Line-by-Line Explanation */}
        <section className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-wider text-white flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FF3D00]"></span>
            <h2 className="font-bold">04 // Working Example &amp; Line-by-Line Breakdown</h2>
          </div>
          <div className="space-y-3">
            <div className="p-5 bg-[#111111] border border-white/10 space-y-3">
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#888888]">
                EXECUTION FLOW:
              </h4>
              <ul className="space-y-2 text-xs text-[#CCCCCC] font-sans">
                {lesson.explanationLines.map((line, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 border border-white/20 bg-white/5 text-[#FF3D00] font-mono text-[10px] flex items-center justify-center font-bold shrink-0 mt-0.5">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Interactive Sandbox Code Editor */}
        <section className="space-y-3 pt-2">
          <div className="flex items-center justify-between font-mono">
            <div className="flex items-center gap-2 text-white">
              <Sparkles className="w-4 h-4 text-[#FF3D00]" />
              <h2 className="text-xs uppercase font-bold tracking-wider">05 // Live Interactive Sandbox</h2>
            </div>
            <span className="text-[10px] text-[#888888] hidden sm:inline">Modify code &amp; execute instantly</span>
          </div>

          <InteractiveEditor
            initialHtml={lesson.interactiveStarter.html}
            initialCss={lesson.interactiveStarter.css}
            initialJs={lesson.interactiveStarter.js}
            height="420px"
          />
        </section>

        {/* 7. Common Mistakes & 8. Best Practices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* Common Mistakes */}
          <section className="p-5 bg-[#111111] border border-rose-500/30 space-y-3">
            <div className="flex items-center gap-2 text-rose-400 font-mono font-bold text-xs uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-rose-500" />
              <span>06 // Gotchas &amp; Mistakes</span>
            </div>
            <div className="space-y-3 text-xs">
              {lesson.commonMistakes.map((cm, i) => (
                <div key={i} className="space-y-1">
                  <p className="font-bold text-rose-300">&gt; {cm.mistake}</p>
                  <p className="text-[#AAAAAA] pl-3"><strong>Fix:</strong> {cm.fix}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Best Practices */}
          <section className="p-5 bg-[#111111] border border-emerald-500/30 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-xs uppercase tracking-wider">
              <Award className="w-4 h-4 text-emerald-500" />
              <span>07 // Best Practices</span>
            </div>
            <ul className="space-y-2 text-xs text-[#AAAAAA]">
              {lesson.bestPractices.map((bp, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{bp}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* 9. Exercise & 10. Hidden Solution */}
        <section className="p-6 bg-[#111111] border border-white/10 space-y-4">
          <div className="flex items-center justify-between font-mono">
            <h3 className="text-xs uppercase font-bold text-white flex items-center gap-2 tracking-wider">
              <span className="w-2 h-2 bg-[#FF3D00]"></span>
              <span>08 // Hands-On Coding Exercise</span>
            </h3>
            <span className="text-[10px] px-2 py-0.5 border border-[#FF3D00]/30 bg-[#FF3D00]/10 text-[#FF3D00] uppercase font-bold">
              CHALLENGE
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
            {lesson.exercise.instructions}
          </p>

          <div className="p-3 bg-[#0A0A0A] text-xs font-mono text-[#888888] border border-white/10">
            <strong className="text-white">HINT:</strong> {lesson.exercise.hint}
          </div>

          {/* Exercise Code Sandbox */}
          <InteractiveEditor
            initialHtml={lesson.exercise.starterCode.html}
            initialCss={lesson.exercise.starterCode.css}
            initialJs={lesson.exercise.starterCode.js}
            height="340px"
          />

          {/* 10. Hidden Solution Toggle */}
          <div className="pt-2 border-t border-white/10 flex flex-col space-y-3 font-mono">
            <button
              type="button"
              id="btn-toggle-solution"
              onClick={() => setShowSolution(!showSolution)}
              className="self-start flex items-center gap-1.5 px-3 py-1.5 bg-[#0A0A0A] border border-white/15 text-xs text-white uppercase tracking-wider hover:bg-white/5 transition-colors"
            >
              {showSolution ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showSolution ? 'Hide Solution' : 'Show Solution'}</span>
            </button>

            {showSolution && (
              <div className="p-4 bg-[#0A0A0A] border border-[#00E5FF]/40 space-y-2 animate-in fade-in duration-150">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00E5FF]">
                  Verified Reference Solution
                </span>
                <pre className="font-mono text-xs text-[#E0E0E0] overflow-x-auto whitespace-pre-wrap">
                  {lesson.exercise.solution}
                </pre>
              </div>
            )}
          </div>
        </section>

        {/* 11. End-of-Lesson Quiz */}
        {lesson.quiz && lesson.quiz.length > 0 && (
          <section className="p-6 bg-[#111111] border border-white/10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FF3D00]" />
                <h3 className="text-xs uppercase font-bold text-white tracking-wider">09 // Knowledge Check Quiz</h3>
              </div>

              {quizScore && (
                <span className="text-[10px] font-bold px-3 py-1 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 uppercase">
                  SCORE: {quizScore.score}/{quizScore.total} ({quizScore.percentage}%)
                </span>
              )}
            </div>

            <div className="space-y-6">
              {lesson.quiz.map((q, qIndex) => {
                const selected = selectedAnswers[q.id];
                const isAnswered = selected !== undefined;
                const isCorrect = selected === q.correctIndex;

                return (
                  <div key={q.id} className="space-y-3">
                    <p className="text-xs sm:text-sm font-bold text-white">
                      {qIndex + 1}. {q.question}
                    </p>

                    <div className="space-y-2">
                      {q.options.map((opt, optIndex) => {
                        let btnStyle = 'bg-[#0A0A0A] border-white/10 text-[#CCCCCC] hover:border-white/30';

                        if (selected === optIndex) {
                          btnStyle = 'bg-[#FF3D00]/10 border-[#FF3D00] text-[#FF3D00] font-semibold';
                        }

                        if (quizSubmitted) {
                          if (optIndex === q.correctIndex) {
                            btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold';
                          } else if (selected === optIndex) {
                            btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-400';
                          }
                        }

                        return (
                          <button
                            key={optIndex}
                            type="button"
                            onClick={() => {
                              if (!quizSubmitted) {
                                setSelectedAnswers({
                                  ...selectedAnswers,
                                  [q.id]: optIndex
                                });
                              }
                            }}
                            className={`w-full text-left p-3 border text-xs transition-all flex items-center justify-between font-mono ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && optIndex === q.correctIndex && (
                              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className={`p-3 text-xs leading-relaxed font-mono ${isCorrect ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/10 text-rose-300 border border-rose-500/30'}`}>
                        <strong>{isCorrect ? 'Correct!' : 'Incorrect.'}</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex items-center gap-3 font-mono">
              {!quizSubmitted ? (
                <button
                  type="button"
                  id="btn-submit-quiz"
                  disabled={Object.keys(selectedAnswers).length < lesson.quiz.length}
                  onClick={handleQuizSubmit}
                  className="px-5 py-2.5 bg-[#FF3D00] hover:bg-[#FF5722] disabled:opacity-50 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
                >
                  Submit Quiz Answers
                </button>
              ) : (
                <button
                  type="button"
                  id="btn-retry-quiz"
                  onClick={() => {
                    setSelectedAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 bg-[#0A0A0A] text-white border border-white/15 text-xs uppercase hover:bg-white/5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retry Quiz</span>
                </button>
              )}
            </div>
          </section>
        )}

        {/* 12. Completion Button & Celebration */}
        <section className="p-8 bg-[#111111] border border-white/15 text-center space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#FF3D00]">Curriculum Milestone</div>
          <h3 className="text-xl font-black text-white uppercase">
            Complete Lesson &amp; Award XP
          </h3>
          <p className="text-xs text-[#888888] max-w-md mx-auto">
            Mark this lesson as finished to advance your course syllabus and unlock subsequent engineering concepts.
          </p>

          <button
            type="button"
            id="btn-mark-lesson-complete"
            onClick={handleToggleComplete}
            className={`inline-flex items-center gap-2 px-6 py-3 font-bold text-xs uppercase tracking-wider transition-all active:scale-95 ${
              isCompleted
                ? 'bg-emerald-500 hover:bg-emerald-400 text-black'
                : 'bg-[#FF3D00] hover:bg-[#FF5722] text-black'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? 'Lesson Mastered! (+10 XP)' : 'Mark Lesson Complete (+10 XP)'}</span>
          </button>
        </section>

        {/* Previous & Next Navigation Footer */}
        <nav className="flex items-center justify-between pt-6 border-t border-white/10 font-mono">
          {prevLesson ? (
            <button
              type="button"
              id="btn-prev-lesson"
              onClick={() => onSelectLesson(prevLesson.id)}
              className="flex items-center gap-2 px-4 py-2 bg-[#111111] border border-white/10 text-[#CCCCCC] hover:text-white hover:bg-white/5 text-xs font-bold transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">PREV: {prevLesson.title}</span>
              <span className="sm:hidden">Previous</span>
            </button>
          ) : (
            <div></div>
          )}

          {nextLesson ? (
            <button
              type="button"
              id="btn-next-lesson"
              onClick={() => onSelectLesson(nextLesson.id)}
              className="flex items-center gap-2 px-4 py-2 bg-[#FF3D00] hover:bg-[#FF5722] text-black text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              <span className="hidden sm:inline">NEXT: {nextLesson.title}</span>
              <span className="sm:hidden">Next Lesson</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onNavigateCourse(course.id)}
              className="flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#FF3D00]"
            >
              <span>Finish Track &amp; Return</span>
            </button>
          )}
        </nav>
      </main>

      {/* Notes Slide-out Drawer */}
      <NotesDrawer
        lessonId={lesson.id}
        lessonTitle={lesson.title}
        isOpen={notesOpen}
        onClose={() => setNotesOpen(false)}
      />
    </div>
  );
};
