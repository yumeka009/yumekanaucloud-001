'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import backImage from '../../assets/job-title.png';
import { Star } from "lucide-react";
import CodeImage from'@/assets/register-steps/Code.png'
import GradientText from '../components/GradientText';

const JobDetail = () => {

 const [priorities, setPriorities] = useState([
    [{ id: 1, name: '高額/高収入である', value: 5 },
    { id: 2, name: '成長チャレンジできる', value: 5 }],
    [{ id: 3, name: '継続リピート相談もあり', value: 5 },
    { id: 4, name: '今までにない新事業/サービス', value: 5 }],
    [{ id: 5, name: '経営ノウハウが身につく', value: 5 },
    { id: 6, name: '好きな時間/場所で働ける', value: 5 }],
    [{ id: 7, name: '企画設計から実装までできる', value: 5 },
    { id: 8, name: '社会に大きな貢献ができる', value: 5 }],
    [{ id: 9, name: 'キャリアアップにつながる', value: 5 },
    { id: 10, name: '世界と宇宙に幅広く活躍できる', value: 5 }],
  ]);

  const handleValueChange = (id: number, value: number) => {
    setPriorities(prev =>
      prev.map(p => (p[0].id === id ? { ...p, value } : p))
    );
  };

  return (
    <div className='xl:w-[834px] md:w-[736px] w-[359px] flex flex-col gap-y-12 justify-center rounded-none'>
        <div className='flex flex-col gap-y-8'>
            <div className='xl:w-[834px] xl:h-[468.56px] md:w-[736px] md:h-[413.5px] w-[359px] h-[201.69px]'>
                <Image 
                    alt='image'
                    src={backImage} 
                    className='w-full h-full'
                />
            </div>

            <div className='w-full flex flex-col gap-y-2'>
                <div className='w-full flex justify-between'>
                    <div className='flex gap-x-2'>
                        <div className="px-4 py-0.5 rounded-[6px] bg-gradient-to-b from-[#FFE458] via-[#FAF0BC] to-[#FFE458] text-[#FF8400] text-[14px] font-medium hidden md:block">
                            NEW新着
                        </div>
                        <div className="px-4 py-0.5 rounded-[6px] bg-gradient-to-b from-[#FFE458] via-[#FAF0BC] to-[#FFE458] text-[#FF8400] text-[14px] font-medium hidden md:block">
                            急募
                        </div>
                    </div>
                    <div className='flex gap-x-1 items-center'>
                        <span className="text-sm text-[#333333]">お気に入り</span>
                        <Star
                            className="w-6 h-6 stroke-[1.5] [stroke:url(#grad)] fill-white"
                            >
                            <defs>
                                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#DA01B2" />
                                <stop offset="50%" stopColor="#E72E76" />
                                <stop offset="100%" stopColor="#FF8400" />
                                </linearGradient>
                            </defs>
                        </Star>                    
                    </div>
                </div>
                <div className='w-full flex flex-col md:flex-row justify-between items-center'>
                    <div>
                        <h1 className="text-[24px] md:text-[32px] leading-[40px] font-bold text-[#333333] tracking-tight">
                            タイトルタイトルタイトルタイトルタイトル <br className='hidden sm:block'/>
                            タイトルタイトルタイトルタイトルタイトル
                        </h1>
                    </div>
                    <div className='flex gap-x-2.5 self-end md:self-auto'>
                        <div className="flex flex-col items-center p-3 gap-1 w-[67px] h-[85px] bg-[#FFD4E5] rounded-[6px]">
                            <span className="text-sm text-[#333333]">応募数</span>
                            <span className="text-[36px] leading-[36px] font-bold text-[#333333]">30</span>
                        </div>
                        <div className="flex flex-col items-center p-3 gap-1 w-[67px] h-[85px] bg-[#FFD4E5] rounded-[6px]">
                            <span className="text-sm text-[#333333]">応募数</span>
                            <span className="text-[36px] leading-[36px] font-bold text-[#333333]">30</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full flex flex-col'>
            <span className="px-4 mb-1 font-bold text-[24px] leading-[30px] tracking-[-0.0075em] font-noto">
                お仕事の特徴
            </span>
            <div className='mb-0.5 w-full h-[1px] bg-[#FFD1A0]'></div>
            <div className='w-full h-[2px] bg-[#FFD4E5]'></div>
            <div className="p-4 mb-1 font-bold text-[12px] leading-[30px] tracking-[-0.0075em] font-noto">
                <div className='w-[196px] p-2 bg-[#FFD4E5] rounded-[5px] text-[#E72E76] text-[12px]'>
                    業務委託（複業・プロジェクト）
                </div>
            </div>
        </div>

        <div>
            <span className="px-4 mb-1 font-bold text-[24px] leading-[30px] tracking-[-0.0075em] font-noto">
                ご依頼したい業務内容
            </span>
            <div className='mb-0.5 w-full h-[1px] bg-[#FFD1A0]'></div>
            <div className='w-full h-[2px] bg-[#FFD4E5]'></div>
            <div className='p-4'>
                <div className="font-normal text-[14px] leading-[21px] tracking-[-0.0075em] font-noto">
                    テストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプション
                </div>
                <br />
                <div className="font-normal text-[14px] leading-[21px] tracking-[-0.0075em] font-noto">
                    テストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプション
                </div>
                <br />
                <div className="font-normal text-[14px] leading-[21px] tracking-[-0.0075em] font-noto">
                    テストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプション
                </div>
                <br />
                <div className="font-normal text-[14px] leading-[21px] tracking-[-0.0075em] font-noto">
                    テストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプション
                </div>
                <br />

            </div>
        </div>

        <div className="space-y-4">
            <div>
                <span className="px-4 mb-1 font-bold text-[20px] md:text-[24px] leading-[30px] tracking-[-0.0075em] font-noto">
                プロジェクトのアピールポイント
                </span>
                <div className='mb-0.5 w-full h-[1px] bg-[#FFD1A0]'></div>
                <div className='w-full h-[2px] bg-[#FFD4E5]'></div>
            </div>

            <div className='px-4 grid gap-5'>
                {priorities.map((priority) => (
                    <div key={priority[0].id} className='flex sm:flex-row flex-col justify-between space-y-3 md:space-y-0'>
                        <div key={priority[0].id} className="w-full max-w-[344px] md:max-w-[393px] space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-800">{priority[0].name}</span>
                                <span className="text-gray-500">{priority[0].value} / 10</span>
                            </div>
                            
                            {/* Custom range input matching your design */}
                            <div className="flex flex-col gap-1">
                                <input
                                    type="range"
                                    min={0}
                                    max={10}
                                    step={1}
                                    value={priority[0].value}
                                    onChange={(e) => handleValueChange(priority[0].id, Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#E72E76]"
                                />
                            </div>
                        </div>

                        <div key={priority[1].id} className="w-full max-w-[344px] md:max-w-[393px] space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-800">{priority[1].name}</span>
                                <span className="text-gray-500">{priority[1].value} / 10</span>
                            </div>

                            {/* Custom range input matching your design */}
                            <div className="flex flex-col gap-1">
                                <input
                                    type="range"
                                    min={0}
                                    max={10}
                                    step={1}
                                    value={priority[1].value}
                                    onChange={(e) => handleValueChange(priority[1].id, Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#E72E76]"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className='space-y-4'>
            <div>
                <span className="px-4 mb-1 font-bold text-[24px] leading-[30px] tracking-[-0.0075em] font-noto">
                求めている職種
                </span>
                <div className='mb-0.5 w-full h-[1px] bg-[#FFD1A0]'></div>
                <div className='w-full h-[2px] bg-[#FFD4E5]'></div>
            </div>           
            <div className='flex px-4 h-[42px] items-center'>
                <div className='mr-6'>
                    <Image 
                        alt='codeImage'
                        src={CodeImage}
                    />
                </div>
                <div className='flex flex-col justify-between mr-[10px]'>
                    <span>エンジニア</span>
                    <span>Engineer</span>
                </div>
                <div className='px-2 w-[59px] h-[18px] bg-[#E1D1EB] text-[#6A1B9A] text-[12px] rounded-[6px]'>
                    1年以上
                </div>
            </div>
        </div>

        <div className='flex flex-col space-y-4'> 
            <div>
                <span className="px-4 mb-1 font-bold text-[24px] leading-[30px] tracking-[-0.0075em] font-noto">
                必要な言語スキル
                </span>
                <div className='mb-0.5 w-full h-[1px] bg-[#FFD1A0]'></div>
                <div className='w-full h-[2px] bg-[#FFD4E5]'></div>
            </div> 
            
            <div className='flex flex-col sm:flex-row self-center md:self-start gap-4 px-4'>
                <div className="flex flex-row justify-center items-center p-3 gap-[10px] w-[200px] min-w-[200px] h-[45px] bg-white border border-[rgba(231,46,118,0.5)] shadow-[2px_2px_2px_rgba(231,46,118,0.5)] rounded-[6px] box-border">
                    {/* スキル名 */}
                    <span className="w-[68px] h-[21px] text-[#333333] font-normal text-[14px] leading-[21px] tracking-[-0.0075em] font-noto">
                    HTML/CSS
                    </span>

                    {/* スキルタグ */}
                    <div className="flex flex-col justify-center items-center px-2 gap-[10px] w-[88px] h-[18px] bg-[#FFD4E5] rounded-[6px]">
                        <span className="w-[72px] h-[18px] text-[#E72E76] font-normal text-[12px] leading-[18px] font-noto">
                        エキスパート
                        </span>
                    </div>

                    {/* × (hidden by default) */}
                    <span className="hidden w-[12px] h-[18px] text-[#E53935] font-bold text-[12px] leading-[18px] font-noto">
                        ×
                    </span>
                </div>
                <div className="flex flex-row justify-center items-center p-3 gap-[10px] w-[200px] min-w-[200px] h-[45px] bg-white border border-[rgba(231,46,118,0.5)] shadow-[2px_2px_2px_rgba(231,46,118,0.5)] rounded-[6px] box-border">
                    {/* スキル名 */}
                    <span className="w-[68px] h-[21px] text-[#333333] font-normal text-[14px] leading-[21px] tracking-[-0.0075em] font-noto">
                    JavaScript
                    </span>

                    {/* スキルタグ */}
                    <div className="flex flex-col justify-center items-center px-2 gap-[10px] w-[88px] h-[18px] bg-[#FFD4E5] rounded-[6px]">
                        <span className="w-[72px] h-[18px] text-[#E72E76] font-normal text-[12px] leading-[18px] font-noto">
                        エキスパート
                        </span>
                    </div>

                    {/* × (hidden by default) */}
                    <span className="hidden w-[12px] h-[18px] text-[#E53935] font-bold text-[12px] leading-[18px] font-noto">
                        ×
                    </span>
                </div>
            </div>
        </div>

        <div className='flex flex-col space-y-4'> 
            <div>
                <span className="px-4 mb-1 font-bold text-[24px] leading-[30px] tracking-[-0.0075em] font-noto">
                必要な言語スキル
                </span>
                <div className='mb-0.5 w-full h-[1px] bg-[#FFD1A0]'></div>
                <div className='w-full h-[2px] bg-[#FFD4E5]'></div>
            </div> 
            
            <div className='flex flex-col sm:flex-row gap-4 px-4 self-center md:self-start'>
                <div className="flex flex-row justify-center items-center p-3 gap-[10px] w-[200px] min-w-[200px] h-[45px] bg-white border border-[rgba(231,46,118,0.5)] shadow-[2px_2px_2px_rgba(231,46,118,0.5)] rounded-[6px] box-border">
                    {/* スキル名 */}
                    <span className="w-[68px] h-[21px] text-[#333333] font-normal text-[14px] leading-[21px] tracking-[-0.0075em] font-noto">
                    日本語
                    </span>

                    {/* スキルタグ */}
                    <div className="flex flex-col justify-center items-center px-2 gap-[10px] w-[88px] h-[18px] bg-[#FFD4E5] rounded-[6px]">
                        <span className="w-[104px] h-[18px] text-[#E72E76] font-normal text-[12px] leading-[18px] font-noto">
                        ネイティブ/堪能
                        </span>
                    </div>

                    {/* × (hidden by default) */}
                    <span className="hidden w-[12px] h-[18px] text-[#E53935] font-bold text-[12px] leading-[18px] font-noto">
                        ×
                    </span>
                </div>
                <div className="flex flex-row justify-center items-center p-3 gap-[10px] w-[200px] min-w-[200px] h-[45px] bg-white border border-[rgba(231,46,118,0.5)] shadow-[2px_2px_2px_rgba(231,46,118,0.5)] rounded-[6px] box-border">
                    {/* スキル名 */}
                    <span className="w-[68px] h-[21px] text-[#333333] font-normal text-[14px] leading-[21px] tracking-[-0.0075em] font-noto">
                    英語
                    </span>

                    {/* スキルタグ */}
                    <div className="flex flex-col justify-center items-center px-2 gap-[10px] w-[88px] h-[18px] bg-[#FFD4E5] rounded-[6px]">
                        <span className="w-[72px] h-[18px] text-[#E72E76] font-normal text-[12px] leading-[18px] font-noto">
                        日常会話
                        </span>
                    </div>

                    {/* × (hidden by default) */}
                    <span className="hidden w-[12px] h-[18px] text-[#E53935] font-bold text-[12px] leading-[18px] font-noto">
                        ×
                    </span>
                </div>
            </div>
        </div>
        
        <div className='space-y-4 flex flex-col'> 
            <div>
                <span className="px-4 mb-1 font-bold text-[24px] leading-[30px] tracking-[-0.0075em] font-noto">
                報酬などの条件
                </span>
                <div className='mb-0.5 w-full h-[1px] bg-[#FFD1A0]'></div>
                <div className='w-full h-[2px] bg-[#FFD4E5]'></div>
            </div> 
            
            <div className='flex flex-col sm:flex-row self-center gap-4 px-4'>
                <div className="flex flex-col justify-center items-center p-3 gap-[10px]  sm:w-[189.5px] min-w-[189.5px] h-[89px] bg-white border border-[rgba(231,46,118,0.5)] shadow-[2px_2px_2px_rgba(231,46,118,0.5)] rounded-[6px] box-border">
                    {/* スキル名 */}
                    <div className="w-full h-[21px] text-[#333333] font-normal text-[14px] text-center leading-[21px] tracking-[-0.0075em] font-noto">
                    勤務形態
                    </div>
                    <div className="w-full h-[21px] text-[#333333] font-normal text-[14px] text-center leading-[21px] tracking-[-0.0075em] font-noto">
                    リモート勤務
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center p-3 gap-[10px] sm:w-[189.5px] min-w-[189.5px] h-[89px] bg-white border border-[rgba(231,46,118,0.5)] shadow-[2px_2px_2px_rgba(231,46,118,0.5)] rounded-[6px] box-border">
                    {/* スキル名 */}
                    <div className="w-full h-[21px] text-[#333333] font-normal text-[14px] text-center leading-[21px] tracking-[-0.0075em] font-noto">
                    出勤ありの場合の勤務地
                    </div>
                    <div className="w-full h-[21px] text-[#333333] font-normal text-[14px] text-center leading-[21px] tracking-[-0.0075em] font-noto">
                    東京都
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center p-3 gap-[10px] sm:w-[189.5px] min-w-[189.5px] h-[89px] bg-white border border-[rgba(231,46,118,0.5)] shadow-[2px_2px_2px_rgba(231,46,118,0.5)] rounded-[6px] box-border">
                    {/* スキル名 */}
                    <div className="w-full h-[21px] text-[#333333] font-normal text-[14px] text-center leading-[21px] tracking-[-0.0075em] font-noto">
                    最低ご依頼単価
                    </div>
                    <div className="w-full h-[21px] text-[#333333] font-normal text-[14px] text-center leading-[21px] tracking-[-0.0075em] font-noto">
                    時給　3,000円～
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center p-3 gap-[10px] sm:w-[189.5px] min-w-[189.5px] h-[89px] bg-white border border-[rgba(231,46,118,0.5)] shadow-[2px_2px_2px_rgba(231,46,118,0.5)] rounded-[6px] box-border">
                    {/* スキル名 */}
                    <div className="w-full h-[21px] text-[#333333] font-normal text-[14px] text-center leading-[21px] tracking-[-0.0075em] font-noto">
                    業務時間
                    </div>
                    <div className="w-full h-[21px] text-[#333333] font-normal text-[14px] text-center leading-[21px] tracking-[-0.0075em] font-noto">
                    20日 / 月～
                    </div>
                </div>
            </div>

        </div>

        <div className='space-y-4 flex justify-center'>
            <div className="flex flex-col w-[359px] sm:w-[500px] gap-2">
                <button className="h-[53px] w-full border-[2px] [border-image:linear-gradient(to_right,#DA01B2,#E72E76,#FF8400)_1] rounded-[6px] bg-white flex items-center justify-center gap-2 self-end">
                    <GradientText className="text-[24px]">詳細を見る ▶</GradientText>
                </button>
                <button className="h-[53px] w-full rounded-[6px] bg-gradient-to-r from-[#DA01B2] via-[#E72E76] to-[#FF8400] text-white text-[24px] font-bold flex items-center justify-center gap-2 self-end">
                    このお仕事に応募する ▶
                </button>
            </div>
        </div>

        <div className='space-y-8 px-4 py-8 bg-[rgba(255,209,160,0.05)] border border-[rgba(255,209,160,0.1)] shadow-[2px_2px_2px_rgba(231,46,118,0.1)] rounded-[8px]'>
            <div className='text-center text-[24px] font-bold text-[#E72E76]'>
            クライアントが大事にしている世界観・価値観
            </div>
            <div>
                <div className='text-[18px] font-bold'>
                心を動かすデザインで<br />
                ブランドの価値を世界に届ける。
                </div>
                <div>
                テストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプション
                </div>
            </div>
            <div className='space-y-4'>
                <div>
                    <div className='text-[18px] font-bold'>
                    価値観1
                    </div>
                    <div>
                    テストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプション
                    </div>
                </div>
                <div>
                    <div className='text-[18px] font-bold'>
                    価値観1
                    </div>
                    <div>
                    テストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプション
                    </div>
                </div>
                <div>
                    <div className='text-[18px] font-bold'>
                    価値観1
                    </div>
                    <div>
                    テストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプションテストディスクリプション
                    </div>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row sm:space-x-4'>
                <div className='w-[196px] h-[110px]'>
                    <Image 
                        alt='image'
                        src={backImage}
                        className='w-full h-full'
                    />
                </div> 
                <div className='flex flex-col justify-between'>
                    <div className='text-[18px] font-bold'>
                        ⁨⁩企業名・屋号名またはお名前
                    </div>
                    <div>
                        所在地
                    </div>
                    <div>
                        URL
                    </div>
                    <div>
                        担当者
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default JobDetail; 