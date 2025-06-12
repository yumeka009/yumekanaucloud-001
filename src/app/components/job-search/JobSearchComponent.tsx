// src/components/JobSearch.tsx
'use client';
import React from 'react';
import SearchFilter from '../filters/SearchFilter';
import PastJobCardCarousel from '../PastJobCardCarousel';
import JobPriorityPoints from '../JobPriorityPoints';
import JobListPage from '../JobListPage';

const JobSearchComponent = () => {
    return (
        <div className="text-white min-h-screen flex flex-row">
            {/* Sidebar - Hidden on mobile, flex column on md+ */}
            <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-2 lg:mt-[40px]">
                <SearchFilter />
                <PastJobCardCarousel />
                <JobPriorityPoints />
            </div>

            {/* Main Job List - Always visible */}
            <JobListPage />
        </div>
    );
};

export default JobSearchComponent;
