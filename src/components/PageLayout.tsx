import React from 'react';

import Header from './Header';
import Footer from './Footer';

type PageLayoutProps = {
  page: string;
  children: React.ReactNode;
};

const images: { [key: string]: string } = {
  presentation: 'url(/assets/images/tea_cup.jpg)',
  'carte-au-poids': 'url(/assets/images/tea_leaf2.jpg)',
  'carte-sur-place': 'url(/assets/images/tea_leaf2.jpg)',
  contact: 'url(/assets/images/flower.jpg)',
};

const PageLayout = ({ page, children }: PageLayoutProps) => (
  <div style={{ height: '100%', position: 'relative' }}>
    <div
      style={{
        height: '100%',
        backgroundImage: images[page],
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    />

    <div
      style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 900,
          margin: 'auto',
          backgroundColor: `rgba(255, 255, 255, ${page.includes('carte') ? '0.6' : '0.4'})`,
        }}
        className="pageLayoutContentWrapper"
      >
        <Header page={page} />
        {children}
      </div>
      <Footer />
    </div>
  </div>
);

export default PageLayout;
