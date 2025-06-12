// components/EmailSettings.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EmailSettings = () => {
  return (
    <div className="w-full max-w-4xl">
      {/* Header with gradient line */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-2 h-8 bg-gradient-to-b from-[#FF8400] via-[#E72E76] to-[#DA01B2] rounded-sm" />
        <h1 className="text-[32px] font-bold text-gray-900 tracking-tight leading-[40px]">
          メールアドレスの変更
        </h1>
      </div>

      {/* Email change form */}
      <div className="border border-gray-200 rounded-lg shadow-sm p-8 space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 items-center gap-4">
            <Label htmlFor="current-email" className="text-lg">
              現在のメールアドレス
            </Label>
            <Input
              id="current-email"
              type="email"
              value="xxx@mail.com"
              readOnly
              className="text-lg"
            />
          </div>

          <div className="grid grid-cols-2 items-center gap-4">
            <Label htmlFor="new-email" className="text-lg">
              新しいメールアドレス
            </Label>
            <Input
                id="new-email"
                type="email"
                placeholder="yyy@mail.com"
                className=" bg-[#FFFBF6] border border-[#FFD1A0] rounded-lg text-[18px] leading-[22px] text-[#333333] px-4 font-['Noto_Sans_JP']"
            />
          </div>
        </div>

        <div className="w-full flex justify-center">
            <Button
                className="w-[192px] h-[43px] px-6 py-3 flex items-center justify-center gap-2
                bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(89.84deg,#DA01B2_0.21%,#E72E76_50.07%,#FF8400_99.94%)]
                rounded-[6px] text-white text-[16px] leading-[24px] font-bold font-['Noto_Sans_JP']"
            >
                今すぐ応募する
            </Button>
        </div>



        <p className="text-sm text-gray-600 mt-6">
        ※携帯電話のメールアドレスをご利用の場合、迷惑メールフィルタ機能により、
          <br />
          当サイトからのメールが自動的に受信拒否されている可能性がございます。
          <br />
          [ドメイン名]からのメールを受信できるよう、あらかじめ設定をお願いいたします。
        </p>
      </div>
    </div>
  );
};

export default EmailSettings;