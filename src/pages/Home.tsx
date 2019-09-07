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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '100px 20px 0 20px',
      }}
    >
      <img
        src="/assets/images/logo.png"
        alt="logo"
        width="100%"
        height="auto"
      />
      <h1
        style={{
          color: '#000',
          fontSize: '2.5em',
          textShadow: '2px 1px 4px #fff'
          }}
        >
          Maison de thé Havraise - Restaurant
        </h1>
    </div>

    <div
      style={{
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
          textShadow: '6px 1px 10px #fff',
          color: '#000',
        }}
        className="honeLink"
        >
          Entrée
        </a>
    </div>
  </div>
);

export default Presentation;
