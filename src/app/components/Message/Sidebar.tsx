"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

const options = ["すべて", "依頼中", "完了"];

export default function LeftSidebar() {
  const [selected, setSelected] = useState("すべて");

  return (
    <aside className="w-[350px] max-w-[350px] bg-white border-r border-gray-200 p-4 space-y-4">
      {/* Filter Buttons */}
      <div className="flex justify-between items-center bg-[#FFF0F5] rounded-[6px] px-4 py-2 gap-2">
        {options.map((option) => {
          const isSelected = selected === option;
          return (
            <button
              key={option}
              onClick={() => setSelected(option)}
              className={cn(
                "text-sm font-normal px-3 py-1 rounded-[6px] transition-all",
                isSelected
                  ? "bg-[#E72E76] text-white"
                  : "bg-transparent text-[#333333]"
              )}
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Project Cards */}
      {[1, 2].map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 p-4 w-full bg-white rounded-[8px] border border-gray-100 shadow-sm"
        >
          <div className="w-[50px] h-[50px] rounded-full bg-[#999]" />
          <div className="flex flex-col gap-[6px] text-left">
            <div className="text-[16px] font-bold text-[#333] leading-[20px] tracking-[-0.0075em]">
              〇〇プロジェクト
            </div>
            <div className="text-[16px] font-bold text-[#333] leading-[20px] tracking-[-0.0075em]">
              氏名
            </div>
            <div className="text-[12px] font-normal text-[#5C5C5C] leading-[16px]">
              2025/xx/xx
            </div>
          </div>
        </div>
      ))}
    </aside>
  );
}
