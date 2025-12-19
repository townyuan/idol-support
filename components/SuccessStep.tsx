
import React from 'react';
import { COLORS } from '../constants';

interface Props {
  onReset: () => void;
}

export const SuccessStep: React.FC<Props> = ({ onReset }) => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center animate-fadeIn">
      <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-green-100 scale-110 animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
      </div>
      
      <h2 className="text-3xl font-black text-gray-900 mb-4">發起成功！</h2>
      <p className="text-gray-500 leading-relaxed mb-10">
        專案已進入審核階段，<br />
        請密切留意您的手機推播通知！
      </p>

      <div className="w-full bg-gray-50 rounded-3xl p-6 mb-8 border border-dashed border-gray-200">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">訂單編號</p>
        <p className="text-sm font-mono font-bold text-gray-800">#IDL-20240520-X82</p>
      </div>

      <div className="w-full space-y-3">
        <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold active:scale-95 transition-all shadow-xl shadow-gray-200">
          查看專案進度
        </button>
        <button onClick={onReset} className="w-full py-4 bg-white text-gray-500 rounded-2xl font-bold active:scale-95 transition-all">
          回首頁
        </button>
      </div>
    </div>
  );
};
