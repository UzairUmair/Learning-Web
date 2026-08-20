import { CodingChallenge } from '../types';

export const CODING_CHALLENGES: CodingChallenge[] = [
  {
    id: 'ch-html-semantic-blog',
    category: 'html',
    difficulty: 'Beginner',
    title: 'Semantic Blog Article Layout',
    description: 'Structure a clean semantic blog article containing a <header> with title and author, a <main> with two paragraphs, an <aside> with related tags, and a <footer>.',
    requirements: [
      'Use a <header> containing an <h1> title',
      'Wrap primary content in a <main> or <article> tag with at least 2 paragraphs',
      'Include an <aside> containing a tag list or quote',
      'Include a <footer> with copyright text'
    ],
    starterCode: {
      html: '<!-- Build your semantic blog post below -->\n<article>\n  \n</article>',
      css: 'article { max-width: 600px; margin: 20px auto; font-family: system-ui, sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; }\nheader h1 { color: #ea580c; margin-top: 0; }\naside { background: #f8fafc; padding: 12px; border-left: 3px solid #f97316; margin: 16px 0; }\nfooter { font-size: 0.85rem; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 10px; }',
      js: ''
    },
    hint: 'Structure: <article><header><h1>...</h1></header><main><p>...</p><p>...</p></main><aside>...</aside><footer>...</footer></article>',
    solution: {
      html: '<article>\n  <header>\n    <h1>The Evolution of Web Design</h1>\n    <p>By Alex Developer</p>\n  </header>\n  <main>\n    <p>Web development has transformed from static text files into reactive applications.</p>\n    <p>Semantic HTML remains the foundation of web accessibility and machine comprehension.</p>\n  </main>\n  <aside>\n    <p><strong>Key Topics:</strong> HTML5, CSS3, JavaScript</p>\n  </aside>\n  <footer>\n    <p>&copy; 2026 CodePath Academy</p>\n  </footer>\n</article>',
      css: 'article { max-width: 600px; margin: 20px auto; font-family: system-ui, sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; }\nheader h1 { color: #ea580c; margin-top: 0; }\naside { background: #f8fafc; padding: 12px; border-left: 3px solid #f97316; margin: 16px 0; }\nfooter { font-size: 0.85rem; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 10px; }',
      js: ''
    },
    tests: [
      {
        id: 't-1',
        description: 'Contains a <header> element with an <h1> tag',
        testFnString: 'return !!document.querySelector("header h1");'
      },
      {
        id: 't-2',
        description: 'Contains at least 2 paragraph (<p>) tags',
        testFnString: 'return document.querySelectorAll("p").length >= 2;'
      },
      {
        id: 't-3',
        description: 'Contains an <aside> element and a <footer> element',
        testFnString: 'return !!document.querySelector("aside") && !!document.querySelector("footer");'
      }
    ],
    xp: 30
  },
  {
    id: 'ch-css-flex-center',
    category: 'css',
    difficulty: 'Easy',
    title: 'Center an Element with Flexbox',
    description: 'Use Flexbox to center the inner card horizontally and vertically inside a full-height container.',
    requirements: [
      'Apply display: flex to the .hero-container',
      'Align items along the main axis using justify-content: center',
      'Align items along the cross axis using align-items: center',
      'Give .hero-container min-height: 250px'
    ],
    starterCode: {
      html: '<div class="hero-container">\n  <div class="hero-card">\n    <h2>I am centered! 🎯</h2>\n  </div>\n</div>',
      css: '.hero-container {\n  background: #0f172a;\n  /* Add your flexbox centering rules here */\n}\n\n.hero-card {\n  background: #1e293b;\n  color: #38bdf8;\n  padding: 24px 36px;\n  border-radius: 8px;\n  border: 1px solid #334155;\n  text-align: center;\n}',
      js: ''
    },
    hint: 'Add display: flex; justify-content: center; align-items: center; min-height: 250px; to .hero-container',
    solution: {
      html: '<div class="hero-container">\n  <div class="hero-card">\n    <h2>I am centered! 🎯</h2>\n  </div>\n</div>',
      css: '.hero-container {\n  background: #0f172a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 250px;\n}\n\n.hero-card {\n  background: #1e293b;\n  color: #38bdf8;\n  padding: 24px 36px;\n  border-radius: 8px;\n  border: 1px solid #334155;\n  text-align: center;\n}',
      js: ''
    },
    tests: [
      {
        id: 't-1',
        description: '.hero-container uses display: flex',
        testFnString: 'const el = document.querySelector(".hero-container"); return window.getComputedStyle(el).display === "flex";'
      },
      {
        id: 't-2',
        description: '.hero-container centers content horizontally (justify-content: center)',
        testFnString: 'const el = document.querySelector(".hero-container"); return window.getComputedStyle(el).justifyContent === "center";'
      },
      {
        id: 't-3',
        description: '.hero-container centers content vertically (align-items: center)',
        testFnString: 'const el = document.querySelector(".hero-container"); return window.getComputedStyle(el).alignItems === "center";'
      }
    ],
    xp: 30
  },
  {
    id: 'ch-js-reverse-string',
    category: 'javascript',
    difficulty: 'Easy',
    title: 'Reverse a String',
    description: 'Write a JavaScript function named reverseString(str) that takes a string input and returns the reversed characters.',
    requirements: [
      'Declare a function or arrow function named reverseString',
      'reverseString("hello") should return "olleh"',
      'reverseString("CodePath") should return "htaPedoC"'
    ],
    starterCode: {
      html: '<div id="app" style="font-family: sans-serif; padding: 20px;">\n  <h3>Reverse String Tester</h3>\n  <p id="out">Open console or run test cases!</p>\n</div>',
      css: '',
      js: '// Complete the function:\nfunction reverseString(str) {\n  // Your code here\n  \n}\n\n// Example test:\nconsole.log(reverseString("hello")); // Expected: "olleh"'
    },
    hint: 'You can split the string into an array of characters, reverse the array, and join it back: str.split("").reverse().join("")',
    solution: {
      html: '<div id="app" style="font-family: sans-serif; padding: 20px;">\n  <h3>Reverse String Tester</h3>\n  <p id="out">Open console or run test cases!</p>\n</div>',
      css: '',
      js: 'function reverseString(str) {\n  return str.split("").reverse().join("");\n}\n\nconsole.log(reverseString("hello"));'
    },
    tests: [
      {
        id: 't-1',
        description: 'reverseString("hello") returns "olleh"',
        testFnString: 'return typeof reverseString === "function" && reverseString("hello") === "olleh";'
      },
      {
        id: 't-2',
        description: 'reverseString("CodePath") returns "htaPedoC"',
        testFnString: 'return reverseString("CodePath") === "htaPedoC";'
      }
    ],
    xp: 30
  },
  {
    id: 'ch-js-largest-number',
    category: 'javascript',
    difficulty: 'Easy',
    title: 'Find Largest Number in Array',
    description: 'Write a JavaScript function named findLargest(numbers) that returns the maximum numerical value in an array.',
    requirements: [
      'Function named findLargest(numbers)',
      'findLargest([4, 19, 2, 88, 12]) should return 88',
      'findLargest([-10, -5, -20]) should return -5'
    ],
    starterCode: {
      html: '<div style="font-family: sans-serif; padding: 20px;">Check console output</div>',
      css: '',
      js: '// Write findLargest function\nfunction findLargest(numbers) {\n  // Your code here\n  \n}\n\nconsole.log(findLargest([4, 19, 2, 88, 12])); // Expected: 88'
    },
    hint: 'You can use Math.max(...numbers) or a loop comparing each number to a highest value.',
    solution: {
      html: '<div style="font-family: sans-serif; padding: 20px;">Check console output</div>',
      css: '',
      js: 'function findLargest(numbers) {\n  return Math.max(...numbers);\n}\n\nconsole.log(findLargest([4, 19, 2, 88, 12]));'
    },
    tests: [
      {
        id: 't-1',
        description: 'findLargest([4, 19, 2, 88, 12]) returns 88',
        testFnString: 'return typeof findLargest === "function" && findLargest([4, 19, 2, 88, 12]) === 88;'
      },
      {
        id: 't-2',
        description: 'findLargest([-10, -5, -20]) returns -5',
        testFnString: 'return findLargest([-10, -5, -20]) === -5;'
      }
    ],
    xp: 30
  },
  {
    id: 'ch-js-palindrome',
    category: 'javascript',
    difficulty: 'Medium',
    title: 'Palindrome Checker',
    description: 'Write a function isPalindrome(str) that checks if a word reads the same backwards as forwards (ignoring case).',
    requirements: [
      'isPalindrome("racecar") returns true',
      'isPalindrome("RaceCar") returns true (case-insensitive)',
      'isPalindrome("hello") returns false'
    ],
    starterCode: {
      html: '<div style="font-family: sans-serif; padding: 20px;">Palindrome Checker Challenge</div>',
      css: '',
      js: 'function isPalindrome(str) {\n  // Your code here\n  \n}\n\nconsole.log(isPalindrome("racecar")); // true'
    },
    hint: 'Convert to lowercase first with toLowerCase(), reverse it, and compare to original.',
    solution: {
      html: '<div style="font-family: sans-serif; padding: 20px;">Palindrome Checker Challenge</div>',
      css: '',
      js: 'function isPalindrome(str) {\n  const clean = str.toLowerCase();\n  return clean === clean.split("").reverse().join("");\n}\n\nconsole.log(isPalindrome("RaceCar"));'
    },
    tests: [
      {
        id: 't-1',
        description: 'isPalindrome("racecar") === true',
        testFnString: 'return typeof isPalindrome === "function" && isPalindrome("racecar") === true;'
      },
      {
        id: 't-2',
        description: 'isPalindrome("RaceCar") === true (case-insensitive)',
        testFnString: 'return isPalindrome("RaceCar") === true;'
      },
      {
        id: 't-3',
        description: 'isPalindrome("hello") === false',
        testFnString: 'return isPalindrome("hello") === false;'
      }
    ],
    xp: 40
  },
  {
    id: 'ch-js-interactive-counter',
    category: 'javascript',
    difficulty: 'Medium',
    title: 'Build an Interactive Counter with DOM',
    description: 'Create an interactive counter with increment (+), decrement (-), and reset buttons that update an on-screen display count.',
    requirements: [
      'Button with id="incBtn" that increases count by 1',
      'Button with id="decBtn" that decreases count by 1',
      'Button with id="resetBtn" that sets count to 0',
      'Span with id="counterVal" displaying the current number'
    ],
    starterCode: {
      html: '<div class="counter-card">\n  <h2>Counter: <span id="counterVal">0</span></h2>\n  <button id="decBtn">-</button>\n  <button id="resetBtn">Reset</button>\n  <button id="incBtn">+</button>\n</div>',
      css: 'body { font-family: sans-serif; display: flex; justify-content: center; padding: 40px; background: #0f172a; color: white; }\n.counter-card { background: #1e293b; padding: 24px; border-radius: 8px; text-align: center; border: 1px solid #334155; }\nbutton { margin: 0 4px; padding: 8px 16px; font-size: 1.1rem; border-radius: 4px; border: none; background: #38bdf8; color: #0f172a; font-weight: bold; cursor: pointer; }',
      js: '// Write DOM event listeners to update #counterVal\n'
    },
    hint: 'Use let count = 0; attach event listeners to buttons that update count and set counterVal.textContent = count;',
    solution: {
      html: '<div class="counter-card">\n  <h2>Counter: <span id="counterVal">0</span></h2>\n  <button id="decBtn">-</button>\n  <button id="resetBtn">Reset</button>\n  <button id="incBtn">+</button>\n</div>',
      css: 'body { font-family: sans-serif; display: flex; justify-content: center; padding: 40px; background: #0f172a; color: white; }\n.counter-card { background: #1e293b; padding: 24px; border-radius: 8px; text-align: center; border: 1px solid #334155; }\nbutton { margin: 0 4px; padding: 8px 16px; font-size: 1.1rem; border-radius: 4px; border: none; background: #38bdf8; color: #0f172a; font-weight: bold; cursor: pointer; }',
      js: 'let count = 0;\nconst valEl = document.getElementById("counterVal");\nconst incBtn = document.getElementById("incBtn");\nconst decBtn = document.getElementById("decBtn");\nconst resetBtn = document.getElementById("resetBtn");\n\nincBtn.addEventListener("click", () => {\n  count++;\n  valEl.textContent = count;\n});\n\ndecBtn.addEventListener("click", () => {\n  count--;\n  valEl.textContent = count;\n});\n\nresetBtn.addEventListener("click", () => {\n  count = 0;\n  valEl.textContent = count;\n});'
    },
    tests: [
      {
        id: 't-1',
        description: 'Clicking #incBtn increments #counterVal from 0 to 1',
        testFnString: 'const btn = document.getElementById("incBtn"); const val = document.getElementById("counterVal"); btn.click(); return val.textContent.trim() === "1";'
      },
      {
        id: 't-2',
        description: 'Clicking #resetBtn sets #counterVal back to 0',
        testFnString: 'const rst = document.getElementById("resetBtn"); const val = document.getElementById("counterVal"); rst.click(); return val.textContent.trim() === "0";'
      }
    ],
    xp: 40
  }
];
