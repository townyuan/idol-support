
import React, { useState } from 'react';
import { ProjectData } from '../types';
import { COLORS } from '../constants';

interface Props {
  data: ProjectData;
  onNext: () => void;
}

export const ReviewPayStep: React.FC<Props> = ({ data, onNext }) => {
  const [loading, setLoading] = useState(false);
  const spot = data.selectedSpot!;

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onNext();
    }, 2000);
  };

  return (
    <div className="p-6 space-y-6 animate-fadeIn">
      <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">應援明細</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">主體</span>
            <span className="font-bold text-gray-900">{data.idols.join(', ')}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">版位</span>
            <span className="font-bold text-gray-900">{spot.name}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">檔期</span>
            <span className="font-bold text-gray-900">{data.date}</span>
          </div>
        </div>
      </div>

      <div className="bg-purple-600 rounded-3xl p-6 text-white shadow-xl shadow-purple-200 space-y-6">
        <div className="space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">領投應付金額 (5%)</p>
          <p className="text-3xl font-black">{spot.leadInThreshold.toLocaleString()} <span className="text-sm">藍鑽</span></p>
        </div>
        <div className="flex justify-between items-center bg-white/10 p-4 rounded-2xl border border-white/20">
          <div className="flex items-center gap-2">
            <span className="text-xl">💳</span>
            <span className="text-xs font-bold opacity-90">我的錢包餘額</span>
          </div>
          <span className="text-sm font-bold">12,500 鑽</span>
        </div>
      </div>

      <div className="bg-gray-50 p-5 rounded-2xl">
        <p className="text-[10px] text-gray-400 font-bold leading-relaxed uppercase">
          * 發起人需先行支付領投金額以啟動專案，若審核不通過將全額退還。
        </p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-5 bg-white border-t max-w-md mx-auto">
        <button 
          onClick={handlePay}
          disabled={loading}
          style={{ backgroundColor: COLORS.primary }}
          className="w-full py-4 rounded-2xl text-white font-bold shadow-lg transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center gap-3"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              處理中...
            </>
          ) : (
            '立即支付並提交審核'
          )}
        </button>
      </div>
    </div>
  );
};
