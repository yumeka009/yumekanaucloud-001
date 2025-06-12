"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ThankYouSurvey() {
  const [satisfaction, setSatisfaction] = useState("");
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const handleQ2Change = (index: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

  return (
    <div className="flex flex-col items-center p-0 gap-8 max-w-[800px] mx-auto py-[64px]">
      <h1 className="w-full text-[32px] font-bold leading-[40px] tracking-[-0.0075em] text-[#333]">
        アンケートに答えて、ありがとうのメッセージを送ろう
      </h1>

      <div className="flex flex-col items-center p-4 gap-6 w-full bg-white border border-[#E5E7EB] rounded-lg shadow-[0_2px_4px_rgba(229,231,235,0.5)]">
        {/* Q1 */}
        <div className="w-full">
          <p className="text-[16px] font-bold leading-[19px] tracking-[-0.0075em] text-[#333] mb-2">
            1．このお仕事の全体的な満足度をお聞かせください
          </p>
          <div className="flex gap-8">
            {/* 良かった */}
            <label className="flex items-center gap-2 text-[14px] leading-[21px] text-[#333] cursor-pointer">
              <input
                type="radio"
                name="satisfaction"
                value="good"
                checked={satisfaction === "good"}
                onChange={() => setSatisfaction("good")}
                className="peer hidden"
              />
              <div className="flex items-center justify-center w-[15px] h-[15px] border border-[#333] rounded-full">
                <div
                  className={`w-[10px] h-[10px] rounded-full transition-transform duration-200 ${
                    satisfaction === "good" ? "bg-[#E72E76] scale-100" : "scale-0"
                  }`}
                ></div>
              </div>
              良かった
            </label>

            {/* 残念だった */}
            <label className="flex items-center gap-2 text-[14px] leading-[21px] text-[#333] cursor-pointer">
              <input
                type="radio"
                name="satisfaction"
                value="bad"
                checked={satisfaction === "bad"}
                onChange={() => setSatisfaction("bad")}
                className="peer hidden"
              />
              <div className="flex items-center justify-center w-[15px] h-[15px] border border-[#333] rounded-full">
                <div
                  className={`w-[10px] h-[10px] rounded-full transition-transform duration-200 ${
                    satisfaction === "bad" ? "bg-[#E72E76] scale-100" : "scale-0"
                  }`}
                ></div>
              </div>
              残念だった
            </label>
          </div>
        </div>

        {/* Q2 */}
        <div className="w-full space-y-2">
          <p className="text-[16px] font-bold leading-[19px] tracking-[-0.0075em] text-[#333]">
            2．このお仕事の特徴は、あなたの思い描いたご期待にマッチしていましたか？
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            {[
              "高額/高収入でしたか？",
              "好きな時間/場所で働けましたか？",
              "成長チャレンジできましたか？",
              "企画設計から実装までできましたか？",
              "継続/リピート相談もありましたか？",
              "社会に大きな貢献ができましたか？",
              "今までにない新事業/サービスでしたか？",
              "キャリアアップにつながりましたか？",
              "経営ノウハウが身につきましたか？",
              "世界と宇宙に幅広く活躍できましたか？",
            ].map((text, i) => (
              <div key={i} className="space-y-2">
                <p className="text-[16px] leading-[19px] tracking-[-0.0075em] text-[#333]">
                  {text}
                </p>
                <div className="flex gap-8">
                  {/* はい */}
                  <label className="flex items-center gap-2 text-[14px] leading-[21px] text-[#333] cursor-pointer">
                    <input
                      type="radio"
                      name={`question-${i}`}
                      value="yes"
                      checked={answers[i] === "yes"}
                      onChange={() => handleQ2Change(i, "yes")}
                      className="peer hidden"
                    />
                    <div className="flex items-center justify-center w-[15px] h-[15px] border border-[black] rounded-full">
                      <div
                        className={`w-[10px] h-[10px] rounded-full transition-transform duration-200 ${
                          answers[i] === "yes" ? "bg-[#E72E76] scale-100" : "scale-0"
                        }`}
                      ></div>
                    </div>
                    はい
                  </label>

                  {/* いいえ */}
                  <label className="flex items-center gap-2 text-[14px] leading-[21px] text-[#333] cursor-pointer">
                    <input
                      type="radio"
                      name={`question-${i}`}
                      value="no"
                      checked={answers[i] === "no"}
                      onChange={() => handleQ2Change(i, "no")}
                      className="peer hidden"
                    />
                    <div className="flex items-center justify-center w-[15px] h-[15px] border border-[#333] rounded-full">
                      <div
                        className={`w-[10px] h-[10px] rounded-full transition-transform duration-200 ${
                          answers[i] === "no" ? "bg-[#E72E76] scale-100" : "scale-0"
                        }`}
                      ></div>
                    </div>
                    いいえ
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Q3 */}
        <div className="w-full space-y-2">
          <div>
            <p className="text-[16px] font-bold leading-[19px] tracking-[-0.0075em] text-[#333]">
              3．このお仕事に対するありがとうの気持ちを伝えよう！
            </p>
            <p className="text-[14px] leading-[21px] tracking-[-0.0075em] text-[#333]">
              （良かった点や満足だった点を記入しましょう。相手にもこのメッセージが届きます）
            </p>
          </div>
          <textarea
            className="w-full min-h-[200px] p-3 text-[12px] leading-[20px] text-[#FFC17E] bg-[#FFFBF6] border border-[#FFD1A0] rounded resize-none"
            defaultValue={`ありがとうメッセージ\n本案件\n〇〇様\nこの度は「〇〇（案件名）」へのご協力、誠にありがとうございました。スムーズな進行に心より感謝申し上げます。〇〇様のお仕事ぶりを拝見し、ぜひ今後もご一緒できれば幸いです。引き続きよろしくお願いいたします。\n\nこの度は「〇〇（案件名）」へのご協力、誠にありがとうございました。スムーズな進行に心より感謝申し上げます。〇〇様のお仕事ぶりを拝見し、ぜひ今後もご一緒できれば幸いです。引き続きよろしくお願いいたします。`}
          />
        </div>

        <div className="flex justify-center w-full">
          <Button
            className="px-6 py-3 text-white font-bold text-[16px] leading-[19px] rounded w-[192px]"
            style={{
              background:
                "linear-gradient(89.84deg, #DA01B2 0.21%, #E72E76 50.07%, #FF8400 99.94%)",
            }}
          >
            送信
          </Button>
        </div>
      </div>
    </div>
  );
}
