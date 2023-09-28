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
      }}
    >
      <Link
        href="/carte-au-poids.html"
        active={page === 'carte-au-poids'}
        className="carte-nav-link"
        style={{
          textDecoration: 'none',
          backgroundColor: page === 'carte-au-poids' ? 'rgba(255, 255, 255, 0.6)' : 'none',
          padding: 16,
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
          backgroundColor: page === 'carte-sur-place' ? 'rgba(255, 255, 255, 0.6)' : 'none',
          padding: 16,
          fontSize: '1.5rem',
        }}
      >
        Sur place
      </Link>
    </nav>

    <object data={`${pdf}#toolbar=1`} style={{ width: '100%', minHeight: '1100px' }}>
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
