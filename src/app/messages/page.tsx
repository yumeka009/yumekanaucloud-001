'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from '../components/Message/Sidebar';
import Content from '../components/Message/Content';
import Layout from '../components/layout/Layout';
import InputComponent from '../components/Message/InputComponent';

export default function Message() {
  const pathname = usePathname();

  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-start justify-center px-5 min-h-[calc(100vh-132px)] md:min-h-[calc(100vh-144px)] py-8 md:py-16 w-full">
        {/* Sidebar */}
        <div className="w-full md:w-auto">
          <Sidebar />
        </div>

        {/* Main Area */}
        <div className="w-full md:flex-1 flex flex-col gap-4">
          {/* Show Content only on /messages */}
          {pathname === '/messages' && (
            <div className="hidden md:block">
              <Content />
            </div>
          )}

          {/* Show InputComponent on both /messages and /message-input */}
          {(pathname === '/messages' || pathname === '/message-input') && (
            <div className="hidden md:block">
              <InputComponent />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
