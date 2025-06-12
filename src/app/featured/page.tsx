import React from 'react';
import BlogCard from '../components/BlogCard';
import FilterSection from '../components/filters/FilterSection';
import Layout from '../components/layout/Layout';
// import JobList from '../components/JobList'
import { ThemeCollections } from '../components/ThemeCollection';
import Image from 'next/image';
import cardImg from '../../assets/featured-content.png';
// import mobileImg from '../../assets/featued-content-mobile.png';
import FeaturedCard from '../components/featured/featured-card';
import JobImage from '../../assets/job-title.png';

import { JobListing } from '../components/JobComponents/JobCard';

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


const JobsPage = () => {
  return (
    <Layout>
      {/* Responsive Background Container */}
      <div className="w-full h-[200px] sm:h-[300px] md:h-[600px] relative overflow-hidden">
        <div className="max-w-[1920px] w-full relative h-full">
          <Image
            src={cardImg}
            alt="Desktop Background"
            fill
            className="object-cover object-left-top md:object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>



      {/* Page Content */}
      <div className="relative z-10">
        <BlogCard />
        <ThemeCollections />
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {jobListings.map((job) => (
            <div
              key={job.id}
              className="w-full sm:w-[48%] lg:w-[31%] flex justify-center"
            >
              <FeaturedCard job={job} />
            </div>
          ))}
        </div>

        {/* <JobList /> */}
        <FilterSection />

      </div>
    </Layout>
  );
};

export default JobsPage;