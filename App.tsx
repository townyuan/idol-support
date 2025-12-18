
import React, { useState, useEffect } from 'react';
import { Step, ProjectData, Wallet } from './types';
import { FilterStep } from './components/FilterStep';
import { SpotSelectionStep } from './components/SpotSelectionStep';
import { ContentEditorStep } from './components/ContentEditorStep';
import { ReviewPayStep } from './components/ReviewPayStep';
import { SuccessStep } from './components/SuccessStep';
import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';

const STORAGE_KEY = 'idol_support_project';

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

  const [wallet, setWallet] = useState<Wallet>({ balance: 12000 });

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(projectData));
  }, [projectData]);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, Step.Success));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, Step.Filter));

  const renderStep = () => {
    switch (currentStep) {
      case Step.Filter:
        return <FilterStep projectData={projectData} setProjectData={setProjectData} onNext={nextStep} />;
      case Step.SpotSelection:
        return <SpotSelectionStep projectData={projectData} setProjectData={setProjectData} onNext={nextStep} onPrev={prevStep} />;
      case Step.ContentEditor:
        return <ContentEditorStep projectData={projectData} setProjectData={setProjectData} onNext={nextStep} onPrev={prevStep} />;
      case Step.ReviewPay:
        return <ReviewPayStep projectData={projectData} wallet={wallet} setWallet={setWallet} onNext={nextStep} onPrev={prevStep} />;
      case Step.Success:
        return <SuccessStep onHome={() => {
            sessionStorage.removeItem(STORAGE_KEY);
            window.location.reload();
        }} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col shadow-xl">
      <Header currentStep={currentStep} onBack={currentStep !== Step.Filter && currentStep !== Step.Success ? prevStep : undefined} />
      {currentStep !== Step.Success && <ProgressBar currentStep={currentStep} />}
      <main className="flex-1 overflow-y-auto pb-24">
        {renderStep()}
      </main>
    </div>
  );
};

export default App;
