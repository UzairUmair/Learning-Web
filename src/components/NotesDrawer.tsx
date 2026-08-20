import React, { useState, useEffect } from 'react';
import { X, Save, Check, FileText } from 'lucide-react';
import { getStoredProgress, saveProgress } from '../utils/storage';

interface NotesDrawerProps {
  lessonId: string;
  lessonTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export const NotesDrawer: React.FC<NotesDrawerProps> = ({
  lessonId,
  lessonTitle,
  isOpen,
  onClose
}) => {
  const [noteContent, setNoteContent] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (lessonId) {
      const progress = getStoredProgress();
      setNoteContent(progress.notes[lessonId] || '');
      setSaved(false);
    }
  }, [lessonId, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    const progress = getStoredProgress();
    const updatedNotes = {
      ...progress.notes,
      [lessonId]: noteContent
    };
    saveProgress({
      ...progress,
      notes: updatedNotes
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-[#111111] shadow-2xl border-l border-white/20 flex flex-col animate-in slide-in-from-right duration-200 font-mono">
      <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#0A0A0A]">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#00E5FF]" />
          <h3 className="font-bold text-white text-xs uppercase tracking-wider">Lesson Notes Registry</h3>
        </div>
        <button
          type="button"
          id="btn-close-notes"
          onClick={onClose}
          className="p-1 text-[#888888] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 flex-1 flex flex-col space-y-3">
        <p className="text-xs text-[#888888] truncate font-sans">
          Subject: <span className="text-white font-bold font-mono uppercase">{lessonTitle}</span>
        </p>

        <textarea
          id="lesson-note-textarea"
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          placeholder="Record key concepts, technical reminders, or code snippets..."
          className="flex-1 w-full p-3 text-xs bg-[#0A0A0A] text-white border border-white/15 resize-none focus:outline-none focus:border-[#00E5FF] font-mono leading-relaxed"
        />

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[10px] text-[#888888] uppercase">
            {noteContent.length > 0 ? `${noteContent.length} CHARS` : 'EMPTY'}
          </span>
          <button
            type="button"
            id="btn-save-note"
            onClick={handleSave}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#FF3D00] hover:bg-[#FF5722] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
          >
            {saved ? <Check className="w-4 h-4 text-black" /> : <Save className="w-4 h-4" />}
            <span>{saved ? 'RECORDED' : 'SAVE NOTES'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
