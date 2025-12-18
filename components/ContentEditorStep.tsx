
import React from 'react';
import { ProjectData } from '../types';
import { COLORS } from '../constants';

interface ContentEditorStepProps {
  projectData: ProjectData;
  setProjectData: React.Dispatch<React.SetStateAction<ProjectData>>;
  onNext: () => void;
  onPrev: () => void;
}

export const ContentEditorStep: React.FC<ContentEditorStepProps> = ({ projectData, setProjectData, onNext }) => {
  const isFormValid = projectData.title.trim().length > 0 && projectData.description.trim().length > 0;

  const handleFileChange = (field: 'draftFile' | 'coverFile', e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Simulate file upload by setting name
      setProjectData(prev => ({ ...prev, [field]: file.name }));
    }
  };

  return (
    <div className="p-6 space-y-8 animate-fadeIn">
      <section className="space-y-3">
        <label className="block text-sm font-semibold text-gray-700">應援標題 (Project Title)</label>
        <input 
          type="text" 
          maxLength={20}
          placeholder="例如：慶祝 BTS V 出道十週年"
          value={projectData.title}
          onChange={(e) => setProjectData(prev => ({ ...prev, title: e.target.value }))}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200"
        />
        <p className="text-right text-xs text-gray-400">{projectData.title.length}/20</p>
      </section>

      <section className="space-y-3">
        <label className="block text-sm font-semibold text-gray-700">應援故事 (Description)</label>
        <textarea 
          rows={5}
          placeholder="介紹為什麼要發起這個應援專案..."
          value={projectData.description}
          onChange={(e) => setProjectData(prev => ({ ...prev, description: e.target.value }))}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200 resize-none"
        ></textarea>
      </section>

      <section className="grid grid-cols-1 gap-6">
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700 text-center">主視覺草稿 (Draft Upload)</label>
          <div className="relative group">
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => handleFileChange('draftFile', e)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className={`h-32 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center transition-colors ${projectData.draftFile ? 'border-purple-400 bg-purple-50' : 'border-gray-200 bg-gray-50'}`}>
              {projectData.draftFile ? (
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-xs text-purple-600 font-medium truncate px-4 max-w-[200px]">{projectData.draftFile}</p>
                </div>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <span className="text-xs text-gray-500">點擊上傳審核草稿</span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700 text-center">封面圖片 (Cover Image)</label>
          <div className="relative group">
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => handleFileChange('coverFile', e)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className={`h-32 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center transition-colors ${projectData.coverFile ? 'border-purple-400 bg-purple-50' : 'border-gray-200 bg-gray-50'}`}>
              {projectData.coverFile ? (
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-xs text-purple-600 font-medium truncate px-4 max-w-[200px]">{projectData.coverFile}</p>
                </div>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <span className="text-xs text-gray-500">點擊上傳列表封面</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t max-w-md mx-auto">
        <button 
          disabled={!isFormValid}
          onClick={onNext}
          style={{ backgroundColor: isFormValid ? COLORS.primary : '#E5E7EB' }}
          className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg active:scale-[0.98] ${!isFormValid ? 'cursor-not-allowed' : ''}`}
        >
          下一步：確認金額
        </button>
      </div>
    </div>
  );
};
