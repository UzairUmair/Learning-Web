export type CourseId = 'html' | 'css' | 'javascript';

export type DifficultyLevel = 'Absolute Beginner' | 'Beginner' | 'Intermediate' | 'Advanced';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  codeSnippet?: string;
  type?: 'multiple-choice' | 'true-false' | 'code-output';
}

export interface CodeBlockData {
  language: 'html' | 'css' | 'javascript';
  code: string;
  title?: string;
}

export interface CodeExercise {
  instructions: string;
  hint: string;
  solution: string;
  starterCode: {
    html: string;
    css: string;
    js: string;
  };
  expectedOutputHint?: string;
}

export interface Lesson {
  id: string;
  courseId: CourseId;
  moduleId: string;
  moduleTitle: string;
  title: string;
  level: DifficultyLevel;
  estimatedMinutes: number;
  concept: string; // 1. Concept introduction (simple English)
  analogy: string; // 2. Real-life analogy
  syntaxCode: string; // 3. Syntax highlighted block
  syntaxLanguage: 'html' | 'css' | 'javascript';
  exampleCode: { // 4. Working example
    html: string;
    css: string;
    js: string;
  };
  explanationLines: string[]; // 5. Line by line explanation
  interactiveStarter: { // 6. Interactive example starter
    html: string;
    css: string;
    js: string;
  };
  commonMistakes: { mistake: string; fix: string; why: string }[]; // 7. Common mistakes
  bestPractices: string[]; // 8. Best practices
  exercise: CodeExercise; // 9. Exercise & 10. Hidden solution
  quiz: QuizQuestion[]; // 11. Quiz with 2-4 questions
}

export interface Module {
  id: string;
  title: string;
  level: string; // e.g. "Level 1 — Absolute Beginner"
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: CourseId;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string; // e.g. 'orange' | 'blue' | 'yellow'
  icon: string;
  totalLessons: number;
  modules: Module[];
}

export interface ChallengeTestCase {
  id: string;
  description: string;
  testFnString: string; // JS code to evaluate or DOM condition
  expectedResult?: string;
}

export interface CodingChallenge {
  id: string;
  category: CourseId;
  difficulty: 'Beginner' | 'Easy' | 'Medium' | 'Hard';
  title: string;
  description: string;
  requirements: string[];
  starterCode: {
    html: string;
    css: string;
    js: string;
  };
  hint: string;
  solution: {
    html: string;
    css: string;
    js: string;
  };
  tests: ChallengeTestCase[];
  xp: number;
}

export interface GuidedProject {
  id: string;
  title: string;
  category: CourseId | 'fullstack';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  description: string;
  skillsLearned: string[];
  starterCode: {
    html: string;
    css: string;
    js: string;
  };
  solutionCode: {
    html: string;
    css: string;
    js: string;
  };
  steps: {
    stepNumber: number;
    title: string;
    instructions: string;
    snippet?: string;
  }[];
  xp: number;
  tags: string[];
}

export interface CheatSheetItem {
  term: string;
  syntax: string;
  description: string;
  example?: string;
  categoryTag?: string;
}

export interface CheatSheetCategory {
  id: string;
  courseId: CourseId;
  title: string;
  description: string;
  items: CheatSheetItem[];
}

export interface RoadmapItem {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  courseId: CourseId | 'general';
  category: string;
  targetLessonId?: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: CourseId | 'general';
  exampleSnippet?: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  iconName: string;
  xpReward: number;
  category: 'milestone' | 'course' | 'streak' | 'projects' | 'challenges';
  isUnlocked: (progress: UserProgress) => boolean;
}

export interface UserProgress {
  completedLessons: Record<string, boolean>; // lessonId -> boolean
  quizScores: Record<string, { score: number; total: number; percentage: number; timestamp: number }>; // lessonId -> score
  completedChallenges: Record<string, boolean>; // challengeId -> boolean
  completedProjects: Record<string, boolean>; // projectId -> boolean
  bookmarks: string[]; // lessonIds
  notes: Record<string, string>; // lessonId -> markdown/plain notes
  xp: number;
  streak: number;
  lastActiveDate: string; // YYYY-MM-DD
  activeDays: string[]; // ['2026-08-19', ...]
  lastOpenedLessonId: string;
  savedPlayground: {
    html: string;
    css: string;
    js: string;
  };
}

export type ActiveTab = 'home' | 'learn' | 'html' | 'css' | 'javascript' | 'playground' | 'projects' | 'challenges' | 'dashboard' | 'cheatsheets' | 'roadmap';
