'use client';
import React from 'react';
import JobImage from '../../assets/job-title.png';
import { StaticImageData } from 'next/image';
import JobCard from './JobComponents/JobCard';
import GradientText from './GradientText';
import FilterSection from './filters/FilterSection';

// JobListing Interface
interface JobListing {
    id: number;
    image: string | StaticImageData;
    title: string;
    description: string;
    location: string;
    salary: string;
    type: string[];
    tags: string[];
    views: number;
    applications: number;
    postedDate: string;
    isNew?: boolean;
    isFavorite?: boolean;
    score?: number;
    skills?: string[];
    subSkills?: string[];
    projectType?: string;
    features?: string[];
}

// Job Listings
const jobListings: JobListing[] = [
    {
        id: 1,
        image: JobImage,
        title: '案件タイトルタイトルタイトルタイトルタイトルタイトル',
        description: 'テストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプション',
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
        features: ['高額/高収入である', '成長チャレンジできる']
    },
    {
        id: 2,
        image: JobImage,
        title: '東京バイトルサイトカウンセラー＆アドバイザー',
        description: 'テストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプション',
        location: '大阪',
        salary: '最低報酬額：●●～',
        type: ['正社員'],
        tags: ['フルタイム'],
        views: 156,
        applications: 8,
        postedDate: '2024-03-14',
        isNew: true,
        score: 90,
        projectType: '業務委託（複業・プロジェクト）',
        features: ['高額/高収入である', '成長チャレンジできる'],
        skills: ['エンジニア', 'デザイナー', 'マーケター'],
        subSkills: ['HTML/CSS', 'JavaScript'],
    },
    {
        id: 3,
        image: JobImage,
        title: '東京バイトルサイトカウンセラー＆アドバイザー',
        description: 'テストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプション',
        location: '福岡',
        salary: '最低報酬額：●●～',
        type: ['アルバイト'],
        tags: ['パートタイム', 'リモート可'],
        views: 189,
        applications: 15,
        postedDate: '2024-03-13',
        isNew: true,
        score: 90,
        projectType: '業務委託（複業・プロジェクト）',
        features: ['高額/高収入である', '成長チャレンジできる'],
        skills: ['エンジニア', 'デザイナー', 'マーケター'],
        subSkills: ['HTML/CSS', 'JavaScript'],
    }
];

// Page Component
const JobBoard = () => {
    return (
        <div className="text-white min-h-screen flex flex-col items-center">

            {/* Welcome */}
            <div className="flex flex-col items-center gap-6 md:gap-[56px] py-10 md:py-[80px] px-4 md:px-0">
                <h1 className="text-[32px] md:text-[64px] font-bold text-center leading-[1.2] md:leading-[77px]">
                    <GradientText>ようこそ！ <br /> ゆめかなうクラウドへ</GradientText>
                </h1>
                <h2 className="text-[20px] md:text-[32px] font-bold text-center text-[#333]">あなたの魂の仕事を見つけに行こう！</h2>
                <button className="w-full max-w-[320px] md:w-[480px] h-[60px] md:h-[92px] rounded-[8px] bg-gradient-to-r from-[#DA01B2] via-[#E72E76] to-[#FF8400] p-[4px] hover:opacity-90 transition">
                    <div className="w-full h-full rounded-[8px] bg-white flex items-center justify-center">
                        <span className="text-[20px] md:text-[32px] font-bold" style={{
                            background: 'linear-gradient(89.84deg, #DA01B2 0.21%, #E72E76 50.07%, #FF8400 99.94%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            さっそくスタート ▶
                        </span>
                    </div>
                </button>
            </div>

            {/* Jobs */}
            <div className="bg-[white] w-full py-12 px-4 flex flex-col items-center">
                <h2 className="text-[#333] text-[24px] font-bold mb-6 text-center">あなたにおすすめのお仕事</h2>
                <div className="space-y-8">
                    {jobListings.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </div>

            {/* Filter Section */}
            <FilterSection />
        </div>
    );
};

export default JobBoard;
