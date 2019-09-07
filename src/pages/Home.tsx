import React from 'react';
import { RouteComponentProps } from '@reach/router';

const Presentation: React.FC<RouteComponentProps> = () => (
  <div
    style={{
      height: '100%',
      backgroundImage: 'url(/assets/images/store.jpg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        width: '100%',
        height: '320px',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className="homeBackgroundHeader"
    >

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '0 20px',
        }}
      >
        <img
          src="/assets/images/logo.png"
          alt="logo"
          width="100%"
          height="auto"
        />
        <h1 style={{ color: '#ddd', fontSize: '2.5em' }}>Maison de thé Havraise - Restaurant</h1>
      </div>

    </div>

    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        boxSizing: 'border-box',
        marginTop: '10%',
        padding: '10px 20px',
        borderRadius: 10,
        textAlign: 'center',
      }}
      className="homeLinkWrapper"
    >
      <a
        href="/presentation.html"
        style={{
          fontSize: '5em',
          fontFamily: 'Jose Fernandez',
          textDecoration: 'none',
          color: '#ddd',
        }}
        className="honeLink"
        >
          Entrée
        </a>
    </div>
  </div>
);

export default Presentation;
