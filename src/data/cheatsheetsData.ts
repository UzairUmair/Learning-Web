import { CheatSheetCategory } from '../types';

export const CHEAT_SHEETS: CheatSheetCategory[] = [
  {
    id: 'cs-html',
    courseId: 'html',
    title: 'HTML5 Cheat Sheet',
    description: 'Quick reference for common HTML tags, attributes, semantic elements, and forms.',
    items: [
      {
        term: 'Document Structure',
        syntax: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n  </head>\n  <body>...</body>\n</html>',
        description: 'Standard modern HTML5 boiler template for every webpage.',
        categoryTag: 'Structure'
      },
      {
        term: 'Headings (h1 - h6)',
        syntax: '<h1>Main Heading</h1>\n<h2>Subheading</h2>\n<h3>Section Heading</h3>',
        description: 'Hierarchical section headings from h1 (highest importance) to h6 (lowest).',
        categoryTag: 'Text'
      },
      {
        term: 'Paragraph & Line Break',
        syntax: '<p>A paragraph of text.</p>\n<br> <!-- Line break -->\n<hr> <!-- Horizontal divider rule -->',
        description: 'Blocks of text with optional manual line breaks and thematic rules.',
        categoryTag: 'Text'
      },
      {
        term: 'Anchor Links',
        syntax: '<a href="https://example.com" target="_blank" rel="noopener">Link Text</a>\n<a href="#section-id">Jump on page</a>\n<a href="mailto:dev@code.org">Email Link</a>',
        description: 'Hyperlinks to external websites, in-page anchors, or mailto links.',
        categoryTag: 'Navigation'
      },
      {
        term: 'Images & Figures',
        syntax: '<figure>\n  <img src="photo.jpg" alt="Description for accessibility" width="600" height="400">\n  <figcaption>Caption under image</figcaption>\n</figure>',
        description: 'Embedding images with mandatory alt description and semantic figure containers.',
        categoryTag: 'Media'
      },
      {
        term: 'Lists (Ordered & Unordered)',
        syntax: '<!-- Unordered (bullets) -->\n<ul>\n  <li>Item 1</li>\n</ul>\n\n<!-- Ordered (numbers) -->\n<ol>\n  <li>Step 1</li>\n</ol>',
        description: 'Lists for grouping related items or ordered sequential instructions.',
        categoryTag: 'Lists'
      },
      {
        term: 'Form Controls',
        syntax: '<form action="/api" method="POST">\n  <label for="name">Name:</label>\n  <input type="text" id="name" required placeholder="Jane Doe">\n  <input type="email" required>\n  <input type="password" required>\n  <button type="submit">Submit</button>\n</form>',
        description: 'Interactive user input forms with built-in client validation.',
        categoryTag: 'Forms'
      },
      {
        term: 'Semantic Layout Tags',
        syntax: '<header>Navigation & Branding</header>\n<nav>Main Links</nav>\n<main>\n  <article>Primary Story</article>\n  <aside>Sidebar</aside>\n</main>\n<footer>Copyright & Legal</footer>',
        description: 'Modern semantic landmark tags that assist search engines and screen readers.',
        categoryTag: 'Semantics'
      }
    ]
  },
  {
    id: 'cs-css',
    courseId: 'css',
    title: 'CSS3 Cheat Sheet',
    description: 'Essential CSS selectors, Box Model rules, Flexbox, Grid, and modern responsive techniques.',
    items: [
      {
        term: 'CSS Reset & Box Sizing',
        syntax: '*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}',
        description: 'Universal reset ensuring padding and borders are included in calculated element widths.',
        categoryTag: 'Basics'
      },
      {
        term: 'Flexbox Centering',
        syntax: '.parent {\n  display: flex;\n  justify-content: center; /* horizontal */\n  align-items: center; /* vertical */\n  min-height: 100vh;\n}',
        description: 'The standard modern method to center any element horizontally and vertically.',
        categoryTag: 'Flexbox'
      },
      {
        term: 'Flexbox Row with Gap',
        syntax: '.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}',
        description: 'Responsive flex container with clean gutters and wrapping support.',
        categoryTag: 'Flexbox'
      },
      {
        term: 'CSS Grid Auto-Fit Responsive Columns',
        syntax: '.grid-layout {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n}',
        description: 'Creates a fully responsive card grid without needing media queries.',
        categoryTag: 'Grid'
      },
      {
        term: 'CSS Custom Properties (Variables)',
        syntax: ':root {\n  --primary-color: #3b82f6;\n  --radius: 8px;\n}\n\n.card {\n  color: var(--primary-color);\n  border-radius: var(--radius);\n}',
        description: 'Reusable global design tokens that can be updated dynamically at runtime.',
        categoryTag: 'Modern CSS'
      },
      {
        term: 'Responsive Media Queries',
        syntax: '/* Mobile first baseline */\n.container { width: 100%; }\n\n/* Tablet and up */\n@media (min-width: 768px) {\n  .container { max-width: 720px; }\n}\n\n/* Desktop and up */\n@media (min-width: 1024px) {\n  .container { max-width: 960px; }\n}',
        description: 'Adapting styling layouts based on the visitor screen viewport width.',
        categoryTag: 'Responsive'
      },
      {
        term: 'Transitions & Hover Animations',
        syntax: '.btn {\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n}',
        description: 'Smooth hardware-accelerated transitions for interactive buttons and cards.',
        categoryTag: 'Animation'
      }
    ]
  },
  {
    id: 'cs-js',
    courseId: 'javascript',
    title: 'JavaScript (ES6+) Cheat Sheet',
    description: 'Core syntax, Array helper methods, DOM manipulation, async/await, and localStorage.',
    items: [
      {
        term: 'Variables (const & let)',
        syntax: 'const PI = 3.14159; // Immutable binding\nlet score = 0; // Reassignable\nscore += 10;',
        description: 'Block-scoped variable declarations in modern JavaScript.',
        categoryTag: 'Basics'
      },
      {
        term: 'Array Transformation Methods',
        syntax: '// Map (transform each item)\nconst doubled = [1, 2, 3].map(n => n * 2); // [2, 4, 6]\n\n// Filter (keep matching items)\nconst evens = [1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]\n\n// Reduce (accumulate to single value)\nconst sum = [10, 20, 30].reduce((acc, curr) => acc + curr, 0); // 60',
        description: 'Pure, functional array transformation methods that return new arrays.',
        categoryTag: 'Arrays'
      },
      {
        term: 'Object & Array Destructuring',
        syntax: 'const user = { name: "Alex", role: "Dev", level: 3 };\nconst { name, role } = user;\n\nconst colors = ["red", "green", "blue"];\nconst [firstColor, secondColor] = colors;',
        description: 'Concise syntax for unpacking properties from objects and arrays into distinct variables.',
        categoryTag: 'Modern JS'
      },
      {
        term: 'DOM Selection & Manipulation',
        syntax: 'const el = document.querySelector(".my-element");\nel.textContent = "New Text Content";\nel.classList.add("active");\nel.classList.toggle("hidden");',
        description: 'Selecting elements and altering their text, classes, and attributes safely.',
        categoryTag: 'DOM'
      },
      {
        term: 'Event Listeners',
        syntax: 'const btn = document.querySelector("#submitBtn");\nbtn.addEventListener("click", (event) => {\n  event.preventDefault();\n  console.log("Clicked target:", event.target);\n});',
        description: 'Listening and responding to user actions like clicks, inputs, submits, or keyboard keys.',
        categoryTag: 'Events'
      },
      {
        term: 'Async / Await with Fetch API',
        syntax: 'async function fetchPosts() {\n  try {\n    const res = await fetch("https://api.example.com/posts");\n    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error("Fetch failed:", err);\n  }\n}',
        description: 'Modern asynchronous HTTP request pattern using Promises and try/catch.',
        categoryTag: 'Async & APIs'
      },
      {
        term: 'Browser LocalStorage',
        syntax: '// Save object\nlocalStorage.setItem("userKey", JSON.stringify({ name: "Jane" }));\n\n// Retrieve object\nconst saved = JSON.parse(localStorage.getItem("userKey"));\n\n// Remove\nlocalStorage.removeItem("userKey");',
        description: 'Client-side persistent key-value store saved directly in the browser.',
        categoryTag: 'Storage'
      }
    ]
  }
];
