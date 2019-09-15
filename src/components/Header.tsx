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
        marginBottom: '30px',
        backgroundImage: 'url(/assets/images/tea_box.jpg)',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className="headerBackground"
    >
      <div
        style={{
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
        padding: '10px 0',
        borderTop: '2px solid #777',
        borderBottom: '2px solid #777',
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: '2em',
      }}
    >
      <Link
        href="/presentation.html"
        active={page === 'presentation'}
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
