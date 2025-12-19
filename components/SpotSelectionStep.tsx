
import React from 'react';
import { ProjectData, Spot } from '../types';
import { MOCK_SPOTS, COLORS } from '../constants';

interface Props {
  data: ProjectData;
  setData: React.Dispatch<React.SetStateAction<ProjectData>>;
  onNext: () => void;
}

export const SpotSelectionStep: React.FC<Props> = ({ data, setData, onNext }) => {
  const select = (spot: Spot) => {
    setData(prev => ({ ...prev, selectedSpot: spot }));
    onNext();
  };

  return (
    <div className="p-5 space-y-6 animate-fadeIn">
      <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100">
        <p className="text-sm font-bold text-purple-700">
          ✨ 為您找到 {MOCK_SPOTS.length} 個位於 {data.region} 的優質版位
        </p>
      </div>

      {MOCK_SPOTS.map(spot => (
        <div 
          key={spot.id} 
          onClick={() => select(spot)}
          className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm active:scale-[0.98] transition-all cursor-pointer group"
        >
          <div className="relative h-44">
            <img src={spot.image} alt={spot.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-4 left-4 glass-tag px-3 py-1 rounded-full">
              <span className="text-white text-[10px] font-bold">📍 {spot.location}</span>
            </div>
          </div>
          <div className="p-5 space-y-4">
            <h3 className="text-lg font-black text-gray-800">{spot.name}</h3>
            <div className="flex justify-between items-end border-t pt-4">
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">集資目標</p>
                <p className="text-xl font-black text-gray-900">{spot.targetAmount.toLocaleString()}<span className="text-xs ml-1">藍鑽</span></p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-purple-400 font-bold uppercase tracking-widest">領投低標</p>
                <p className="text-sm font-bold text-purple-600">{spot.leadInThreshold.toLocaleString()} 鑽</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
