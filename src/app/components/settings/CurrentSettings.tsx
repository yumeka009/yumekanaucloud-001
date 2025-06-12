// components/CurrentSettings.tsx
import React from 'react';

const CurrentSettings = () => {
  return (
    <div className="w-full max-w-4xl">
      {/* Header with gradient line */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-2 h-8 bg-gradient-to-b from-[#FF8400] via-[#E72E76] to-[#DA01B2] rounded-sm" />
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          現在の設定
        </h1>
      </div>

      {/* Settings card */}
      <div className="border border-gray-200 rounded-lg shadow-sm p-8 w-[792px] h-[178px]">
        <div className="flex flex-row space-x-6">
          {/* Email setting */}
          <div className='flex flex-col space-y-6'>
            <h3 className="text-[18px] font-bold text-gray-900 leading-[22px] min-w-[126px]">
              メールアドレス
            </h3>
            <h3 className="text-[18px] font-bold text-gray-900 leading-[22px] min-w-[90px]">
              パスワード
            </h3>
            <h3 className="text-[18px] font-bold text-gray-900 leading-[22px] min-w-[72px]">
              会員区分
            </h3>
          </div>

          <div className='flex flex-col space-y-6'>
            <div className="text-[18px] text-gray-900 leading-[22px]">
              xxx@mail.com
            </div>
            <div className="text-[18px] text-gray-900 leading-[22px]">
              xxx
            </div>
            <div className="px-2 py-0.5 bg-[#FFEDE0] rounded-[6px] max-w-[64px] flex items-center justify-center">
              <span className="text-[12px] leading-[18px] font-normal text-[#FF8400]">
                有料会員
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentSettings;