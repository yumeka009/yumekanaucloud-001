"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Settings, ChevronRight } from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
}

interface SettingsSidebarProps {
  activeItem?: string | null;
  onItemClick?: (id: string) => void;
}

const SettingsSidebar: React.FC<SettingsSidebarProps> = ({ 
  activeItem: controlledActiveItem = null, 
  onItemClick 
}) => {
  // Local state for uncontrolled behavior
  const [activeItem, setActiveItem] = useState<string | null>(controlledActiveItem);

  const handleClick = (id: string) => {
    setActiveItem(id); // update local state
    onItemClick?.(id); // notify parent if callback provided
  };

  const menuItems: MenuItem[] = [
    { id: 'email', label: 'メールアドレスの設定・変更' },
    { id: 'password', label: 'パスワードの設定・変更' },
    { id: 'privacy', label: 'プライバシーの設定・変更' },
    { id: 'plan', label: 'ご契約のプラン・状況' },
  ];

  return (
    <div className="w-full max-w-[387px]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <Settings className="w-6 h-6 text-slate-700" />
        <h2 className="text-2xl font-bold text-slate-700 tracking-tight">設定</h2>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col border-t border-gray-200">
        {menuItems.map((item) => {
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              className={cn(
                'flex justify-between items-center py-3 px-4 border-b border-gray-200 w-full text-left transition-colors duration-150',
                isActive ? 'bg-[#ffd4e5] text-gray-900' : 'bg-white text-gray-700'
              )}
              onClick={() => handleClick(item.id)}
            >
              <span className="text-base font-normal">{item.label}</span>
              <ChevronRight className="w-4 h-4 text-rose-500" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsSidebar;
