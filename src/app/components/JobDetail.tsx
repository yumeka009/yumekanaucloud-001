import { Star } from "lucide-react";
import DetailImg from '../../assets/job-title.png';

export function JobDetail() {
  return (
    <div className="flex flex-col items-start gap-8 w-[793px] h-[644.52px]">
      {/* Image */}
      <div 
        className="w-[793px] h-[445.52px] rounded-[5px]"
        style={{
            backgroundImage: `url(${DetailImg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        ></div>

      {/* Content */}
      <div className="flex flex-col gap-8 w-[793px] h-[167px]">
        {/* First row - tags and favorite */}
        <div className="flex justify-between items-start w-full h-[24px]">
          {/* Tags */}
          <div className="flex gap-2">
            <span className="flex items-center justify-center px-4 py-0 gap-2.5 w-[92px] h-[21px] bg-gradient-to-b from-[#FFE458] via-[#FAF0BC] to-[#FFE458] rounded-[6px] text-[#FF8400] text-sm font-medium">
              特徴
            </span>
            <span className="flex items-center justify-center px-4 py-0 gap-2.5 w-[60px] h-[21px] text-[#FF8400] text-sm font-medium">
              NEW新着
            </span>
            <span className="flex items-center justify-center px-4 py-0 gap-2.5 w-[60px] h-[21px] bg-gradient-to-b from-[#FFE458] via-[#FAF0BC] to-[#FFE458] rounded-[6px] text-[#FF8400] text-sm font-medium">
              急募
            </span>
          </div>

          {/* Favorite */}
          <div className="flex items-center gap-1">
            <span className="text-sm text-[#333333]">お気に入り</span>
            <Star className="w-6 h-6 text-gray-300 fill-current" />
          </div>
        </div>

        {/* Second row - title and application count */}
        <div className="flex justify-between items-center w-full h-[85px]">
          {/* Title */}
          <h1 className="w-[702px] text-[32px] leading-[40px] font-bold text-[#333333] tracking-tight">
            タイトルタイトルタイトルタイトルタイトル タイトルタイトルタイトルタイトルタイトル
          </h1>

          {/* Application count */}
          <div className="flex flex-col items-center p-3 gap-1 w-[67px] h-[85px] bg-[#FFD4E5] rounded-[6px]">
            <span className="text-sm text-[#333333]">応募数</span>
            <span className="text-[36px] leading-[36px] font-bold text-[#333333]">30</span>
          </div>
        </div>
      </div>

      {/* Job type tag */}
      <div className="flex flex-col items-start pt-6 gap-2.5 w-[76px] h-[42px]">
        <div className="flex flex-col justify-center items-center px-2 py-0 gap-2.5 w-[76px] h-[18px] bg-[#6A1B9A] rounded-[6px]">
          <span className="text-xs text-white">エンジニア</span>
        </div>
      </div>
    </div>
  );
}