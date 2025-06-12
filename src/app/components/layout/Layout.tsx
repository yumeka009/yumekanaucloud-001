import { ReactNode } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full min-w-[345px] max-w-[1920px] mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 