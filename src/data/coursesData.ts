import { Course } from '../types';

export const COURSES: Course[] = [
  // ==========================================
  // HTML COURSE
  // ==========================================
  {
    id: 'html',
    title: 'HTML',
    subtitle: 'Structure the Web',
    description: 'Learn how websites are structured from absolute beginner to advanced semantic architecture and accessibility.',
    accentColor: 'orange',
    icon: 'Code2',
    totalLessons: 12,
    modules: [
      {
        id: 'html-level-1',
        title: 'HTML Level 1 — Absolute Beginner',
        level: 'Level 1',
        description: 'Understand what HTML is, how web browsers work, document structure, and basic tags.',
        lessons: [
          {
            id: 'html-intro-1',
            courseId: 'html',
            moduleId: 'html-level-1',
            moduleTitle: 'HTML Level 1 — Absolute Beginner',
            title: 'What is HTML & How Websites Work',
            level: 'Absolute Beginner',
            estimatedMinutes: 5,
            concept: 'HTML stands for HyperText Markup Language. It is the fundamental building block of every single website on the internet. While CSS handles styling and JavaScript handles interactivity, HTML creates the skeleton and content of the page (text, images, links, forms).',
            analogy: 'Imagine building a house: HTML is the concrete foundation and wooden framing; CSS is the paint, wallpaper, and interior design; JavaScript is the electricity, plumbing, and smart appliances that make things respond when you flip a switch.',
            syntaxCode: '<tagName attribute="value">Content goes here</tagName>',
            syntaxLanguage: 'html',
            exampleCode: {
              html: '<h1>Hello, World!</h1>\n<p>Welcome to web development. This is my very first webpage!</p>',
              css: 'body {\n  font-family: sans-serif;\n  padding: 1.5rem;\n  color: #1e293b;\n}\nh1 {\n  color: #ea580c;\n}',
              js: '// HTML provides structure\nconsole.log("HTML loaded successfully!");'
            },
            explanationLines: [
              '<h1> is an opening tag that defines the primary top-level heading.',
              '"Hello, World!" is the text content displayed inside the heading.',
              '</h1> is the closing tag (notice the forward slash /) which tells the browser the heading is finished.',
              '<p> defines a paragraph of regular body text.'
            ],
            interactiveStarter: {
              html: '<h1>My Awesome Webpage</h1>\n<p>I am learning HTML on CodePath Academy!</p>\n<p>Try changing this text and click Run!</p>',
              css: 'body { font-family: sans-serif; padding: 20px; }\nh1 { color: #f97316; }',
              js: 'console.log("Interactive HTML example loaded.");'
            },
            commonMistakes: [
              {
                mistake: 'Forgetting the closing slash (e.g. <p>Hello<p>)',
                fix: 'Always close paired tags with a forward slash: <p>Hello</p>',
                why: 'Unclosed tags can cause subsequent elements to render improperly or inherit unintended styles.'
              },
              {
                mistake: 'Using uppercase tags like <H1> or <P>',
                fix: 'Always write HTML tags in lowercase (<h1\>, <p>)',
                why: 'While HTML is case-insensitive, lowercase is the strict industry standard and W3C recommendation.'
              }
            ],
            bestPractices: [
              'Always pair opening and closing tags immediately to avoid missing them.',
              'Use proper nesting indentation so your code is easily readable.'
            ],
            exercise: {
              instructions: 'Create an <h1> heading with the text "Welcome to My Site" and a <p> paragraph below it stating "I am becoming a web developer today!".',
              hint: 'Wrap the headline in <h1>...</h1> and the paragraph in <p>...</p>',
              solution: '<h1>Welcome to My Site</h1>\n<p>I am becoming a web developer today!</p>',
              starterCode: {
                html: '<!-- Write your HTML below -->\n\n',
                css: 'body { font-family: sans-serif; padding: 20px; }',
                js: ''
              }
            },
            quiz: [
              {
                id: 'q-html-1-1',
                question: 'What does HTML stand for?',
                options: [
                  'HyperText Markup Language',
                  'Hyperlink Text Management Language',
                  'High Tech Modern Language',
                  'Home Tool Markup Language'
                ],
                correctIndex: 0,
                explanation: 'HTML stands for HyperText Markup Language, the standard markup language for documents designed to be displayed in a web browser.'
              },
              {
                id: 'q-html-1-2',
                question: 'Which tag is used for the largest main heading on a webpage?',
                options: ['<h6>', '<head>', '<h1>', '<heading>'],
                correctIndex: 2,
                explanation: '<h1> represents the highest level heading on a webpage and is usually the most prominent title.'
              }
            ]
          },
          {
            id: 'html-doc-structure-2',
            courseId: 'html',
            moduleId: 'html-level-1',
            moduleTitle: 'HTML Level 1 — Absolute Beginner',
            title: 'HTML Document Structure & DOCTYPE',
            level: 'Absolute Beginner',
            estimatedMinutes: 6,
            concept: 'Every standard HTML5 document starts with a <!DOCTYPE html> declaration followed by the root <html> element. Inside <html>, there are two main children: the <head> (which holds background metadata, title, and stylesheets) and the <body> (which holds all visible content).',
            analogy: 'Think of an HTML document like a human being: the <head> contains the brain (thoughts, metadata, title, styling instructions not visible directly), while the <body> contains everything the world sees and interacts with (arms, legs, face, clothes).',
            syntaxCode: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <title>Page Title</title>\n  </head>\n  <body>\n    <!-- Visible content here -->\n  </body>\n</html>',
            syntaxLanguage: 'html',
            exampleCode: {
              html: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <title>My Portfolio</title>\n  </head>\n  <body>\n    <h1>Jane Doe</h1>\n    <p>Front-End Web Developer</p>\n    <hr>\n    <p>Building clean and accessible web experiences.</p>\n  </body>\n</html>',
              css: 'body { font-family: system-ui, sans-serif; padding: 2rem; background: #fafafa; color: #333; }\nhr { border: 0; height: 1px; background: #e2e8f0; margin: 1.5rem 0; }',
              js: 'console.log("Document structure validated!");'
            },
            explanationLines: [
              '<!DOCTYPE html> informs the browser that this document adheres to the modern HTML5 standard.',
              '<html lang="en"> is the root element wrapping all content, specifying English as the primary language for accessibility.',
              '<head> contains machine-readable metadata like character encoding (<meta charset="UTF-8">) and the browser tab title (<title>).',
              '<body> wraps all visual elements that users can view on the screen.',
              '<hr> creates a thematic break or horizontal rule dividing sections.'
            ],
            interactiveStarter: {
              html: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <title>My Cool Page</title>\n  </head>\n  <body>\n    <h1>Learning Document Structure</h1>\n    <p>Everything inside body is visible.</p>\n  </body>\n</html>',
              css: 'body { font-family: sans-serif; padding: 20px; line-height: 1.6; }',
              js: ''
            },
            commonMistakes: [
              {
                mistake: 'Putting visible text (like <h1>) inside the <head> tag',
                fix: 'Keep visible content exclusively inside the <body> tag',
                why: 'The <head> tag is meant strictly for metadata, scripts, stylesheets, and page titles.'
              },
              {
                mistake: 'Omitting <!DOCTYPE html>',
                fix: 'Always start files with <!DOCTYPE html>',
                why: 'Without DOCTYPE, browsers switch to "quirks mode" which can cause erratic rendering.'
              }
            ],
            bestPractices: [
              'Always specify a meaningful <title> tag inside <head> for search engines and bookmarking.',
              'Include <meta name="viewport" content="width=device-width, initial-scale=1.0"> for responsive mobile rendering.'
            ],
            exercise: {
              instructions: 'Add a second paragraph with a line break (<br>) separating two sentences inside the <body>.',
              hint: 'Use <br> (self-closing tag) inside a <p> tag to create a manual line break.',
              solution: '<p>First line of text.<br>Second line of text after break.</p>',
              starterCode: {
                html: '<h1>Line Break Demo</h1>\n<!-- Add your paragraph with a <br> below -->\n',
                css: 'body { font-family: sans-serif; padding: 20px; }',
                js: ''
              }
            },
            quiz: [
              {
                id: 'q-html-2-1',
                question: 'Which tag contains elements that are visible to the user on the screen?',
                options: ['<head>', '<body>', '<meta>', '<title>'],
                correctIndex: 1,
                explanation: 'The <body> tag holds all visible elements such as headings, paragraphs, images, tables, and buttons.'
              },
              {
                id: 'q-html-2-2',
                question: 'What is the purpose of <!DOCTYPE html>?',
                options: [
                  'It tells the browser the document is written in HTML5 standard mode',
                  'It links CSS stylesheets to the page',
                  'It defines the background color',
                  'It encrypts the webpage'
                ],
                correctIndex: 0,
                explanation: '<!DOCTYPE html> is a document type declaration that instructs the web browser to render the page in standard HTML5 mode.'
              }
            ]
          }
        ]
      },
      {
        id: 'html-level-2',
        title: 'HTML Level 2 — Text, Formatting & Links',
        level: 'Beginner',
        description: 'Master typographic formatting, emphasis, hyperlinks, internal navigation, and images.',
        lessons: [
          {
            id: 'html-text-links-3',
            courseId: 'html',
            moduleId: 'html-level-2',
            moduleTitle: 'HTML Level 2 — Text, Formatting & Links',
            title: 'Links, Anchor Tags & Text Formatting',
            level: 'Beginner',
            estimatedMinutes: 6,
            concept: 'The true power of the web comes from "Hyperlinks". The <a> (anchor) tag creates links to other pages, files, email addresses, or specific sections on the same page. The href attribute specifies the destination URL. For text formatting, tags like <strong> and <em> convey semantic emphasis.',
            analogy: 'An anchor tag with an href is like a teleportation portal with coordinates. The text inside the tag is the sign on the portal door, and href is the destination address.',
            syntaxCode: '<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Website</a>\n<strong>Important</strong> and <em>Emphasized</em>',
            syntaxLanguage: 'html',
            exampleCode: {
              html: '<p>Explore our courses on <strong>CodePath Academy</strong>!</p>\n<p>Learn more on <a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a> for in-depth documentation.</p>\n<p><mark>Special Tip:</mark> Always use <code>alt</code> attributes with images!</p>',
              css: 'body { font-family: sans-serif; padding: 20px; line-height: 1.6; }\na { color: #0284c7; text-decoration: none; font-weight: 600; }\na:hover { text-decoration: underline; }\nmark { background: #fef08a; padding: 2px 6px; border-radius: 4px; }\ncode { background: #f1f5f9; padding: 2px 5px; border-radius: 4px; font-family: monospace; }',
              js: 'console.log("Links & Formatting loaded");'
            },
            explanationLines: [
              '<a href="...">: The href (Hypertext Reference) attribute holds the destination web address.',
              'target="_blank": Instructs the browser to open the link in a new browser tab.',
              '<strong>: Indicates strong importance (rendered bold by default, and emphasized by screen readers).',
              '<em>: Indicates stress emphasis (rendered in italics by default).',
              '<mark>: Highlights relevant text for visual contrast.'
            ],
            interactiveStarter: {
              html: '<p>Check out <a href="https://google.com" target="_blank">Google Search</a>.</p>\n<p>This text is <strong>bold & important</strong> and this is <em>italicized</em>.</p>',
              css: 'body { font-family: sans-serif; padding: 20px; }',
              js: ''
            },
            commonMistakes: [
              {
                mistake: 'Using generic link text like "Click Here" or "Read More"',
                fix: 'Use descriptive anchor text like "Read our JavaScript Guide"',
                why: 'Descriptive text is vital for accessibility screen readers and search engine optimization.'
              },
              {
                mistake: 'Forgetting the protocol (https://) in external links',
                fix: 'Always use absolute URLs with https:// for external domains (e.g. href="https://example.com")',
                why: 'Omitting https:// will cause the browser to look for a local relative file named "example.com".'
              }
            ],
            bestPractices: [
              'When using target="_blank", include rel="noopener noreferrer" for security against tab-napping.',
              'Use <strong> and <em> over <b> and <i> because they carry semantic meaning for assistive technologies.'
            ],
            exercise: {
              instructions: 'Create an anchor link that points to "https://wikipedia.org" with the visible link text "Visit Wikipedia", opened in a new tab.',
              hint: 'Use <a href="https://wikipedia.org" target="_blank">Visit Wikipedia</a>',
              solution: '<a href="https://wikipedia.org" target="_blank" rel="noopener noreferrer">Visit Wikipedia</a>',
              starterCode: {
                html: '<!-- Create your anchor link below -->\n\n',
                css: 'body { font-family: sans-serif; padding: 20px; } a { color: #2563eb; }',
                js: ''
              }
            },
            quiz: [
              {
                id: 'q-html-3-1',
                question: 'Which attribute defines the destination URL for an anchor tag?',
                options: ['src', 'href', 'link', 'dest'],
                correctIndex: 1,
                explanation: 'The href (Hypertext Reference) attribute specifies the URL of the page the link goes to.'
              },
              {
                id: 'q-html-3-2',
                question: 'How do you tell a link to open in a new tab or window?',
                options: ['new="tab"', 'target="_blank"', 'window="new"', 'open="external"'],
                correctIndex: 1,
                explanation: 'target="_blank" is the standard attribute value that tells the browser to open the URL in a new browsing context.'
              }
            ]
          },
          {
            id: 'html-images-media-4',
            courseId: 'html',
            moduleId: 'html-level-2',
            moduleTitle: 'HTML Level 2 — Text, Formatting & Links',
            title: 'Images, Alt Text & Figures',
            level: 'Beginner',
            estimatedMinutes: 6,
            concept: 'The <img> tag embeds images onto a webpage. It is an empty/self-closing element that requires two main attributes: src (source file path or URL) and alt (alternative text describing the image for screen readers and search engines).',
            analogy: 'An <img> tag is like a picture frame on your wall. The frame itself doesn\'t contain the artwork—it points to where the painting is stored (the src) and has a label underneath for visitors who can\'t see it (the alt text).',
            syntaxCode: '<figure>\n  <img src="path/to/image.jpg" alt="A descriptive caption" width="600" height="400">\n  <figcaption>Photo caption text</figcaption>\n</figure>',
            syntaxLanguage: 'html',
            exampleCode: {
              html: '<figure>\n  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60" alt="MacBook on a clean desk displaying code editor" width="400">\n  <figcaption>Modern web development workspace.</figcaption>\n</figure>',
              css: 'body { font-family: sans-serif; padding: 20px; }\nfigure {\n  margin: 0;\n  max-width: 400px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  overflow: hidden;\n}\nimg {\n  display: block;\n  width: 100%;\n  height: auto;\n}\nfigcaption {\n  padding: 10px;\n  font-size: 0.9rem;\n  color: #64748b;\n  text-align: center;\n}',
              js: 'console.log("Image loaded with semantic figure tag");'
            },
            explanationLines: [
              '<img src="...">: src defines the image path, either a local relative path or remote HTTPS URL.',
              'alt="...": alt provides essential description for accessibility and if the image fails to load.',
              '<figure> and <figcaption>: Semantic HTML tags that pair media content with an optional caption.'
            ],
            interactiveStarter: {
              html: '<img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500" alt="Developer coding on a laptop" style="max-width: 100%; border-radius: 8px;">\n<p>Try changing the image URL or alt attribute!</p>',
              css: 'body { font-family: sans-serif; padding: 20px; }',
              js: ''
            },
            commonMistakes: [
              {
                mistake: 'Leaving the alt attribute empty or omitting it entirely',
                fix: 'Always provide descriptive alt text (e.g., alt="Golden retriever puppy sitting on grass")',
                why: 'Screen readers rely on alt text to describe visuals to visually impaired users.'
              }
            ],
            bestPractices: [
              'Include width and height attributes or CSS aspect-ratio to prevent Layout Shifts (CLS).',
              'Use modern formats like WebP or AVIF for fast web performance.'
            ],
            exercise: {
              instructions: 'Write an <img> tag with src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400" and an appropriate alt attribute.',
              hint: '<img src="..." alt="Coding monitor screen">',
              solution: '<img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400" alt="Computer monitor showing programming code">',
              starterCode: {
                html: '<!-- Add your image tag below -->\n\n',
                css: 'img { max-width: 100%; border-radius: 6px; }',
                js: ''
              }
            },
            quiz: [
              {
                id: 'q-html-4-1',
                question: 'Why is the alt attribute required on <img> elements?',
                options: [
                  'For accessibility, screen readers, and SEO when images fail to load',
                  'To set the background color of the image',
                  'To animate the image',
                  'To create a download button'
                ],
                correctIndex: 0,
                explanation: 'The alt attribute provides critical alternate text for assistive technology and fallback display if network requests fail.'
              }
            ]
          }
        ]
      },
      {
        id: 'html-level-3',
        title: 'HTML Level 3 — Lists, Tables & Forms',
        level: 'Intermediate',
        description: 'Build ordered/unordered lists, structured data tables, and interactive input forms with validation.',
        lessons: [
          {
            id: 'html-lists-tables-5',
            courseId: 'html',
            moduleId: 'html-level-3',
            moduleTitle: 'HTML Level 3 — Lists, Tables & Forms',
            title: 'Lists & Structured Tables',
            level: 'Intermediate',
            estimatedMinutes: 7,
            concept: 'Lists organize related items either in an unordered bulleted format (<ul>) or ordered numbered sequence (<ol>), with each item wrapped in <li>. For two-dimensional tabular data, HTML provides <table> with semantic containers <thead>, <tbody>, <tfoot>, <tr> (rows), <th> (headers), and <td> (data cells).',
            analogy: 'An unordered list is like a grocery shopping list (order doesn\'t matter); an ordered list is like a recipe step-by-step instructions (order matters); a table is like an Excel spreadsheet grid.',
            syntaxCode: '<ul>\n  <li>Item A</li>\n  <li>Item B</li>\n</ul>\n\n<table>\n  <thead>\n    <tr><th>Header</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Data</td></tr>\n  </tbody>\n</table>',
            syntaxLanguage: 'html',
            exampleCode: {
              html: '<h3>Web Tech Stack</h3>\n<ul>\n  <li>HTML5 (Structure)</li>\n  <li>CSS3 (Design & Layout)</li>\n  <li>JavaScript (Logic & Interactivity)</li>\n</ul>\n\n<h3>Course Summary</h3>\n<table>\n  <thead>\n    <tr>\n      <th>Course</th>\n      <th>Level</th>\n      <th>Duration</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>HTML5 Masterclass</td>\n      <td>Beginner</td>\n      <td>3 Hours</td>\n    </tr>\n    <tr>\n      <td>Modern CSS & Flexbox</td>\n      <td>Intermediate</td>\n      <td>5 Hours</td>\n    </tr>\n  </tbody>\n</table>',
              css: 'body { font-family: sans-serif; padding: 20px; color: #1e293b; }\nul { padding-left: 20px; }\nli { margin-bottom: 6px; }\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 10px;\n}\nth, td {\n  padding: 10px 14px;\n  text-align: left;\n  border: 1px solid #cbd5e1;\n}\nth {\n  background: #f1f5f9;\n  font-weight: 600;\n}',
              js: 'console.log("Table and list rendered!");'
            },
            explanationLines: [
              '<ul> and <ol>: Container tags for unordered and ordered lists respectively.',
              '<li> (List Item): The child element representing each individual item in a list.',
              '<table>: Root container for tabular matrix data.',
              '<thead> / <tbody>: Semantic group tags separating table headers from data rows.',
              '<th> and <td>: <th> creates bold, centered header cells; <td> creates regular data cells.'
            ],
            interactiveStarter: {
              html: '<h3>My Top 3 Programming Goals</h3>\n<ol>\n  <li>Build a personal portfolio</li>\n  <li>Master CSS Flexbox & Grid</li>\n  <li>Create an interactive web app</li>\n</ol>',
              css: 'body { font-family: sans-serif; padding: 20px; }\nol { padding-left: 20px; line-height: 1.8; }',
              js: ''
            },
            commonMistakes: [
              {
                mistake: 'Putting plain text or <div> tags directly inside <ul> without <li>',
                fix: 'Only <li> elements are valid direct children of <ul> and <ol>',
                why: 'HTML specifications require list containers to only have list-item children.'
              },
              {
                mistake: 'Using tables for layout/positioning instead of CSS Grid/Flexbox',
                fix: 'Only use <table> for real tabular data (like spreadsheets, schedules, receipts)',
                why: 'Using tables for page layout breaks mobile responsiveness and harms screen readers.'
              }
            ],
            bestPractices: [
              'Always use <th> with scope="col" or scope="row" for accessible tables.',
              'Use border-collapse: collapse in CSS for clean, single-pixel table borders.'
            ],
            exercise: {
              instructions: 'Create an ordered list (<ol>) containing three fruits: Apple, Banana, and Mango.',
              hint: 'Wrap the list in <ol> and each item in <li>',
              solution: '<ol>\n  <li>Apple</li>\n  <li>Banana</li>\n  <li>Mango</li>\n</ol>',
              starterCode: {
                html: '<!-- Create your ordered list here -->\n\n',
                css: 'body { font-family: sans-serif; padding: 20px; }',
                js: ''
              }
            },
            quiz: [
              {
                id: 'q-html-5-1',
                question: 'Which tag is used for an item inside an unordered or ordered list?',
                options: ['<item>', '<list>', '<li>', '<ui>'],
                correctIndex: 2,
                explanation: '<li> stands for "List Item" and is used inside both <ul> and <ol> containers.'
              }
            ]
          },
          {
            id: 'html-forms-validation-6',
            courseId: 'html',
            moduleId: 'html-level-3',
            moduleTitle: 'HTML Level 3 — Lists, Tables & Forms',
            title: 'Interactive Forms & Input Validation',
            level: 'Intermediate',
            estimatedMinutes: 8,
            concept: 'Forms allow users to send data to web servers (e.g. login, sign up, contact forms, searches). The <form> element wraps controls such as <input>, <label>, <textarea>, <select>, <button>, and checkboxes. HTML5 provides built-in client-side validation using attributes like required, type="email", and minlength.',
            analogy: 'A web form is like a paper application form at a government office: the <label> is the question prompt ("First Name:"), the <input> is the blank underline where you write, and the submit <button> is handing the filled paper to the clerk at the window.',
            syntaxCode: '<form action="/submit" method="POST">\n  <label for="userEmail">Email Address:</label>\n  <input type="email" id="userEmail" name="email" required placeholder="you@domain.com">\n  <button type="submit">Submit</button>\n</form>',
            syntaxLanguage: 'html',
            exampleCode: {
              html: '<form id="contactForm" onsubmit="event.preventDefault(); alert(\'Form submitted successfully!\');">\n  <div class="field">\n    <label for="fullName">Full Name</label>\n    <input type="text" id="fullName" placeholder="Ada Lovelace" required>\n  </div>\n  <div class="field">\n    <label for="emailAddr">Email</label>\n    <input type="email" id="emailAddr" placeholder="ada@code.org" required>\n  </div>\n  <div class="field">\n    <label for="role">Primary Goal</label>\n    <select id="role">\n      <option value="frontend">Become a Front-End Dev</option>\n      <option value="fullstack">Full-Stack Developer</option>\n      <option value="hobby">Learn for Fun</option>\n    </select>\n  </div>\n  <button type="submit">Start Learning Free</button>\n</form>',
              css: 'body { font-family: sans-serif; padding: 20px; background: #f8fafc; }\nform { max-width: 360px; background: white; padding: 24px; border-radius: 10px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }\n.field { margin-bottom: 16px; }\nlabel { display: block; font-weight: 600; font-size: 0.85rem; margin-bottom: 6px; color: #475569; }\ninput, select {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 0.95rem;\n  box-sizing: border-box;\n}\ninput:focus, select:focus { outline: none; border-color: #3b82f6; ring: 2px solid #93c5fd; }\nbutton {\n  width: 100%;\n  background: #ea580c;\n  color: white;\n  font-weight: 600;\n  padding: 12px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\nbutton:hover { background: #c2410c; }',
              js: 'console.log("Form component loaded");'
            },
            explanationLines: [
              '<label for="inputId">: Connects a visual label to an input. Clicking the label focuses the input!',
              '<input type="email">: Validates that the input contains a valid email structure (e.g. contains @ and domain).',
              'required: A boolean attribute preventing form submission if the field is empty.',
              '<select> and <option>: Creates an interactive dropdown menu.',
              '<button type="submit">: Triggers the form submission process.'
            ],
            interactiveStarter: {
              html: '<form onsubmit="event.preventDefault(); alert(\'Welcome, \' + document.getElementById(\'uname\').value);">\n  <label for="uname">Username:</label>\n  <input type="text" id="uname" required placeholder="Enter username">\n  <button type="submit" style="margin-top: 10px;">Sign In</button>\n</form>',
              css: 'body { font-family: sans-serif; padding: 20px; }\nlabel { display: block; margin-bottom: 4px; }\ninput { padding: 8px; border: 1px solid #ccc; border-radius: 4px; display: block; width: 220px; }',
              js: ''
            },
            commonMistakes: [
              {
                mistake: 'Using an <input> without a matching <label for="...">',
                fix: 'Always link labels to inputs with matching for and id attributes',
                why: 'Screen reader users cannot identify what the input is for without linked labels.'
              }
            ],
            bestPractices: [
              'Use specific input types: type="email", type="tel", type="number", type="password".',
              'Provide clear placeholders and error states.'
            ],
            exercise: {
              instructions: 'Create a password input (<input type="password">) with id="userPass" and placeholder="At least 8 characters".',
              hint: '<input type="password" id="userPass" placeholder="At least 8 characters" required>',
              solution: '<label for="userPass">Password:</label>\n<input type="password" id="userPass" placeholder="At least 8 characters" required>',
              starterCode: {
                html: '<!-- Add your password field below -->\n\n',
                css: 'body { font-family: sans-serif; padding: 20px; }',
                js: ''
              }
            },
            quiz: [
              {
                id: 'q-html-6-1',
                question: 'Which HTML attribute marks an input field as mandatory before submitting?',
                options: ['validate', 'required', 'important', 'mandatory'],
                correctIndex: 1,
                explanation: 'The "required" attribute specifies that an input field must be filled out before submitting the form.'
              }
            ]
          }
        ]
      },
      {
        id: 'html-level-4',
        title: 'HTML Level 4 — Semantic Web & Accessibility',
        level: 'Advanced',
        description: 'Understand semantic elements (<header>, <main>, <nav>, <article>, <aside>, <footer>) and ARIA standards.',
        lessons: [
          {
            id: 'html-semantic-aria-7',
            courseId: 'html',
            moduleId: 'html-level-4',
            moduleTitle: 'HTML Level 4 — Semantic Web & Accessibility',
            title: 'Semantic HTML & Web Accessibility (a11y)',
            level: 'Advanced',
            estimatedMinutes: 8,
            concept: 'Semantic HTML means using tags that convey the meaning of the content, rather than generic <div> or <span> wrappers. Elements like <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> help search engine crawlers index your content properly and allow screen readers to navigate effortlessly.',
            analogy: 'Imagine a newspaper: you instantly recognize the front-page masthead (<header>), the table of contents (<nav>), the main investigative story (<article>), the weather sidebar (<aside>), and the copyright fine print (<footer>). Semantic tags do the same for web browsers and assistive technology.',
            syntaxCode: '<header>\n  <nav><!-- Links --></nav>\n</header>\n<main>\n  <article>\n    <h2>Story Title</h2>\n    <p>Story body...</p>\n  </article>\n  <aside><!-- Related Links --></aside>\n</main>\n<footer>\n  <p>&copy; 2026 CodePath</p>\n</footer>',
            syntaxLanguage: 'html',
            exampleCode: {
              html: '<div class="page-layout">\n  <header>\n    <h2>DevGazette</h2>\n    <nav>\n      <a href="#articles">Articles</a> | <a href="#about">About</a>\n    </nav>\n  </header>\n  <main>\n    <article id="articles">\n      <h3>Why Semantic HTML Matters</h3>\n      <p>Semantic tags boost SEO, enhance accessibility, and make code cleaner to maintain.</p>\n    </article>\n    <aside>\n      <h4>Quick Tip</h4>\n      <p>Always use a single &lt;main&gt; element per document.</p>\n    </aside>\n  </main>\n  <footer>\n    <p>&copy; 2026 CodePath Academy. All rights reserved.</p>\n  </footer>\n</div>',
              css: 'body { font-family: sans-serif; padding: 20px; background: #f1f5f9; }\n.page-layout { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }\nheader { background: #ea580c; color: white; padding: 1rem; display: flex; justify-content: space-between; align-items: center; }\nheader nav a { color: white; text-decoration: none; font-weight: 500; }\nmain { padding: 1.5rem; display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; }\narticle h3 { margin-top: 0; color: #1e293b; }\naside { background: #f8fafc; border-left: 3px solid #f97316; padding: 10px; border-radius: 4px; }\naside h4 { margin-top: 0; font-size: 0.9rem; }\nfooter { background: #0f172a; color: #94a3b8; text-align: center; padding: 1rem; font-size: 0.85rem; }',
              js: 'console.log("Semantic layout rendered");'
            },
            explanationLines: [
              '<header>: Introductory content or navigation bar for a page or article.',
              '<nav>: Encloses major navigation links.',
              '<main>: Represents the dominant, unique content of the body (only one allowed per page).',
              '<article>: A standalone self-contained piece of content (like a blog post, comment, or news story).',
              '<aside>: Tangentially related content, like a sidebar or author biography.',
              '<footer>: Contains footer information like copyright notices, contact details, and site maps.'
            ],
            interactiveStarter: {
              html: '<main>\n  <article>\n    <h2>My First Semantic Post</h2>\n    <p>Write your article here...</p>\n  </article>\n</main>',
              css: 'body { font-family: sans-serif; padding: 20px; }\narticle { border: 1px solid #e2e8f0; padding: 15px; border-radius: 8px; }',
              js: ''
            },
            commonMistakes: [
              {
                mistake: 'Using dozens of nested <div> tags with class="header", class="nav", class="footer"',
                fix: 'Use native semantic elements: <header>, <nav>, <footer>',
                why: 'Native semantic elements carry built-in accessibility roles that <div> elements lack.'
              }
            ],
            bestPractices: [
              'Use <main> for the primary content and never nest <main> inside <article> or <header>.',
              'Use <details> and <summary> for native, accessible accordions without needing JavaScript.'
            ],
            exercise: {
              instructions: 'Wrap an <h2> and <p> inside an <article> tag, with a <footer> below containing a copyright notice.',
              hint: '<article><h2>...</h2><p>...</p></article><footer><p>&copy; ...</p></footer>',
              solution: '<article>\n  <h2>Learn Web Dev</h2>\n  <p>Practice every single day.</p>\n</article>\n<footer>\n  <p>&copy; 2026 CodePath</p>\n</footer>',
              starterCode: {
                html: '<!-- Create your article and footer below -->\n\n',
                css: 'body { font-family: sans-serif; padding: 20px; }',
                js: ''
              }
            },
            quiz: [
              {
                id: 'q-html-7-1',
                question: 'Which tag should be used for the unique, primary content of a webpage?',
                options: ['<section>', '<main>', '<content>', '<div>'],
                correctIndex: 1,
                explanation: 'The <main> tag designates the central dominant content of the document body.'
              },
              {
                id: 'q-html-7-2',
                question: 'Which tag is best suited for an independent blog post or news story?',
                options: ['<article>', '<aside>', '<nav>', '<span>'],
                correctIndex: 0,
                explanation: '<article> is intended for self-contained compositions in a document, page, or site.'
              }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // CSS COURSE
  // ==========================================
  {
    id: 'css',
    title: 'CSS',
    subtitle: 'Style the Web',
    description: 'Master styling, modern responsive layout engines with Flexbox and CSS Grid, variables, transitions, and animations.',
    accentColor: 'blue',
    icon: 'Palette',
    totalLessons: 14,
    modules: [
      {
        id: 'css-level-1',
        title: 'CSS Level 1 — Introduction & Selectors',
        level: 'Level 1',
        description: 'Understand CSS syntax, inline vs external stylesheets, and powerful CSS selectors.',
        lessons: [
          {
            id: 'css-intro-syntax-1',
            courseId: 'css',
            moduleId: 'css-level-1',
            moduleTitle: 'CSS Level 1 — Introduction & Selectors',
            title: 'CSS Syntax, Colors & Selectors',
            level: 'Beginner',
            estimatedMinutes: 6,
            concept: 'CSS (Cascading Style Sheets) controls how HTML elements look on screen. A CSS rule consists of a Selector (targeting elements) and a Declaration Block (containing property: value pairs inside curly braces).',
            analogy: 'If HTML is a blank mannequin, CSS is the stylist choosing the shirt color, trousers length, hair styling, and accessories.',
            syntaxCode: 'selector {\n  property: value;\n  font-size: 16px;\n  color: #3b82f6;\n}',
            syntaxLanguage: 'css',
            exampleCode: {
              html: '<h1 class="highlight">Styling with CSS</h1>\n<p id="main-text">CSS brings websites to life with color and typography.</p>\n<button class="btn">Learn More</button>',
              css: 'h1.highlight {\n  color: #0284c7;\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n}\n\n#main-text {\n  color: #475569;\n  line-height: 1.6;\n}\n\n.btn {\n  background-color: #0284c7;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 600;\n}\n\n.btn:hover {\n  background-color: #0369a1;\n}',
              js: 'console.log("CSS Syntax loaded");'
            },
            explanationLines: [
              'Element selector (h1): Targets all <h1> tags on the page.',
              'Class selector (.highlight): Targets elements with class="highlight" (prefixed by a dot .).',
              'ID selector (#main-text): Targets a single unique element with id="main-text" (prefixed by a hash #).',
              'Pseudo-class (:hover): Applies styles when the user hovers their mouse pointer over the element.'
            ],
            interactiveStarter: {
              html: '<h2 class="title">Change My Style!</h2>\n<p class="desc">Try modifying the color, font-size, and background in the CSS panel.</p>',
              css: '.title {\n  color: #2563eb;\n  font-size: 24px;\n}\n\n.desc {\n  color: #64748b;\n  font-size: 16px;\n}',
              js: ''
            },
            commonMistakes: [
              {
                mistake: 'Forgetting the dot prefix for classes (e.g. btn { ... } instead of .btn { ... })',
                fix: 'Always prefix class selectors with a period: .btn',
                why: 'Without a dot, CSS looks for an HTML element named <btn>, which does not exist.'
              },
              {
                mistake: 'Forgetting the semicolon at the end of a CSS declaration line',
                fix: 'Always end every CSS declaration with a semicolon (;)',
                why: 'Missing semicolons break subsequent CSS properties in the block.'
              }
            ],
            bestPractices: [
              'Prefer class selectors (.card, .btn) over ID selectors for reusability.',
              'Use meaningful, modular class names following a clean convention.'
            ],
            exercise: {
              instructions: 'Write a CSS rule that turns all elements with class "badge" into green (#16a34a) text with an #f0fdf4 background.',
              hint: '.badge { color: #16a34a; background-color: #f0fdf4; }',
              solution: '.badge {\n  color: #16a34a;\n  background-color: #f0fdf4;\n  padding: 4px 8px;\n  border-radius: 4px;\n}',
              starterCode: {
                html: '<span class="badge">Active Status</span>',
                css: '/* Write your CSS class rule below */\n\n',
                js: ''
              }
            },
            quiz: [
              {
                id: 'q-css-1-1',
                question: 'How do you target an HTML element with class="card" in CSS?',
                options: ['#card', '.card', 'card', '$card'],
                correctIndex: 1,
                explanation: 'Class selectors in CSS are always preceded by a dot (.) prefix, like .card.'
              }
            ]
          }
        ]
      },
      {
        id: 'css-level-2',
        title: 'CSS Level 2 — Box Model & Spacing',
        level: 'Beginner',
        description: 'Understand content, padding, border, margin, and the essential box-sizing: border-box.',
        lessons: [
          {
            id: 'css-box-model-2',
            courseId: 'css',
            moduleId: 'css-level-2',
            moduleTitle: 'CSS Level 2 — Box Model & Spacing',
            title: 'The CSS Box Model Deep Dive',
            level: 'Beginner',
            estimatedMinutes: 7,
            concept: 'Every HTML element on a webpage is rendered as a rectangular box. The CSS Box Model comprises four concentric layers: Content (text/images inside), Padding (inner space around content), Border (visible outline around padding), and Margin (outer space separating the element from its neighbors).',
            analogy: 'Imagine a framed picture: the photograph is the Content, the white matting inside the frame is Padding, the wooden frame itself is the Border, and the empty wall space between other frames is Margin.',
            syntaxCode: '* {\n  box-sizing: border-box; /* Crucial! */\n}\n\n.card {\n  width: 300px;\n  padding: 20px; /* Inside space */\n  border: 2px solid #3b82f6; /* Boundary */\n  margin: 16px; /* Outside space */\n}',
            syntaxLanguage: 'css',
            exampleCode: {
              html: '<div class="box-demo">\n  <h3>The Box Model</h3>\n  <p>Inspect the spacing inside and outside this container.</p>\n</div>',
              css: '* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: sans-serif;\n  padding: 20px;\n  background: #f8fafc;\n}\n\n.box-demo {\n  background: #eff6ff;\n  border: 3px solid #3b82f6;\n  padding: 24px;\n  margin: 20px 0;\n  border-radius: 8px;\n  max-width: 400px;\n}\n\n.box-demo h3 {\n  margin-top: 0;\n  color: #1d4ed8;\n}',
              js: 'console.log("Box Model active");'
            },
            explanationLines: [
              'Content: The text or media inside the element.',
              'Padding: Space between content and the border (styled with background color).',
              'Border: The edge wrapping the padding and content.',
              'Margin: Transparent space outside the border that pushes other elements away.',
              'box-sizing: border-box: Ensures padding and border are included inside the specified width!'
            ],
            interactiveStarter: {
              html: '<div class="my-box">\n  Hello Box Model!\n</div>',
              css: '.my-box {\n  background: #fef08a;\n  border: 2px dashed #ca8a04;\n  padding: 30px;\n  margin: 20px;\n  font-weight: bold;\n  text-align: center;\n}',
              js: ''
            },
            commonMistakes: [
              {
                mistake: 'Not using box-sizing: border-box',
                fix: 'Always apply * { box-sizing: border-box; } at the top of your stylesheet',
                why: 'Without border-box, adding 20px padding to a 100px element makes it 140px wide, causing unexpected layout overflows.'
              }
            ],
            bestPractices: [
              'Use margin: 0 auto; on elements with a max-width to center them horizontally.',
              'Use shorthand properties: padding: 12px 24px; (vertical, horizontal).'
            ],
            exercise: {
              instructions: 'Create a .banner class with 20px padding, a 1px solid #cbd5e1 border, and 16px margin-bottom.',
              hint: '.banner { padding: 20px; border: 1px solid #cbd5e1; margin-bottom: 16px; }',
              solution: '.banner {\n  padding: 20px;\n  border: 1px solid #cbd5e1;\n  margin-bottom: 16px;\n  background: #f8fafc;\n  border-radius: 6px;\n}',
              starterCode: {
                html: '<div class="banner">Important Announcement!</div>',
                css: '/* Add your .banner box model properties */\n\n',
                js: ''
              }
            },
            quiz: [
              {
                id: 'q-css-2-1',
                question: 'Which box model layer creates space INSIDE the border around the content?',
                options: ['Margin', 'Padding', 'Outline', 'Gap'],
                correctIndex: 1,
                explanation: 'Padding adds internal breathing room between the element content and its border.'
              }
            ]
          }
        ]
      },
      {
        id: 'css-level-3',
        title: 'CSS Level 3 — Modern Flexbox Layouts',
        level: 'Intermediate',
        description: 'Master 1-dimensional alignment, justify-content, align-items, flex-direction, and responsive flex wrapping.',
        lessons: [
          {
            id: 'css-flexbox-3',
            courseId: 'css',
            moduleId: 'css-level-3',
            moduleTitle: 'CSS Level 3 — Modern Flexbox Layouts',
            title: 'Mastering CSS Flexbox',
            level: 'Intermediate',
            estimatedMinutes: 8,
            concept: 'Flexbox (Flexible Box Layout) is a 1-dimensional layout model designed to distribute space and align items seamlessly along a main axis (horizontal row or vertical column) even when their dimensions are dynamic or unknown.',
            analogy: 'Imagine an organized shelf or row of chairs in a waiting room: Flexbox lets you easily decide whether to push everyone to the left, space them out evenly, center everyone in the middle, or stack them vertically with a single command.',
            syntaxCode: '.container {\n  display: flex;\n  flex-direction: row; /* or column */\n  justify-content: space-between; /* Main axis alignment */\n  align-items: center; /* Cross axis alignment */\n  gap: 1rem; /* Space between flex children */\n}',
            syntaxLanguage: 'css',
            exampleCode: {
              html: '<div class="navbar">\n  <div class="logo">⚡ CodePath</div>\n  <nav class="nav-links">\n    <a href="#">Home</a>\n    <a href="#">Courses</a>\n    <a href="#">Playground</a>\n  </nav>\n  <button class="nav-btn">Sign In</button>\n</div>',
              css: 'body { font-family: sans-serif; margin: 0; padding: 20px; background: #0f172a; color: white; }\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #1e293b;\n  padding: 12px 24px;\n  border-radius: 10px;\n  border: 1px solid #334155;\n}\n\n.logo { font-weight: 700; font-size: 1.1rem; color: #38bdf8; }\n\n.nav-links {\n  display: flex;\n  gap: 20px;\n}\n\n.nav-links a { color: #94a3b8; text-decoration: none; font-weight: 500; }\n.nav-links a:hover { color: white; }\n\n.nav-btn {\n  background: #38bdf8;\n  color: #0f172a;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n}',
              js: 'console.log("Flexbox navbar rendered!");'
            },
            explanationLines: [
              'display: flex: Turns the parent container into a flex container and all direct children into flex items.',
              'justify-content: space-between: Distributes child items evenly with the first item on the start edge and last item on the end edge.',
              'align-items: center: Vertically centers items along the cross-axis.',
              'gap: 20px: Creates clean, uniform gutters between flex items without needing margin hacks.'
            ],
            interactiveStarter: {
              html: '<div class="flex-box">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>',
              css: '.flex-box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  background: #f1f5f9;\n  padding: 20px;\n  border-radius: 8px;\n  min-height: 120px;\n}\n\n.item {\n  background: #3b82f6;\n  color: white;\n  padding: 16px 24px;\n  border-radius: 6px;\n  font-weight: bold;\n}',
              js: ''
            },
            commonMistakes: [
              {
                mistake: 'Confusing justify-content (main axis) with align-items (cross axis)',
                fix: 'Remember: In default row mode, justify-content is horizontal and align-items is vertical',
                why: 'When flex-direction changes to column, their axes flip!'
              }
            ],
            bestPractices: [
              'Use gap instead of individual margin-right on flex items.',
              'Use flex-wrap: wrap on cards or tags so they wrap onto new lines on small mobile screens.'
            ],
            exercise: {
              instructions: 'Write CSS to perfectly center an item horizontally and vertically inside a 200px container using Flexbox.',
              hint: 'display: flex; justify-content: center; align-items: center;',
              solution: '.center-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n}',
              starterCode: {
                html: '<div class="center-container">\n  <span>Centered!</span>\n</div>',
                css: '.center-container {\n  background: #e0f2fe;\n  height: 200px;\n  /* Add your flex centering rules here */\n}\nspan { background: #0284c7; color: white; padding: 10px 20px; border-radius: 6px; }',
                js: ''
              }
            },
            quiz: [
              {
                id: 'q-css-3-1',
                question: 'How do you center child items along the main axis in Flexbox?',
                options: ['align-items: center;', 'justify-content: center;', 'text-align: center;', 'flex-center: true;'],
                correctIndex: 1,
                explanation: 'justify-content controls alignment along the main axis (horizontal by default in row layout).'
              }
            ]
          }
        ]
      },
      {
        id: 'css-level-4',
        title: 'CSS Level 4 — CSS Grid & Responsive Design',
        level: 'Advanced',
        description: 'Build 2-dimensional layouts with CSS Grid (fr, repeat, minmax, auto-fit) and media queries.',
        lessons: [
          {
            id: 'css-grid-responsive-4',
            courseId: 'css',
            moduleId: 'css-level-4',
            moduleTitle: 'CSS Level 4 — CSS Grid & Responsive Design',
            title: 'CSS Grid & Responsive Media Queries',
            level: 'Advanced',
            estimatedMinutes: 8,
            concept: 'CSS Grid is a 2-dimensional layout system that handles both rows and columns simultaneously. Paired with CSS Media Queries (@media), it enables you to build fluid responsive layouts that dynamically adapt from desktop monitor down to smartphone screens without writing custom JavaScript.',
            analogy: 'While Flexbox is like lining people up in a single row or column, CSS Grid is like designing an architectural floor plan with customizable rooms, columns, and rows.',
            syntaxCode: '.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .grid-container {\n    grid-template-columns: 1fr;\n  }\n}',
            syntaxLanguage: 'css',
            exampleCode: {
              html: '<div class="dashboard-grid">\n  <div class="card card-1">HTML5 Structure</div>\n  <div class="card card-2">CSS3 Styling</div>\n  <div class="card card-3">JavaScript Logic</div>\n  <div class="card card-4">Web APIs</div>\n</div>',
              css: 'body { font-family: sans-serif; padding: 20px; background: #f8fafc; }\n\n.dashboard-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n}\n\n.card {\n  background: white;\n  padding: 24px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.05);\n  font-weight: 600;\n  color: #1e293b;\n  text-align: center;\n}\n\n.card-1 { border-top: 4px solid #ea580c; }\n.card-2 { border-top: 4px solid #0284c7; }\n.card-3 { border-top: 4px solid #eab308; }\n.card-4 { border-top: 4px solid #10b981; }',
              js: 'console.log("Responsive CSS Grid initialized!");'
            },
            explanationLines: [
              'display: grid: Activates grid layout context.',
              'grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)): Automatically creates as many columns as will fit, each at least 180px wide and expanding to fill available space (1fr fraction).',
              'gap: 16px: Defines row and column spacing simultaneously.',
              '@media (max-width: ...): Applies targeted style overrides only when screen width is below specified threshold.'
            ],
            interactiveStarter: {
              html: '<div class="grid-demo">\n  <div>Column 1</div>\n  <div>Column 2</div>\n  <div>Column 3</div>\n</div>',
              css: '.grid-demo {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n}\n.grid-demo div {\n  background: #bfdbfe;\n  padding: 20px;\n  text-align: center;\n  font-weight: bold;\n  border-radius: 6px;\n}',
              js: ''
            },
            commonMistakes: [
              {
                mistake: 'Hardcoding fixed pixel widths (e.g. width: 1200px) causing mobile horizontal scrolling',
                fix: 'Use fluid max-width, percentages, and fractional fr units with responsive media queries',
                why: 'Fixed widths cause pages to break and overflow horizontally on mobile screens.'
              }
            ],
            bestPractices: [
              'Use mobile-first design: write baseline mobile styles first, then use @media (min-width: 768px) for desktop.',
              'Leverage repeat(auto-fill / auto-fit, minmax(...)) for automatic responsiveness without complex media queries.'
            ],
            exercise: {
              instructions: 'Create a 2-column grid with equal width columns (1fr 1fr) and a 20px gap.',
              hint: 'display: grid; grid-template-columns: 1fr 1fr; gap: 20px;',
              solution: '.two-col {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}',
              starterCode: {
                html: '<div class="two-col">\n  <div>Left Col</div>\n  <div>Right Col</div>\n</div>',
                css: '.two-col {\n  /* Add grid properties here */\n}\n.two-col div { background: #e2e8f0; padding: 15px; border-radius: 4px; }',
                js: ''
              }
            },
            quiz: [
              {
                id: 'q-css-4-1',
                question: 'What does the "fr" unit represent in CSS Grid?',
                options: ['Fractional unit of available free space', 'Fixed resolution', 'Font ratio', 'Frame rate'],
                correctIndex: 0,
                explanation: '1fr represents one fraction of the remaining available space inside the grid container.'
              }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // JAVASCRIPT COURSE
  // ==========================================
  {
    id: 'javascript',
    title: 'JavaScript',
    subtitle: 'Make the Web Interactive',
    description: 'Master programming fundamentals, DOM manipulation, events, asynchronous JavaScript, APIs, and modern ES6+ features.',
    accentColor: 'yellow',
    icon: 'Terminal',
    totalLessons: 17,
    modules: [
      {
        id: 'js-level-1',
        title: 'JavaScript Level 1 — Introduction & Variables',
        level: 'Level 1',
        description: 'Understand what JavaScript is, console.log, let vs const, data types, and operators.',
        lessons: [
          {
            id: 'js-intro-variables-1',
            courseId: 'javascript',
            moduleId: 'js-level-1',
            moduleTitle: 'JavaScript Level 1 — Introduction & Variables',
            title: 'Variables: let, const & Data Types',
            level: 'Beginner',
            estimatedMinutes: 7,
            concept: 'JavaScript is the programming language of the web. It enables pages to calculate math, respond to clicks, fetch data from servers, and update content dynamically. Variables are containers used to store and manage data in memory. In modern JavaScript, we declare variables using const (for values that won\'t be reassigned) and let (for values that can change).',
            analogy: 'Imagine a storage box with a label on the front: "const studentName = \'Alex\'" is like writing on the box with permanent marker—Alex\'s name never changes; while "let score = 0" is like writing with dry-erase marker—as the game progresses, you can wipe it off and update the score to 10.',
            syntaxCode: 'const courseName = "Web Development"; // Cannot be reassigned\nlet currentScore = 0; // Can change later\ncurrentScore = 15; // Valid!\n\nconsole.log(courseName, currentScore);',
            syntaxLanguage: 'javascript',
            exampleCode: {
              html: '<div class="app-card">\n  <h2>Student Profile</h2>\n  <p>Name: <span id="name">...</span></p>\n  <p>XP Points: <span id="xp">...</span></p>\n  <p>Status: <span id="status">...</span></p>\n  <button id="addXpBtn">+50 XP</button>\n</div>',
              css: 'body { font-family: sans-serif; padding: 20px; background: #0f172a; color: white; }\n.app-card { background: #1e293b; padding: 20px; border-radius: 8px; max-width: 320px; border: 1px solid #334155; }\nbutton { background: #eab308; color: #0f172a; font-weight: bold; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; }\nbutton:hover { background: #facc15; }',
              js: 'const studentName = "Elena Vance";\nlet xpPoints = 120;\nconst isEnrolled = true;\n\n// Update HTML DOM elements\ndocument.getElementById("name").textContent = studentName;\ndocument.getElementById("xp").textContent = xpPoints;\ndocument.getElementById("status").textContent = isEnrolled ? "Active Learner" : "Inactive";\n\ndocument.getElementById("addXpBtn").addEventListener("click", () => {\n  xpPoints += 50;\n  document.getElementById("xp").textContent = xpPoints;\n  console.log("New XP:", xpPoints);\n});'
            },
            explanationLines: [
              'const: Declares a block-scoped constant variable that cannot be reassigned.',
              'let: Declares a block-scoped variable whose value can be reassigned during runtime.',
              'Primitive Data Types: String ("Hello"), Number (42, 3.14), Boolean (true/false), null, and undefined.',
              'console.log(): Prints messages or variable values into the developer console for debugging.'
            ],
            interactiveStarter: {
              html: '<h1>JavaScript Playground</h1>\n<p id="output">Look at the console below!</p>',
              css: 'body { font-family: sans-serif; padding: 20px; }',
              js: '// Declare your variables below\nconst greeting = "Hello, JavaScript learner!";\nlet xp = 100;\n\nconsole.log(greeting);\nconsole.log("Starting XP:", xp);\n\nxp = xp + 25;\nconsole.log("Updated XP:", xp);\n\ndocument.getElementById("output").textContent = `${greeting} You have ${xp} XP!`;'
            },
            commonMistakes: [
              {
                mistake: 'Trying to reassign a const variable (e.g. const score = 10; score = 20;)',
                fix: 'Use let if a variable needs to be reassigned later',
                why: 'JavaScript throws a TypeError: Assignment to constant variable.'
              },
              {
                mistake: 'Using old "var" keyword',
                fix: 'Always use const by default, and let when reassigning',
                why: 'var lacks block scoping and leads to hoisting bugs in modern applications.'
              }
            ],
            bestPractices: [
              'Default to using const for all variables unless you know the value will be reassigned.',
              'Use camelCase for variable names (e.g. userProfile, totalScore, isModalOpen).'
            ],
            exercise: {
              instructions: 'Declare a const variable named "appName" with the value "CodePath" and a let variable named "lessonCount" with the number 1. Then add 1 to lessonCount and print both with console.log().',
              hint: 'const appName = "CodePath"; let lessonCount = 1; lessonCount++; console.log(appName, lessonCount);',
              solution: 'const appName = "CodePath";\nlet lessonCount = 1;\nlessonCount++;\nconsole.log(appName, lessonCount);',
              starterCode: {
                html: '<p>Open the Console tab to see output!</p>',
                css: 'body { font-family: sans-serif; padding: 20px; }',
                js: '// Write your code here:\n\n'
              }
            },
            quiz: [
              {
                id: 'q-js-1-1',
                question: 'Which keyword should you use to declare a variable that will NOT be reassigned?',
                options: ['let', 'const', 'var', 'static'],
                correctIndex: 1,
                explanation: 'const creates immutable variable bindings that cannot be reassigned.'
              },
              {
                id: 'q-js-1-2',
                question: 'What is the data type of the value: "true"? (Notice the quotes)',
                options: ['Boolean', 'String', 'Number', 'Undefined'],
                correctIndex: 1,
                explanation: 'Any characters enclosed in single or double quotation marks are evaluated as a String data type in JavaScript.'
              }
            ]
          }
        ]
      },
      {
        id: 'js-level-2',
        title: 'JavaScript Level 2 — Functions & Control Flow',
        level: 'Beginner',
        description: 'Understand functions, parameters, return values, arrow functions, if/else, and loops.',
        lessons: [
          {
            id: 'js-functions-flow-2',
            courseId: 'javascript',
            moduleId: 'js-level-2',
            moduleTitle: 'JavaScript Level 2 — Functions & Control Flow',
            title: 'Functions, Arrow Functions & Logic',
            level: 'Beginner',
            estimatedMinutes: 8,
            concept: 'A function is a reusable block of code that takes inputs (called parameters), executes a series of actions, and returns an output value. Modern JavaScript commonly uses both traditional function declarations and clean Arrow Functions (=>). Combined with conditional statements (if/else), functions let your programs make decisions.',
            analogy: 'A function is like a smoothie blender: you pour in ingredients (parameters like banana, milk), press blend (execute instructions), and pour out a tasty smoothie (return value).',
            syntaxCode: '// Traditional Function\nfunction add(a, b) {\n  return a + b;\n}\n\n// Modern Arrow Function\nconst multiply = (x, y) => x * y;\n\nconsole.log(add(5, 3)); // 8\nconsole.log(multiply(4, 2)); // 8',
            syntaxLanguage: 'javascript',
            exampleCode: {
              html: '<div class="calc-box">\n  <h3>Grade Evaluator</h3>\n  <input type="number" id="scoreInput" placeholder="Enter score (0-100)" value="85">\n  <button id="calcBtn">Check Grade</button>\n  <p id="resultText">Result: ...</p>\n</div>',
              css: 'body { font-family: sans-serif; padding: 20px; background: #f8fafc; }\n.calc-box { max-width: 320px; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }\ninput { width: 100%; padding: 8px; margin-bottom: 10px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px; }\nbutton { width: 100%; background: #eab308; color: #1e293b; font-weight: bold; border: none; padding: 10px; border-radius: 4px; cursor: pointer; }',
              js: 'const calculateGrade = (score) => {\n  if (score >= 90) return "A — Master Developer! 🌟";\n  if (score >= 80) return "B — Great Job! 🚀";\n  if (score >= 70) return "C — Passing Grade 👍";\n  return "Keep Practicing! 💪";\n};\n\ndocument.getElementById("calcBtn").addEventListener("click", () => {\n  const scoreVal = Number(document.getElementById("scoreInput").value);\n  const grade = calculateGrade(scoreVal);\n  document.getElementById("resultText").textContent = `Result: ${grade}`;\n});'
            },
            explanationLines: [
              'function keyword: Declares a standard JavaScript function with a name and parameter list.',
              'Arrow function (() => {}): A modern, concise syntax for writing functions.',
              'return statement: Exits the function and sends a calculated value back to the caller.',
              'if...else: Conditional branching that executes different blocks based on whether an expression evaluates to truthy or falsy.'
            ],
            interactiveStarter: {
              html: '<h3>Square a Number</h3>\n<p id="res">Check console or output!</p>',
              css: 'body { font-family: sans-serif; padding: 20px; }',
              js: '// Arrow function to square a number\nconst square = (n) => n * n;\n\nconst num = 7;\nconst result = square(num);\nconsole.log(`The square of ${num} is:`, result);\n\ndocument.getElementById("res").textContent = `7 squared = ${result}`;'
            },
            commonMistakes: [
              {
                mistake: 'Forgetting the "return" statement in multi-line functions',
                fix: 'Always explicitly return your computed result if you need to use the output outside the function',
                why: 'Without a return, JavaScript functions return undefined by default.'
              }
            ],
            bestPractices: [
              'Keep functions small and focused on a single responsibility.',
              'Use descriptive function names starting with an action verb (e.g. calculateTotal, getUserData, isEmailValid).'
            ],
            exercise: {
              instructions: 'Write an arrow function named "isEven" that takes a number (n) and returns true if it is even (n % 2 === 0), and false otherwise.',
              hint: 'const isEven = (n) => n % 2 === 0;',
              solution: 'const isEven = (n) => {\n  return n % 2 === 0;\n};\nconsole.log("Is 4 even?", isEven(4));\nconsole.log("Is 7 even?", isEven(7));',
              starterCode: {
                html: '<p>Write your isEven function in JS</p>',
                css: 'body { font-family: sans-serif; padding: 20px; }',
                js: '// Write the isEven function below:\n\n'
              }
            },
            quiz: [
              {
                id: 'q-js-2-1',
                question: 'What does a function return by default if no return statement is specified?',
                options: ['0', 'null', 'undefined', 'false'],
                correctIndex: 2,
                explanation: 'In JavaScript, functions without an explicit return statement evaluate to "undefined".'
              }
            ]
          }
        ]
      },
      {
        id: 'js-level-3',
        title: 'JavaScript Level 3 — DOM Manipulation & Events',
        level: 'Intermediate',
        description: 'Select elements, modify text/HTML, change styles, listen to click/input/submit events, and create elements.',
        lessons: [
          {
            id: 'js-dom-events-3',
            courseId: 'javascript',
            moduleId: 'js-level-3',
            moduleTitle: 'JavaScript Level 3 — DOM Manipulation & Events',
            title: 'DOM Manipulation & Event Listeners',
            level: 'Intermediate',
            estimatedMinutes: 8,
            concept: 'The Document Object Model (DOM) is a tree-like object representation of your HTML webpage created by the browser. JavaScript can query, modify, add, or delete any element on the page in real-time. With addEventListener, your code reacts when users click buttons, type in inputs, or submit forms.',
            analogy: 'If HTML is a printed book, the DOM is an interactive digital e-reader where JavaScript is the magic quill that can change words, add new pages, or change the lighting on the fly whenever the reader taps the screen.',
            syntaxCode: '// Select an element\nconst btn = document.querySelector("#myButton");\n\n// Attach an event listener\nbtn.addEventListener("click", (event) => {\n  console.log("Clicked!");\n  btn.textContent = "Clicked!";\n  btn.classList.toggle("active");\n});',
            syntaxLanguage: 'javascript',
            exampleCode: {
              html: '<div class="todo-app">\n  <h3>Quick Todo List</h3>\n  <div class="input-row">\n    <input type="text" id="todoInput" placeholder="Add a new task...">\n    <button id="addBtn">Add</button>\n  </div>\n  <ul id="todoList"></ul>\n</div>',
              css: 'body { font-family: sans-serif; padding: 20px; background: #f1f5f9; }\n.todo-app { max-width: 360px; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }\n.input-row { display: flex; gap: 8px; margin-bottom: 16px; }\ninput { flex: 1; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; }\nbutton { background: #eab308; border: none; padding: 8px 16px; font-weight: bold; border-radius: 4px; cursor: pointer; }\nul { list-style: none; padding: 0; margin: 0; }\nli { padding: 8px 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; margin-bottom: 6px; display: flex; justify-content: space-between; align-items: center; }\n.del-btn { background: #ef4444; color: white; border: none; padding: 2px 6px; border-radius: 3px; cursor: pointer; }',
              js: 'const todoInput = document.querySelector("#todoInput");\nconst addBtn = document.querySelector("#addBtn");\nconst todoList = document.querySelector("#todoList");\n\nfunction addTodo() {\n  const text = todoInput.value.trim();\n  if (!text) return;\n\n  const li = document.createElement("li");\n  li.textContent = text;\n\n  const delBtn = document.createElement("button");\n  delBtn.textContent = "✕";\n  delBtn.className = "del-btn";\n  delBtn.onclick = () => li.remove();\n\n  li.appendChild(delBtn);\n  todoList.appendChild(li);\n  todoInput.value = "";\n}\n\naddBtn.addEventListener("click", addTodo);\ntodoInput.addEventListener("keydown", (e) => {\n  if (e.key === "Enter") addTodo();\n});'
            },
            explanationLines: [
              'document.querySelector(selector): Finds the first element matching any CSS selector.',
              'document.createElement(tagName): Instantiates a new HTML node in memory.',
              'element.appendChild(child): Inserts a child element inside a parent container in the DOM.',
              'addEventListener(eventType, handler): Listens for user interactions (like "click", "keydown", "input").',
              'element.remove(): Deletes the node from the live DOM.'
            ],
            interactiveStarter: {
              html: '<button id="counterBtn">Clicks: 0</button>',
              css: 'body { font-family: sans-serif; padding: 20px; }\nbutton { background: #3b82f6; color: white; border: none; padding: 10px 20px; font-size: 16px; border-radius: 6px; cursor: pointer; }',
              js: 'const btn = document.querySelector("#counterBtn");\nlet count = 0;\n\nbtn.addEventListener("click", () => {\n  count++;\n  btn.textContent = `Clicks: ${count}`;\n});'
            },
            commonMistakes: [
              {
                mistake: 'Using innerHTML with untrusted user input',
                fix: 'Use textContent or createElement to avoid Cross-Site Scripting (XSS) vulnerabilities',
                why: 'innerHTML parses strings as HTML and can execute malicious script tags.'
              }
            ],
            bestPractices: [
              'Use element.classList.add(), remove(), or toggle() instead of direct inline styles for clean styling.',
              'Clean up or delegate event listeners when handling large dynamic lists.'
            ],
            exercise: {
              instructions: 'Select the paragraph with id "msg" and change its textContent to "JavaScript is Powerful!" when the button with id "btn" is clicked.',
              hint: 'document.querySelector("#btn").addEventListener("click", () => { document.querySelector("#msg").textContent = "..."; });',
              solution: 'const btn = document.querySelector("#btn");\nconst msg = document.querySelector("#msg");\n\nbtn.addEventListener("click", () => {\n  msg.textContent = "JavaScript is Powerful!";\n});',
              starterCode: {
                html: '<p id="msg">Original message</p>\n<button id="btn">Update Text</button>',
                css: 'body { font-family: sans-serif; padding: 20px; }',
                js: '// Write event listener below\n\n'
              }
            },
            quiz: [
              {
                id: 'q-js-3-1',
                question: 'Which method is the safest modern way to change the plain text of an element?',
                options: ['innerHTML', 'textContent', 'plainText', 'value'],
                correctIndex: 1,
                explanation: 'textContent safely sets text content without evaluating HTML markup, preventing XSS injection.'
              }
            ]
          }
        ]
      },
      {
        id: 'js-level-4',
        title: 'JavaScript Level 4 — Async JS, APIs & Storage',
        level: 'Advanced',
        description: 'Master Promises, async/await, fetch() for REST APIs, and browser localStorage persistence.',
        lessons: [
          {
            id: 'js-async-api-4',
            courseId: 'javascript',
            moduleId: 'js-level-4',
            moduleTitle: 'JavaScript Level 4 — Async JS, APIs & Storage',
            title: 'Asynchronous JS, Fetch APIs & localStorage',
            level: 'Advanced',
            estimatedMinutes: 9,
            concept: 'JavaScript is single-threaded, meaning it executes one task at a time. Asynchronous JavaScript (Promises & async/await) allows time-consuming tasks (like downloading data from a remote server or reading files) to run in the background without freezing the user interface. We use the native fetch() API to make HTTP requests and localStorage to save data permanently in the user\'s browser.',
            analogy: 'Ordering at a restaurant: Synchronous code is waiting at the counter while the chef cooks your meal (nobody else can order!). Asynchronous code is taking a buzzer to your table—you can keep talking and drinking water, and when your food is ready (Promise resolved), the buzzer vibrates and you pick up your meal.',
            syntaxCode: '// Async/Await with Fetch API\nasync function loadUserData() {\n  try {\n    const response = await fetch("https://api.example.com/users");\n    const data = await response.json();\n    console.log("Users:", data);\n    \n    // Save to LocalStorage\n    localStorage.setItem("cachedUsers", JSON.stringify(data));\n  } catch (error) {\n    console.error("Fetch failed:", error);\n  }\n}',
            syntaxLanguage: 'javascript',
            exampleCode: {
              html: '<div class="quote-card">\n  <h3>Inspiring Quote Generator</h3>\n  <blockquote id="quoteText">"Click the button to fetch an inspiring quote!"</blockquote>\n  <p id="quoteAuthor">— CodePath Academy</p>\n  <button id="fetchBtn">Fetch New Quote</button>\n</div>',
              css: 'body { font-family: sans-serif; padding: 20px; background: #0f172a; color: white; }\n.quote-card { max-width: 400px; background: #1e293b; padding: 24px; border-radius: 10px; border: 1px solid #334155; }\nblockquote { font-style: italic; font-size: 1.1rem; margin: 16px 0; color: #facc15; line-height: 1.5; }\np { color: #94a3b8; font-size: 0.9rem; margin-top: 0; text-align: right; }\nbutton { background: #38bdf8; color: #0f172a; font-weight: bold; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; }\nbutton:hover { background: #0284c7; color: white; }',
              js: 'const quotes = [\n  { text: "The secret to getting ahead is getting started.", author: "Mark Twain" },\n  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },\n  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },\n  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" }\n];\n\nconst quoteText = document.querySelector("#quoteText");\nconst quoteAuthor = document.querySelector("#quoteAuthor");\nconst fetchBtn = document.querySelector("#fetchBtn");\n\nasync function getRandomQuote() {\n  fetchBtn.textContent = "Loading...";\n  fetchBtn.disabled = true;\n  \n  // Simulate async network request\n  await new Promise(resolve => setTimeout(resolve, 400));\n  \n  const random = quotes[Math.floor(Math.random() * quotes.length)];\n  quoteText.textContent = `"${random.text}"`;\n  quoteAuthor.textContent = `— ${random.author}`;\n  \n  // Save last seen quote to localStorage\n  localStorage.setItem("lastQuote", JSON.stringify(random));\n  \n  fetchBtn.textContent = "Fetch New Quote";\n  fetchBtn.disabled = false;\n}\n\nfetchBtn.addEventListener("click", getRandomQuote);'
            },
            explanationLines: [
              'async keyword: Declares an asynchronous function that automatically returns a Promise.',
              'await keyword: Pauses function execution until the Promise resolves with its returned data.',
              'fetch(url): Modern browser API for making asynchronous HTTP requests.',
              'JSON.stringify() & JSON.parse(): Serializes JavaScript objects to strings for localStorage and parses strings back into objects.',
              'localStorage.setItem(key, value): Persists data across browser tabs and sessions.'
            ],
            interactiveStarter: {
              html: '<h3>localStorage Scratchpad</h3>\n<input id="noteInput" placeholder="Type a persistent note...">\n<button id="saveBtn">Save Note</button>\n<p id="savedMsg"></p>',
              css: 'body { font-family: sans-serif; padding: 20px; }\ninput { padding: 8px; width: 200px; } button { padding: 8px 12px; }',
              js: 'const noteInput = document.querySelector("#noteInput");\nconst saveBtn = document.querySelector("#saveBtn");\nconst savedMsg = document.querySelector("#savedMsg");\n\n// Load saved note on start\nconst saved = localStorage.getItem("demoNote");\nif (saved) {\n  savedMsg.textContent = `Saved: "${saved}"`;\n  noteInput.value = saved;\n}\n\nsaveBtn.addEventListener("click", () => {\n  const val = noteInput.value;\n  localStorage.setItem("demoNote", val);\n  savedMsg.textContent = `Saved: "${val}"`;\n  console.log("Saved to localStorage:", val);\n});'
            },
            commonMistakes: [
              {
                mistake: 'Using await outside of an async function',
                fix: 'Ensure the wrapping function is marked with the "async" keyword (or top-level ES modules)',
                why: 'Traditional non-async function blocks cannot evaluate the await operator.'
              },
              {
                mistake: 'Forgetting JSON.stringify when storing objects in localStorage',
                fix: 'Always store objects as JSON strings: localStorage.setItem("key", JSON.stringify(obj))',
                why: 'Without stringify, JavaScript converts objects to the useless string "[object Object]".'
              }
            ],
            bestPractices: [
              'Always wrap await calls inside try...catch blocks to handle network offline or 404/500 errors gracefully.',
              'Check response.ok when using fetch() before parsing JSON.'
            ],
            exercise: {
              instructions: 'Write code to store a user object { name: "Dev", score: 100 } into localStorage under the key "userData" using JSON.stringify().',
              hint: 'const user = { name: "Dev", score: 100 }; localStorage.setItem("userData", JSON.stringify(user));',
              solution: 'const user = { name: "Dev", score: 100 };\nlocalStorage.setItem("userData", JSON.stringify(user));\nconst retrieved = JSON.parse(localStorage.getItem("userData"));\nconsole.log("Saved & Loaded User:", retrieved);',
              starterCode: {
                html: '<p>Open console to verify localStorage!</p>',
                css: 'body { font-family: sans-serif; padding: 20px; }',
                js: '// Store user object to localStorage below:\n\n'
              }
            },
            quiz: [
              {
                id: 'q-js-4-1',
                question: 'Which method turns a JavaScript object into a JSON string for localStorage storage?',
                options: ['JSON.parse()', 'JSON.stringify()', 'JSON.toString()', 'JSON.encode()'],
                correctIndex: 1,
                explanation: 'JSON.stringify() serializes JavaScript objects or values into a standard JSON formatted string.'
              },
              {
                id: 'q-js-4-2',
                question: 'What keyword pauses execution inside an async function until a Promise completes?',
                options: ['wait', 'pause', 'await', 'defer'],
                correctIndex: 2,
                explanation: 'The "await" keyword pauses execution inside async functions until the Promise settles.'
              }
            ]
          }
        ]
      }
    ]
  }
];

export const getAllLessons = (): { lesson: any; course: Course; module: any }[] => {
  const list: any[] = [];
  COURSES.forEach(course => {
    course.modules.forEach(mod => {
      mod.lessons.forEach(lesson => {
        list.push({ lesson, course, module: mod });
      });
    });
  });
  return list;
};

export const getLessonById = (id: string) => {
  for (const course of COURSES) {
    for (const mod of course.modules) {
      for (const lesson of mod.lessons) {
        if (lesson.id === id) {
          return { lesson, course, module: mod };
        }
      }
    }
  }
  return null;
};
