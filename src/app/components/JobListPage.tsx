'use client';

import React, { useState } from 'react';
import JobCard from './JobComponents/JobCard';
import type { JobListing } from './JobComponents/JobCard';
import JobImage from '../../assets/job-title.png';
import { Filter } from 'lucide-react';

const jobListings: JobListing[] = [
  {
    id: 1,
    image: JobImage,
    title: '案件タイトルタイトルタイトルタイトルタイトルタイトル',
    description:
      'テストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプション',
    location: '東京',
    salary: '最低報酬額：●●～',
    type: ['正社員', 'アルバイト'],
    tags: ['フルタイム', 'リモート可'],
    views: 234,
    applications: 12,
    postedDate: '2024-03-15',
    isNew: true,
    score: 90,
    skills: ['エンジニア', 'デザイナー', 'マーケター'],
    subSkills: ['HTML/CSS', 'JavaScript'],
    projectType: '業務委託（複業・プロジェクト）',
    features: ['高額/高収入である', '成長チャレンジできる'],
  },
  {
    id: 2,
    image: JobImage,
    title: '案件タイトルタイトルタイトルタイトルタイトルタイトル',
    description:
      'テストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプション',
    location: '東京',
    salary: '最低報酬額：●●～',
    type: ['正社員', 'アルバイト'],
    tags: ['フルタイム', 'リモート可'],
    views: 234,
    applications: 12,
    postedDate: '2024-03-15',
    isNew: true,
    score: 90,
    skills: ['エンジニア', 'デザイナー', 'マーケター'],
    subSkills: ['HTML/CSS', 'JavaScript'],
    projectType: '業務委託（複業・プロジェクト）',
    features: ['高額/高収入である', '成長チャレンジできる'],
  },
  {
    id: 3,
    image: JobImage,
    title: '案件タイトルタイトルタイトルタイトルタイトルタイトル',
    description:
      'テストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプション',
    location: '東京',
    salary: '最低報酬額：●●～',
    type: ['正社員', 'アルバイト'],
    tags: ['フルタイム', 'リモート可'],
    views: 234,
    applications: 12,
    postedDate: '2024-03-15',
    isNew: true,
    score: 90,
    skills: ['エンジニア', 'デザイナー', 'マーケター'],
    subSkills: ['HTML/CSS', 'JavaScript'],
    projectType: '業務委託（複業・プロジェクト）',
    features: ['高額/高収入である', '成長チャレンジできる'],
  },
  {
    id: 4,
    image: JobImage,
    title: '案件タイトルタイトルタイトルタイトルタイトルタイトル',
    description:
      'テストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプション',
    location: '東京',
    salary: '最低報酬額：●●～',
    type: ['正社員', 'アルバイト'],
    tags: ['フルタイム', 'リモート可'],
    views: 234,
    applications: 12,
    postedDate: '2024-03-15',
    isNew: true,
    score: 90,
    skills: ['エンジニア', 'デザイナー', 'マーケター'],
    subSkills: ['HTML/CSS', 'JavaScript'],
    projectType: '業務委託（複業・プロジェクト）',
    features: ['高額/高収入である', '成長チャレンジできる'],
  },
  // Copy additional mock jobs if needed...
];

const JobListPage = () => {
  const [activeTab, setActiveTab] = useState('おすすめ');

  const tabs = [
    { id: 'おすすめ', label: 'おすすめ', width: 'w-20' },
    { id: 'お気に入り', label: 'お気に入り', width: 'w-[94px]' },
    { id: '応募済み', label: '応募済み', width: 'w-20' },
    { id: 'スカウト', label: 'スカウト', width: 'w-20' },
  ];

  return (
    <div className="max-w-[820px] w-full mx-auto px-4 py-6 md:py-8">
      {/* Top Filter Header */}
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6'>
      <div className="md:hidden w-full px-4 py-3">
        <div className="flex items-center gap-2 w-full max-w-[375px] mx-auto">
          {/* Search Box */}
          <div className="flex-1 flex items-center gap-2 p-2 bg-[#FFFBF6] border border-[#FFD1A0] rounded-[6px]">
            <input
              type="text"
              placeholder="キーワード検索"
              className="flex-1 bg-transparent outline-none text-[12px] font-medium text-[#FFC17E] placeholder-[#FFC17E]"
            />
          </div>

          {/* Filter Button */}
          <button className="flex items-center justify-center gap-1 p-2 w-[59px] h-[40px] border border-[#E72E76] rounded-[6px]">
            <span className="text-[12px] font-medium text-[#E72E76]">検索</span>
          </button>

          {/* Filter Icon */}
          <button className="text-[#333333] hover:opacity-80 transition-opacity">
            <Filter className="w-5 h-5" fill="#333333" />
          </button>
        </div>
      </div>

      {/* Desktop View (md breakpoint and up) */}
      <div className="hidden md:flex w-full px-6 py-4 bg-white">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
          {/* Left Side - Search */}
          <div className="flex items-center gap-4">
            <h2 className="text-[16px] font-medium text-black whitespace-nowrap">
              見たいお仕事をソートする
            </h2>
            <button className="text-[#333333] hover:opacity-80 transition-opacity">
            <Filter className="w-5 h-5" fill="#333333" />
          </button>
          </div>
        </div>
      </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-start p-[4px_10px] w-full h-10 bg-[#FFF0F5] rounded-[6px]">
          <div className="flex items-center w-full min-w-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex-1 min-w-0 px-2 mx-1 flex justify-center items-center
                  ${activeTab === tab.id ? 'bg-[#E72E76] text-white h-7' : 'bg-transparent text-[#333333] h-8'}
                  rounded-[6px] border-none cursor-pointer text-[12px] sm:text-[14px] font-medium leading-5
                  truncate transition-all duration-200
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Job Cards */}
      <div className="space-y-6">
        {jobListings.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <ul className="flex items-center space-x-2 text-sm text-[#E72E76]">
          {[1, 2, 3, 4, 5].map((page) => (
            <li
              key={page}
              className="px-2 py-1 rounded hover:underline cursor-pointer"
            >
              {page}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobListPage;
