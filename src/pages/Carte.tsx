import React from 'react';
import { RouteComponentProps } from '@reach/router';

import PageLayout from '../components/PageLayout';

// TODO: change the public url
const Carte = (_: RouteComponentProps) => (
  <PageLayout page="carte">
    <a href="/assets/images/carte/carte.pdf" target="_blank">
      <img
        src="/assets/images/carte/carte_p01.png"
        alt="carte-page-1"
        width="100%"
        style={{ marginBottom: 2 }}
      />
      <img
        src="/assets/images/carte/carte_p02.png"
        alt="carte-page-2"
        width="100%"
        style={{ marginBottom: 2 }}
      />
      <img
        src="/assets/images/carte/carte_p03.png"
        alt="carte-page-3"
        width="100%"
        style={{ marginBottom: 2 }}
      />
      <img
        src="/assets/images/carte/carte_p04.png"
        alt="carte-page-4"
        width="100%"
        style={{ marginBottom: 2 }}
      />
      <img
        src="/assets/images/carte/carte_p05.png"
        alt="carte-page-5"
        width="100%"
        style={{ marginBottom: 2 }}
      />
      <img
        src="/assets/images/carte/carte_p06.png"
        alt="carte-page-6"
        width="100%"
        style={{ marginBottom: 2 }}
      />
      <img
        src="/assets/images/carte/carte_p07.png"
        alt="carte-page-7"
        width="100%"
        style={{ marginBottom: 2 }}
      />
      <img
        src="/assets/images/carte/carte_p08.png"
        alt="carte-page-8"
        width="100%"
        style={{ marginBottom: 2 }}
      />
      <img
        src="/assets/images/carte/carte_p09.png"
        alt="carte-page-9"
        width="100%"
        style={{ marginBottom: 2 }}
      />
      <img src="/assets/images/carte/carte_p10.png" alt="carte-page-10" width="100%" />
    </a>
  </PageLayout>
);

export default Carte;
