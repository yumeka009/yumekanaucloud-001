// components/PasswordSettings.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const PasswordSettings = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <div className="w-full max-w-3xl">
      {/* Header with gradient line */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-2 h-8 bg-gradient-to-b from-[#FF8400] via-[#E72E76] to-[#DA01B2] rounded-sm" />
        <h1 className="text-[32px] font-bold text-gray-900 tracking-tight leading-[40px]">
          パスワードの変更
        </h1>
      </div>

      {/* Password change form */}
      <div className="border border-gray-200 rounded-lg shadow-sm p-8">
      <div className="space-y-6">
          {/* Current Password */}
          <div className="relative space-y-2">
            <Label htmlFor="current-password" className="text-lg">
              現在のパスワード
            </Label>

            <div className="relative">
              <Input
                id="current-password"
                type={showCurrent ? "text" : "password"}
                className="text-lg h-12 pr-10 bg-[rgba(255,251,246,1)] border-[rgb(255,209,159)]"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setShowCurrent(!showCurrent)}
              >
                {showCurrent ? (
                  <EyeOff className="w-[26px] h-[24px] text-[#999]" />
                ) : (
                  <Eye className="w-[26px] h-[24px] text-[#999]" />
                )}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <Label htmlFor="new-password" className="text-lg">
              新しいパスワード
            </Label>
            <div className="relative">
              <Input
                id="new-password"
                type={showNew ? "text" : "password"}
                className="text-lg h-12 pr-10 bg-[rgba(255,251,246,1)] border-[rgb(255,209,159)]"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setShowNew(!showNew)}
              >
                {showNew ? (
                  <EyeOff className="w-[26px] h-[24px] text-[#999]" />
                ) : (
                  <Eye className="w-[26px] h-[24px] text-[#999]" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm New Password */}
          <div className="space-y-2">
            <Label htmlFor="confirm-password" className="text-lg">
              新しいパスワード（確認）
            </Label>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showConfirm ? "text" : "password"}
                className="text-lg h-12 pr-10 bg-[rgba(255,251,246,1)] border-[rgb(255,209,159)]"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? (
                  <EyeOff className="w-[26px] h-[24px] text-[#999]" />
                ) : (
                  <Eye className="w-[26px] h-[24px] text-[#999]" />
                )}
              </button>
            </div>
          </div>
        </div>


        {/* Password requirements */}
        <div className="flex flex-col space-y-[56px] mt-[32px] items-center justify-center">
          <div className="w-full bg-[#F5F5F5] rounded-[8px] px-6 py-5">
            <div className="space-y-5">
                <h2 className="text-lg font-bold text-gray-900">パスワードの設定について</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                アカウントを安全に保つため、以下のルールに従ってパスワードを設定してください。
                </p>

                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li>文字数は10文字以上</li>
                <li>
                    使用可能な文字は半角英大文字 (A-Z)、半角英小文字 (a-z)、半角数字
                    (0-9)、半角記号 (例: I@n$%^&^() など)
                </li>
                <li>
                    文字の種類は英大文字、英小文字、数字の中から、必ず2種類以上を組み合わせる
                </li>
                </ul>

                <h2 className="text-lg font-bold text-gray-900 pt-2">以下のパスワードは使用不可</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li>「password」や「123456」など、推測されやすい簡単な文字列</li>
                <li>
                    ユーザー名やメールアドレスと同じ、またはそれらを含む文字列
                </li>
                <li>「abcde」や「11111」のような単純な繰り返しや連続した文字列</li>
                </ul>
            </div>
          </div>
          <Button
  className="w-[192px] h-[43px] 
             flex items-center justify-center gap-[10px] 
             px-6 py-3 rounded-[6px] 
             text-white text-base font-bold 
             bg-gradient-to-r from-[#DA01B2] via-[#E72E76] to-[#FF8400] 
             hover:from-[#E72E76] hover:via-[#DA01B2] hover:to-[#FF8400]"
>              変更する
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PasswordSettings;