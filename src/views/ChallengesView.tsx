import React, { useState, useEffect } from 'react';
import { CodingChallenge, UserProgress } from '../types';
import { CODING_CHALLENGES } from '../data/challengesData';
import { InteractiveEditor } from '../components/InteractiveEditor';
import { triggerConfetti } from '../utils/confetti';
import { saveProgress } from '../utils/storage';
import {
  Swords,
  Play,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Eye,
  EyeOff,
  RotateCcw,
  Sparkles,
  Check,
  ChevronRight,
  Filter,
  Terminal,
  Award
} from 'lucide-react';

interface ChallengesViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
}

export const ChallengesView: React.FC<ChallengesViewProps> = ({ progress, setProgress }) => {
  const [selectedChallenge, setSelectedChallenge] = useState<CodingChallenge>(CODING_CHALLENGES[0]);
  const [userCode, setUserCode] = useState(selectedChallenge.starterCode);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [testResults, setTestResults] = useState<{ id: string; passed: boolean; message: string; output?: string }[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setUserCode(selectedChallenge.starterCode);
    setTestResults([]);
    setShowHint(false);
    setShowSolution(false);
  }, [selectedChallenge]);

  const filteredChallenges = CODING_CHALLENGES.filter(c => {
    if (categoryFilter !== 'all' && c.category !== categoryFilter) return false;
    if (difficultyFilter !== 'all' && c.difficulty !== difficultyFilter) return false;
    return true;
  });

  const handleRunTests = () => {
    setIsRunning(true);
    const results: { id: string; passed: boolean; message: string; output?: string }[] = [];

    // Create a temporary sandbox document
    const sandboxIframe = document.createElement('iframe');
    sandboxIframe.style.display = 'none';
    document.body.appendChild(sandboxIframe);

    const doc = sandboxIframe.contentDocument || sandboxIframe.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>${userCode.css}</style>
          </head>
          <body>
            ${userCode.html}
            <script>
              ${userCode.js}
            </script>
          </body>
        </html>
      `);
      doc.close();

      // Run each test against this sandbox iframe window/document
      selectedChallenge.tests.forEach((test) => {
        try {
          const testRunner = new Function('document', 'window', test.testFnString);
          const passed = Boolean(testRunner(doc, sandboxIframe.contentWindow));

          results.push({
            id: test.id,
            passed,
            message: test.description,
            output: passed ? 'Passed condition verification' : 'Condition returned false or failed requirement'
          });
        } catch (err: any) {
          results.push({
            id: test.id,
            passed: false,
            message: test.description,
            output: `Evaluation error: ${err.message}`
          });
        }
      });
    }

    document.body.removeChild(sandboxIframe);

    setTestResults(results);
    setIsRunning(false);

    const allPassed = results.length > 0 && results.every(r => r.passed);
    if (allPassed && !progress.completedChallenges[selectedChallenge.id]) {
      triggerConfetti('milestone');
      const updated: UserProgress = {
        ...progress,
        completedChallenges: {
          ...progress.completedChallenges,
          [selectedChallenge.id]: true
        },
        xp: progress.xp + selectedChallenge.xp
      };
      setProgress(updated);
      saveProgress(updated);
    }
  };

  const isCompleted = !!progress.completedChallenges[selectedChallenge.id];
  const allTestsPassed = testResults.length > 0 && testResults.every(r => r.passed);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 font-mono">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 border border-[#FF3D00]/40 bg-[#FF3D00]/10 text-[#FF3D00] text-[10px] font-bold uppercase tracking-wider mb-2">
            <Swords className="w-3.5 h-3.5" />
            <span>ASSESSMENT // VERIFICATION SUITE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Coding Challenges
          </h1>
          <p className="text-xs sm:text-sm text-[#888888] mt-1 font-sans">
            Validate technical problem solving skills against automated unit tests and benchmark assertions.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 flex-wrap font-mono">
          <select
            id="challenge-cat-filter"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="p-2 text-xs uppercase font-bold bg-[#111111] text-white border border-white/15 focus:outline-none"
          >
            <option value="all">ALL CATEGORIES</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JAVASCRIPT</option>
          </select>

          <select
            id="challenge-diff-filter"
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="p-2 text-xs uppercase font-bold bg-[#111111] text-white border border-white/15 focus:outline-none"
          >
            <option value="all">ALL DIFFICULTIES</option>
            <option value="Beginner">BEGINNER</option>
            <option value="Easy">EASY</option>
            <option value="Medium">MEDIUM</option>
            <option value="Hard">HARD</option>
          </select>
        </div>
      </div>

      {/* Main Workspace Split: Sidebar & Code Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Challenge List */}
        <div className="lg:col-span-4 space-y-3 font-mono">
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888]">
              SELECT CHALLENGE // ({filteredChallenges.length})
            </span>
          </div>

          <div className="space-y-2 max-h-[640px] overflow-y-auto pr-1">
            {filteredChallenges.map((ch) => {
              const done = !!progress.completedChallenges[ch.id];
              const isSelected = ch.id === selectedChallenge.id;

              return (
                <button
                  key={ch.id}
                  type="button"
                  id={`challenge-card-${ch.id}`}
                  onClick={() => setSelectedChallenge(ch)}
                  className={`w-full text-left p-4 border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#FF3D00] text-black font-bold border-[#FF3D00]'
                      : 'bg-[#111111] border-white/10 text-white hover:border-white/30'
                  }`}
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                        isSelected
                          ? 'bg-black text-white'
                          : ch.difficulty === 'Beginner' || ch.difficulty === 'Easy'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : ch.difficulty === 'Medium'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                      }`}>
                        {ch.difficulty}
                      </span>
                      <span className={`text-[10px] font-semibold ${isSelected ? 'text-black/80' : 'text-[#888888]'}`}>+{ch.xp} XP</span>
                    </div>

                    <h4 className={`text-xs font-bold uppercase truncate ${isSelected ? 'text-black' : 'text-white'}`}>
                      {ch.title}
                    </h4>
                  </div>

                  {done ? (
                    <CheckCircle2 className={`w-4 h-4 shrink-0 ${isSelected ? 'text-black' : 'text-[#FF3D00]'}`} />
                  ) : (
                    <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-black' : 'text-[#888888]'}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Challenge Arena */}
        <div className="lg:col-span-8 space-y-6">
          {/* Challenge Description Card */}
          <div className="p-6 bg-[#111111] border border-white/10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 font-mono">
              <div>
                <h2 className="text-xl font-black text-white uppercase">{selectedChallenge.title}</h2>
                <span className="text-[10px] text-[#FF3D00] uppercase tracking-wider font-bold">{selectedChallenge.category} MODULE</span>
              </div>

              <div className="flex items-center gap-2">
                {isCompleted && (
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/40 uppercase">
                    <Award className="w-3.5 h-3.5" />
                    <span>PASSED (+{selectedChallenge.xp} XP)</span>
                  </div>
                )}

                <button
                  type="button"
                  id="btn-run-challenge-tests"
                  disabled={isRunning}
                  onClick={handleRunTests}
                  className="flex items-center gap-1.5 px-4 py-2 bg-[#FF3D00] hover:bg-[#FF5722] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isRunning ? 'EVALUATING...' : 'RUN TESTS & CHECK'}</span>
                </button>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
              {selectedChallenge.description}
            </p>

            {/* Requirements list */}
            <div className="space-y-2 pt-1 font-mono">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888] block">REQUIREMENTS SPECIFICATION:</span>
              <ul className="space-y-1 text-xs text-[#AAAAAA]">
                {selectedChallenge.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#FF3D00] font-bold">&gt;</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hint & Solution Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/10 font-mono">
              <button
                type="button"
                id="btn-challenge-hint"
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0A0A0A] border border-white/15 text-xs text-[#E0E0E0] uppercase hover:bg-white/5 transition-colors"
              >
                <HelpCircle className="w-3.5 h-3.5 text-[#FFD600]" />
                <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
              </button>

              <button
                type="button"
                id="btn-challenge-solution"
                onClick={() => setShowSolution(!showSolution)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0A0A0A] border border-white/15 text-xs text-[#E0E0E0] uppercase hover:bg-white/5 transition-colors"
              >
                {showSolution ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5 text-[#00E5FF]" />}
                <span>{showSolution ? 'Hide Solution' : 'View Solution'}</span>
              </button>

              <button
                type="button"
                id="btn-challenge-reset"
                onClick={() => setUserCode(selectedChallenge.starterCode)}
                className="p-1.5 text-[#888888] hover:text-white transition-colors ml-auto flex items-center gap-1 text-xs uppercase"
                title="Reset Starter Code"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Code</span>
              </button>
            </div>

            {showHint && (
              <div className="p-3.5 bg-[#0A0A0A] border border-[#FFD600]/30 text-xs font-mono text-[#FFD600] leading-relaxed animate-in fade-in duration-150">
                <strong>HINT:</strong> {selectedChallenge.hint}
              </div>
            )}

            {showSolution && (
              <div className="p-4 bg-[#0A0A0A] border border-[#00E5FF]/40 space-y-2 animate-in fade-in duration-150 font-mono">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00E5FF]">Official Benchmark Solution</span>
                <div className="space-y-2 text-xs">
                  {selectedChallenge.solution.html && (
                    <div>
                      <span className="text-[#888888] block text-[10px]">HTML:</span>
                      <pre className="text-white whitespace-pre-wrap">{selectedChallenge.solution.html}</pre>
                    </div>
                  )}
                  {selectedChallenge.solution.css && (
                    <div>
                      <span className="text-[#888888] block text-[10px]">CSS:</span>
                      <pre className="text-[#00E5FF] whitespace-pre-wrap">{selectedChallenge.solution.css}</pre>
                    </div>
                  )}
                  {selectedChallenge.solution.js && (
                    <div>
                      <span className="text-[#888888] block text-[10px]">JAVASCRIPT:</span>
                      <pre className="text-[#FFD600] whitespace-pre-wrap">{selectedChallenge.solution.js}</pre>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Code Editor Box */}
          <InteractiveEditor
            key={selectedChallenge.id}
            initialHtml={userCode.html}
            initialCss={userCode.css}
            initialJs={userCode.js}
            onCodeChange={(newCode) => setUserCode(newCode)}
            height="460px"
          />

          {/* Test Results Output Panel */}
          {testResults.length > 0 && (
            <div className="p-6 bg-[#111111] border border-white/10 space-y-4 font-mono animate-in fade-in duration-150">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#FF3D00]" />
                  <h3 className="font-bold text-white text-xs uppercase tracking-wider">Automated Verification Suite</h3>
                </div>

                <span className={`text-[10px] font-bold px-3 py-1 uppercase ${
                  allTestsPassed
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                }`}>
                  {testResults.filter(r => r.passed).length} / {testResults.length} Tests Passed
                </span>
              </div>

              <div className="space-y-2">
                {testResults.map((result, idx) => (
                  <div
                    key={result.id}
                    className={`p-3.5 border flex items-start justify-between gap-3 text-xs ${
                      result.passed
                        ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300'
                        : 'bg-rose-950/20 border-rose-500/30 text-rose-300'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      {result.passed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="font-bold">Test {idx + 1}: {result.message}</p>
                        {result.output && (
                          <p className="text-[10px] font-mono text-[#888888] mt-1">
                            Output: {result.output}
                          </p>
                        )}
                      </div>
                    </div>

                    <span className="font-bold text-[10px] uppercase tracking-wider shrink-0">
                      {result.passed ? 'PASSED' : 'FAILED'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
