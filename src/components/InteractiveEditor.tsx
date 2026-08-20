import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, RotateCcw, Copy, Check, Terminal, Maximize2, Minimize2, Download, Code2, Palette, FileCode2 } from 'lucide-react';

interface InteractiveEditorProps {
  initialHtml?: string;
  initialCss?: string;
  initialJs?: string;
  height?: string;
  title?: string;
  showTabs?: boolean;
  onCodeChange?: (code: { html: string; css: string; js: string }) => void;
  readOnly?: boolean;
}

export const InteractiveEditor: React.FC<InteractiveEditorProps> = ({
  initialHtml = '',
  initialCss = '',
  initialJs = '',
  height = '480px',
  title,
  showTabs = true,
  onCodeChange,
  readOnly = false
}) => {
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [js, setJs] = useState(initialJs);
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<{ type: string; message: string; time: string }[]>([]);
  const [showConsole, setShowConsole] = useState(false);
  const [autoRun, setAutoRun] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const editorContainerRef = useRef<HTMLDivElement>(null);

  // Sync when initial values change
  useEffect(() => {
    setHtml(initialHtml);
    setCss(initialCss);
    setJs(initialJs);
  }, [initialHtml, initialCss, initialJs]);

  const runCode = useCallback(() => {
    if (!iframeRef.current) return;
    setConsoleLogs([]);

    const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
    if (!iframeDoc) return;

    // Build self-contained HTML document with console interceptor
    const combinedSource = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            ${css}
          </style>
          <script>
            // Intercept console calls to parent window
            (function() {
              const originalLog = console.log;
              const originalError = console.error;
              const originalWarn = console.warn;
              const originalInfo = console.info;

              function sendLog(type, args) {
                const formatted = Array.from(args).map(arg => {
                  if (typeof arg === 'object' && arg !== null) {
                    try { return JSON.stringify(arg, null, 2); } catch(e) { return String(arg); }
                  }
                  return String(arg);
                }).join(' ');

                window.parent.postMessage({
                  type: 'CODEPATH_CONSOLE_LOG',
                  logType: type,
                  message: formatted,
                  time: new Date().toLocaleTimeString()
                }, '*');
              }

              console.log = function(...args) { sendLog('log', args); originalLog.apply(console, args); };
              console.error = function(...args) { sendLog('error', args); originalError.apply(console, args); };
              console.warn = function(...args) { sendLog('warn', args); originalWarn.apply(console, args); };
              console.info = function(...args) { sendLog('info', args); originalInfo.apply(console, args); };

              window.onerror = function(msg, url, line) {
                sendLog('error', [msg + ' (Line ' + line + ')']);
                return false;
              };
            })();
          </script>
        </head>
        <body>
          ${html}
          <script>
            try {
              ${js}
            } catch (err) {
              console.error(err.message);
            }
          </script>
        </body>
      </html>
    `;

    iframeDoc.open();
    iframeDoc.write(combinedSource);
    iframeDoc.close();
  }, [html, css, js]);

  // Initial run on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      runCode();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Listen for console logs from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'CODEPATH_CONSOLE_LOG') {
        setConsoleLogs(prev => [...prev.slice(-49), {
          type: event.data.logType,
          message: event.data.message,
          time: event.data.time
        }]);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Keyboard shortcut: Ctrl + Enter to run
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runCode();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [runCode]);

  const handleReset = () => {
    setHtml(initialHtml);
    setCss(initialCss);
    setJs(initialJs);
    setConsoleLogs([]);
    setTimeout(() => runCode(), 50);
  };

  const handleCopy = async () => {
    const currentCode = activeTab === 'html' ? html : activeTab === 'css' ? css : js;
    await navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CodePath Academy Export</title>
  <style>
${css}
  </style>
</head>
<body>
${html}
  <script>
${js}
  </script>
</body>
</html>`;

    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'codepath-project.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleTextChange = (val: string) => {
    if (activeTab === 'html') {
      setHtml(val);
      onCodeChange?.({ html: val, css, js });
    } else if (activeTab === 'css') {
      setCss(val);
      onCodeChange?.({ html, css: val, js });
    } else {
      setJs(val);
      onCodeChange?.({ html, css, js: val });
    }

    if (autoRun) {
      setTimeout(runCode, 200);
    }
  };

  const activeContent = activeTab === 'html' ? html : activeTab === 'css' ? css : js;

  return (
    <div
      ref={editorContainerRef}
      id="interactive-code-editor"
      className={`flex flex-col border border-white/10 bg-[#0A0A0A] shadow-2xl transition-all ${
        isFullscreen ? 'fixed inset-4 z-50 h-[calc(100vh-2rem)]' : 'w-full'
      }`}
      style={{ height: isFullscreen ? undefined : height }}
    >
      {/* Editor Toolbar */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#111111] border-b border-white/10 text-xs text-[#E0E0E0] select-none font-mono">
        <div className="flex items-center gap-2">
          {title && <span className="font-bold text-white uppercase tracking-wider text-[11px] mr-2">{title}</span>}

          {showTabs && (
            <div className="flex bg-[#0A0A0A] p-0.5 border border-white/10">
              <button
                type="button"
                id="tab-btn-html"
                onClick={() => setActiveTab('html')}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider transition-colors ${
                  activeTab === 'html'
                    ? 'bg-[#FF3D00] text-black'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                <Code2 className="w-3 h-3" />
                <span>HTML</span>
              </button>

              <button
                type="button"
                id="tab-btn-css"
                onClick={() => setActiveTab('css')}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider transition-colors ${
                  activeTab === 'css'
                    ? 'bg-[#00E5FF] text-black'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                <Palette className="w-3 h-3" />
                <span>CSS</span>
              </button>

              <button
                type="button"
                id="tab-btn-js"
                onClick={() => setActiveTab('js')}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider transition-colors ${
                  activeTab === 'js'
                    ? 'bg-[#FFD600] text-black'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                <FileCode2 className="w-3 h-3" />
                <span>JS</span>
              </button>
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 font-mono">
          <button
            type="button"
            id="editor-btn-run"
            onClick={runCode}
            className="flex items-center gap-1.5 bg-[#FF3D00] hover:bg-[#FF5722] text-black px-3 py-1 font-bold text-[10px] uppercase tracking-wider transition-all shadow-sm active:scale-95"
            title="Run Code (Ctrl + Enter)"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>RUN</span>
          </button>

          <button
            type="button"
            id="editor-btn-reset"
            onClick={handleReset}
            className="p-1.5 text-[#888888] hover:text-white hover:bg-white/5 transition-colors"
            title="Reset code"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            id="editor-btn-copy"
            onClick={handleCopy}
            className="p-1.5 text-[#888888] hover:text-white hover:bg-white/5 transition-colors"
            title="Copy current tab code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#FF3D00]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>

          <button
            type="button"
            id="editor-btn-console"
            onClick={() => setShowConsole(!showConsole)}
            className={`flex items-center gap-1 px-2 py-1 text-[10px] uppercase font-bold transition-colors ${
              showConsole ? 'bg-white/10 text-white' : 'text-[#888888] hover:text-white'
            }`}
            title="Toggle Console Log"
          >
            <Terminal className="w-3 h-3" />
            <span className="hidden sm:inline">Logs</span>
            {consoleLogs.length > 0 && (
              <span className="px-1 bg-[#FF3D00] text-black text-[9px] font-bold">
                {consoleLogs.length}
              </span>
            )}
          </button>

          <button
            type="button"
            id="editor-btn-download"
            onClick={handleDownload}
            className="p-1.5 text-[#888888] hover:text-white hover:bg-white/5 transition-colors hidden sm:block"
            title="Download single HTML file"
          >
            <Download className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            id="editor-btn-fullscreen"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 text-[#888888] hover:text-white hover:bg-white/5 transition-colors"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Split Body: Editor & Preview */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10 overflow-hidden relative">
        {/* Code Input Area */}
        <div className="flex flex-col h-full bg-[#0A0A0A] overflow-hidden relative">
          <div className="flex-1 relative font-mono text-xs">
            <textarea
              id={`code-textarea-${activeTab}`}
              value={activeContent}
              onChange={(e) => handleTextChange(e.target.value)}
              disabled={readOnly}
              spellCheck={false}
              className="w-full h-full p-4 bg-transparent text-[#E0E0E0] font-mono text-xs leading-relaxed resize-none focus:outline-none border-none selection:bg-[#FF3D00]/30"
              placeholder={`Write your ${activeTab.toUpperCase()} code here...`}
            />
          </div>
          <div className="px-3 py-1 bg-[#111111] border-t border-white/10 text-[10px] font-mono text-[#888888] flex justify-between items-center">
            <span>SYNTAX // {activeTab.toUpperCase()}</span>
            <span>SHORTCUT: <kbd className="bg-white/10 px-1 py-0.5 text-white text-[9px]">CTRL+ENTER</kbd></span>
          </div>
        </div>

        {/* Live Output Preview Area */}
        <div className="flex flex-col h-full bg-white relative overflow-hidden">
          <div className="px-3 py-1 bg-[#111111] border-b border-white/10 text-[10px] font-mono font-bold text-[#888888] flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-white uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-[#FF3D00] animate-ping"></span>
              Live Sandbox Output
            </span>
            <span className="text-[9px] text-[#666666]">ISOLATED IFRAME</span>
          </div>

          <div className="flex-1 relative bg-white overflow-hidden">
            <iframe
              ref={iframeRef}
              id="editor-preview-iframe"
              title="Code Output Preview"
              sandbox="allow-scripts allow-modals allow-same-origin"
              className="w-full h-full border-none bg-white"
            />
          </div>

          {/* Collapsible Console Logs Drawer */}
          {showConsole && (
            <div className="h-44 bg-[#0A0A0A] border-t border-white/10 flex flex-col animate-in slide-in-from-bottom duration-150">
              <div className="px-3 py-1.5 bg-[#111111] text-xs font-mono text-white flex justify-between items-center border-b border-white/10">
                <span className="flex items-center gap-1.5 font-bold text-[#FF3D00] uppercase text-[10px] tracking-wider">
                  <Terminal className="w-3 h-3" />
                  Console Logs
                </span>
                <button
                  type="button"
                  id="btn-clear-console"
                  onClick={() => setConsoleLogs([])}
                  className="text-[10px] uppercase font-mono text-[#888888] hover:text-white"
                >
                  Clear
                </button>
              </div>
              <div className="flex-1 p-3 font-mono text-xs overflow-y-auto space-y-1.5 text-[#E0E0E0]">
                {consoleLogs.length === 0 ? (
                  <div className="text-[#666666] italic text-[11px]">No console logs captured yet. Use console.log() in your JavaScript code.</div>
                ) : (
                  consoleLogs.map((log, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-2 py-0.5 ${
                        log.type === 'error'
                          ? 'text-rose-400'
                          : log.type === 'warn'
                          ? 'text-amber-400'
                          : 'text-[#E0E0E0]'
                      }`}
                    >
                      <span className="text-[#666666] text-[10px] select-none">{log.time}</span>
                      <span className="font-bold select-none text-[#FF3D00]">&gt;</span>
                      <pre className="flex-1 whitespace-pre-wrap break-all font-mono text-xs">{log.message}</pre>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
