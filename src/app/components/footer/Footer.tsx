'use client';

import Link from 'next/link';
import Image from 'next/image';
import instagram from '../../../assets/footer/Instagram.png';
import Xlogo from '../../../assets/footer/X.png';
import line from '../../../assets/footer/LINE.png';
import logo from '../../../assets/header__logo.png';
import footer_down from '../../../assets/footer/footer-down.png';
import footer_up from '../../../assets/footer/footer-up.png';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Upper Section - Logo and Social */}
      <div
        className="w-full py-8"
        style={{
          backgroundImage: `url(${footer_up.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-responsive">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col items-start gap-4 md:gap-6">
              <div className='flex flex-row gap-4 items-center w-[90%] md:justify-start mx-auto'>
                {/* Logo - Always visible */}
                <Link href="/" className="logo">
                  <Image
                    src={logo}
                    alt="ゆめかなうクラウド"
                    width={135}
                    height={53}
                    className="w-[100px] h-[40px] md:w-[120px] md:h-[47px] lg:w-[135px] lg:h-[53px]"
                  />
                </Link>

                {/* Company Info and Social Links - Column on desktop */}
                <div className='flex flex-col gap-2'>
                  <div className="text-xs md:text-sm text-gray-600">
                    運営会社
                  </div>
                  <div className="hidden md:flex items-center gap-3 md:gap-4">
                    <Link href="https://www.instagram.com" target="_blank" className="icon">
                      <Image
                        src={instagram}
                        alt="Instagram"
                        width={24}
                        height={24}
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                    </Link>
                    <Link href="https://x.com" target="_blank" className="icon">
                      <Image
                        src={Xlogo}
                        alt="Twitter"
                        width={24}
                        height={24}
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                    </Link>
                    <Link href="https://line.me" target="_blank" className="icon">
                      <Image
                        src={line}
                        alt="Line"
                        width={24}
                        height={24}
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section - Links */}
      <div
        className="w-full py-8"
        style={{
          backgroundImage: `url(${footer_down.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-responsive">
          <div className="section-margins">
            <div className="flex flex-col items-center gap-4 md:gap-6">
              {/* Footer Links - Always in row */}
              <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-8">
                <Link href="/terms" className="text-[16px] md:text-[18px] underline text-[#FF8400] hover:opacity-80 whitespace-nowrap">
                  利用規約
                </Link>
                <Link href="/privacy" className="text-[16px] md:text-[18px] underline text-[#FF8400] hover:opacity-80 whitespace-nowrap">
                  プライバシーポリシー
                </Link>
                <Link href="/contact" className="text-[16px] md:text-[18px] underline text-[#FF8400] hover:opacity-80 whitespace-nowrap">
                  お問合せ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;