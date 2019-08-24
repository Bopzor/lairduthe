import React from 'react';
import { RouteComponentProps } from '@reach/router';

import PageLayout from '../components/PageLayout';

const OPEN_STREET_MAP_URL = 'https://www.openstreetmap.org/export/embed.html?' + [
  'bbox=0.10519623756408693%2C49.490514166900724%2C0.11231482028961183%2C49.49363277212335',
  'amp;layer=mapnik',
  'amp;marker=49.492073494348375%2C0.10875552892684937',
].join('&');

const Contact: React.FC<RouteComponentProps> = () => (
  <PageLayout>

    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '40px 0',
        lineHeight: 1.8,
      }}
    >

      <div style={{ flex: 1 }}>
        <div>
          <div>L'Air du Thé</div>
          <div>20, rue Edouard Larue</div>
          <div>76600 Le Havre</div>
        </div>
        <div style={{ marginTop: 15 }}>
          <div>☎ <a href="tel:+33235211747">02 35 21 17 47</a></div>
          <div>☎ <a href="tel:+33689121965">06 89 12 19 65</a></div>
          <div>✉ <a href="mailto:boristesniere@yahoo.fr">boristesniere@yahoo.fr</a></div>
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <div><a href="www.lairduthe.com">www.lairduthe.com</a></div>
        <div><a href="https://www.facebook.com/LAirDuThe">https://www.facebook.com/LAirDuThe</a></div>
        <div>Du lundi au samedi de 10h30  à 20h sauf jours fériés</div>
      </div>

    </div>

    <iframe
      height={480}
      scrolling="no"
      src={OPEN_STREET_MAP_URL}
      style={{ width: '100%', border: '1px solid #CCC' }}
      title="map"
    />

  </PageLayout>
);

export default Contact;
