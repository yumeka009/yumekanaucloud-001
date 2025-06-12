import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

// Import images statically
import blog1 from '../../../assets/blog/blog-1.png';
import blog2 from '../../../assets/blog/blog-2.png';
import blog3 from '../../../assets/blog/blog-3.png';
import blog4 from '../../../assets/blog/blog-4.png';
import blog5 from '../../../assets/blog/blog-5.png';
import blog6 from '../../../assets/blog/blog-6.png';
import blog7 from '../../../assets/blog/blog-7.png';
import blog8 from '../../../assets/blog/blog-8.png';
import blog9 from '../../../assets/blog/blog-9.png';
import blog10 from '../../../assets/blog/blog-10.png';
import blog11 from '../../../assets/blog/blog-11.png';
import blog12 from '../../../assets/blog/blog-12.png';
import blog13 from '../../../assets/blog/blog-13.png';
import blog14 from '../../../assets/blog/blog-14.png';
import blog15 from '../../../assets/blog/blog-15.png';
import blog16 from '../../../assets/blog/blog-16.png';
import blog17 from '../../../assets/blog/blog-17.png';
import blog18 from '../../../assets/blog/blog-18.png';
import blog19 from '../../../assets/blog/blog-19.png';
import blog20 from '../../../assets/blog/blog-20.png';

const blogImages: StaticImageData[] = [
  blog1, blog2, blog3, blog4, blog5,
  blog6, blog7, blog8, blog9, blog10,
  blog11, blog12, blog13, blog14, blog15,
  blog16, blog17, blog18, blog19, blog20,
];

interface JobCardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: StaticImageData;
}

const JobCard: React.FC<JobCardProps> = ({  title, description, category, imageUrl }) => {
  return (
    <Card className="w-[285px] h-[407px] rounded-[6px] shadow-sm border border-[#E5E7EB]">
      <div className="relative w-full h-[161px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 600px) 100vw, 285px"
        />
      </div>
      <CardContent className="p-2">
        <h3 className="text-[18px] font-bold leading-[22px] text-[#333333] mb-2">{title}</h3>
        <p className="text-[14px] leading-[21px] text-[#333333]">{description}</p>
      </CardContent>
      <CardFooter className="p-2">
        <div className="w-[76px] h-[18px] rounded-[6px] bg-gradient-to-r from-[#6A1B9A] via-[rgba(106,27,154,0.6)] to-[#6A1B9A] flex items-center justify-center">
          <span className="text-white text-[12px] leading-[18px]">{category}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

const SuccessStoriesSection = () => {
  const jobCardsData: JobCardProps[] = blogImages.map((img, i) => ({
    id: i + 1,
    title: '地元の文化を発信する アプリ開発者',
    description:
      '元SIerの田村さん（34歳）は、地元の歴史保存団体とマッチング。複業（副業）でAR観光アプリを開発。地元観光が活性化し、地方創生に貢献。自身も地元で起業。仕事と人生の軸が一致する「魂の仕事」を確立。',
    category: 'エンジニア',
    imageUrl: img,
  }));

  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-12 bg-gradient-to-b from-[rgba(218,1,178,0.1)] via-[rgba(231,46,118,0.1)] to-[rgba(255,132,0,0.1)]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-14">
        {/* Headings */}
        <div className="flex flex-col items-center gap-10 text-center">
          <h1 className="text-[40px] sm:text-[48px] md:text-[64px] font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#DA01B2] via-[#E72E76] to-[#FF8400]">
            複業から、人生の再定義を
          </h1>
          <p className="text-[20px] sm:text-[24px] md:text-[32px] leading-snug text-black">
            “これがやりたかったんだ”と思える出会いが、きっとある
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {jobCardsData.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>

        {/* Footnote */}
        <p className="text-[14px] leading-[21px] text-[#333333] text-right w-full">
          ※匿名仮称です
        </p>
        {/* CTA Box */}
        <div className="w-[300px] sm:w-[400px] md:w-[500px] h-[118px] rounded-[16px] bg-gradient-to-r from-[#DA01B2] via-[#E72E76] to-[#FF8400] flex items-center justify-center px-8 gap-4">
          <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-black leading-tight text-white">お仕事を見る ▶</h2>
          {/* Optional: Add a play icon if needed */}
        </div>

      </div>
    </section>
  );
};

export default SuccessStoriesSection;
