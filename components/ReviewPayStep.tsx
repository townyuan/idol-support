
import React, { useState } from 'react';
import { ProjectData, Wallet } from '../types';
import { COLORS } from '../constants';

interface ReviewPayStepProps {
  projectData: ProjectData;
  wallet: Wallet;
  setWallet: React.Dispatch<React.SetStateAction<Wallet>>;
  onNext: () => void;
  onPrev: () => void;
}

export const ReviewPayStep: React.FC<ReviewPayStepProps> = ({ projectData, wallet, setWallet, onNext }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const spot = projectData.selectedSpot!;

  const handlePayment = () => {
    if (wallet.balance < spot.leadInThreshold) {
      alert(`餘額不足！尚需 ${spot.leadInThreshold - wallet.balance} 藍鑽，請先儲值。`);
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setWallet(prev => ({ balance: prev.balance - spot.leadInThreshold }));
      setIsProcessing(false);
      onNext();
    }, 1500);
  };

  return (
    <div className="p-6 space-y-6 animate-fadeIn">
      <section className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-gray-800 border-b pb-2">專案摘要</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-500">應援標題</span>
            <span className="font-semibold text-gray-900">{projectData.title}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">應援偶像</span>
            <span className="font-semibold text-purple-600">{projectData.idols.join(', ')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">預計日期</span>
            <span className="font-semibold text-gray-900">{projectData.date}</span>
          </div>
          <div className="flex justify-between items-start gap-4">
            <span className="text-gray-500 shrink-0">應援地點</span>
            <span className="font-semibold text-gray-900 text-right">{spot.name}</span>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-6">
        <h3 className="text-lg font-bold text-gray-800 border-b pb-2">帳單明細</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">集資總目標</span>
            <span className="text-lg font-bold text-gray-900">{spot.targetAmount.toLocaleString()} 藍鑽</span>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-xl flex justify-between items-center border border-purple-100">
            <div>
              <p className="text-sm font-semibold text-purple-700">應付領投款 (5%)</p>
              <p className="text-xs text-purple-400">專案發起人先行支付</p>
            </div>
            <span className="text-2xl font-black" style={{ color: COLORS.primary }}>
              {spot.leadInThreshold.toLocaleString()} 藍鑽
            </span>
          </div>

          <div className="pt-4 border-t flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                <span className="text-blue-500 font-bold text-xs">💎</span>
              </div>
              <span className="text-gray-500 font-medium">錢包餘額</span>
            </div>
            <span className={`font-bold ${wallet.balance < spot.leadInThreshold ? 'text-red-500' : 'text-gray-900'}`}>
              {wallet.balance.toLocaleString()} 藍鑽
            </span>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t max-w-md mx-auto">
        <button 
          disabled={isProcessing}
          onClick={handlePayment}
          style={{ backgroundColor: COLORS.primary }}
          className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 ${isProcessing ? 'opacity-70 cursor-wait' : ''}`}
        >
          {isProcessing ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              處理中...
            </>
          ) : (
            `確認支付並發起`
          )}
        </button>
      </div>
    </div>
  );
};
