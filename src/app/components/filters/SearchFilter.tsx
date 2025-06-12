'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SearchFilter = () => {
  const [jobCategories, setJobCategories] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [workStyles, setWorkStyles] = useState<string[]>([]);
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const [otherConditions, setOtherConditions] = useState<string[]>([]);
  const [minSalary, setMinSalary] = useState<number>(500000); // Default mid-point
  const [keyword, setKeyword] = useState('');

  const toggleSelection = (
    item: string,
    state: string[],
    setState: (value: string[]) => void
  ) => {
    if (state.includes(item)) {
      setState(state.filter((i) => i !== item));
    } else {
      setState([...state, item]);
    }
  };

  return (
    <div className="w-full max-w-[387.5px] p-4 bg-white border border-gray-200 rounded-lg shadow-sm overflow-y-auto">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-800">絞り込み検索</h2>
          <button
            className="text-sm font-normal text-gray-800"
            onClick={() => {
              setJobCategories([]);
              setSkills([]);
              setWorkStyles([]);
              setJobTypes([]);
              setOtherConditions([]);
              setMinSalary(500000);
              setKeyword('');
            }}
          >
            リセット
          </button>
        </div>

        {/* Reusable Sections */}
        {[
          {
            title: '職種カテゴリー',
            items: ['営業', 'エンジニア', 'AI', 'コーポレート'],
            state: jobCategories,
            setState: setJobCategories,
          },
          {
            title: 'スキル（動的変化）',
            items: ['フロントエンド', 'サーバサイド', 'AI'],
            state: skills,
            setState: setSkills,
          },
          {
            title: '働き方',
            items: ['現地フル出勤', 'リモートと現地出勤バランスよく', '基本フルリモート', 'こだわらない'],
            state: workStyles,
            setState: setWorkStyles,
          },
          {
            title: '種別',
            items: [
              '業務委託（複業・プロジェクト）',
              '業務委託（スキマで副業・バイト）',
              '業務委託（事業主・企業・パートナー協業）',
              '社員やチーム登用（転職も考慮）',
              'その他',
            ],
            state: jobTypes,
            setState: setJobTypes,
          },
          {
            title: 'その他条件',
            items: ['今すぐ急募', '未経験から', '単発1～2日'],
            state: otherConditions,
            setState: setOtherConditions,
          },
        ].map(({ title, items, state, setState }) => (
          <div key={title} className="flex flex-col gap-2 pb-4 border-b border-gray-200">
            <h3 className="text-sm font-normal text-gray-800">{title}</h3>
            {items.map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => toggleSelection(item, state, setState)}
              >
                <div
                  className={`w-4 h-4 rounded-sm border border-gray-800 flex items-center justify-center ${
                    state.includes(item) ? 'bg-[#E72E76] border-[#E72E76]' : 'bg-white'
                  }`}
                >
                  {state.includes(item) && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className="text-sm font-normal text-gray-800">{item}</span>
              </label>
            ))}
          </div>
        ))}

        {/* Minimum Monthly Salary */}
        <div className="flex flex-col gap-3 pb-4 border-b border-gray-200">
          <h3 className="text-sm font-normal text-gray-800">最低希望月額</h3>
          <div className="flex justify-between text-xs text-gray-800">
            <span>0円</span>
            <span>1,000,000円</span>
          </div>
          <input
            type="range"
            min={0}
            max={1000000}
            step={10000}
            value={minSalary}
            onChange={(e) => setMinSalary(Number(e.target.value))}
            className="w-full accent-[#E72E76]"
          />
          <div className="text-sm text-gray-800 text-right">
            {minSalary.toLocaleString()} 円
          </div>
        </div>

        {/* Keyword Search */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-normal text-gray-800">フリーワード検索</h3>
          <div className="flex items-center gap-2">
            <Input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="フリーワード検索"
              className="bg-[#FFFBF6] border-[#FFD1A0] placeholder:text-[#FFC17E] flex-1 text-[black]"
            />
            <Button
              variant="outline"
              className="border-[#E72E76] text-[#E72E76] whitespace-nowrap"
              onClick={() => console.log('検索', { keyword })}
            >
              検索
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
