import React from 'react';
import Link from './Link';

import PageLayout from './PageLayout';

type CarteProps = {
  page: 'carte-au-poids' | 'carte-sur-place';
  pdf: string;
  images: string[];
};

const Carte = ({ pdf, images, page }: CarteProps) => (
  <PageLayout page={page}>
    <nav
      className="carte-nav"
      style={{
        fontSize: '1.875rem',
        marginBottom: 16,
        paddingLeft: 24,
        paddingBottom: 10,
        display: 'flex',
        gap: 24,
      }}
    >
      <Link
        href="/carte-au-poids.html"
        active={page === 'carte-au-poids'}
        className="carte-nav-link"
        style={{
          textDecoration: 'none',
          boxShadow: page === 'carte-au-poids' ? 'inset 0 -4px 0px rgba(0, 0, 0, 0.4)' : 'none',
          paddingBottom: 10,
          fontSize: '1.5rem',
        }}
      >
        Vente au poids
      </Link>
      <Link
        href="/carte-sur-place.html"
        active={page === 'carte-sur-place'}
        className="carte-nav-link"
        style={{
          textDecoration: 'none',
          boxShadow: page === 'carte-sur-place' ? 'inset 0 -4px 0px rgba(0, 0, 0, 0.4)' : 'none',
          paddingBottom: 10,
          fontSize: '1.5rem',
        }}
      >
        Sur place
      </Link>
    </nav>

    <object data={`${pdf}#toolbar=1`} style={{ width: '100%', flex: 1 }}>
      <a href={pdf} rel="noreferrer" target="_blank">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`carte-page-${index + 1}`}
            width="100%"
            style={{ marginBottom: 2 }}
          />
        ))}
      </a>
    </object>
  </PageLayout>
);

export default Carte;
