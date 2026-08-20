import { RoadmapItem, GlossaryTerm, Badge } from '../types';

export const STUDY_ROADMAP: RoadmapItem[] = [
  {
    id: 'road-1',
    stepNumber: 1,
    title: 'HTML Basics & Structure',
    description: 'Learn elements, headings, paragraphs, document anatomy, and links.',
    courseId: 'html',
    category: 'HTML Foundation',
    targetLessonId: 'html-intro-1'
  },
  {
    id: 'road-2',
    stepNumber: 2,
    title: 'HTML Forms & Semantic Layouts',
    description: 'Master inputs, buttons, tables, accessibility, and semantic tags.',
    courseId: 'html',
    category: 'HTML Semantics',
    targetLessonId: 'html-forms-validation-6'
  },
  {
    id: 'road-3',
    stepNumber: 3,
    title: 'CSS Syntax & The Box Model',
    description: 'Understand colors, selectors, padding, borders, margins, and sizing.',
    courseId: 'css',
    category: 'CSS Foundation',
    targetLessonId: 'css-intro-syntax-1'
  },
  {
    id: 'road-4',
    stepNumber: 4,
    title: 'Modern Flexbox Layouts',
    description: 'Distribute space, align items, create navbars, and master 1D layouts.',
    courseId: 'css',
    category: 'CSS Layout',
    targetLessonId: 'css-flexbox-3'
  },
  {
    id: 'road-5',
    stepNumber: 5,
    title: 'CSS Grid & Responsive Design',
    description: 'Build 2D dynamic grid matrices and mobile-friendly media queries.',
    courseId: 'css',
    category: 'CSS Layout',
    targetLessonId: 'css-grid-responsive-4'
  },
  {
    id: 'road-6',
    stepNumber: 6,
    title: 'JavaScript Fundamentals & Variables',
    description: 'Declare variables with let & const, explore data types, and console debugging.',
    courseId: 'javascript',
    category: 'JS Foundation',
    targetLessonId: 'js-intro-variables-1'
  },
  {
    id: 'road-7',
    stepNumber: 7,
    title: 'Functions & Control Flow',
    description: 'Write reusable functions, arrow functions, and conditional if/else logic.',
    courseId: 'javascript',
    category: 'JS Logic',
    targetLessonId: 'js-functions-flow-2'
  },
  {
    id: 'road-8',
    stepNumber: 8,
    title: 'DOM Manipulation & Events',
    description: 'Select elements, listen to clicks and keystrokes, and update UI on the fly.',
    courseId: 'javascript',
    category: 'JS Interactivity',
    targetLessonId: 'js-dom-events-3'
  },
  {
    id: 'road-9',
    stepNumber: 9,
    title: 'Async JavaScript & REST APIs',
    description: 'Master Promises, async/await, fetch() data from servers, and use localStorage.',
    courseId: 'javascript',
    category: 'Advanced JS',
    targetLessonId: 'js-async-api-4'
  },
  {
    id: 'road-10',
    stepNumber: 10,
    title: 'Real-World Production Projects',
    description: 'Synthesize your full-stack knowledge to build and launch production-grade apps.',
    courseId: 'general',
    category: 'Capstone Projects'
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'DOM',
    definition: 'Document Object Model: A tree representation created by the browser that allows JavaScript to inspect and modify HTML elements dynamically.',
    category: 'javascript'
  },
  {
    term: 'API',
    definition: 'Application Programming Interface: A standardized way for different software applications to communicate and exchange data over a network.',
    category: 'javascript'
  },
  {
    term: 'Element',
    definition: 'An individual component of an HTML document consisting of a start tag, content, and an end tag (e.g. <p>Hello</p>).',
    category: 'html'
  },
  {
    term: 'Attribute',
    definition: 'Special words inside an HTML opening tag that provide additional configuration or metadata (e.g. href="...", src="...", id="...").',
    category: 'html'
  },
  {
    term: 'Selector',
    definition: 'A pattern in CSS used to target the HTML elements you want to style (e.g. .class, #id, h1, div > p).',
    category: 'css'
  },
  {
    term: 'Flexbox',
    definition: 'A 1-dimensional CSS layout model that makes it easy to align, distribute, and space items along a horizontal row or vertical column.',
    category: 'css'
  },
  {
    term: 'Box Model',
    definition: 'The CSS layout model wrapping every HTML element with four concentric layers: Content, Padding, Border, and Margin.',
    category: 'css'
  },
  {
    term: 'Variable',
    definition: 'A named container in memory used to store and reference data values in computer programs (declared with const or let).',
    category: 'javascript'
  },
  {
    term: 'Function',
    definition: 'A reusable block of code designed to perform a particular task when invoked, optionally accepting parameters and returning a value.',
    category: 'javascript'
  },
  {
    term: 'Callback',
    definition: 'A function passed as an argument to another function, which is intended to be executed after some event or operation completes.',
    category: 'javascript'
  },
  {
    term: 'Promise',
    definition: 'An object representing the eventual completion or failure of an asynchronous operation and its resulting value.',
    category: 'javascript'
  },
  {
    term: 'Semantic HTML',
    definition: 'Using HTML elements according to their intended meaning (<header>, <article>, <nav>) rather than generic containers (<div>, <span>).',
    category: 'html'
  }
];

