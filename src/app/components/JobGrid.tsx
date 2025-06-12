'use client';
import React from 'react';
import { JobListing } from './JobComponents/JobCard'; // adjust if JobListing is defined elsewhere
import JobCard from './JobComponents/JobCard';

const JobGrid = ({ jobs }: { jobs: JobListing[] }) => {
  return (
    <div className="w-full max-w-[1240px] mx-auto px-4">
      <h2 className="text-center text-[20px] md:text-[24px] font-bold text-[#FF8400] mb-6">
        <span className="text-[#DA01B2]">おすすめ</span>のお仕事
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobGrid;
