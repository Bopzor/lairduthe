import React from 'react';
import { RouteComponentProps } from '@reach/router';

import PageLayout from '../components/PageLayout';
import Link from '../components/Link';

const Home: React.FC<RouteComponentProps> = () => (
  <PageLayout page="home">

    <article style={{ padding: '0 15px' }}>

      <header style={{ margin: '30px 0' }}>
        <h1>L'Air du thé</h1>
        <h2 style={{ color: '#333' }}>Maison de thé Havraise - Restaurant</h2>
      </header>

      <img
        src="/assets/images/store_window.jpg"
        alt=""
        style={{
          width: 350,
          height: 'auto',
          float: 'left',
          margin: '15px 25px 15px 0',
          boxShadow: '0 0 10px 4px #00000099',
          border: '1px solid #999',
        }}
      />
      <p>
        Restaurant (service du déjeuner, de midi à quatorze heures) et maison de thé, nous vous accueillons depuis septembre 2009.
      </p>
      <p>
        En cuisine, <em>tout est maison</em>. Nous nous fournissons en poissons au marché du petit port et grâce à l'AMAP Le Panier Cauchois en viandes bio et locales, mais aussi en oeufs, pain, produits laitiers, fruits, légumes (complément maraîcher au potager de la Brière à Octeville). Depuis nos débuts <strong>nous accordons une grande importance à la qualité et à l'origine de nos produits</strong>.
      </p>
      <p>
        Vous pouvez déguster nos <em>thés</em> et autres <em>spécialités</em> sur place avec une <em>pâtisserie maison</em>, mais aussi acheter au poids pour votre consommation domestique, les thés et tisanes de la <Link href="/carte.html">carte</Link>. Nous nous efforçons de vous proposer une sélection de la <em>meilleure qualité et d'une grande diversité</em>, reflet d'un amour de ce produit hautement culturel. Notre carte compte aujourd'hui <em>113 références</em>, dont un nombre croissant issues de l'agriculture biologique (67 actuellement).
      </p>
      <p>
        En outre nous organisons des expositions mensuelles et mettons à votre dispositions des livres et un juke box en libre service gratuit !
      </p>
      <p>
        A bientôt !
      </p>

      <div style={{ clear: 'left' }} />

    </article>

  </PageLayout>
);

export default Home;
