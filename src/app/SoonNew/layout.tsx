// app/SoonNew/layout.tsx
import React from 'react';
import './styles/level.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-level-1 min-h-screen flex flex-col">
      <main className="flex-1">{children}</main> {/* Main content area */}
    </div>
  );
};

export default Layout;
