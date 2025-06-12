// app/layout.tsx or app/layout.js
import './styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ゆめかなうクラウド',
  description: 'ゆめかなうクラウド - ログインページ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
