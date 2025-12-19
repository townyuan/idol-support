
import React, { useState } from 'react';
import { ProjectData } from '../types';
import { REGIONS, MEDIA_TYPES, COLORS } from '../constants';

interface Props {
  data: ProjectData;
  setData: React.Dispatch<React.SetStateAction<ProjectData>>;
  onNext: () => void;
}

export const FilterStep: React.FC<Props> = ({ data, setData, onNext }) => {
  const [tempIdol, setTempIdol] = useState('');

  const addIdol = () => {
    if (tempIdol.trim() && !data.idols.includes(tempIdol.trim())) {
      setData(prev => ({ ...prev, idols: [...prev.idols, tempIdol.trim()] }));
      setTempIdol('');
    }
  };

  const isValid = data.idols.length > 0 && data.region && data.mediaType && data.date;

  return (
    <div className="p-6 space-y-8 animate-fadeIn">
      <div className="space-y-4">
        <label className="text-sm font-black text-gray-700 uppercase tracking-widest">誰是主角？</label>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="輸入偶像姓名..."
            value={tempIdol}
            onChange={e => setTempIdol(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addIdol()}
            className="flex-1 px-4 py-3 bg-white text-gray-900 placeholder-gray-500 border-2 border-gray-200 focus:border-purple-500 rounded-2xl outline-none transition-all font-bold shadow-sm"
          />
          <button onClick={addIdol} className="bg-gray-900 text-white px-5 rounded-2xl font-black active:scale-90 transition-transform">增加</button>
        </div>
        <div className="flex flex-wrap gap-2">
          {data.idols.map(i => (
            <span key={i} className="bg-purple-100 text-purple-900 px-3 py-1.5 rounded-xl text-sm font-black flex items-center gap-2 border border-purple-200 shadow-sm">
              {i}
              <button onClick={() => setData(prev => ({ ...prev, idols: prev.idols.filter(x => x !== i) }))} className="hover:text-red-600 text-lg">×</button>
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-sm font-black text-gray-700 uppercase tracking-widest">投放位置</label>
        <div className="grid grid-cols-2 gap-3">
          <select 
            value={data.region}
            onChange={e => setData(prev => ({ ...prev, region: e.target.value }))}
            className="px-4 py-3 bg-white text-gray-900 rounded-2xl outline-none font-black border-2 border-gray-200 focus:border-purple-500 transition-all shadow-sm"
          >
            <option value="">選擇地區</option>
            {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
          <select 
            value={data.mediaType}
            onChange={e => setData(prev => ({ ...prev, mediaType: e.target.value }))}
            className="px-4 py-3 bg-white text-gray-900 rounded-2xl outline-none font-black border-2 border-gray-200 focus:border-purple-500 transition-all shadow-sm"
          >
            <option value="">媒體類型</option>
            {MEDIA_TYPES.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-sm font-black text-gray-700 uppercase tracking-widest">預定檔期</label>
        <input 
          type="date"
          value={data.date}
          onChange={e => setData(prev => ({ ...prev, date: e.target.value }))}
          className="w-full px-4 py-3 bg-white text-gray-900 rounded-2xl outline-none font-black border-2 border-gray-200 focus:border-purple-500 transition-all shadow-sm"
        />
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-5 bg-white border-t max-w-md mx-auto z-40 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <button 
          onClick={onNext}
          disabled={!isValid}
          style={{ backgroundColor: isValid ? COLORS.primary : '#D1D5DB' }}
          className={`w-full py-4 rounded-2xl font-black shadow-lg transition-all active:scale-95 ${isValid ? 'text-white' : 'text-gray-500'}`}
        >
          查看推薦版位
        </button>
      </div>
    </div>
  );
};
