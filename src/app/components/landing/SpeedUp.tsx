import Image, { StaticImageData } from 'next/image';
import React from 'react';
import laptop from '../../../assets/Laptop.png';

// Types
type TabProps = { num: number };
type TextProps = { thickText: string[]; thinText: string };
type PhotoProps = { image: StaticImageData | string };
type FreelancerProps = TextProps & PhotoProps & { num: number };

// Number on Left
const NumberTabLeft = ({ num }: TabProps) => {
  return (
    <div className="absolute -top-[12vw] md:-top-[4vw] left-[11.22vw] md:left-[3.33vw] z-10">
      <div
        className="relative font-bold text-[21.33vw] md:text-[7.22vw] leading-[100%] tracking-[0%] text-transparent bg-clip-text"
        style={{
          fontFamily: "'Noto Sans JP', sans-serif",
          backgroundImage:
            'linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), linear-gradient(89.84deg, #DA01B2 0.21%, #E72E76 50.07%, #FF8400 99.94%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        <span className="absolute inset-0 bg-white z-[-1] rounded-md" />
        {num}
      </div>
    </div>
  );
};

// Number on Right
const NumberTabRight = ({ num }: TabProps) => {
  return (
    <div className="absolute -top-[12vw] md:-top-[4vw] right-[11.22vw] md:right-[3.33vw] z-10">
      <div
        className="relative font-bold text-[21.33vw] md:text-[7.22vw] leading-[100%] tracking-[0%] text-transparent bg-clip-text"
        style={{
          fontFamily: "'Noto Sans JP', sans-serif",
          backgroundImage:
            'linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), linear-gradient(89.84deg, #DA01B2 0.21%, #E72E76 50.07%, #FF8400 99.94%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        <span className="absolute inset-0 bg-white z-[-1] rounded-md" />
        {num}
      </div>
    </div>
  );
};


// Text Block
const Text = ({ thickText, thinText }: TextProps) => {
  return (
    <div className="flex-1 text-left md:w-[33.33vw]">
      <h2 className="text-[6.4vw] md:text-[3.61vw] font-bold leading-snug text-gray-900 mb-2 max-w-[550px]">
        {thickText.map((item, index) => (
          <React.Fragment key={index}>
            {item}
            {index < thickText.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h2>
      <p className="text-[4.26vw] md:text-[1.66vw] font-normal text-[#333333] max-w-[350px]">{thinText}</p>
    </div>
  );
};

// Image Block
const Photo = ({ image }: PhotoProps) => {
  return (
    <div className="flex-1 w-full h-[40.6vw] md:w-[37.57vw] md:h-[21.11vw]">
      <Image
        alt="Freelancer visual"
        src={image}
        className="rounded-md object-cover w-full h-full"
      />
    </div>
  );
};

// Each Feature Block
const FreelancerType = ({ thickText, thinText, image, num }: FreelancerProps) => {
  const isOdd = num % 2 === 1;

  return (
    <div
      className="relative w-full rounded-md md:py-[3.33vw] md:px-[3.33vw] py-[12.8vw] px-[8.53vw] flex flex-col md:flex-row items-center gap-6 md:gap-12 bg-white border"
      style={{ borderColor: 'rgba(255, 132, 0, 1)' }}
    >
      {isOdd ? <NumberTabLeft num={num} /> : <NumberTabRight num={num} />}
      <div className="flex flex-col md:flex-row w-full h-full md:space-x-[5.76vw] space-y-[8.53vw] md:space-y-0 md:items-center justify-between">
        {isOdd ? (
          <>
            <Text thickText={thickText} thinText={thinText} />
            <Photo image={image} />
          </>
        ) : (
          <>
            <Photo image={image} />
            <Text thickText={thickText} thinText={thinText} />
          </>
        )}
      </div>
    </div>
  );
};


// Main Component
const SpeedUp = () => {
  const data: FreelancerProps[] = [
    {
      thickText: ['生き方・価値観に', '共鳴する仕事で', '報酬やスキルのアップ'],
      thinText: '共感・協働しあえる仲間や クライアントとの出会いを。同じ志を持つ人と、次のチャレンジへ',
      image: laptop,
      num: 1,
    },
    {
      thickText: ['独立・起業・転職の', 'ファーストステップとして最適'],
      thinText: '生きがいを感じながら 自分の力で立つ人生をサポート。「世界観」や「志向性」から プロジェクト提案',
      image: laptop,
      num: 2,
    },
    {
      thickText: ['出会いと可能性の', '無限の広がりを', '最新AIがサポート'],
      thinText: '数字や条件を超えた あなただからの仕事をセレクト。想像を超えた機会と チャレンジを',
      image: laptop,
      num: 3,
    },
    {
      thickText: ['あなたにぴったりの', '公開・非公開案件にも', '出会える仕組み'],
      thinText: 'マッチング精度が高いからこそ、わずかな月額プランで 希望に合わせてスカウトが入る',
      image: laptop,
      num: 4,
    },
  ];

  return (
    <section className="relative w-full py-[8.53vw] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 xl:px-[120px] flex flex-col items-center">
        {/* Title */}
        <div className="flex flex-col items-center w-full md:pb-[5.48vw] pb-[17.06vw]">
  <h2
    className="text-[5.4vw] md:text-[4.44vw] font-bold leading-[100%] text-center font-['Noto_Sans_JP'] text-transparent"
    style={{
      backgroundImage:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(89.84deg, #DA01B2 0.21%, #E72E76 50.07%, #FF8400 99.94%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}
  >
    さあ、人生を加速させよう
  </h2>
</div>


        {/* Feature Cards */}
        <div className="w-full h-full flex flex-col md:space-y-[5.76vw] space-y-[18.07vw]">
          {data.map((item) => (
            <FreelancerType
              key={item.num}
              thickText={item.thickText}
              thinText={item.thinText}
              image={item.image}
              num={item.num}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeedUp;