export const BADGES: Badge[] = [
  {
    id: 'b-first-step',
    title: 'First Step',
    description: 'Completed your very first lesson on CodePath Academy.',
    iconName: 'Footprints',
    xpReward: 20,
    category: 'milestone',
    isUnlocked: (p) => Object.keys(p.completedLessons).length >= 1
  },
  {
    id: 'b-html-novice',
    title: 'HTML Novice',
    description: 'Completed 2 HTML lessons.',
    iconName: 'FileCode',
    xpReward: 30,
    category: 'course',
    isUnlocked: (p) => Object.keys(p.completedLessons).filter(id => id.startsWith('html')).length >= 2
  },
  {
    id: 'b-css-stylist',
    title: 'CSS Stylist',
    description: 'Completed 2 CSS layout lessons.',
    iconName: 'Sparkles',
    xpReward: 30,
    category: 'course',
    isUnlocked: (p) => Object.keys(p.completedLessons).filter(id => id.startsWith('css')).length >= 2
  },
  {
    id: 'b-js-coder',
    title: 'JavaScript Rookie',
    description: 'Completed 2 JavaScript interactive lessons.',
    iconName: 'Zap',
    xpReward: 30,
    category: 'course',
    isUnlocked: (p) => Object.keys(p.completedLessons).filter(id => id.startsWith('js')).length >= 2
  },
  {
    id: 'b-quiz-whiz',
    title: 'Quiz Whiz',
    description: 'Scored 100% on any lesson quiz.',
    iconName: 'Award',
    xpReward: 40,
    category: 'milestone',
    isUnlocked: (p) => Object.values(p.quizScores).some(q => q.percentage === 100)
  },
  {
    id: 'b-challenge-solver',
    title: 'Code Warrior',
    description: 'Solved your first live coding challenge.',
    iconName: 'Swords',
    xpReward: 50,
    category: 'challenges',
    isUnlocked: (p) => Object.keys(p.completedChallenges).length >= 1
  },
  {
    id: 'b-project-builder',
    title: 'Project Builder',
    description: 'Completed a guided real-world project.',
    iconName: 'Hammer',
    xpReward: 100,
    category: 'projects',
    isUnlocked: (p) => Object.keys(p.completedProjects).length >= 1
  },
  {
    id: 'b-streak-master',
    title: 'Consistency Champion',
    description: 'Maintained an active learning streak.',
    iconName: 'Flame',
    xpReward: 50,
    category: 'streak',
    isUnlocked: (p) => p.streak >= 1 && p.activeDays.length >= 1
  }
];
