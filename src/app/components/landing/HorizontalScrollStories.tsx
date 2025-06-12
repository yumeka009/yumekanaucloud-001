import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
// Your imports
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

const stories = [
    {
      title: '地元の文化を発信する アプリ開発者',
      description:
        '元SIerの田村さん（34歳）は、地元の歴史保存団体とマッチング。複業でAR観光アプリを開発し地方創生に貢献。',
      category: 'エンジニア',
      image: blog1,
    },
    {
      title: '海外NPOの支援で 英語を活かす',
      description:
        '英語を活かした副業で、海外の非営利団体にリモート支援。国際感覚と実務力が評価され転職成功へ。',
      category: '国際協力',
      image: blog2,
    },
    {
      title: '海外NPOの支援で 英語を活かす',
      description:
        '英語を活かした副業で、海外の非営利団体にリモート支援。国際感覚と実務力が評価され転職成功へ。',
      category: '国際協力',
      image: blog3,
    },
    {
      title: '海外NPOの支援で 英語を活かす',
      description:
        '英語を活かした副業で、海外の非営利団体にリモート支援。国際感覚と実務力が評価され転職成功へ。',
      category: '国際協力',
      image: blog4,
    },
    {
      title: '海外NPOの支援で 英語を活かす',
      description:
        '英語を活かした副業で、海外の非営利団体にリモート支援。国際感覚と実務力が評価され転職成功へ。',
      category: '国際協力',
      image: blog5,
    },
    {
      title: '海外NPOの支援で 英語を活かす',
      description:
        '英語を活かした副業で、海外の非営利団体にリモート支援。国際感覚と実務力が評価され転職成功へ。',
      category: '国際協力',
      image: blog6,
    },
    {
      title: '海外NPOの支援で 英語を活かす',
      description:
        '英語を活かした副業で、海外の非営利団体にリモート支援。国際感覚と実務力が評価され転職成功へ。',
      category: '国際協力',
      image: blog7,
    },
    {
      title: '海外NPOの支援で 英語を活かす',
      description:
        '英語を活かした副業で、海外の非営利団体にリモート支援。国際感覚と実務力が評価され転職成功へ。',
      category: '国際協力',
      image: blog8,
    },
    {
      title: '海外NPOの支援で 英語を活かす',
      description:
        '英語を活かした副業で、海外の非営利団体にリモート支援。国際感覚と実務力が評価され転職成功へ。',
      category: '国際協力',
      image: blog9,
    },
    {
      title: '海外NPOの支援で 英語を活かす',
      description:
        '英語を活かした副業で、海外の非営利団体にリモート支援。国際感覚と実務力が評価され転職成功へ。',
      category: '国際協力',
      image: blog10,
    },
    {
      title: '海外NPOの支援で 英語を活かす',
      description:
        '英語を活かした副業で、海外の非営利団体にリモート支援。国際感覚と実務力が評価され転職成功へ。',
      category: '国際協力',
      image: blog11,
    },
    {
      title: '海外NPOの支援で 英語を活かす',
      description:
        '英語を活かした副業で、海外の非営利団体にリモート支援。国際感覚と実務力が評価され転職成功へ。',
      category: '国際協力',
      image: blog12,
    },
    {
      title: '海外NPOの支援で 英語を活かす',
      description:
        '英語を活かした副業で、海外の非営利団体にリモート支援。国際感覚と実務力が評価され転職成功へ。',
      category: '国際協力',
      image: blog13,
    },
    {
      title: '海外NPOの支援で 英語を活かす',
      description:
        '英語を活かした副業で、海外の非営利団体にリモート支援。国際感覚と実務力が評価され転職成功へ。',
      category: '国際協力',
      image: blog14,
    },
    {
      title: '海外NPOの支援で 英語を活かす',
      description:
        '英語を活かした副業で、海外の非営利団体にリモート支援。国際感覚と実務力が評価され転職成功へ。',
      category: '国際協力',
      image: blog15,
    },
    {
      title: '海外NPOの支援で 英語を活かす',
      description:
        '英語を活かした副業で、海外の非営利団体にリモート支援。国際感覚と実務力が評価され転職成功へ。',
      category: '国際協力',
      image: blog16,
    },
    {
      title: '海外NPOの支援で 英語を活かす',
      description:
        '英語を活かした副業で、海外の非営利団体にリモート支援。国際感覚と実務力が評価され転職成功へ。',
      category: '国際協力',
      image: blog17,
    },
    {
      title: '海外NPOの支援で 英語を活かす',
      description:
        '英語を活かした副業で、海外の非営利団体にリモート支援。国際感覚と実務力が評価され転職成功へ。',
      category: '国際協力',
      image: blog18,
    },
    {
      title: '海外NPOの支援で 英語を活かす',
      description:
        '英語を活かした副業で、海外の非営利団体にリモート支援。国際感覚と実務力が評価され転職成功へ。',
      category: '国際協力',
      image: blog19,
    },
    {
      title: '海外NPOの支援で 英語を活かす',
      description:
        '英語を活かした副業で、海外の非営利団体にリモート支援。国際感覚と実務力が評価され転職成功へ。',
      category: '国際協力',
      image: blog20,
    },
  
    // ... more stories
  ];

const HorizontalScrollStories = () => {
  const ref = useRef<HTMLDivElement>(null); // correct ref type for div

  const { events } = useDraggable(ref as React.MutableRefObject<HTMLElement>);

  return (
    <div
      className="flex max-w-[1920px] space-x-3 overflow-x-auto scrollbar-hide"
      {...events}
      ref={ref}
    >
       {stories.map((story, i) => (
                <div 
                key={i}
                className="flex-none snap-start"
                style={{ scrollSnapAlign: 'start' }}
                >
                <Card
                    className={cn(
                    'w-[320px] h-[420px]',
                    'bg-white border border-gray-200 rounded-lg',
                    'shadow-md hover:shadow-lg transition-shadow',
                    'flex flex-col overflow-hidden',
                    )}
                >
                    <div className="relative w-full h-[180px] flex-none">
                    <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover"
                        sizes="320px"
                        draggable="false"
                    />
                    </div>
                    <div className="flex flex-col p-4 flex-1">
                    <div className="mb-2">
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded">
                        {story.category}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                        {story.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {story.description}
                    </p>
                    <div className="mt-auto pt-2 border-t border-gray-100">
                        <div className="flex items-center text-xs text-gray-500">
                        <span>3週間</span>
                        <span className="mx-2">•</span>
                        <span>売上+10%</span>
                        </div>
                    </div>
                    </div>
                </Card>
                </div>
            ))}

    </div>
  );
};

export default HorizontalScrollStories;
