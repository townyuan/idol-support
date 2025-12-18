
import React from 'react';
import { Step } from '../types';

interface HeaderProps {
  currentStep: Step;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentStep, onBack }) => {
  const titles: Record<Step, string> = {
    [Step.Filter]: '發起應援',
    [Step.SpotSelection]: '選擇版位',
    [Step.ContentEditor]: '專案設定',
    [Step.ReviewPay]: '確認支付',
    [Step.Success]: '發起成功',
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {onBack && (
          <button onClick={onBack} className="p-1 -ml-1 text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <h1 className="text-xl font-bold text-gray-800">{titles[currentStep]}</h1>
      </div>
      <div className="w-6 h-6"></div> {/* Placeholder for balance */}
    </header>
  );
};
