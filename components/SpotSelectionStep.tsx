
import React from 'react';
import { ProjectData, Spot } from '../types';
import { MOCK_SPOTS, COLORS } from '../constants';

interface SpotSelectionStepProps {
  projectData: ProjectData;
  setProjectData: React.Dispatch<React.SetStateAction<ProjectData>>;
  onNext: () => void;
  onPrev: () => void;
}

export const SpotSelectionStep: React.FC<SpotSelectionStepProps> = ({ projectData, setProjectData, onNext }) => {
  const handleSelectSpot = (spot: Spot) => {
    setProjectData(prev => ({ ...prev, selectedSpot: spot }));
    onNext();
  };

  return (
    <div className="p-4 space-y-4 animate-fadeIn">
      <div className="bg-purple-50 p-4 rounded-xl mb-6">
        <p className="text-sm text-purple-700 font-medium">
          根據您的篩選條件：<span className="font-bold">{projectData.region} / {projectData.mediaType}</span>
        </p>
      </div>

      <div className="space-y-4">
        {MOCK_SPOTS.map((spot) => (
          <div 
            key={spot.id} 
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow active:scale-[0.99] transition-transform cursor-pointer"
            onClick={() => handleSelectSpot(spot)}
          >
            <div className="relative h-48">
              <img src={spot.image} alt={spot.name} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg">
                <span className="text-xs text-white font-medium">📍 {spot.location}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-3">{spot.name}</h3>
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">集資目標金額</p>
                  <p className="text-xl font-black text-gray-900">{spot.targetAmount.toLocaleString()} <span className="text-sm font-medium">藍鑽</span></p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-xs text-gray-500 font-semibold">領投門檻</p>
                  <p className="text-md font-bold text-purple-600">{spot.leadInThreshold.toLocaleString()} 藍鑽</p>
                </div>
              </div>
              <button 
                className="w-full mt-4 py-3 rounded-xl text-sm font-bold border border-purple-200 text-purple-700 bg-purple-50 hover:bg-purple-100 transition-colors"
                onClick={(e) => {
                    e.stopPropagation();
                    handleSelectSpot(spot);
                }}
              >
                選擇此版位
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
