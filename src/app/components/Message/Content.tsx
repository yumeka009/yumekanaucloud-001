export default function RightContent() {
  return (
    <main className="flex-1 p-6 space-y-6 max-w-[834px]">

      {/* Section Title with Gradient Bar */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-8 rounded-sm" style={{ background: 'linear-gradient(359.99deg, #DA01B2 0.01%, #E72E76 50%, #FF8400 99.99%)' }} />
        <h1 className="text-[32px] font-bold text-[#333] leading-[40px] tracking-[-0.0075em]">
          〇〇様とのメッセージ
        </h1>
      </div>

      {/* Messages */}
      {[1, 2].map((item, i) => (
        <div
          key={item}
          className={`flex p-4 gap-4 rounded-lg   ${i === 1 ? 'bg-[#FFD4E5]' : ''}`}
        >
          <div className={`w-[50px] h-[50px] rounded-full ${i === 1 ? 'bg-[#FFD4E5]' : 'bg-gray-400'}`} />
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between">
              <h4 className="text-base font-bold text-[#333]">氏名</h4>
              <span className="text-xs text-[#5C5C5C]">2025/xx/xx</span>
            </div>
            <p className="text-sm text-[#333] leading-[21px]">
              テストメッセージテストメッセージテストメッセージテストメッセージテストメッセージ...
            </p>
          </div>
        </div>
      ))}

      {/* Completion Message */}
      <div className="flex flex-col gap-4 p-8 rounded-lg ">
        <p className="text-sm text-center text-[#FFC17E]">
          プロジェクトを完了して、〇〇様へありがとうを伝えました
        </p>
        <div className="text-right text-xs text-[#FFC17E]">2025/xx/xx</div>
        <p className="text-sm text-[#FFC17E] leading-[21px]">
          〇〇様 この度は「〇〇（案件名）」へのご協力、誠にありがとうございました。
          スムーズな進行に心より感謝申し上げます。〇〇様のお仕事ぶりを拝見し、
          ぜひ今後もご一緒できれば幸いです。引き続きよろしくお願いいたします。
        </p>
      </div>

      {/* Thank You from 〇〇様 */}
      <div className="flex flex-col gap-4 p-8 rounded-lg">
        <p className="text-sm text-center text-[#8CBEBF]">
          〇〇様からありがとうのメッセージが届きました
        </p>
        <div className="text-right text-xs text-[#8CBEBF]">2025/xx/xx</div>
        <p className="text-sm text-[#8CBEBF] leading-[21px]">
          〇〇様からの評価 良かった：理由
        </p>
        <p className="text-sm text-[#8CBEBF] leading-[21px]">
          〇〇様 この度は「〇〇（案件名）」へのご協力、誠にありがとうございました。
          スムーズな進行に心より感謝申し上げます。〇〇様のお仕事ぶりを拝見し、
          ぜひ今後もご一緒できれば幸いです。引き続きよろしくお願いいたします。
        </p>
      </div>
    </main>
  );
}
