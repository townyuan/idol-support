
import React from 'react';
import { ProjectData } from '../types';
import { COLORS } from '../constants';

interface Props {
  data: ProjectData;
  setData: React.Dispatch<React.SetStateAction<ProjectData>>;
  onNext: () => void;
}

export const ContentEditorStep: React.FC<Props> = ({ data, setData, onNext }) => {
  const isValid = data.title && data.description;

  return (
    <div className="p-6 space-y-8 animate-fadeIn">
      <div className="space-y-4">
        <label className="text-sm font-black text-gray-700 uppercase tracking-widest">應援標題</label>
        <input 
          type="text" 
          placeholder="例如：慶祝出道七週年應援"
          value={data.title}
          onChange={e => setData(prev => ({ ...prev, title: e.target.value }))}
          className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 rounded-2xl outline-none border-2 border-gray-200 focus:border-purple-500 transition-all font-black shadow-sm"
        />
      </div>

      <div className="space-y-4">
        <label className="text-sm font-black text-gray-700 uppercase tracking-widest">應援故事</label>
        <textarea 
          rows={4}
          placeholder="寫下您發起這個專案的初衷..."
          value={data.description}
          onChange={e => setData(prev => ({ ...prev, description: e.target.value }))}
          className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 rounded-2xl outline-none border-2 border-gray-200 focus:border-purple-500 transition-all font-bold resize-none shadow-sm"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block text-center">主視覺草稿</label>
          <div className={`h-28 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-colors ${data.draftFile ? 'border-purple-600 bg-purple-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100 shadow-inner'}`}>
            <input type="file" className="hidden" id="draft-up" onChange={e => setData(prev => ({ ...prev, draftFile: e.target.files?.[0]?.name }))} />
            <label htmlFor="draft-up" className="cursor-pointer text-center px-4 w-full">
              <span className="text-3xl">📁</span>
              <p className={`text-xs font-black mt-2 truncate max-w-full ${data.draftFile ? 'text-purple-800' : 'text-gray-600'}`}>
                {data.draftFile || '選擇檔案'}
              </p>
            </label>
          </div>
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block text-center">列表封面</label>
          <div className={`h-28 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-colors ${data.coverFile ? 'border-purple-600 bg-purple-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100 shadow-inner'}`}>
            <input type="file" className="hidden" id="cover-up" onChange={e => setData(prev => ({ ...prev, coverFile: e.target.files?.[0]?.name }))} />
            <label htmlFor="cover-up" className="cursor-pointer text-center px-4 w-full">
              <span className="text-3xl">🖼️</span>
              <p className={`text-xs font-black mt-2 truncate max-w-full ${data.coverFile ? 'text-purple-800' : 'text-gray-600'}`}>
                {data.coverFile || '選擇檔案'}
              </p>
            </label>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-5 bg-white border-t max-w-md mx-auto z-40 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <button 
          onClick={onNext}
          disabled={!isValid}
          style={{ backgroundColor: isValid ? COLORS.primary : '#D1D5DB' }}
          className={`w-full py-4 rounded-2xl font-black shadow-lg transition-all active:scale-95 ${isValid ? 'text-white' : 'text-gray-500'}`}
        >
          確認發起金額
        </button>
      </div>
    </div>
  );
};
