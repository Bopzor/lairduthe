import React from 'react';

import Link from './Link';

type HeaderProps = {
  page: string;
};

const Header: React.FC<HeaderProps> = ({ page }) => (
  <header>

    <div
      style={{
        width: '100%',
        height: 270,
        margin: '30px 0',
        position: 'relative',
        backgroundImage: 'url(/assets/images/tea_box.jpg)',
        backgroundSize: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          backgroundColor: '#00000099',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src="/assets/images/logo.png"
          alt="logo"
          width="90%"
        />
      </div>
    </div>

    <nav
      style={{
        margin: '10px 0 30px 0',
        paddingBottom: 10,
        borderTop: '2px solid #999',
        borderBottom: '2px solid #999',
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: 30,
      }}
    >
      <Link
        href="/presentation.html"
        active={page === 'home'}
        style={{ textDecoration: 'none' }}
        >
        Présentation
      </Link>
      <Link
        href="/carte.html"
        active={page === 'carte'}
        style={{ textDecoration: 'none' }}
        >
        Carte des thés
      </Link>
      <Link
        href="/contact.html"
        active={page === 'contact'}
        style={{ textDecoration: 'none' }}
      >
        Contact
      </Link>
    </nav>

  </header>
);

export default Header;
