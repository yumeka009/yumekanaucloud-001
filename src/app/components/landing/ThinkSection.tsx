import React from 'react';
import Image from 'next/image';
import ThinkBackground from '../../../assets/Think.png';

const ThinkSection = () => {
    return (
        <section className="relative w-full py-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <div className="relative w-full h-full overflow-hidden">
                    <Image
                        src={ThinkBackground}
                        alt="Think background"
                        fill
                        style={{ 
                            objectFit: "cover",
                            objectPosition: "left center"
                        }}
                        priority
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative w-full max-w-[1440px] mx-auto px-4 xl:px-[120px] flex flex-col items-center">
                {/* Title Container */}
                <div className="flex flex-col items-center w-full">
                    <h2
                        className="w-full xl:w-[1200px] h-[77px] text-[40px] md:text-[64px] leading-[77px] font-bold font-['Noto_Sans_JP'] text-center flex-none order-0 self-stretch flex-grow-0 relative"
                    >
                        {/* Shadow Layer */}
                        <span
                            className="absolute inset-0 text-white"
                            style={{
                                textShadow: "4px 4px 0px #FFFFFF, 0px 0px 16px #FFFFFF",
                                zIndex: 1
                            }}
                        >
                            ゆめかなうクラウドの想い
                        </span>
                        {/* Gradient Text Layer */}
                        <span
                            className="relative"
                            style={{
                                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), 
                          linear-gradient(89.84deg, #DA01B2 0.21%, #E72E76 50.07%, #FF8400 99.94%)`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                zIndex: 2
                            }}
                        >
                            ゆめかなうクラウドの想い
                        </span>
                    </h2>
                </div>

                {/* Subtitle */}
                <p className="text-[24px] md:text-[32px] xl:text-[40px] leading-[36px] md:leading-[48px] xl:leading-[60px] font-bold font-['Noto_Sans_JP'] text-center text-[#333333] mt-32 md:mt-8 mb-12" style={{
                    textShadow: "4px 4px 0px #FFFFFF"
                }}>
                    私たちのビジョン「誰もが自立しやすい世の中に」<br />
                    自分が好きで幸せに働く人を増やします
                </p>

                {/* Main Text Container */}
                <div className="w-full flex justify-end">
                    {/* Main Text */}
                    <div
                        className="text-[18px] md:text-[24px] xl:text-[28px] leading-[27px] md:leading-[36px] xl:leading-[42px] font-bold font-['Noto_Sans_JP'] text-[#333333] text-left max-w-[800px] xl:pr-[120px]"
                        style={{
                            textShadow: "0px 0px 16px #FFFFFF"
                        }}
                    >
                        <p className="mb-8">
                            風を切り、まっすぐに前を見据えて。<br />
                            誰かの期待や常識ではなく、「私自身」の旗のもとに進む。<br />
                            心に掲げた理想に忠実に――<br />
                            今日という日を、私は選び取る。
                        </p>
                        <p className="mb-8">
                            たとえまだ見ぬ世界でも、<br />
                            それが私の人生のステージ、魂の仕事なら、<br />
                            恐れずに駆けていこう。
                        </p>
                        <p>
                            私は、私に忠誠を誓う。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThinkSection; 