// app/SoonNew/layout.tsx
import React from 'react';
import SoonNavbar from './components/SoonNavbar';
import SoonFooter from './components/SoonFooter';
import './styles/level.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-level-1 min-h-screen flex flex-col">
      <SoonNavbar /> {/* Navbar is at the top */}
      <main className="flex-1">{children}</main> {/* Main content area */}
      <SoonFooter /> {/* Footer is at the bottom */}
    </div>
  );
};

export default Layout;
