'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../../../assets/header__logo.png';
import Featured from '../../../assets/Featured.png';

const Header = () => {
  const pathname = usePathname();

  const isSimpleHeader =
    pathname === '/login' ||
    pathname === '/register' ||
    pathname.startsWith('/register-step');

  const isLandingPage = pathname === '/';

  const RedBar = () => (
    <div
      className="w-full h-[21px] flex items-center justify-start text-white text-[12px] font-medium pl-[120px] md:pl-[30px] sm:pl-[8px]"
      style={{
        background:
          "linear-gradient(89.84deg, #DA01B2 0.21%, #E72E76 50.07%, #FF8400 99.94%)",
      }}
    >
      魂の仕事と出会う場所を、私たちは創る
    </div> 
  );

  if (isSimpleHeader) {
    return (
      <>
        <RedBar />
        <header className="w-full bg-white">
          <div className="container-responsive h-full px-4 md:px-6 ">
            <div className="flex items-center h-full w-[95%] py-4 mx-auto">
              <Link href="/" className="flex items-center">
                <Image
                  src={logo}
                  alt="ゆめかなうクラウド"
                  width={135.11}
                  height={53}
                  className="w-[135.11px] h-[53px]"
                  priority
                />
              </Link>
            </div>
          </div>
        </header>
      </>
    );
  }

  if (isLandingPage) {
    return (
      <>
        <RedBar />
        <header className="w-full border-b border-blue-500">
          <div className="w-[95%] sm:w-[96%] mx-auto flex items-center justify-between py-3">
            <div className="flex flex-col items-start sm:flex-row sm:items-end sm:space-x-3">
              <Image
                src={logo}
                alt="Yumekanau Logo"
                width={88}
                height={35}
                className="sm:w-[135px] sm:h-[53px]"
                priority
              />
              <div className="mt-1 sm:mt-0">
                <p className="text-[8px] leading-[12px] text-gray-600 sm:text-[14px] sm:leading-[21px]">
                  魂の仕事と出会う場所を、私たちは創る
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="text-[10px] text-gray-700 sm:text-sm">
                採用したい方はこちら
              </span>
              <Link
                href="/login"
                className="text-[10px] sm:text-sm border border-pink-400 text-pink-600 rounded w-[72px] h-[26px] flex items-center justify-center sm:w-auto sm:h-auto sm:px-3 sm:py-1 hover:bg-pink-50 transition"
              >
                ログイン
              </Link>
            </div>
          </div>
        </header>
      </>
    );
  }

  // Default Job Page Header
  return (
    <>
      <RedBar />
      <div className="bg-white w-full shadow-md flex items-center justify-between px-4 md:px-8 h-[80px]">
        <div className="flex items-end">
          <div className="h-[40px] w-auto relative">
            <Link href="/">
              <Image src={logo} alt="ゆめかなう" className="h-full w-auto" />
            </Link>
          </div>
          <p className="text-[12px] text-[#333333] ml-2 mb-1 hidden md:block">
            魂の仕事と出会う場所を、私たちは創る
          </p>
        </div>
        <div className="flex items-center gap-3 md:gap-8">
          <button className="flex items-center gap-2 hover:opacity-80">
            <Image src={Featured} alt="特集コンテンツ" width={24} height={24} />
            <span className="text-[14px] text-[#333333] font-medium hidden md:inline">
              特集コンテンツ
            </span>
          </button>
          <button className="flex items-center gap-2 hover:opacity-80">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#333" strokeWidth="2" />
              <path d="M21 21L16.65 16.65" stroke="#333" strokeWidth="2" />
            </svg>
            <span className="text-[14px] text-[#333] font-medium hidden md:inline">
              お仕事を探す
            </span>
          </button>
          <button className="flex items-center gap-2 hover:opacity-80">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" fill="#333" stroke="#333" strokeWidth="2" />
              <path d="M13.73 21C13.55 21.3 13.3 21.55 13 21.73C12.7 21.9 12.35 22 12 22C11.65 22 11.3 21.9 11 21.73C10.7 21.55 10.45 21.3 10.27 21" stroke="#333" strokeWidth="2" />
            </svg>
            <span className="text-[14px] text-[#333] font-medium hidden md:inline">
              通知
            </span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#D9D9D9]" />
            <span className="text-[14px] text-[#333] font-medium hidden md:inline">
              ユーザー名
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
