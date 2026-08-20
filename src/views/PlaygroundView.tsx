import React, { useState, useEffect } from 'react';
import { UserProgress } from '../types';
import { InteractiveEditor } from '../components/InteractiveEditor';
import { saveProgress, getStoredProgress } from '../utils/storage';
import { Sparkles, Save, FolderOpen, RefreshCw, Check } from 'lucide-react';

const PRESET_TEMPLATES = [
  {
    name: 'Default Starter',
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
    js: `const btn = document.getElementById('btn');
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
  },
  {
    name: 'Flexbox Hero Layout',
    html: `<header class="hero">
  <nav class="nav">
    <div class="brand">⚡ CodePath</div>
    <div class="links">
      <a href="#">Docs</a>
      <a href="#">Showcase</a>
      <a href="#">Community</a>
    </div>
  </nav>
  <div class="hero-content">
    <h1>Modern Layouts with Flexbox</h1>
    <p>Distribute items seamlessly with gap, justify-content, and align-items.</p>
    <button class="cta">Get Started</button>
  </div>
</header>`,
    css: `body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #0f172a;
  color: white;
}

.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
}

.brand { font-size: 1.25rem; font-weight: 800; color: #38bdf8; }

.links { display: flex; gap: 1.5rem; }
.links a { color: #94a3b8; text-decoration: none; font-weight: 500; }
.links a:hover { color: white; }

.hero-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

h1 { font-size: 2.5rem; margin-bottom: 1rem; color: #f8fafc; }
p { color: #94a3b8; font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem; }

.cta {
  background: #38bdf8;
  color: #0f172a;
  font-weight: 700;
  border: none;
  padding: 0.85rem 2rem;
  border-radius: 9999px;
  cursor: pointer;
  font-size: 1rem;
}`,
    js: `console.log("Flexbox Hero template initialized");`
  },
  {
    name: 'Canvas Particle Demo',
    html: `<canvas id="canvas"></canvas>`,
    css: `body {
  margin: 0;
  overflow: hidden;
  background: #090d16;
}
canvas {
  display: block;
}`,
    js: `const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i = 0; i < 40; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    radius: Math.random() * 4 + 2,
    color: ['#38bdf8', '#818cf8', '#34d399', '#fbbf24'][Math.floor(Math.random() * 4)]
  });
}

function animate() {
  ctx.fillStyle = 'rgba(9, 13, 22, 0.2)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();`
  }
];

interface PlaygroundViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
}

export const PlaygroundView: React.FC<PlaygroundViewProps> = ({ progress, setProgress }) => {
  const [currentCode, setCurrentCode] = useState(progress.savedPlayground);
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSavePlayground = () => {
    const updated: UserProgress = {
      ...progress,
      savedPlayground: currentCode
    };
    setProgress(updated);
    saveProgress(updated);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  const handleLoadPreset = (preset: typeof PRESET_TEMPLATES[0]) => {
    const code = {
      html: preset.html,
      css: preset.css,
      js: preset.js
    };
    setCurrentCode(code);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Playground Header & Presets */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 border border-[#00E5FF]/40 bg-[#00E5FF]/10 text-[#00E5FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SANDBOX // REAL-TIME RUNTIME</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Code Playground
          </h1>
          <p className="text-xs sm:text-sm text-[#888888] mt-1 font-mono">
            Execute native HTML, CSS, and modern JavaScript experiments. Persistence cached locally.
          </p>
        </div>

        {/* Action Buttons: Presets & Save */}
        <div className="flex items-center gap-2 flex-wrap font-mono">
          {/* Preset Selector */}
          <div className="flex items-center gap-1 bg-[#111111] p-1 border border-white/15">
            {PRESET_TEMPLATES.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                id={`preset-btn-${idx}`}
                onClick={() => handleLoadPreset(preset)}
                className="px-2.5 py-1 text-[11px] uppercase font-bold text-[#888888] hover:text-white hover:bg-white/10 transition-colors"
              >
                {preset.name}
              </button>
            ))}
          </div>

          <button
            type="button"
            id="btn-save-playground"
            onClick={handleSavePlayground}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#FF3D00] hover:bg-[#FF5722] text-black text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
            title="Save custom snippet (Ctrl+S)"
          >
            {savedNotice ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
            <span>{savedNotice ? 'SAVED' : 'SAVE STATE'}</span>
          </button>
        </div>
      </div>

      {/* Editor Component */}
      <InteractiveEditor
        initialHtml={currentCode.html}
        initialCss={currentCode.css}
        initialJs={currentCode.js}
        onCodeChange={(newCode) => setCurrentCode(newCode)}
        height="640px"
      />
    </div>
  );
};
