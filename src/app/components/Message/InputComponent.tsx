// components/RightContent.tsx
import { Button } from "@/components/ui/button";

export default function RightContent() {
  return (
    <main className="flex-1 p-6 space-y-6 max-w-[834px]">
      {/* Section Title with Gradient Bar */}
      <div className="flex items-center gap-2">
        <div
          className="w-2 h-8 rounded-sm"
          style={{
            background:
              "linear-gradient(359.99deg, #DA01B2 0.01%, #E72E76 50%, #FF8400 99.99%)",
          }}
        />
        <h1 className="text-[32px] font-bold text-[#333] leading-[40px] tracking-[-0.0075em]">
          〇〇様とのメッセージ
        </h1>
      </div>

      {/* Message Bubble */}
      <div className="flex p-4 gap-4 rounded-lg bg-white border">
        <div className="w-[50px] h-[50px] rounded-full bg-gray-400" />
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between">
            <h4 className="text-base font-bold text-[#333]">氏名</h4>
            <span className="text-xs text-[#5C5C5C]">2025/xx/xx</span>
          </div>
          <p className="text-sm text-[#333] leading-[21px]">
            テキストメッセージテキストメッセージテキストメッセージテキストメッセージテキストメッセージ...
          </p>
        </div>
      </div>

      {/* Message Input Area */}
      <div className="p-4 bg-white rounded-2xl shadow-md space-y-2">
        <textarea
          placeholder="こちらにメッセージ"
          className="w-full min-h-[120px] p-3 border border-gray-300 rounded-md text-sm text-[#333] focus:outline-none focus:ring-2 focus:ring-[#DA01B2] resize-none"
        />
        <div className="flex items-center gap-2">
          <Button variant="outline" className="text-[#DA01B2] border-[#DA01B2]">
            ファイルを添付
          </Button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col items-center gap-4">
        <Button
          className="w-full max-w-sm text-white text-sm font-bold py-3"
          style={{
            background:
              "linear-gradient(90deg, #DA01B2 0%, #E72E76 50%, #FF8400 100%)",
          }}
        >
          メッセージを送る
        </Button>

        <Button
          variant="outline"
          className="w-full max-w-sm border-2 border-[#FF8400] text-[#DA01B2] text-sm font-bold py-3"
        >
          ありがとうを伝える
        </Button>
      </div>
    </main>
  );
}
