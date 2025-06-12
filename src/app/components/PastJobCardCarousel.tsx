'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Card, CardContent } from '../../components/ui/card';

import JobImage from '@/assets/job-title.png'; // adjust path if needed

type JobItem = {
  id: number;
  title: string;
  imageUrl: StaticImageData;
};

const jobs: JobItem[] = [
  {
    id: 1,
    title: '案件タイトルタイトルタイトルタイトルタイトルタイトルタイトル',
    imageUrl: JobImage,
  },
  {
    id: 2,
    title: '別の案件タイトルタイトルタイトルタイトルタイトルタイトル',
    imageUrl: JobImage,
  },
  // Add more jobs here if needed
];

const PastJobCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentJob = jobs[currentIndex];

  return (
    <Card className="w-[320px] p-4 rounded-xl border shadow-sm">
      <h3 className="text-sm font-semibold text-gray-800 mb-2">過去見た案件</h3>

      <div className="relative w-full h-[180px] rounded-lg overflow-hidden">
        <Image
          src={currentJob.imageUrl}
          alt="Job"
          fill
          className="object-cover"
          sizes="100%"
        />
      </div>

      <CardContent className="mt-3 p-0">
        <p className="text-sm text-gray-900 font-medium line-clamp-2 leading-tight">
          {currentJob.title}
        </p>
      </CardContent>

      <div className="flex justify-center gap-1 mt-3">
        {jobs.map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i === currentIndex ? 'bg-pink-400' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </Card>
  );
};

export default PastJobCardCarousel;
