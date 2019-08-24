import React from 'react';
import Link from './Link';

const Header: React.FC = () => (
  <header>
    <div
      style={{
        width: '100%',
        height: 270,
        margin: '30px 0',
        position: 'relative',
        background: 'no-repeat center / 100% url(/assets/tea_box.jpg)',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src="/assets/logo.png"
        alt="logo"
        width="90%"
      />
    </div>

    <nav
      style={{
        marginTop: 10,
        borderTop: '2px solid #999',
        borderBottom: '2px solid #999',
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: 30,
      }}
    >
      <Link href="/presentation.html" style={{ marginBottom: 10 }}>Présentation</Link>
      <Link href="/carte.html" style={{ marginBottom: 10 }}>Carte des thés</Link>
      <Link href="/contact.html" style={{ marginBottom: 10 }}>Contact</Link>
    </nav>

  </header>
);

export default Header;
