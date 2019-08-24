import React from 'react';
import { RouteComponentProps } from '@reach/router';

import PageLayout from '../components/PageLayout';

// TODO: change the public url
const Carte: React.FC<RouteComponentProps> = () => (
  <PageLayout page="carte">
    <iframe
      src="https://docs.google.com/gview?url=https://public.nils.cx/~vio/carte_2018.pdf&embedded=true"
      style={{ width: '100%', height: 1150 }}
      title="carte de l'air du thé"
    />
  </PageLayout>
);

export default Carte;
