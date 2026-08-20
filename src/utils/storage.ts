import { UserProgress } from '../types';

const STORAGE_KEY = 'codepath_academy_progress_v1';
const THEME_KEY = 'codepath_academy_theme';

const DEFAULT_PROGRESS: UserProgress = {
  completedLessons: {},
  quizScores: {},
  completedChallenges: {},
  completedProjects: {},
  bookmarks: [],
  notes: {},
  xp: 0,
  streak: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  activeDays: [new Date().toISOString().split('T')[0]],
  lastOpenedLessonId: 'html-intro-1',
  savedPlayground: {
    html: `<!-- Welcome to CodePath Playground! -->
<div class="card">
  <h1 id="greeting">Hello, Web Developer!</h1>
  <p>Edit the HTML, CSS, or JavaScript and see instant results below.</p>
  <button id="btn">Click me!</button>
</div>`,
    css: `body {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
  color: #f8fafc;
}

.card {
  background: rgba(30, 41, 59, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
  text-align: center;
  max-width: 440px;
}

h1 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 0;
  color: #38bdf8;
}

p {
  color: #94a3b8;
  line-height: 1.6;
}

button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;
}

button:hover {
  background: #2563eb;
  transform: translateY(-2px);
}`,
    js: `// JavaScript interaction
const btn = document.getElementById('btn');
const greeting = document.getElementById('greeting');

let clicks = 0;
const messages = [
  "You are awesome!",
  "JavaScript is working!",
  "Keep building & learning!",
  "Full-stack mastery ahead! 🚀"
];

btn.addEventListener('click', () => {
  clicks++;
  const msg = messages[clicks % messages.length];
  greeting.textContent = msg;
  console.log("Button clicked " + clicks + " times!");
});`
  }
};

export const getStoredProgress = (): UserProgress => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      saveProgress(DEFAULT_PROGRESS);
      return DEFAULT_PROGRESS;
    }
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      completedLessons: parsed.completedLessons || {},
      quizScores: parsed.quizScores || {},
      completedChallenges: parsed.completedChallenges || {},
      completedProjects: parsed.completedProjects || {},
      bookmarks: parsed.bookmarks || [],
      notes: parsed.notes || {},
      activeDays: parsed.activeDays || [new Date().toISOString().split('T')[0]],
      savedPlayground: parsed.savedPlayground || DEFAULT_PROGRESS.savedPlayground
    };
  } catch (e) {
    console.error('Failed to parse progress from localStorage', e);
    return DEFAULT_PROGRESS;
  }
};

export const saveProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress to localStorage', e);
  }
};

export const checkAndUpdateStreak = (progress: UserProgress): UserProgress => {
  const today = new Date().toISOString().split('T')[0];
  const lastActive = progress.lastActiveDate;

  if (lastActive === today) {
    // Already updated today
    return progress;
  }

  const lastDate = new Date(lastActive);
  const currentDate = new Date(today);
  const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let newStreak = progress.streak;
  if (diffDays === 1) {
    // Consecutive day
    newStreak += 1;
  } else if (diffDays > 1) {
    // Streak broken
    newStreak = 1;
  }

  const activeDays = Array.from(new Set([...progress.activeDays, today])).slice(-365);

  const updated: UserProgress = {
    ...progress,
    streak: newStreak,
    lastActiveDate: today,
    activeDays
  };

  saveProgress(updated);
  return updated;
};

export const getUserLevel = (xp: number) => {
  if (xp >= 2000) return { level: 5, title: 'Code Master', nextXp: 3000, currentTierXp: 2000, progress: 100 };
  if (xp >= 1000) return { level: 4, title: 'Web Builder', nextXp: 2000, currentTierXp: 1000, progress: Math.min(100, Math.round(((xp - 1000) / 1000) * 100)) };
  if (xp >= 500) return { level: 3, title: 'Developer', nextXp: 1000, currentTierXp: 500, progress: Math.min(100, Math.round(((xp - 500) / 500) * 100)) };
  if (xp >= 200) return { level: 2, title: 'Learner', nextXp: 500, currentTierXp: 200, progress: Math.min(100, Math.round(((xp - 200) / 300) * 100)) };
  return { level: 1, title: 'Beginner', nextXp: 200, currentTierXp: 0, progress: Math.min(100, Math.round((xp / 200) * 100)) };
};

export const getTheme = (): 'dark' | 'light' => {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'dark'; // Default dark developer theme
  } catch {
    return 'dark';
  }
};

export const setTheme = (theme: 'dark' | 'light'): void => {
  try {
    localStorage.setItem(THEME_KEY, theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {
    console.error('Failed to set theme in localStorage', e);
  }
};

export const getStoredTheme = getTheme;
export const saveTheme = setTheme;

export const resetProgress = (): UserProgress => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    saveProgress(DEFAULT_PROGRESS);
    return DEFAULT_PROGRESS;
  } catch {
    return DEFAULT_PROGRESS;
  }
};

export const getXpForNextLevel = (xp: number) => {
  const levelInfo = getUserLevel(xp);
  return {
    next: levelInfo.nextXp,
    needed: Math.max(0, levelInfo.nextXp - xp)
  };
};

