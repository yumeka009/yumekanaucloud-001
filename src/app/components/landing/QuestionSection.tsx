import React, { useState, useRef } from 'react';

interface QuestionProps {
  question: string;
  answer: string;
}

const QuestionItem: React.FC<QuestionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-[#E5E5E5]">
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start flex-1">
          <span className="text-[#E72E76] mr-4 text-[16px] md:text-[20px] xl:text-[24px]">Q.</span>
          <h2 className="text-[#333333] text-[16px] md:text-[20px] xl:text-[24px] leading-[24px] md:leading-[30px] xl:leading-[36px] font-['Noto_Sans_JP'] font-bold">
            {question}
          </h2>
        </div>
        <span className="text-[#E72E76] text-2xl ml-4 transition-all duration-300 flex-shrink-0">
          {isOpen ? '－' : '＋'}
        </span>
      </button>
      <div 
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="pb-4 pl-8">
          <div className="flex items-start">
            <span className="text-[#E72E76] mr-4 text-[16px] md:text-[20px] xl:text-[24px]">A.</span>
            <span className="text-[#333333] text-[16px] md:text-[20px] xl:text-[24px] leading-[24px] md:leading-[30px] xl:leading-[36px] font-['Noto_Sans_JP']">
              {answer}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuestionSection = () => {
  const questions = [
    {
      question: "無料プランではどこまでも用できますか？",
      answer: "限られた条件へのエントリー候補がでますが、「魂の仕事」との出会いを広げるには、有料プランへの移行をお勧めします。"
    },
    {
      question: "有料プランのメリットは？",
      answer: "求人掲載時への応募、AIによる価値観ベースのマッチング、スカウト通知など、あなたらしい自立の道を広げる機能が充実しています。"
    },
    {
      question: "このサイトはどんな人に向いていますか？",
      answer: "自分の軸をもって、好きや得意を活かしながら、自由で幸せな働き方をしたい方、ひとつの職業にしばられず、複数の展開を見つけたい方にピッタリです。"
    },
    {
      question: "「魂の仕事」とは何ですか？",
      answer: "内側のある、ふれる価値を持つ仕事。自分の価値観・得意・喜びが重なる「本当にやりたいこと」であり、誰かにとって大切なことです。"
    },
    {
      question: "仕事の契約や報酬はどう決まりますか？",
      answer: "マッチング後は、クライアントと直接契約交渉を行っていただきます（報酬額も含め条件は双方、実務条件などを）。当サイトの運営は介入しません。"
    },
    {
      question: "AIレコメンドは何が手でいるの？",
      answer: "従来のスキルマッチではなく、あなたの「生き方」「働き方」「幸せの軸」を学習し、あなたが輝ける場を提案しコメントします。"
    },
    {
      question: "複数の案件を同時にこなせますか？",
      answer: "はい。スケジュール調整が可能であれば、複数案件として働くことを推奨しています。自分の軸に合った活動が可能です。"
    },
    {
      question: "実績が少なくても大丈夫ですか？",
      answer: "はい。「これから挑戦したい（現の仕事をしたい）」という思いを尊重し、熱意や適性値に共感する仕事や仲間と見つけられる場です。"
    },
    {
      question: "地域で利用できますか？市町村に知らせたくありません",
      answer: "プロフィールや必須情報は非公開できますので、周りに知られずに活動することが可能です。"
    },
    {
      question: "一度経験した案件に再応募できますか？",
      answer: "案件によりますが、クライアントが再エントリーを許可していれば可能です。"
    }
  ];

  return (
    <section className="w-full bg-white py-5">
      <div className="w-full max-w-[1440px] mx-auto px-4 xl:px-[120px]">
        <h2 className="text-center mb-12">
          <span 
            className="text-[40px] md:text-[64px] leading-[77px] font-bold font-['Noto_Sans_JP']"
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), 
                          linear-gradient(89.84deg, #DA01B2 0.21%, #E72E76 50.07%, #FF8400 99.94%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0px 0px 40px rgba(255, 255, 255, 0.5)"
            }}
          >
            よくあるご質問
          </span>
        </h2>
        <p className="text-center text-[#333333] text-[16px] md:text-[24px] xl:text-[32px] leading-[24px] md:leading-[36px] xl:leading-[48px] mb-12 font-['Noto_Sans_JP']">
          あなたの「魂の仕事」と出会うためのよくある質問
        </p>
        <div className="space-y-2">
          {questions.map((q, index) => (
            <QuestionItem
              key={index}
              question={q.question}
              answer={q.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionSection; 