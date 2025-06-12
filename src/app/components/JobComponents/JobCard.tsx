'use client';
import React from 'react';
import Image from 'next/image';
import GradientText from '../GradientText';
import { StaticImageData } from 'next/image';
// JobListing Interface
export interface JobListing {
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


// JobCard Component
const JobCard = ({ job }: { job: JobListing }) => {
    const [isFavorite, setIsFavorite] = React.useState(job.isFavorite || false);

    const StarIcon = ({ filled }: { filled: boolean }) => {
    const gradientId = React.useId(); // ensures unique ID per instance

    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={filled ? `url(#${gradientId})` : "none"}
            stroke={filled ? `url(#${gradientId})` : "#E72E76"}
            strokeWidth="2"
            className="cursor-pointer"
            onClick={() => setIsFavorite(!isFavorite)}
        >
            <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#DA01B2" />
                    <stop offset="50%" stopColor="#E72E76" />
                    <stop offset="100%" stopColor="#FF8400" />
                </linearGradient>
            </defs>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );
};


    return (
        <div className="bg-white border border-[#E5E7EB] rounded-[6px] shadow-[0px_2px_4px_rgba(229,231,235,0.5)] w-full md:w-[793px] p-0 md:p-4 flex flex-col md:flex-row md:items-center">
            <div className="flex flex-col md:flex-row w-full md:w-auto">
                <div className="flex justify-end items-center gap-2 mb-2 md:hidden px-4 pt-4">
                    <span className="text-[#333] text-[14px] font-medium">お気に入り</span>
                    <StarIcon filled={isFavorite} />
                </div>
                <div className="w-full md:w-[265px] h-[200px] md:h-[149px] relative rounded-none md:rounded-[5px] overflow-hidden flex-shrink-0 mb-4 md:mb-0">
                    <Image 
                        src={job.image} 
                        alt={job.title} 
                        fill 
                        style={{ objectFit: 'cover' }} 
                        className="w-full h-full"
                    />
                </div>
            </div>
            <div className="px-4 pb-4 md:p-0 md:ml-4 flex flex-col justify-between w-full">
                <div className="flex justify-between items-start mb-2 md:mb-0">
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            {job.isNew && (
                                <div className="px-4 py-0.5 rounded-[6px] bg-gradient-to-b from-[#FFE458] via-[#FAF0BC] to-[#FFE458] text-[#FF8400] text-[14px] font-medium hidden md:block">
                                NEW新着
                                </div>
                            )}
                            </div>
                            <div className="hidden md:flex items-center gap-2">
                                <span className="text-[#333] text-[14px] font-medium">お気に入り</span>
                                <div className="flex">
                                    <StarIcon filled={isFavorite} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                                {job.isNew && (
                                    <div className="md:hidden px-4 py-0.5 rounded-[6px] bg-gradient-to-b from-[#FFE458] via-[#FAF0BC] to-[#FFE458] text-[#FF8400] text-[14px] font-medium">
                                        NEW新着
                                    </div>
                                )}
                                <h3 className="text-[18px] md:text-[24px] font-bold text-[#333] leading-tight md:leading-[30px]">{job.title}</h3>
                            </div>
                            {job.score && (
                                <div className="w-[45px] h-[45px] flex items-center justify-center border border-[#E72E76] rounded-full shadow-sm text-[#E72E76] text-[20px] md:text-[22px] bg-white flex-shrink-0 ml-4">
                                    {job.score}
                                </div>
                            )}
                        </div>
                        <p className="text-[14px] text-[#333] leading-[21px] mt-2 line-clamp-2 md:line-clamp-none">{job.description}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap gap-2">
                    {job.skills?.map((skill, index) => {
                        const bg =
                            skill === 'エンジニア'
                                ? 'bg-[#6A1B9A]'
                                : skill === 'デザイナー'
                                    ? 'bg-[#008EDB]'
                                    : skill === 'マーケター'
                                        ? 'bg-[#CD0750]'
                                        : 'bg-[#FFD4E5] text-[#E72E76]';
                        return (
                            <span key={index} className={`text-white px-2 py-0.5 rounded-[6px] text-[12px] ${bg}`}>
                                {skill}
                            </span>
                        );
                    })}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {job.subSkills?.map((skill, index) => (
                            <span key={index} className="bg-[#FFD4E5] text-[#E72E76] px-2 py-0.5 rounded-[6px] text-[12px]">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <p className="text-[14px] text-[#333] mt-2">{job.projectType}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                    {job.features?.map((feature, idx) => (
                        <span key={idx} className="bg-[#E5E7EB] px-2 py-0.5 rounded-[6px] text-[12px] text-[#333]">
                            {feature}
                        </span>
                    ))}
                </div>

                <div>
                    <p className="text-[16px] text-[black] mt-2">{job.salary}</p>
                </div>
                <div className="flex flex-col md:flex-row justify-end items-stretch gap-2 mt-4 pt-4 border-t border-[#E5E7EB]">
  <div className="flex flex-col md:flex-row items-end w-full md:w-auto gap-2">
    <button className="h-[43px] w-[70%] md:w-[192px] border border-[#E5E7EB] rounded-[6px] bg-white flex items-center justify-center gap-2 self-end">
      <GradientText className="text-[16px]">詳細を見る ▶</GradientText>
    </button>
    <button className="h-[43px] w-[70%] md:w-[192px] rounded-[6px] bg-gradient-to-r from-[#DA01B2] via-[#E72E76] to-[#FF8400] text-white font-bold flex items-center justify-center gap-2 self-end">
      このお仕事に応募する ▶
    </button>
  </div>
</div>
            </div>
        </div>
    );
};




export default JobCard;
