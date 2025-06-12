import Image from "next/image";
import React from "react";

import StartImage from '../../../assets/Start.png';
import StartBackground from '../../../assets/Start-background.png';



const StartSection = () => {
  return (
    <section className="relative w-full bg-white py-20 " style={{ backgroundImage: `url(${StartBackground.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Main Content */}
      <div className="w-full max-w-[1680px] mx-auto px-4">
        {/* Gradient Heading */}
        <h2 
          className="text-[8vw] md:text-[64px] font-bold leading-[77px] text-center mb-8 font-['Noto_Sans_JP']"
          style={{
            background: "linear-gradient(89.85deg, #DA01B2 0.19%, #E72E76 46.59%, #FF8400 92.99%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          未来の自分、今始める。
        </h2>

        {/* Subheadings */}
        <div className="text-center mb-16">
          <p className="text-[4vw] lg:text-[52px] font-bold leading-[60px] text-[#333333] mb-4 font-['Noto_Sans_JP']">
            魂の仕事と出会う場所を、私たちはつくる。
          </p>
          <p className="text-[3.5vw] lg:text-[52px] font-bold leading-[60px] text-[#333333] font-['Noto_Sans_JP']">
            副業・複業から自立ができるゆめかなうクラウド
          </p>
        </div>

        {/* Content Grid */}
        <div className="w-full max-w-[1440px] mx-auto px-4 xl:px-[120px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={StartImage}
                alt="Start section image"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>

            {/* Right: Text Content */}
            <div className="space-y-8 font-['Noto_Sans_JP'] text-[20px] md:text-[28px] leading-[42px] text-[#333333] font-normal">
              <div className="space-y-4">
                <p className="font-bold">
                “これがやりたかったんだ”
                </p>
                <p>
                  と思える<span className="text-[#E72E76]">出会い</span>が、きっとある
                </p>
                <p>
                  同じ“何か”を信じてる人と<span className="text-[#E72E76]">共鳴</span>する。
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  自立とは「<span className="text-[#E72E76]">魂の仕事</span>」に生きること
                </p>
                <p>
                  あなたの本当の人生を生きるために
                </p>
                <p>
                  思いもよらなかった
                </p>
              </div>

              <div>
                <p className="text-[#E72E76] font-bold">
                  最高最善の
                </p>
                <p className="font-bold">
                  機会とストーリー<span className="text-[#333333]">をあなたに</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartSection; 