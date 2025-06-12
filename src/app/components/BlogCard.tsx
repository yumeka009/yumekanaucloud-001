import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StaticImageData } from "next/image";
import Sakura from "@/assets/sakura.png"; // adjust path if needed

interface BlogCard {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  category: string;
}

const mockBlogCards: BlogCard[] = [
  {
    id: 1,
    title: "ブログタイトル",
    description: "テストディスクリプションをここに入れます。繰り返しのサンプルです。",
    image: Sakura,
    category: "カテゴリー",
  },
  {
    id: 2,
    title: "ブログタイトル",
    description: "テストディスクリプションをここに入れます。繰り返しのサンプルです。",
    image: Sakura,
    category: "カテゴリー",
  },
  {
    id: 3,
    title: "ブログタイトル",
    description: "テストディスクリプションをここに入れます。繰り返しのサンプルです。",
    image: Sakura,
    category: "カテゴリー",
  },
  {
    id: 4,
    title: "ブログタイトル",
    description: "テストディスクリプションをここに入れます。繰り返しのサンプルです。",
    image: Sakura,
    category: "カテゴリー",
  },
  {
    id: 5,
    title: "ブログタイトル",
    description: "テストディスクリプションをここに入れます。繰り返しのサンプルです。",
    image: Sakura,
    category: "カテゴリー",
  },
  {
    id: 6,
    title: "ブログタイトル",
    description: "テストディスクリプションをここに入れます。繰り返しのサンプルです。",
    image: Sakura,
    category: "カテゴリー",
  },
  {
    id: 7,
    title: "ブログタイトル",
    description: "テストディスクリプションをここに入れます。繰り返しのサンプルです。",
    image: Sakura,
    category: "カテゴリー",
  },
  {
    id: 8,
    title: "ブログタイトル",
    description: "テストディスクリプションをここに入れます。繰り返しのサンプルです。",
    image: Sakura,
    category: "カテゴリー",
  },
];

const BlogCardGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-['Noto_Sans_JP']">
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        <Badge className="rounded-full px-4 py-1 bg-gray-200 text-gray-700">
          #スタートアップ企業
        </Badge>
        {Array(9)
          .fill("#タグ")
          .map((tag, idx) => (
            <Badge
              key={idx}
              className="rounded-full px-4 py-1 bg-gray-200 text-gray-700"
            >
              {tag}
            </Badge>
          ))}
      </div>

      <h2 className="text-center text-2xl font-bold text-pink-600 mb-6">
        人気ランキング
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockBlogCards.map((card) => (
          <div
            key={card.id}
            className="bg-white  shadow overflow-hidden flex flex-col"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={500}
              height={300}
              className="w-full object-cover h-[180px]"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-5">
                {card.description}
              </p>
              <div className="flex flex-col sm:items-start mt-4 gap-2 w-[35%]">
                <Badge className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs w-fit whitespace-nowrap">
                  {card.category}
                </Badge>
                <Button
                  variant="link"
                  className="text-sm text-blue-600 p-0 h-auto"
                >
                  続きを読む →
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCardGrid;
