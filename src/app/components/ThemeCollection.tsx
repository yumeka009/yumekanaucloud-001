import Image from "next/image";
import cardImg from '../../assets/featured-content.png';


export function ThemeCollections() {
  const collections = [
    {
      title: "テーマ特集",
      items: [
        {
          id: "1",
          category: "スタートアップ・最新技術",
          title: "AI開発プロジェクト参画！\n高単価案件の獲得方法",
          image: cardImg,
        },
        {
          id: "2",
          category: "はじめての複業（副業）・未経験からOK",
          title: "ブロックチェーン開発\n未経験から始めるキャリア",
          image: cardImg,
        },
        {
          id: "3",
          category: "最新技術・新規事業",
          title: "Web3.0時代の\nフリーランス働き方",
          image: cardImg,
        },
        {
            id: "4",
            category: "スタートアップ・最新技術",
            title: "Web3.0時代の\nフリーランス働き方",
            image: cardImg,
          },
          {
            id: "5",
            category: "はじめての複業（副業）・未経験からOK",
            title: "Web3.0時代の\nフリーランス働き方",
            image: cardImg,
          },
          {
            id: "6",
            category: "最新技術・新規事業",
            title: "Web3.0時代の\nフリーランス働き方",
            image: cardImg,
          },
          {
            id: "7",
            category: "スタートアップ・最新技術",
            title: "Web3.0時代の\nフリーランス働き方",
            image: cardImg,
          },
          {
            id: "8",
            category: "はじめての複業（副業）・未経験からOK",
            title: "Web3.0時代の\nフリーランス働き方",
            image: cardImg,
          },
          {
            id: "9",
            category: "最新技術・新規事業",
            title: "Web3.0時代の\nフリーランス働き方",
            image: cardImg,
          },
      ]
    },
    {
      title: "おすすめのお仕事",
      items: [
        {
          id: "1",
          category: "これからの成功＝成幸の考え方",
          title: "副業デビュー完全ガイド\n最初の一歩の踏み出し方",
          image: cardImg,
        },
        {
          id: "2",
          category: "成功（成幸）に導く　人生設計方法",
          title: "在宅ワークで\n月5万円からの始め方",
          image: cardImg,
        },
        {
          id: "3",
          category: "自己成長と自己理解の方法",
          title: "未経験OK！\nデザインスキルゼロから\n案件獲得方法",
          image: cardImg,
        },
        {
            id: "4",
            category: "スタートアップ・最新技術",
            title: "未経験OK！\nデザインスキルゼロから\n案件獲得方法",
            image: cardImg,
          },
          {
            id: "5",
            category: "はじめての複業（副業）・未経験からOK",
            title: "未経験OK！\nデザインスキルゼロから\n案件獲得方法",
            image: cardImg,
          },
          {
            id: "6",
            category: "最新技術・新規事業",
            title: "未経験OK！\nデザインスキルゼロから\n案件獲得方法",
            image: cardImg,
          },
          {
            id: "7",
            category: "スタートアップ・最新技術",
            title: "未経験OK！\nデザインスキルゼロから\n案件獲得方法",
            image: cardImg,
          },
          {
            id: "8",
            category: "はじめての複業（副業）・未経験からOK",
            title: "未経験OK！\nデザインスキルゼロから\n案件獲得方法",
            image: cardImg,
          },
          {
            id: "9",
            category: "最新技術・新規事業",
            title: "未経験OK！\nデザインスキルゼロから\n案件獲得方法",
            image: cardImg,
          },
      ]
    }
  ];

  return (
    <div className="w-full bg-[#FFFBF6] py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        {collections.map((section, index) => (
          <section key={index} className="mb-12">
            {(
                <h1 className="text-2xl md:text-[32px] font-bold text-center mb-6
                                bg-gradient-to-r from-[#DA01B2] via-[#E72E76] to-[#FF8400]
                                text-transparent bg-clip-text
                                after:bg-black/20 after:mix-blend-multiply">
                    {section.title}
                </h1>
                )}

            {/* Updated grid layout - 1 column on mobile, 3 columns on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {section.items.slice(0, 9).map((item, itemIndex) => (
                <div key={`${index}-${itemIndex}`} className="w-full">
                  {index === 0 ? (
                    // Simple image cards for first section
                    <div className="flex flex-col gap-2">
                      <h3 className="text-base md:text-[18px] font-bold text-[#333333]">
                        {item.category}
                      </h3>
                      <div className="relative w-full aspect-[384/120]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    // Detailed cards for other sections
                    <div className="flex flex-col gap-2">
                      <h3 className="text-base md:text-[18px] font-bold text-[#333333]">
                        {item.category}
                      </h3>
                      <div className="relative w-full aspect-[384/120]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}