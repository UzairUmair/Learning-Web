import { GuidedProject } from '../types';

export const GUIDED_PROJECTS: GuidedProject[] = [
  {
    id: 'proj-personal-profile',
    title: 'Developer Profile Card',
    category: 'html',
    difficulty: 'Beginner',
    estimatedTime: '25 mins',
    description: 'Create a clean, semantic personal profile card featuring an avatar, biography, social links, and skills badges.',
    skillsLearned: ['Semantic HTML', 'Images with alt', 'Anchor links', 'CSS Box Model', 'Border radius & shadows'],
    tags: ['HTML', 'CSS', 'Beginner'],
    xp: 60,
    steps: [
      {
        stepNumber: 1,
        title: 'Create the HTML Card Container',
        instructions: 'Add a <div class="profile-card"> containing an <img> for your avatar, an <h1> with your name, and a <p> bio.',
        snippet: '<div class="profile-card">\n  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200" alt="Avatar" class="avatar">\n  <h1>Alex Chen</h1>\n  <p class="role">Frontend Developer</p>\n</div>'
      },
      {
        stepNumber: 2,
        title: 'Add Skills Tags & Social Buttons',
        instructions: 'Add a list of skills using <span> badges and anchor buttons for GitHub and LinkedIn.',
        snippet: '<div class="skills">\n  <span class="skill-tag">HTML5</span>\n  <span class="skill-tag">CSS3</span>\n  <span class="skill-tag">JavaScript</span>\n</div>\n<div class="actions">\n  <a href="#" class="btn primary">Follow</a>\n  <a href="#" class="btn secondary">Message</a>\n</div>'
      },
      {
        stepNumber: 3,
        title: 'Style with Modern CSS',
        instructions: 'Apply card background, subtle shadow, centered typography, and button hover states.',
        snippet: '.profile-card { background: white; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); padding: 30px; text-align: center; max-width: 320px; }'
      }
    ],
    starterCode: {
      html: '<!-- Build your Developer Profile Card here -->\n<div class="profile-card">\n  \n</div>',
      css: 'body {\n  font-family: system-ui, -apple-system, sans-serif;\n  background: #f1f5f9;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  margin: 0;\n}\n\n.profile-card {\n  background: white;\n  padding: 30px;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);\n  max-width: 320px;\n  text-align: center;\n}',
      js: ''
    },
    solutionCode: {
      html: '<div class="profile-card">\n  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200" alt="Alex Chen" class="avatar">\n  <h1 class="name">Alex Chen</h1>\n  <p class="role">Front-End Developer & UI Enthusiast</p>\n  <p class="bio">Passionate about clean code, modern web interfaces, and accessible design.</p>\n  <div class="skills">\n    <span class="skill-tag">HTML5</span>\n    <span class="skill-tag">CSS3</span>\n    <span class="skill-tag">JavaScript</span>\n  </div>\n  <div class="actions">\n    <a href="#" class="btn primary">Follow</a>\n    <a href="#" class="btn secondary">Message</a>\n  </div>\n</div>',
      css: 'body {\n  font-family: system-ui, -apple-system, sans-serif;\n  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  margin: 0;\n  padding: 20px;\n}\n\n.profile-card {\n  background: white;\n  padding: 32px 24px;\n  border-radius: 16px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03);\n  max-width: 320px;\n  width: 100%;\n  text-align: center;\n  border: 1px solid #e2e8f0;\n}\n\n.avatar {\n  width: 96px;\n  height: 96px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #3b82f6;\n  margin-bottom: 12px;\n}\n\n.name { font-size: 1.35rem; font-weight: 700; margin: 0 0 4px; color: #0f172a; }\n.role { font-size: 0.85rem; color: #3b82f6; font-weight: 600; margin: 0 0 12px; }\n.bio { font-size: 0.9rem; color: #64748b; line-height: 1.5; margin-bottom: 18px; }\n\n.skills {\n  display: flex;\n  justify-content: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n\n.skill-tag {\n  background: #eff6ff;\n  color: #1d4ed8;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n\n.actions {\n  display: flex;\n  gap: 10px;\n}\n\n.btn {\n  flex: 1;\n  padding: 10px;\n  border-radius: 8px;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition: all 0.2s;\n}\n\n.btn.primary { background: #0f172a; color: white; }\n.btn.primary:hover { background: #1e293b; }\n.btn.secondary { background: #f1f5f9; color: #334155; border: 1px solid #cbd5e1; }\n.btn.secondary:hover { background: #e2e8f0; }',
      js: ''
    }
  },
  {
    id: 'proj-interactive-todo',
    title: 'Interactive Todo Application',
    category: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: '40 mins',
    description: 'Build a full-featured Todo App with add, toggle complete, delete task, filter by status, and local storage persistence.',
    skillsLearned: ['DOM Manipulation', 'Event Listeners', 'Array methods', 'localStorage', 'Dynamic CSS classes'],
    tags: ['JavaScript', 'DOM', 'LocalStorage'],
    xp: 100,
    steps: [
      {
        stepNumber: 1,
        title: 'App Structure & Input Bar',
        instructions: 'Set up the input field, submit button, filter buttons (All, Active, Completed), and the <ul> task list container.',
        snippet: '<div class="todo-card">\n  <header><h2>My Task Board</h2></header>\n  <form id="taskForm">\n    <input type="text" id="taskInput" placeholder="What needs to be done?" required>\n    <button type="submit">Add</button>\n  </form>\n  <ul id="taskList"></ul>\n</div>'
      },
      {
        stepNumber: 2,
        title: 'Handle Task Creation & State',
        instructions: 'Store tasks in an array of objects { id, text, completed }. Render tasks to the DOM dynamically.',
        snippet: 'let tasks = JSON.parse(localStorage.getItem("tasks")) || [];\n\nfunction renderTasks() {\n  taskList.innerHTML = "";\n  tasks.forEach(task => {\n    const li = document.createElement("li");\n    li.className = task.completed ? "completed" : "";\n    // ... add checkbox, label, and delete button\n  });\n}'
      },
      {
        stepNumber: 3,
        title: 'Add Checkbox & Delete Event Handling',
        instructions: 'Attach event handlers to toggle completed state and remove items, updating localStorage each time.',
        snippet: 'function toggleTask(id) {\n  tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);\n  saveAndRender();\n}'
      }
    ],
    starterCode: {
      html: '<div class="todo-app">\n  <h2>Task Manager</h2>\n  <div class="input-group">\n    <input type="text" id="taskInput" placeholder="Add a new task...">\n    <button id="addBtn">Add</button>\n  </div>\n  <ul id="taskList"></ul>\n</div>',
      css: 'body { font-family: system-ui, sans-serif; background: #0f172a; color: white; display: flex; justify-content: center; padding: 40px 20px; }\n.todo-app { background: #1e293b; padding: 24px; border-radius: 12px; width: 100%; max-width: 400px; border: 1px solid #334155; }\n.input-group { display: flex; gap: 8px; margin-bottom: 20px; }\ninput { flex: 1; padding: 10px; border-radius: 6px; border: 1px solid #475569; background: #0f172a; color: white; }\nbutton { background: #38bdf8; color: #0f172a; border: none; padding: 10px 16px; font-weight: bold; border-radius: 6px; cursor: pointer; }\nul { list-style: none; padding: 0; margin: 0; }',
      js: '// Build your Todo List logic here\n'
    },
    solutionCode: {
      html: '<div class="todo-app">\n  <h2>Task Manager</h2>\n  <div class="input-group">\n    <input type="text" id="taskInput" placeholder="What needs to be done?">\n    <button id="addBtn">Add Task</button>\n  </div>\n  <div class="stats">\n    <span id="taskCount">0 tasks left</span>\n    <button id="clearCompletedBtn" class="text-btn">Clear Completed</button>\n  </div>\n  <ul id="taskList"></ul>\n</div>',
      css: 'body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; display: flex; justify-content: center; padding: 40px 20px; margin: 0; }\n.todo-app { background: #1e293b; padding: 24px; border-radius: 12px; width: 100%; max-width: 420px; border: 1px solid #334155; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }\nh2 { margin-top: 0; font-size: 1.5rem; color: #38bdf8; }\n.input-group { display: flex; gap: 8px; margin-bottom: 16px; }\ninput { flex: 1; padding: 10px 14px; border-radius: 6px; border: 1px solid #475569; background: #0f172a; color: white; outline: none; font-size: 0.95rem; }\ninput:focus { border-color: #38bdf8; }\n#addBtn { background: #38bdf8; color: #0f172a; border: none; padding: 10px 16px; font-weight: 700; border-radius: 6px; cursor: pointer; }\n#addBtn:hover { background: #7dd3fc; }\n.stats { display: flex; justify-content: space-between; font-size: 0.85rem; color: #94a3b8; margin-bottom: 12px; }\n.text-btn { background: none; border: none; color: #94a3b8; cursor: pointer; text-decoration: underline; font-size: 0.85rem; }\n.text-btn:hover { color: #f87171; }\nul { list-style: none; padding: 0; margin: 0; }\nli { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; background: #0f172a; border: 1px solid #334155; border-radius: 6px; margin-bottom: 8px; }\nli.completed .task-text { text-decoration: line-through; color: #64748b; }\n.task-left { display: flex; align-items: center; gap: 10px; }\n.del-btn { background: #ef4444; border: none; color: white; width: 24px; height: 24px; border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 12px; }\n.del-btn:hover { background: #dc2626; }',
      js: 'let tasks = JSON.parse(localStorage.getItem("codepath_todos")) || [\n  { id: 1, text: "Complete HTML Level 1", completed: true },\n  { id: 2, text: "Build Flexbox Layout", completed: false },\n  { id: 3, text: "Master JavaScript Async/Await", completed: false }\n];\n\nconst taskInput = document.getElementById("taskInput");\nconst addBtn = document.getElementById("addBtn");\nconst taskList = document.getElementById("taskList");\nconst taskCount = document.getElementById("taskCount");\nconst clearCompletedBtn = document.getElementById("clearCompletedBtn");\n\nfunction saveAndRender() {\n  localStorage.setItem("codepath_todos", JSON.stringify(tasks));\n  render();\n}\n\nfunction render() {\n  taskList.innerHTML = "";\n  tasks.forEach(task => {\n    const li = document.createElement("li");\n    if (task.completed) li.classList.add("completed");\n\n    const left = document.createElement("div");\n    left.className = "task-left";\n\n    const checkbox = document.createElement("input");\n    checkbox.type = "checkbox";\n    checkbox.checked = task.completed;\n    checkbox.onchange = () => {\n      task.completed = checkbox.checked;\n      saveAndRender();\n    };\n\n    const textSpan = document.createElement("span");\n    textSpan.className = "task-text";\n    textSpan.textContent = task.text;\n\n    left.appendChild(checkbox);\n    left.appendChild(textSpan);\n\n    const delBtn = document.createElement("button");\n    delBtn.className = "del-btn";\n    delBtn.textContent = "✕";\n    delBtn.onclick = () => {\n      tasks = tasks.filter(t => t.id !== task.id);\n      saveAndRender();\n    };\n\n    li.appendChild(left);\n    li.appendChild(delBtn);\n    taskList.appendChild(li);\n  });\n\n  const activeCount = tasks.filter(t => !t.completed).length;\n  taskCount.textContent = `${activeCount} task${activeCount === 1 ? "" : "s"} left`;\n}\n\nfunction addTask() {\n  const val = taskInput.value.trim();\n  if (!val) return;\n  tasks.push({\n    id: Date.now(),\n    text: val,\n    completed: false\n  });\n  taskInput.value = "";\n  saveAndRender();\n}\n\naddBtn.addEventListener("click", addTask);\ntaskInput.addEventListener("keydown", (e) => { if (e.key === "Enter") addTask(); });\nclearCompletedBtn.addEventListener("click", () => {\n  tasks = tasks.filter(t => !t.completed);\n  saveAndRender();\n});\n\nrender();'
    }
  },
  {
    id: 'proj-digital-calculator',
    title: 'Modern Web Calculator',
    category: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: '35 mins',
    description: 'Build a sleek, functional calculator supporting addition, subtraction, multiplication, division, decimals, and keyboard input.',
    skillsLearned: ['Grid layout', 'Event Delegation', 'State Management', 'Keyboard Events', 'String Parsing'],
    tags: ['JavaScript', 'CSS Grid', 'Calculator'],
    xp: 90,
    steps: [
      {
        stepNumber: 1,
        title: 'Create the Calculator Display & Grid Layout',
        instructions: 'Use CSS Grid (4 columns) to arrange buttons for numbers (0-9), operators (+, -, *, /), clear (AC), and equals (=).',
        snippet: '<div class="calculator">\n  <div class="display" id="calcDisplay">0</div>\n  <div class="keypad">\n    <button class="btn op">AC</button>\n    <button class="btn op">+/-</button>\n    <button class="btn op">%</button>\n    <button class="btn op">÷</button>\n    <!-- Numbers and operators -->\n  </div>\n</div>'
      },
      {
        stepNumber: 2,
        title: 'Implement Calculation Logic',
        instructions: 'Track currentInput, previousInput, and currentOperator in JavaScript.',
        snippet: 'function handleNumber(num) { ... }\nfunction handleOperator(op) { ... }\nfunction calculate() { ... }'
      }
    ],
    starterCode: {
      html: '<div class="calc-container">\n  <div id="screen" class="screen">0</div>\n  <div class="keys">\n    <button class="key">7</button><button class="key">8</button><button class="key">9</button><button class="key op">/</button>\n    <button class="key">4</button><button class="key">5</button><button class="key">6</button><button class="key op">*</button>\n    <button class="key">1</button><button class="key">2</button><button class="key">3</button><button class="key op">-</button>\n    <button class="key">0</button><button class="key">C</button><button class="key equals">=</button><button class="key op">+</button>\n  </div>\n</div>',
      css: 'body { font-family: sans-serif; background: #0f172a; display: flex; justify-content: center; padding: 40px; }\n.calc-container { background: #1e293b; padding: 20px; border-radius: 12px; width: 280px; }\n.screen { background: #0f172a; color: #38bdf8; font-size: 2rem; padding: 16px; border-radius: 8px; text-align: right; margin-bottom: 16px; }\n.keys { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }\n.key { padding: 14px; font-size: 1.1rem; border-radius: 6px; border: none; background: #334155; color: white; cursor: pointer; }\n.key.op { background: #eab308; color: #0f172a; font-weight: bold; }\n.key.equals { background: #10b981; color: white; font-weight: bold; }',
      js: '// Implement calculator calculation logic\n'
    },
    solutionCode: {
      html: '<div class="calc-container">\n  <div id="screen" class="screen">0</div>\n  <div class="keys">\n    <button class="key op" data-action="clear">AC</button>\n    <button class="key op" data-action="delete">DEL</button>\n    <button class="key op" data-action="%">%</button>\n    <button class="key op" data-action="/">÷</button>\n\n    <button class="key" data-num="7">7</button>\n    <button class="key" data-num="8">8</button>\n    <button class="key" data-num="9">9</button>\n    <button class="key op" data-action="*">×</button>\n\n    <button class="key" data-num="4">4</button>\n    <button class="key" data-num="5">5</button>\n    <button class="key" data-num="6">6</button>\n    <button class="key op" data-action="-">−</button>\n\n    <button class="key" data-num="1">1</button>\n    <button class="key" data-num="2">2</button>\n    <button class="key" data-num="3">3</button>\n    <button class="key op" data-action="+">+</button>\n\n    <button class="key zero" data-num="0">0</button>\n    <button class="key" data-num=".">.</button>\n    <button class="key equals" data-action="=">=</button>\n  </div>\n</div>',
      css: 'body { font-family: "Fira Code", monospace; background: #0f172a; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; padding: 20px; }\n.calc-container { background: #1e293b; padding: 24px; border-radius: 16px; width: 300px; border: 1px solid #334155; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); }\n.screen { background: #0f172a; color: #38bdf8; font-size: 2.2rem; padding: 18px 14px; border-radius: 10px; text-align: right; margin-bottom: 20px; font-weight: 700; overflow-x: auto; }\n.keys { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }\n.key { padding: 16px 0; font-size: 1.2rem; border-radius: 8px; border: none; background: #334155; color: white; cursor: pointer; transition: all 0.1s; }\n.key:hover { background: #475569; transform: translateY(-2px); }\n.key.zero { grid-column: span 2; }\n.key.op { background: #475569; color: #facc15; font-weight: bold; }\n.key.op:hover { background: #64748b; }\n.key.equals { background: #38bdf8; color: #0f172a; font-weight: bold; }\n.key.equals:hover { background: #7dd3fc; }',
      js: 'const screen = document.getElementById("screen");\nconst keys = document.querySelector(".keys");\n\nlet current = "0";\nlet previous = "";\nlet operation = null;\nlet resetOnNextNumber = false;\n\nfunction updateDisplay() {\n  screen.textContent = current;\n}\n\nfunction handleNumber(num) {\n  if (current === "0" || resetOnNextNumber) {\n    current = num;\n    resetOnNextNumber = false;\n  } else {\n    if (num === "." && current.includes(".")) return;\n    current += num;\n  }\n  updateDisplay();\n}\n\nfunction handleOperator(op) {\n  if (op === "clear") {\n    current = "0";\n    previous = "";\n    operation = null;\n  } else if (op === "delete") {\n    current = current.length > 1 ? current.slice(0, -1) : "0";\n  } else if (op === "%") {\n    current = (parseFloat(current) / 100).toString();\n  } else if (op === "=") {\n    if (operation && previous) {\n      compute();\n      operation = null;\n      resetOnNextNumber = true;\n    }\n  } else {\n    if (operation) compute();\n    operation = op;\n    previous = current;\n    resetOnNextNumber = true;\n  }\n  updateDisplay();\n}\n\nfunction compute() {\n  const prev = parseFloat(previous);\n  const curr = parseFloat(current);\n  if (isNaN(prev) || isNaN(curr)) return;\n  \n  let result;\n  switch (operation) {\n    case "+": result = prev + curr; break;\n    case "-": result = prev - curr; break;\n    case "*": result = prev * curr; break;\n    case "/": result = curr === 0 ? "Error" : prev / curr; break;\n    default: return;\n  }\n  current = result.toString();\n}\n\nkeys.addEventListener("click", (e) => {\n  const btn = e.target.closest("button");\n  if (!btn) return;\n  if (btn.dataset.num !== undefined) {\n    handleNumber(btn.dataset.num);\n  } else if (btn.dataset.action !== undefined) {\n    handleOperator(btn.dataset.action);\n  }\n});'
    }
  },
  {
    id: 'proj-weather-dashboard',
    title: 'Weather & Climate Dashboard',
    category: 'fullstack',
    difficulty: 'Advanced',
    estimatedTime: '50 mins',
    description: 'Build a weather app with dynamic city lookup, temperature unit conversion (°C/°F), 5-day forecast cards, and animated weather icons.',
    skillsLearned: ['Asynchronous Fetch', 'Dynamic Rendering', 'Conditional CSS Icons', 'Error Handling', 'Responsive Grids'],
    tags: ['JavaScript', 'APIs', 'Async/Await', 'Advanced'],
    xp: 120,
    steps: [
      {
        stepNumber: 1,
        title: 'Search Bar & Main Weather Card',
        instructions: 'Design the weather hero banner displaying city name, temperature, condition description, and weather metrics (humidity, wind speed).',
        snippet: '<div class="weather-app">\n  <div class="search-bar">\n    <input id="cityInput" placeholder="Search city (e.g., Tokyo, London, San Francisco)">\n    <button id="searchBtn">Search</button>\n  </div>\n  <div id="weatherDisplay"></div>\n</div>'
      },
      {
        stepNumber: 2,
        title: 'Fetch & Render Weather Data',
        instructions: 'Create an async function that fetches weather metrics and updates the UI with smooth animations.',
        snippet: 'async function fetchWeather(city) {\n  // simulate or call weather endpoint\n}'
      }
    ],
    starterCode: {
      html: '<div class="weather-box">\n  <h2>Weather Dashboard</h2>\n  <input id="city" placeholder="Enter city name">\n  <button id="btn">Get Weather</button>\n  <div id="result"></div>\n</div>',
      css: 'body { font-family: sans-serif; background: #0f172a; color: white; padding: 40px; display: flex; justify-content: center; }\n.weather-box { background: #1e293b; padding: 24px; border-radius: 12px; width: 340px; }',
      js: '// Write weather fetch logic\n'
    },
    solutionCode: {
      html: '<div class="weather-card">\n  <div class="search-row">\n    <input type="text" id="cityInput" placeholder="Search city (e.g., Tokyo, London, Paris)" value="San Francisco">\n    <button id="searchBtn">🔍</button>\n  </div>\n  \n  <div class="current-weather">\n    <div class="weather-icon" id="weatherIcon">☀️</div>\n    <h1 id="cityName">San Francisco</h1>\n    <div class="temp-row">\n      <span class="temp" id="tempVal">21</span><span class="unit">°C</span>\n    </div>\n    <p class="condition" id="conditionText">Sunny & Pleasant</p>\n  </div>\n\n  <div class="metrics-grid">\n    <div class="metric">\n      <span class="m-label">Humidity</span>\n      <span class="m-val" id="humidityVal">58%</span>\n    </div>\n    <div class="metric">\n      <span class="m-label">Wind</span>\n      <span class="m-val" id="windVal">14 km/h</span>\n    </div>\n    <div class="metric">\n      <span class="m-label">UV Index</span>\n      <span class="m-val">Moderate</span>\n    </div>\n  </div>\n</div>',
      css: 'body {\n  font-family: system-ui, sans-serif;\n  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  margin: 0;\n  padding: 20px;\n  color: #f8fafc;\n}\n\n.weather-card {\n  background: rgba(30, 41, 59, 0.85);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(12px);\n  padding: 28px;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 360px;\n  text-align: center;\n  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5);\n}\n\n.search-row { display: flex; gap: 8px; margin-bottom: 24px; }\ninput { flex: 1; padding: 10px 14px; border-radius: 10px; border: 1px solid #475569; background: #0f172a; color: white; outline: none; font-size: 0.95rem; }\ninput:focus { border-color: #38bdf8; }\n#searchBtn { background: #38bdf8; border: none; padding: 10px 16px; border-radius: 10px; cursor: pointer; font-size: 1.1rem; }\n\n.weather-icon { font-size: 4rem; margin-bottom: 8px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); }\n#cityName { font-size: 1.6rem; margin: 0 0 8px; font-weight: 700; color: #f1f5f9; }\n.temp-row { display: flex; justify-content: center; align-items: flex-start; }\n.temp { font-size: 3.5rem; font-weight: 800; color: #38bdf8; line-height: 1; }\n.unit { font-size: 1.4rem; font-weight: 600; color: #94a3b8; margin-top: 4px; }\n.condition { color: #94a3b8; margin: 8px 0 24px; font-size: 1rem; }\n\n.metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  background: #0f172a;\n  padding: 14px;\n  border-radius: 12px;\n  border: 1px solid #334155;\n}\n\n.metric { display: flex; flex-direction: column; }\n.m-label { font-size: 0.75rem; color: #64748b; margin-bottom: 4px; text-transform: uppercase; }\n.m-val { font-size: 0.95rem; font-weight: 700; color: #f8fafc; }',
      js: 'const mockCities = {\n  "san francisco": { temp: 21, condition: "Sunny & Pleasant", icon: "☀️", humidity: "58%", wind: "14 km/h" },\n  "tokyo": { temp: 27, condition: "Partly Cloudy", icon: "⛅", humidity: "72%", wind: "18 km/h" },\n  "london": { temp: 16, condition: "Light Rain", icon: "🌧️", humidity: "85%", wind: "22 km/h" },\n  "paris": { temp: 23, condition: "Clear Skies", icon: "☀️", humidity: "45%", wind: "9 km/h" },\n  "new york": { temp: 19, condition: "Thunderstorms", icon: "⛈️", humidity: "80%", wind: "25 km/h" }\n};\n\nconst cityInput = document.getElementById("cityInput");\nconst searchBtn = document.getElementById("searchBtn");\n\nfunction lookupWeather() {\n  const query = cityInput.value.trim().toLowerCase();\n  const data = mockCities[query] || {\n    temp: Math.floor(Math.random() * 20) + 15,\n    condition: "Clear & Breezy",\n    icon: "🌤️",\n    humidity: `${Math.floor(Math.random() * 30) + 50}%`,\n    wind: `${Math.floor(Math.random() * 20) + 8} km/h`\n  };\n\n  document.getElementById("cityName").textContent = cityInput.value.trim() || "Local City";\n  document.getElementById("tempVal").textContent = data.temp;\n  document.getElementById("conditionText").textContent = data.condition;\n  document.getElementById("weatherIcon").textContent = data.icon;\n  document.getElementById("humidityVal").textContent = data.humidity;\n  document.getElementById("windVal").textContent = data.wind;\n}\n\nsearchBtn.addEventListener("click", lookupWeather);\ncityInput.addEventListener("keydown", (e) => { if (e.key === "Enter") lookupWeather(); });'
    }
  }
];
