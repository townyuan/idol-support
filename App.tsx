
import React, { useState, useEffect } from 'react';
import { Step, ProjectData } from './types';
import { FilterStep } from './components/FilterStep';
import { SpotSelectionStep } from './components/SpotSelectionStep';
import { ContentEditorStep } from './components/ContentEditorStep';
import { ReviewPayStep } from './components/ReviewPayStep';
import { SuccessStep } from './components/SuccessStep';
import { COLORS } from './constants';

const STORAGE_KEY = 'idol_launcher_draft';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>(Step.Filter);
  const [projectData, setProjectData] = useState<ProjectData>(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
      idols: [],
      region: '',
      mediaType: '',
      date: '',
      title: '',
      description: '',
    };
  });

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(projectData));
  }, [projectData]);

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const stepsInfo = [
    { id: Step.Filter, label: '篩選' },
    { id: Step.SpotSelection, label: '版位' },
    { id: Step.ContentEditor, label: '設定' },
    { id: Step.ReviewPay, label: '支付' },
  ];

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden">
      {/* Header */}
      <header className="px-5 py-4 flex items-center justify-between border-b bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          {currentStep > Step.Filter && currentStep < Step.Success && (
            <button onClick={prevStep} className="p-2 -ml-2 text-gray-600 hover:text-gray-900 active:scale-90 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
          )}
          <h1 className="text-xl font-black text-gray-900 tracking-tight">
            {currentStep === Step.Success ? '完成應援' : '發起應援'}
          </h1>
        </div>
        <div className="flex items-center gap-1 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
          <span className="text-xs font-black text-purple-700">💎 12,500</span>
        </div>
      </header>

      {/* Progress Bar */}
      {currentStep < Step.Success && (
        <div className="bg-white px-5 py-3 shadow-sm z-40">
          <div className="flex justify-between mb-2">
            {stepsInfo.map(s => (
              <span key={s.id} className={`text-[10px] font-black uppercase tracking-widest ${currentStep >= s.id ? 'text-purple-700' : 'text-gray-300'}`}>
                {s.label}
              </span>
            ))}
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full transition-all duration-500 ease-out rounded-full shadow-[0_0_8px_rgba(129,114,213,0.4)]"
              style={{ width: `${(currentStep / 4) * 100}%`, backgroundColor: COLORS.primary }}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-24">
        {currentStep === Step.Filter && <FilterStep data={projectData} setData={setProjectData} onNext={nextStep} />}
        {currentStep === Step.SpotSelection && <SpotSelectionStep data={projectData} setData={setProjectData} onNext={nextStep} />}
        {currentStep === Step.ContentEditor && <ContentEditorStep data={projectData} setData={setProjectData} onNext={nextStep} />}
        {currentStep === Step.ReviewPay && <ReviewPayStep data={projectData} onNext={nextStep} />}
        {currentStep === Step.Success && <SuccessStep onReset={() => { sessionStorage.removeItem(STORAGE_KEY); window.location.reload(); }} />}
      </main>
    </div>
  );
};

export default App;
