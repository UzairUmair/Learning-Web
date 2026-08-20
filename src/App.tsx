import React, { useState, useEffect } from 'react';
import { ActiveTab, CourseId, UserProgress } from './types';
import { getStoredProgress, saveProgress, getStoredTheme, saveTheme } from './utils/storage';
import { getLessonById } from './data/coursesData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { HomeView } from './views/HomeView';
import { CourseOverviewView } from './views/CourseOverviewView';
import { LessonView } from './views/LessonView';
import { PlaygroundView } from './views/PlaygroundView';
import { ChallengesView } from './views/ChallengesView';
import { ProjectsView } from './views/ProjectsView';
import { DashboardView } from './views/DashboardView';
import { CheatSheetsView } from './views/CheatSheetsView';
import { RoadmapView } from './views/RoadmapView';

export function App() {
  const [progress, setProgress] = useState<UserProgress>(getStoredProgress);
  const [theme, setTheme] = useState<'dark' | 'light'>(getStoredTheme);
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<CourseId>('html');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('html-intro-1');
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Apply theme to html root element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    saveTheme(theme);
  }, [theme]);

  // Global hotkey: Cmd/Ctrl + K to open search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchModalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectLesson = (lessonId: string) => {
    const item = getLessonById(lessonId);
    if (item) {
      setSelectedCourseId(item.course.id);
      setSelectedLessonId(lessonId);
      setActiveTab('lesson');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateCourse = (courseId: CourseId) => {
    setSelectedCourseId(courseId);
    setActiveTab(courseId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#E0E0E0] font-sans selection:bg-[#FF3D00]/30 selection:text-white transition-colors duration-200 relative overflow-x-hidden artistic-bg-grid">
      {/* Background Architectural Ambient Glow Elements */}
      <div className="fixed top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#151515] rounded-full blur-[140px] opacity-60 pointer-events-none -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#FF3D00]/5 rounded-full blur-[160px] opacity-40 pointer-events-none -z-10"></div>

      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCourseId={selectedCourseId}
        setSelectedCourseId={setSelectedCourseId}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        progress={progress}
        onOpenSearch={() => setSearchModalOpen(true)}
        onSelectLesson={handleSelectLesson}
      />

      {/* Global Quick Search Modal */}
      <GlobalSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigateLesson={handleSelectLesson}
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main View Router */}
      <div className="flex-1 w-full relative z-10">
        {activeTab === 'home' && (
          <HomeView
            progress={progress}
            setActiveTab={setActiveTab}
            setSelectedCourseId={setSelectedCourseId}
            onSelectLesson={handleSelectLesson}
          />
        )}

        {(activeTab === 'html' || activeTab === 'css' || activeTab === 'javascript') && (
          <CourseOverviewView
            courseId={activeTab as CourseId}
            progress={progress}
            onSelectLesson={handleSelectLesson}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'lesson' && (
          <LessonView
            lessonId={selectedLessonId}
            courseId={selectedCourseId}
            progress={progress}
            setProgress={setProgress}
            onSelectLesson={handleSelectLesson}
            onNavigateCourse={handleNavigateCourse}
          />
        )}

        {activeTab === 'playground' && (
          <PlaygroundView
            progress={progress}
            setProgress={setProgress}
          />
        )}

        {activeTab === 'challenges' && (
          <ChallengesView
            progress={progress}
            setProgress={setProgress}
          />
        )}

        {activeTab === 'projects' && (
          <ProjectsView
            progress={progress}
            setProgress={setProgress}
          />
        )}

        {activeTab === 'dashboard' && (
          <DashboardView
            progress={progress}
            setProgress={setProgress}
            onSelectLesson={handleSelectLesson}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'cheatsheets' && (
          <CheatSheetsView />
        )}

        {activeTab === 'roadmap' && (
          <RoadmapView
            progress={progress}
            onSelectLesson={handleSelectLesson}
            setActiveTab={setActiveTab}
          />
        )}
      </div>

      {/* Developer Footer */}
      <Footer
        setActiveTab={setActiveTab}
        setSelectedCourseId={setSelectedCourseId}
      />
    </div>
  );
}

export default App;
