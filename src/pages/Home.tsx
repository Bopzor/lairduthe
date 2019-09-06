import React from 'react';
import { RouteComponentProps } from '@reach/router';

import PageLayout from '../components/PageLayout';
import Link from '../components/Link';

const Home: React.FC<RouteComponentProps> = () => (
  <PageLayout page="home">

    <article style={{ padding: '0 15px' }}>

      <header style={{ margin: '30px 0' }}>
        <h1>L'Air du Thé</h1>
        <h2 style={{ color: '#333' }}>Maison de thé Havraise - Restaurant</h2>
      </header>

      <p>
        Restaurant (service du déjeuner, de midi à quatorze heures) et maison de thé, nous vous accueillons depuis septembre 2009.
      </p>
      <p>
        En cuisine, <strong>tout est maison</strong>. Nous nous fournissons en poissons au marché du petit port et grâce à l'AMAP Le Panier Cauchois en viandes bio et locales, mais aussi en oeufs, pain, produits laitiers, fruits, légumes (complément maraîcher au potager de la Brière à Octeville). Depuis nos débuts <strong>nous accordons une grande importance à la qualité et à l'origine de nos produits</strong>.
      </p>
      <p>
        Vous pouvez déguster nos thés et autres spécialités sur place avec une pâtisserie maison, mais aussi acheter au poids pour votre consommation domestique, les thés et tisanes de la <Link href="/carte.html">carte</Link>. <strong>Nous nous efforçons de vous proposer une sélection de la meilleure qualité et d'une grande diversité, reflet d'un amour de ce produit hautement culturel. Notre carte compte aujourd'hui 113 références, dont un nombre croissant issues de l'agriculture biologique (67 actuellement)</strong>.
      </p>
      <p>
        En outre nous organisons des expositions mensuelles et mettons à votre dispositions des livres et un juke box en libre service gratuit !
      </p>
      <p>
        A bientôt !
      </p>

    </article>

  </PageLayout>
);

export default Home;
