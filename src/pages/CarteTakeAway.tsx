import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Carte from '../components/Carte';

const CarteTakeAway = (_: RouteComponentProps) => (
  <Carte
    page="carte-au-poids"
    pdf="/assets/images/carte/carte-au-poids.pdf"
    images={[
      '/assets/images/carte/carte-au-poids_p01.jpg',
      '/assets/images/carte/carte-au-poids_p02.jpg',
      '/assets/images/carte/carte-au-poids_p03.jpg',
      '/assets/images/carte/carte-au-poids_p04.jpg',
      '/assets/images/carte/carte-au-poids_p05.jpg',
      '/assets/images/carte/carte-au-poids_p06.jpg',
    ]}
  />
);

export default CarteTakeAway;
