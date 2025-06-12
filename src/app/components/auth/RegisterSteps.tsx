'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Art from '../../../assets/register-steps/Art.png';
import Border from '../../../assets/register-steps/border.png';
import Chart from '../../../assets/register-steps/Chart.png';
import Code from '../../../assets/register-steps/Code.png';
import Cs from '../../../assets/register-steps/Cs.png';
import Groupe from '../../../assets/register-steps/Group.png';
import Job from '../../../assets/register-steps/Job.png';
import PM from '../../../assets/register-steps/PM.png';
import Tie from '../../../assets/register-steps/Tie.png';
import Volume from '../../../assets/register-steps/Volume.png';
import Layout from '../layout/Layout';

import { useRouter } from 'next/navigation';
// Step type definitions
type StepIndicator = {
    current: number;
    total: number;
};

// Job categories
const jobCategories = [
    { id: 'engineer', label: 'エンジニア', icon: Code, borderColor: 'border-[#DA01B2]' },
    { id: 'designer', label: 'デザイナー', icon: Art, borderColor: 'border-[#0066FF]' },
    { id: 'sales', label: '営業', icon: Groupe, borderColor: 'border-[#FF4D4D]' },
    { id: 'writer', label: '制作・ライター', icon: Border, borderColor: 'border-[#FF8400]' },
    { id: 'marketer', label: 'マーケター', icon: Chart, borderColor: 'border-[#DA01B2]' },
    { id: 'hr', label: '人事', icon: Job, borderColor: 'border-[#00B27A]' },
    { id: 'cs', label: 'CS', icon: Cs, borderColor: 'border-[#FF4D4D]' },
    { id: 'pm', label: 'PM', icon: PM, borderColor: 'border-[#00B27A]' },
    { id: 'backoffice', label: '広報・PR\nバックオフィス', icon: Volume, borderColor: 'border-[#FFB800]' },
    { id: 'consultant', label: 'エグゼクティブ・\nコンサル', icon: Tie, borderColor: 'border-[#0066FF]' }
];





