import Image from "next/image";
import React from "react";
import landing from '../../../assets/landing.png';
import Link from 'next/link';

const MainSection = () => {
  return (
    <div className="flex flex-col">
      {/* === Main Visual Section === */}
      <section className="relative w-full h-screen max-h-[936px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={landing}
              alt="Background"
              fill
              style={{ 
                objectFit: "cover",
                objectPosition: "center"
              }}

            />
          </div>
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col">
          {/* Headline Text */}
          <div className="flex-1 flex items-center">
            <div className="w-full max-w-[1680px] mx-auto px-4">
              <h1 className="text-[8vw] md:text-[60px] lg:text-[80px] leading-[1.2] md:leading-[96px] font-black font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#DA01B2] via-[#E72E76] to-[#FF8400] drop-shadow-[4px_4px_0px_white]">
                あなたを生きる
              </h1>
              <h1 className="text-[8vw] md:text-[60px] lg:text-[80px] leading-[1.2] md:leading-[96px] font-black font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#DA01B2] via-[#E72E76] to-[#FF8400] drop-shadow-[4px_4px_0px_white] mt-2">
                魂の仕事をしよう
              </h1>
              <h2 className="md:hidden text-[5vw] font-bold text-white mt-6 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.25)]">
                ゆめかなうクラウド
              </h2>
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="h-[182px] bg-gradient-to-b from-[#FF84001A] via-[#E72E761A] to-[#DA01B21A]" />
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="w-full bg-gradient-to-b from-[rgba(255,132,0,0.1)] via-[rgba(231,46,118,0.1)] to-[rgba(218,1,178,0.1)]">
        <div className="w-full max-w-[1400px] mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-[6vw] md:text-[42px] lg:text-[49px] font-bold text-[#292929]">
              仕事に<span className="text-pink-500">ワクワク</span>したいなら
            </p>

            <Link href="/register">
              <button
                className="w-full md:w-[556px] h-[80px] md:h-[100px] lg:h-[118px] flex items-center justify-between px-6 md:px-8 lg:px-12 text-white text-[6vw] md:text-[42px] lg:text-[56px] font-black rounded-[16px]"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(89.84deg, #DA01B2 0.21%, #E72E76 50.07%, #FF8400 99.94%)",
                }}
              >
                無料ではじめる
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSection;
