'use client';

import { useState } from 'react';

const JobPriorityPoints = () => {
  const [priorities, setPriorities] = useState([
    { id: 1, name: '高額/高収入である', value: 0 },
    { id: 2, name: '成長チャレンジできる', value: 0 },
    { id: 3, name: '継続リピート相談もあり', value: 0 },
    { id: 4, name: '今までにない新事業/サービス', value: 0 },
    { id: 5, name: '経営ノウハウが身につく', value: 0 },
    { id: 6, name: '好きな時間/場所で働ける', value: 0 },
    { id: 7, name: '企画設計から実装までできる', value: 0 },
    { id: 8, name: '社会に大きな貢献ができる', value: 0 },
    { id: 9, name: 'キャリアアップにつながる', value: 0 },
    { id: 10, name: '世界と宇宙に幅広く活躍できる', value: 0 },
  ]);

  const handleValueChange = (id: number, value: number) => {
    setPriorities(prev =>
      prev.map(p => (p.id === id ? { ...p, value } : p))
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-xl font-bold text-gray-800 mb-6">お仕事探しの優先ポイント</h1>
      
      <div className="space-y-6">
        {priorities.map((priority) => (
          <div key={priority.id} className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-800">{priority.name}</span>
              <span className="text-gray-500">{priority.value} / 10</span>
            </div>
            
            {/* Custom range input matching your design */}
            <div className="flex flex-col gap-1">
              <input
                type="range"
                min={0}
                max={10}
                step={1}
                value={priority.value}
                onChange={(e) => handleValueChange(priority.id, Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#E72E76]"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>0</span>
                <span>10</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPriorityPoints;