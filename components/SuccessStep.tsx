
import React from 'react';
import { COLORS } from '../constants';

interface SuccessStepProps {
  onHome: () => void;
}

export const SuccessStep: React.FC<SuccessStepProps> = ({ onHome }) => {
  const orderId = `ORD-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}-01`;

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-8 text-center animate-bounceIn">
      <div 
        className="w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-purple-100 animate-scaleUp"
        style={{ backgroundColor: COLORS.primary }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h2 className="text-3xl font-black text-gray-900 mb-3">發起成功！</h2>
      <p className="text-gray-500 mb-10 leading-relaxed">您的專案已成功提交，<br />正在進入審核階段，請耐心等候通知。</p>

      <div className="bg-gray-50 w-full rounded-2xl p-6 mb-12 border border-gray-100">
        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-2">訂單編號</p>
        <p className="text-lg font-mono font-bold text-gray-700">{orderId}</p>
      </div>

      <div className="w-full space-y-4">
        <button 
          className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold shadow-lg active:scale-[0.98] transition-all"
        >
          查看我的專案
        </button>
        <button 
          onClick={onHome}
          className="w-full py-4 bg-white text-gray-600 border border-gray-200 rounded-xl font-bold active:scale-[0.98] transition-all"
        >
          回首頁
        </button>
      </div>
    </div>
  );
};