const RegisterSteps = () => {
    const router = useRouter();
    // const [isFormCompleted, setIsFormCompleted] = useState(false);
    const [showExitModal, setShowExitModal] = useState(false);
    const [nextUrl] = useState<string | null>(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [selectedFeeling, setSelectedFeeling] = useState<string | null>(null);
    const [selectedCurrentJob, setSelectedCurrentJob] = useState<string | null>(null);
    const [selectedFutureJob, setSelectedFutureJob] = useState<string | null>(null);
    const [birthYear, setBirthYear] = useState<string>('');
    const [nickname, setNickname] = useState('');
    const [priorities, setPriorities] = useState<string[]>([]);
    const [workStyle, setWorkStyle] = useState<string>('full-onsite');
    const totalSteps = 9;

    // const navigate = (url: string) => {
    //     if (!isFormCompleted) {
    //         setNextUrl(url);
    //         setShowExitModal(true);
    //     } else {
    //         router.push(url);
    //     }
    // };

useEffect(() => {
  if (showExitModal && nextUrl) {
    console.log('User tried to navigate to:', nextUrl);
  }
}, [showExitModal, nextUrl]);


    const handleSubmit = () => {
        const collectedData = {
            selectedOption,
            selectedFeeling,
            selectedCurrentJob,
            selectedFutureJob,
            priorities,
            workStyle,
            birthYear,
            nickname,
        };

        console.log('Collected Data:', collectedData);
        router.push('/jobs');

    };

    // Step indicator component
    const StepIndicator = ({ current, total }: StepIndicator) => {
        return (
            <div className="flex items-center justify-center gap-0 mb-8">
                {Array.from({ length: total }, (_, i) => (
                    <div key={i} className="flex items-center">
                        <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${i + 1 <= current
                                ? 'bg-[#E72E76] text-white'
                                : 'bg-[#D9D9D9] text-gray-600'
                                }`}
                        >
                            {i + 1 === current ? i + 1 : ''}
                        </div>
                        {i < total - 1 && (
                            <div
                                className={`h-[2px] w-4 ${i + 1 < current ? 'bg-[#E72E76]' : 'bg-[#D9D9D9]'
                                    }`}
                            />
                        )}
                    </div>
                ))}
            </div>
        );
    };

    // Timer component showing countdown from 15 seconds
    const Timer = () => (
        <div className="text-center mb-4">
            <span className="text-[#E72E76]">回答完了まで15</span>秒ほどです
        </div>
    );

    // Render step content based on current step
    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <>
                        <Timer />
                        <div className="w-full max-w-[800px] mx-auto">
                            <h2 className="text-center mb-6">ここでのお仕事探しの目的は何ですか？</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                                {[
                                    { id: 'job', title: '複業', desc: '（いずれ独立や起業を考慮）' },
                                    { id: 'sidework', title: '副業', desc: '（スキマ時間にお小遣い稼ぎ）' },
                                    { id: 'business', title: '事業運営者として', desc: '顧客や案件を獲得' },
                                    { id: 'investment', title: '協業パートナー', desc: '同志メンバーとの出会い' },
                                    { id: 'career', title: '人生やキャリアの可能性を広げる', desc: '（転職も考慮）' },
                                    { id: 'other', title: 'その他', desc: '' }
                                ].map((option) => (
                                    <div key={option.id} className="w-full md:w-[387px] h-[97px] flex-none">
                                        <Button
                                            variant="outline"
                                            onClick={() => setSelectedOption(option.id)}
                                            className={`w-full md:w-[387px] h-[97px] box-border border-2 border-[#FF8400] rounded-[8px] hover:bg-[#FF8400] hover:text-white flex items-center justify-center transition-colors
                      ${selectedOption === option.id
                                                    ? 'bg-[#FF8400] text-white shadow-[0px_2px_4px_rgba(229,231,235,0.5)]'
                                                    : 'bg-white text-[#333333]'
                                                }`}
                                        >
                                            <div className="flex flex-col items-center justify-center">
                                                <span className=" text-[22px] leading-[26px] font-['Noto_Sans_JP']">{option.title}</span>
                                                {option.desc && (
                                                    <span className={`text-sm ${selectedOption === option.id ? 'text-white/80' : 'text-[#333333]/80'}`}>
                                                        {option.desc}
                                                    </span>
                                                )}
                                            </div>
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                );

            case 2:
                return (
                    <div className="w-full max-w-[800px] mx-auto">
                        <h2 className="text-center text-xl mb-8 text-[#333333] font-bold">今、どんなお気持ちですか？</h2>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <div className="w-full md:w-[387px] h-[72px] flex-none">
                                <Button
                                    onClick={() => setSelectedFeeling('urgent')}
                                    className={`
                                        w-full md:w-[387px] h-[72px] box-border
                                        ${selectedFeeling === 'urgent'
                                            ? 'bg-[#FF8400] text-white'
                                            : 'bg-white text-[#333333]'
                                        }
                                        border-2 border-[#FF8400] rounded-[8px]
                                        hover:bg-[#FF8400] hover:text-white
                                        flex items-center justify-center
                                        transition-colors
                                        ${selectedFeeling === 'urgent' ? 'shadow-[0px_2px_4px_rgba(229,231,235,0.5)]' : ''}
                                    `}
                                >
                                    <div className="flex flex-col items-center justify-center">
                                        <span className="font-bold text-[22px] leading-[26px] font-['Noto_Sans_JP']">複業</span>
                                        <span className="font-bold text-[22px] leading-[26px] font-['Noto_Sans_JP']">（いずれ独立や起業を考慮）</span>
                                    </div>
                                </Button>
                            </div>
                            <div className="w-full md:w-[387px] h-[72px] flex-none">
                                <Button
                                    onClick={() => setSelectedFeeling('casual')}
                                    className={`
                                        w-full md:w-[387px] h-[72px] box-border
                                        ${selectedFeeling === 'casual'
                                            ? 'bg-[#FF8400] text-white'
                                            : 'bg-white text-[#333333]'
                                        }
                                        border-2 border-[#FF8400] rounded-[8px]
                                        hover:bg-[#FF8400] hover:text-white
                                        flex items-center justify-center
                                        transition-colors
                                        ${selectedFeeling === 'casual' ? 'shadow-[0px_2px_4px_rgba(229,231,235,0.5)]' : ''}
                                    `}
                                >
                                    <div className="flex flex-col items-center justify-center">
                                        <span className="font-bold text-[22px] leading-[26px] font-['Noto_Sans_JP']">副業</span>
                                        <span className="font-bold text-[22px] leading-[26px] font-['Noto_Sans_JP']">（スキマ時間にお小遣い稼ぎ）</span>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="w-full max-w-[800px] mx-auto">
                        <h2 className="text-center mb-6 text-[24px] font-bold text-[#333333]">
                            得意な仕事は何ですか？
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[794px] mx-auto">
                            {/* First row - 4 items */}
                            {jobCategories.slice(0, 4).map((job) => (
                                <button
                                    key={job.id}
                                    onClick={() => setSelectedCurrentJob(job.id)}
                                    className={`
                                        relative
                                        min-h-[72px] px-2
                                        border ${job.borderColor} rounded-[8px]
                                        ${selectedCurrentJob === job.id ? 'bg-[#FFF5E9] border-[#FF8400]' : ''}
                                        hover:bg-[#FFF5E9] hover:border-[#FF8400]
                                        transition-colors
                                        flex flex-col items-center justify-center gap-1
                                    `}
                                >
                                    <div className="w-6 h-6 mb-1">
                                        <Image
                                            src={job.icon}
                                            alt={job.label}
                                            width={24}
                                            height={24}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-[14px] leading-[17px] text-center whitespace-pre-line">
                                        {job.label}
                                    </span>
                                </button>
                            ))}
                            {/* Second row - 4 items */}
                            {jobCategories.slice(4, 8).map((job) => (
                                <button
                                    key={job.id}
                                    onClick={() => setSelectedCurrentJob(job.id)}
                                    className={`
                                        relative
                                        min-h-[72px] px-2
                                        border ${job.borderColor} rounded-[8px]
                                        ${selectedCurrentJob === job.id ? 'bg-[#FFF5E9] border-[#FF8400]' : ''}
                                        hover:bg-[#FFF5E9] hover:border-[#FF8400]
                                        transition-colors
                                        flex flex-col items-center justify-center gap-1
                                    `}
                                >
                                    <div className="w-6 h-6 mb-1">
                                        <Image
                                            src={job.icon}
                                            alt={job.label}
                                            width={24}
                                            height={24}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-[14px] leading-[17px] text-center whitespace-pre-line">
                                        {job.label}
                                    </span>
                                </button>
                            ))}
                            {/* Third row - 2 items */}
                            <div className="col-span-2 md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="col-span-1">
                                    {jobCategories.slice(8, 9).map((job) => (
                                        <button
                                            key={job.id}
                                            onClick={() => setSelectedCurrentJob(job.id)}
                                            className={`
                                                relative
                                                min-h-[72px] px-2
                                                border ${job.borderColor} rounded-[8px]
                                                ${selectedCurrentJob === job.id ? 'bg-[#FFF5E9] border-[#FF8400]' : ''}
                                                hover:bg-[#FFF5E9] hover:border-[#FF8400]
                                                transition-colors
                                                flex flex-col items-center justify-center gap-1
                                                w-full
                                            `}
                                        >
                                            <div className="w-6 h-6 mb-1">
                                                <Image
                                                    src={job.icon}
                                                    alt={job.label}
                                                    width={24}
                                                    height={24}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <span className="text-[14px] leading-[17px] text-center whitespace-pre-line">
                                                {job.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                                <div className="col-span-1">
                                    {jobCategories.slice(9, 10).map((job) => (
                                        <button
                                            key={job.id}
                                            onClick={() => setSelectedCurrentJob(job.id)}
                                            className={`
                                                relative
                                                min-h-[72px] px-2
                                                border ${job.borderColor} rounded-[8px]
                                                ${selectedCurrentJob === job.id ? 'bg-[#FFF5E9] border-[#FF8400]' : ''}
                                                hover:bg-[#FFF5E9] hover:border-[#FF8400]
                                                transition-colors
                                                flex flex-col items-center justify-center gap-1
                                                w-full
                                            `}
                                        >
                                            <div className="w-6 h-6 mb-1">
                                                <Image
                                                    src={job.icon}
                                                    alt={job.label}
                                                    width={24}
                                                    height={24}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <span className="text-[14px] leading-[17px] text-center whitespace-pre-line">
                                                {job.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                                <div className="col-span-1 md:col-span-2"></div>
                            </div>
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className="w-full max-w-[800px] mx-auto">
                        <h2 className="text-center mb-6 text-[24px] font-bold text-[#333333]">
                            これからやりたい仕事は何ですか？
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[794px] mx-auto">
                            {/* First row - 4 items */}
                            {jobCategories.slice(0, 4).map((job) => (
                                <button
                                    key={job.id}
                                    onClick={() => setSelectedFutureJob(job.id)}
                                    className={`
                                        relative
                                        min-h-[72px] px-2
                                        border ${job.borderColor} rounded-[8px]
                                        ${selectedFutureJob === job.id ? 'bg-[#FFF5E9] border-[#FF8400]' : ''}
                                        hover:bg-[#FFF5E9] hover:border-[#FF8400]
                                        transition-colors
                                        flex flex-col items-center justify-center gap-1
                                    `}
                                >
                                    <div className="w-6 h-6 mb-1">
                                        <Image
                                            src={job.icon}
                                            alt={job.label}
                                            width={24}
                                            height={24}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-[14px] leading-[17px] text-center whitespace-pre-line">
                                        {job.label}
                                    </span>
                                </button>
                            ))}
                            {/* Second row - 4 items */}
                            {jobCategories.slice(4, 8).map((job) => (
                                <button
                                    key={job.id}
                                    onClick={() => setSelectedFutureJob(job.id)}
                                    className={`
                                        relative
                                        min-h-[72px] px-2
                                        border ${job.borderColor} rounded-[8px]
                                        ${selectedFutureJob === job.id ? 'bg-[#FFF5E9] border-[#FF8400]' : ''}
                                        hover:bg-[#FFF5E9] hover:border-[#FF8400]
                                        transition-colors
                                        flex flex-col items-center justify-center gap-1
                                    `}
                                >
                                    <div className="w-6 h-6 mb-1">
                                        <Image
                                            src={job.icon}
                                            alt={job.label}
                                            width={24}
                                            height={24}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-[14px] leading-[17px] text-center whitespace-pre-line">
                                        {job.label}
                                    </span>
                                </button>
                            ))}
                            {/* Third row - 2 items */}
                            <div className="col-span-2 md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="col-span-1">
                                    {jobCategories.slice(8, 9).map((job) => (
                                        <button
                                            key={job.id}
                                            onClick={() => setSelectedFutureJob(job.id)}
                                            className={`
                                                relative
                                                min-h-[72px] px-2
                                                border ${job.borderColor} rounded-[8px]
                                                ${selectedFutureJob === job.id ? 'bg-[#FFF5E9] border-[#FF8400]' : ''}
                                                hover:bg-[#FFF5E9] hover:border-[#FF8400]
                                                transition-colors
                                                flex flex-col items-center justify-center gap-1
                                                w-full
                                            `}
                                        >
                                            <div className="w-6 h-6 mb-1">
                                                <Image
                                                    src={job.icon}
                                                    alt={job.label}
                                                    width={24}
                                                    height={24}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <span className="text-[14px] leading-[17px] text-center whitespace-pre-line">
                                                {job.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                                <div className="col-span-1">
                                    {jobCategories.slice(9, 10).map((job) => (
                                        <button
                                            key={job.id}
                                            onClick={() => setSelectedFutureJob(job.id)}
                                            className={`
                                                relative
                                                min-h-[72px] px-2
                                                border ${job.borderColor} rounded-[8px]
                                                ${selectedFutureJob === job.id ? 'bg-[#FFF5E9] border-[#FF8400]' : ''}
                                                hover:bg-[#FFF5E9] hover:border-[#FF8400]
                                                transition-colors
                                                flex flex-col items-center justify-center gap-1
                                                w-full
                                            `}
                                        >
                                            <div className="w-6 h-6 mb-1">
                                                <Image
                                                    src={job.icon}
                                                    alt={job.label}
                                                    width={24}
                                                    height={24}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <span className="text-[14px] leading-[17px] text-center whitespace-pre-line">
                                                {job.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                                <div className="col-span-1 md:col-span-2"></div>
                            </div>
                        </div>
                    </div>
                );

            case 5:
                const priorityOptions = [
                    { id: 'high-income', label: '高額/高収入である' },
                    { id: 'flexible-time', label: '好きな時間/場所で働ける' },
                    { id: 'growth', label: '成長チャレンジできる' },
                    { id: 'planning', label: '企画設計から\n実践までできる' },
                    { id: 'repeat', label: '継続リピート相談もあり' },
                    { id: 'social-contribution', label: '社会に大きな貢献ができる' },
                    { id: 'new-service', label: '今までにない\n新事業/サービス' },
                    { id: 'career', label: 'キャリアアップに\nつながる' },
                    { id: 'management', label: '経営ノウハウが身につく' },
                    { id: 'global', label: '世界と宇宙に幅広く\n活躍できる' }
                ];

                const togglePriority = (id: string) => {
                    setPriorities(prev => {
                        if (prev.includes(id)) {
                            return prev.filter(p => p !== id);
                        }
                        if (prev.length >= 3) {
                            return prev;
                        }
                        return [...prev, id];
                    });
                };

                return (
                    <div className="w-full max-w-[800px] mx-auto">
                        <h2 className="text-center mb-2 text-[20px] font-bold text-[#333333]">
                            何を重視しますか？
                        </h2>
                        <p className="text-center mb-6 text-[20px] text-[#333333]">
                            3つまで選択してください
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {priorityOptions.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => togglePriority(option.id)}
                                    className={`
                                        w-full h-[48px] px-4
                                        rounded-[8px] border
                                        ${priorities.includes(option.id)
                                            ? 'bg-[#FF8400] border-[#FF8400] text-white'
                                            : 'bg-white border-[#FF8400] text-[#333333]'
                                        }
                                        hover:bg-[#FF8400] hover:text-white transition-colors
                                        flex items-center justify-center
                                        text-[16px] font-medium whitespace-pre-line text-center
                                    `}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 6:
                const workStyles = [
                    { id: 'full-onsite', label: '現地フル出勤' },
                    { id: 'hybrid', label: 'リモートと現地出勤\nバランスよく' },
                    { id: 'full-remote', label: '基本フルリモート' },
                    { id: 'flexible', label: 'こだわらない' }
                ];

                return (
                    <div className="w-full max-w-[800px] mx-auto">
                        <h2 className="text-center mb-6 text-[24px] font-bold text-[#333333]">
                            どんな働き方をしたいですか？
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[600px] mx-auto">
                            {workStyles.map((style) => (
                                <button
                                    key={style.id}
                                    onClick={() => setWorkStyle(style.id)}
                                    className={`
                                        w-full h-[48px] px-4
                                        rounded-[8px] border border-[#FF8400]
                                        ${workStyle === style.id
                                            ? 'bg-[#FF8400] text-white'
                                            : 'bg-white text-[#333333] hover:bg-[#FF8400] hover:text-white'
                                        }
                                        transition-colors
                                        flex items-center justify-center
                                        text-[16px] font-medium whitespace-pre-line text-center
                                    `}
                                >
                                    {style.label}
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 7:
                return (
                    <div className="w-full max-w-[600px] mx-auto">
                        <h2 className="text-center mb-6 text-[24px] font-bold text-[#333333]">お住まいの郵便番号は？</h2>
                        <Input
                            type="text"
                            placeholder="郵便番号"
                            className="
                w-[95%] md:max-w-[400px] mx-auto
                bg-[#FFFBF6] border border-[#FFD1A0] rounded-[6px]
                text-[12px] leading-[20px] font-medium font-['Inter']
                text-[#333333] placeholder:text-[#FFC17E]
                focus:outline-none focus:ring-1 focus:ring-[#FFD1A0]
                px-3 py-2
              "
                        />
                    </div>
                );

            case 8:
                return (
                    <div className="w-full max-w-[600px] mx-auto">
                        <h2 className="text-center mb-6 text-[24px] font-bold text-[#333333]">
                            お生まれ年をお聞かせください
                        </h2>
                        <div className="relative w-[95%] md:w-[387px] mx-auto">
                            <select
                                value={birthYear}
                                onChange={(e) => setBirthYear(e.target.value)}
                                className="
                  w-full h-[48px] px-3
                  appearance-none
                  bg-[#FFFBF6] border border-[#FFD1A0] rounded-[6px]
                  text-[16px] leading-[24px] font-medium text-[#FFC17E]
                  focus:outline-none focus:ring-1 focus:ring-[#FFD1A0]
                  cursor-pointer
                "
                            >
                                <option value="" disabled className='text-[#FFC17E]'>西暦</option>
                                {Array.from({ length: 80 }, (_, i) => {
                                    const year = new Date().getFullYear() - i - 15; // Start from 15 years ago
                                    return (
                                        <option key={year} value={year}>
                                            {year}年
                                        </option>
                                    );
                                })}
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 10L12 15L17 10" stroke="#FFD1A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                );

            case 9:
                return (
                    <div className="w-full max-w-[600px] mx-auto">
                        <h2 className="text-center mb-6 text-[24px] font-bold text-[#333333]">
                            ニックネームをお聞かせください
                        </h2>
                        <div className="relative w-[95%] md:w-[387px] mx-auto">
                            <Input
                                type="text"
                                placeholder="ニックネーム"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                className="
                  w-full h-[48px]
                  bg-[#FFFBF6] border border-[#FFD1A0] rounded-[6px]
                  text-[16px] leading-[24px] font-medium text-[#333333]
                  placeholder:text-[#FFC17E]
                  focus:outline-none focus:ring-1 focus:ring-[#FFD1A0]
                  px-3
                "
                            />
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <Layout>
            <div className="min-h-[calc(100vh-132px)] md:min-h-[calc(100vh-144px)] flex flex-col items-center px-4 py-8">
                <h1
                    className="text-[32px] md:text-[48px] font-bold mb-8 tracking-wider"
                    style={{
                        background: 'linear-gradient(89.84deg, #DA01B2 0.21%, #E72E76 50.07%, #FF8400 99.94%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textAlign: 'center',
                        letterSpacing: '0.05em'
                    }}
                >
                    ゆめかなうクラウド
                </h1>

                <p className="text-center mb-4 font-bold text-[24px]">
                    あなたにぴったりの案件が見つけやすくなります
                    <br />
                    あなたの現状をおしえてください
                </p>

                <StepIndicator current={currentStep} total={totalSteps} />

                {renderStepContent()}

                <div className="flex justify-center items-center gap-4 mt-8 w-[95%] md:w-auto">
                    {currentStep > 1 && (
                        <Button
                            variant="ghost"
                            onClick={() => setCurrentStep(prev => prev - 1)}
                            className="w-full md:w-[183px] h-[64px] rounded-[32px] text-[#333333] shadow-none hover:bg-transparent hover:text-[#333333] flex items-center justify-center"
                        >
                            ＜ 戻る
                        </Button>
                    )}
                    <Button
                        onClick={() => {
                            if (currentStep < totalSteps) {
                                setCurrentStep(prev => prev + 1);
                            } else {
                                handleSubmit(); // <-- Logs all data on final step
                            }
                        }}
                        className={`
                w-full md:w-[183px] h-[64px]
                ${currentStep === totalSteps ? 'filter drop-shadow-[0px_2px_4px_rgba(0,0,0,0.25)]' : ''}
                rounded-[32px] hover:opacity-90 flex items-center justify-center
              `}
                        style={{
                            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(89.84deg, #DA01B2 0.21%, #E72E76 50.07%, #FF8400 99.94%)'
                        }}
                    >
                        {currentStep === totalSteps ? (
                            <div className="flex flex-row items-center text-white font-['Noto_Sans_JP']">
                                <div className='flex flex-col items-center gap-2 mr-2'>
                                    <span className="text-[12px] leading-[14px] font-bold">利用規約に同意して</span>
                                    <span className="text-[24px] leading-[14px] font-bold">完了</span>
                                </div>
                                <span>＞</span>
                            </div>
                        ) : (
                            <span className="text-white">次へ ＞</span>
                        )}
                    </Button>
                </div>


                {showExitModal && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg text-center">
                        <h2 className="text-xl font-bold mb-4">Are you sure you want to leave?</h2>
                        <p className="text-gray-700 mb-6">If you go to the other site now, all the things are lost.</p>
                        <div className="flex justify-center gap-4">
                            <button
                            className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                            onClick={() => setShowExitModal(false)}
                            >
                            No
                            </button>
                            <button
                            className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
                            onClick={() => {
                                if (nextUrl) {
                                window.location.href = nextUrl;
                                }
                            }}
                            >
                            Yes
                            </button>
                        </div>
                        </div>
                    </div>
                    )}
            </div>
        </Layout>
    );
};

export default RegisterSteps;