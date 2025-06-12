'use client';

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import cardImg from '../../../assets/sakura.png';
import checkImg from '../../../assets/Check.png';

export default function SideHustleIntro() {
  return (
    <div className="max-w-4xl px-20 py-10 space-y-10">
      {/* Header */}
      <div className="text-left space-y-2">
        <h1 className="text-lg font-bold text-[black]">副業初心者が最初に読むべき完全ガイド</h1>
        <p className="text-[black] text-lg font-bold">
          副収入を得るための第一歩と失敗しないためのコツを徹底解説
        </p>
      </div>

        <div className="flex flex-row items-center gap-[8px]">
            <div className="bg-[#e5e7eb] text-[black] px-[8px] rounded-[6px]">
                #スタートアップ企業
            </div>

            <div className="bg-[#e5e7eb] text-[black] px-[8px] rounded-[6px]">
                #タグ
            </div>
            <div className="bg-[#e5e7eb] text-[black] px-[8px] rounded-[6px]">
                #タグ
            </div>
        </div>

      {/* Image */}
      <div className="flex justify-start">
        <Card className="overflow-hidden w-full max-w-xl rounded-none">
          <CardContent className="p-0">
            <Image
              src={cardImg}
              alt="桜の花"
              width={800}
              height={500}
              className="w-full object-cover"
            />
          </CardContent>
        </Card>
      </div>

      {/* Section 1 */}
      <Section
        title="副業初心者におすすめの理由とメリット"
        items={["スキマ時間を活用できる", "少ないリスクで始められる", "将来の選択肢が広がる"]}
      />

      {/* Section 2 */}
      <Section
        title="初心者でも始めやすい副業の種類とは？"
        items={["クラウドソーシング", "ブログ・アフィリエイト", "ネットショップ", "動画編集", "スキル販売（ココナラなど）"]}
      />

      {/* Section 3 */}
      <Section
        title="初心者でも始めやすい副業の選び方とは？"
        items={["自分の得意・興味のある分野から始める", "時間・資金・スキルのバランスを考慮する", "継続できるかどうかを見極める"]}
      />

      {/* Final Note */}
        <div className="flex items-center gap-[16px]">
            <div className="w-2 h-10" style={{ background: 'linear-gradient(359.99deg, #DA01B2 0.01%, #E72E76 50%, #FF8400 99.99%)' }} />
            <h1 className="text-[32px] font-bold text-[black] leading-[40px] tracking-[-0.0075em]">
                副業初心者はまず行動して小さな成功体験を積もう
            </h1>
        </div>
        <p className="leading-relaxed text-[black] ml-[24px]">
            初めての副業は不安が多いですが、情報収集と継続の姿勢が成功の鍵です。焦らず、少しずつ前進していきましょう。
        </p>
    </div>
  );
}

type SectionProps = {
  title: string;
  items: string[];
};

function Section({ title, items }: SectionProps) {
  return (
    <div>
        <div className="flex items-center gap-2">
            <div className="w-2 h-10" style={{ background: 'linear-gradient(359.99deg, #DA01B2 0.01%, #E72E76 50%, #FF8400 99.99%)' }} />
            <h1 className="text-[32px] font-bold text-[black] leading-[40px] tracking-[-0.0075em]">
                {title}
            </h1>
        </div>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-[16px] ml-[24px]">
        {items.map((item, index) => (
          <div className="flex flex-row items-center gap-2" key={index}>
            <Image
              src={checkImg} // replace with your actual image path
              alt="Icon"
              width={24}
              height={24}
            />
            <p key={index} className="text-base">{item}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
