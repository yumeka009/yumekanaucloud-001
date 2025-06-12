import React from 'react';
import Image from 'next/image';

// Import icons
import Art from '../../../assets/register-steps/Art.png';
import Border from '../../../assets/register-steps/border.png';
import Chart from '../../../assets/register-steps/Chart.png';
import Code from '../../../assets/register-steps/Code.png';
import Job from '../../../assets/register-steps/Job.png';
import PM from '../../../assets/register-steps/PM.png';
import Tie from '../../../assets/register-steps/Tie.png';
import Volume from '../../../assets/register-steps/Volume.png';

const categories = [
  {
    icon: Code,
    title: 'エンジニア',
    titleEn: 'Engineer',
    color: '#6A1B9A',
    items: ['Web開発', 'モバイルアプリ開発', 'セキュリティ', 'プログラミング言語', 'データベース設計/管理', 'インフラ構築/運用', 'AI/機械学習', 'その他']
  },
  {
    icon: Art,
    title: 'デザイナー',
    titleEn: 'Designer',
    color: '#0066FF',
    items: ['UIUX', 'Webデザイナー', 'グラフィック', 'プロダクトデザイン', 'その他']
  },
  {
    icon: Border,
    title: '制作・ライター',
    titleEn: 'Creator/Writer',
    color: '#FF8400',
    items: ['Web制作ディレクター', 'コピーライター', 'Web/アプリディレクター', 'フォトグラファー', 'その他']
  },
  {
    icon: Chart,
    title: 'マーケター',
    titleEn: 'Marketer',
    color: '#DA01B2',
    items: ['SEOマーケ', 'SNSマーケ', 'MAマーケ', 'グロースハッカー', 'その他']
  },
  {
    icon: Volume,
    title: '広報・PR・バックオフィス',
    titleEn: 'PR/Back Office',
    color: '#FFB800',
    items: ['広報', 'PR', 'イベント企画運営', '経理', '総務']
  },
  {
    icon: Tie,
    title: 'エグゼクティブ・コンサル',
    titleEn: 'Executive/Consultant',
    color: '#0066FF',
    items: ['CTO', 'CFO', 'CEO', 'COO', 'その他']
  },
  {
    icon: Job,
    title: '人事',
    titleEn: 'HR',
    color: '#00B27A',
    items: ['採用担当者', '人事制度', 'タレントマネジメント', 'リクルーター', 'その他']
  },
  {
    icon: PM,
    title: 'PM',
    titleEn: 'Project Manager',
    color: '#00B27A',
    items: ['プロジェクトマネージャー', 'プロダクトマネージャー', 'その他']
  }
];

const CategorySection = () => {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 xl:px-[120px]">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-bold text-transparent bg-clip-text"
              style={{
                background: 'linear-gradient(89.84deg, #DA01B2 0.21%, #E72E76 50.07%, #FF8400 99.94%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
            魂が共鳴する仲間と出会おう
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[24px] text-[#333333] mt-4">
            あなたが選んだ仕事が、誰かの人生を変える。
          </p>
        </div>

        {/* Categories Grid */}
        <div className="flex flex-col items-center lg:grid lg:grid-cols-2 gap-6 lg:items-start">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="w-full max-w-[590px] min-h-[208px] flex flex-col items-center p-4 gap-4 bg-white border border-[#E5E7EB] shadow-[0px_2px_4px_rgba(229,231,235,0.5)] rounded-lg"
            >
              {/* Header with Icon and Title */}
              <div className="flex flex-row justify-center items-center w-full pb-2 gap-6 border-b border-[#CCCCCC]">
                <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] relative flex-shrink-0">
                  <Image
                    src={category.icon}
                    alt={category.title}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h3 
                    className="font-['Noto_Sans_JP'] font-bold text-[24px] sm:text-[32px] leading-[1.2] sm:leading-[38px] text-center"
                    style={{ color: category.color }}
                  >
                    {category.title}
                  </h3>
                  <span className="font-['Noto_Sans_JP'] font-medium text-[14px] sm:text-[16px] leading-[1.2] sm:leading-[19px] text-[#CCCCCC] text-center w-full sm:w-[160px]">
                    {category.titleEn}
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-row flex-wrap justify-center sm:justify-start items-start content-start w-full px-2 sm:px-6 gap-2 sm:gap-x-4 sm:gap-y-2">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="flex flex-row justify-center items-center px-3 sm:px-6 py-[2px] border border-[#CCCCCC] rounded-2xl whitespace-nowrap"
                  >
                    <span 
                      className="font-['Noto_Sans_JP'] font-normal text-[14px] sm:text-[16px] leading-[1.2] sm:leading-[21px] tracking-[-0.0075em]"
                      style={{ color: category.color }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection; 