"use client";

import Layout from '../components/layout/Layout';
import FeaturedCard from '../components/featured/featured-card';
import JobImage from '../../assets/job-title.png';
import { JobListing } from '../components/JobComponents/JobCard';
import Comment from '../components/Comments/Comment';
import BlogCard from '../components/BlogCard';

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

const Comments = () => {
  return (
    <Layout>
      <div className="text-white min-h-screen flex flex-col lg:flex-row gap-6 py-10 px-4">
        {/* Left: Comment Section */}
        <div className="w-full lg:w-[68%]">
          <Comment />
        <BlogCard />
        </div>

        {/* Right: Featured Cards */}
        <div className="w-full lg:w-[31%] grid grid-cols-1 gap-4">
            {jobListings.map((job) => (
                <FeaturedCard key={job.id} job={job} />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Comments;
