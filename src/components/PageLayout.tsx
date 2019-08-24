import React from 'react';
import Header from './Header';

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <div style={{ height: '100%', position: 'relative' }}>

    <div
      style={{
        height: '100%',
        backgroundImage: 'url(/assets/tea_leaf.jpg)',
        opacity: 0.30,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    />

    <div style={{ position: 'absolute', top: 0, width: '100%', height: '100%', overflow: 'auto' }}>
      <div style={{ width: '100%', maxWidth: 900, margin: 'auto' }}>
        <Header />
        { children }
      </div>
    </div>

  </div>
);

export default PageLayout;
