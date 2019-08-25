import React from 'react';

import Header from './Header';
import Footer from './Footer';

type PageLayoutProps = {
  page: string;
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ page, children }) => (
  <div style={{ height: '100%', position: 'relative' }}>

    <div
      style={{
        height: '100%',
        backgroundImage: 'url(/assets/images/tea_leaf.jpg)',
        opacity: 0.70,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    />

    <div style={{ position: 'absolute', top: 0, width: '100%', height: '100%', overflow: 'auto' }}>
      <div style={{ width: '100%', maxWidth: 900, margin: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
        <Header page={page} />
        { children }
      </div>
      <Footer />
    </div>

  </div>
);

export default PageLayout;
