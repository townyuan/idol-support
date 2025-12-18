
import React, { useState } from 'react';
import { ProjectData } from '../types';
import { REGIONS, MEDIA_TYPES, COLORS } from '../constants';

interface FilterStepProps {
  projectData: ProjectData;
  setProjectData: React.Dispatch<React.SetStateAction<ProjectData>>;
  onNext: () => void;
}

export const FilterStep: React.FC<FilterStepProps> = ({ projectData, setProjectData, onNext }) => {
  const [idolInput, setIdolInput] = useState('');

  const addIdol = () => {
    if (idolInput.trim() && !projectData.idols.includes(idolInput.trim())) {
      setProjectData(prev => ({ ...prev, idols: [...prev.idols, idolInput.trim()] }));
      setIdolInput('');
    }
  };

  const removeIdol = (idol: string) => {
    setProjectData(prev => ({ ...prev, idols: prev.idols.filter(i => i !== idol) }));
  };

  const isFormValid = projectData.idols.length > 0 && projectData.region && projectData.mediaType && projectData.date;

  return (
    <div className="p-6 space-y-8 animate-fadeIn">
      <section className="space-y-3">
        <label className="block text-sm font-semibold text-gray-700">本命搜尋 (Idol Search)</label>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="輸入本命偶像姓名..."
            value={idolInput}
            onChange={(e) => setIdolInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addIdol()}
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
          />
          <button 
            onClick={addIdol}
            style={{ backgroundColor: COLORS.primary }}
            className="px-6 py-3 text-white rounded-xl font-medium active:scale-95 transition-transform"
          >
            加入
          </button>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {projectData.idols.map(idol => (
            <span key={idol} className="flex items-center gap-1 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100">
              {idol}
              <button onClick={() => removeIdol(idol)} className="hover:text-purple-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          ))}
          {projectData.idols.length === 0 && <p className="text-gray-400 text-sm">請至少加入一位偶像</p>}
        </div>
      </section>

      <section className="space-y-3">
        <label className="block text-sm font-semibold text-gray-700">應援地區 (Region)</label>
        <select 
          value={projectData.region}
          onChange={(e) => setProjectData(prev => ({ ...prev, region: e.target.value }))}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white"
        >
          <option value="">選擇地區</option>
          {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </section>

      <section className="space-y-3">
        <label className="block text-sm font-semibold text-gray-700">媒體類型 (Media Type)</label>
        <select 
          value={projectData.mediaType}
          onChange={(e) => setProjectData(prev => ({ ...prev, mediaType: e.target.value }))}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white"
        >
          <option value="">選擇媒體類型</option>
          {MEDIA_TYPES.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
      </section>

      <section className="space-y-3">
        <label className="block text-sm font-semibold text-gray-700">預計檔期 (Date Picker)</label>
        <input 
          type="date" 
          value={projectData.date}
          min={new Date().toISOString().split('T')[0]}
          onChange={(e) => setProjectData(prev => ({ ...prev, date: e.target.value }))}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white"
        />
      </section>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t max-w-md mx-auto">
        <button 
          disabled={!isFormValid}
          onClick={onNext}
          style={{ backgroundColor: isFormValid ? COLORS.primary : '#E5E7EB' }}
          className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg active:scale-[0.98] ${!isFormValid ? 'cursor-not-allowed' : ''}`}
        >
          下一步：查看版位
        </button>
      </div>
    </div>
  );
};
