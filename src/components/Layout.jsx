import React from 'react';
import NewHeader from './sections/NewHeader';
import Contact from './sections/Contact';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-cream">
      <NewHeader />
      <main className="pt-20 md:pt-24">
        {children}
      </main>
      <Contact />
    </div>
  );
};

export default Layout;

