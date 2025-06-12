"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import roundImg from "../../../assets/rounded-job.png";
import { useState } from "react";

const comments = [
  {
    id: 1,
    type: "positive",
    date: "2025/05/27",
    content:
      "素晴らしい例文をありがとうございます。背景やプロセスまで言語化していただき、どのように書けば良いかイメージが明確になりました。大切に使わせていただきます。",
  },
  {
    id: 2,
    type: "positive",
    date: "2025/05/07",
    content:
      "まさに求めていた人材です！自分では思いつかない視点ばかりで、大変勉強になりました。ご提案いただいた文案、場面に合わせて活用させていただきます。",
  },
  {
    id: 3,
    type: "negative",
    date: "2025/05/20",
    content: "少し期待と違いました。もっと具体的な例が欲しかったです。",
  },
];

export default function EvaluationCommentsList() {
  const [selectedTab, setSelectedTab] = useState("positive");

  const filteredComments = comments.filter(
    (comment) => comment.type === selectedTab
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">評価一覧</h2>

      {/* Custom Tab Buttons */}
      <div className="w-full mb-6 grid grid-cols-2 overflow-hidden shadow-sm rounded-md">
        <button
          onClick={() => setSelectedTab("positive")}
          className={`py-2 text-center font-medium transition-colors duration-200 ${
            selectedTab === "positive"
              ? "bg-[rgba(231,46,118,1)] text-white"
              : "bg-[rgba(255,212,229,1)] text-gray-800"
          }`}
        >
          良かったコメント
        </button>
        <button
          onClick={() => setSelectedTab("negative")}
          className={`py-2 text-center font-medium transition-colors duration-200 ${
            selectedTab === "negative"
              ? "bg-[rgba(231,46,118,1)] text-white"
              : "bg-[rgba(255,212,229,1)] text-gray-800"
          }`}
        >
          残念だったコメント
        </button>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {filteredComments.length > 0 ? (
          filteredComments.map((comment) => (
            <Card key={comment.id} className="flex items-start space-x-4 p-4">
              <Image
                src={roundImg}
                alt="User Avatar"
                width={50}
                height={50}
                className="rounded-full w-[50px] h-[50px] shrink-0"
              />
              <CardContent className="p-0">
                <p className="text-sm text-gray-800 whitespace-pre-line">
                  {comment.content}
                </p>
                {comment.date && (
                  <p className="text-xs text-gray-500 mt-2">{comment.date}</p>
                )}
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500">コメントがありません。</p>
        )}
      </div>
    </div>
  );
}
