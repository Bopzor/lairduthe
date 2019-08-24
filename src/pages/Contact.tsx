import React from 'react';
import { RouteComponentProps } from '@reach/router';

import PageLayout from '../components/PageLayout';
import Link from '../components/Link';

const OPEN_STREET_MAP_URL = 'https://www.openstreetmap.org/export/embed.html?' + [
  'bbox=0.10519623756408693%2C49.490514166900724%2C0.11231482028961183%2C49.49363277212335',
  'amp;layer=mapnik',
  'amp;marker=49.492073494348375%2C0.10875552892684937',
].join('&');

const Contact: React.FC<RouteComponentProps> = () => (
  <PageLayout page="contact">

    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '40px 0',
        lineHeight: 1.6,
        fontSize: '1.3em',
      }}
    >

      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 'bold' }}>
          <div>L'Air du Thé</div>
          <div>20, rue Edouard Larue</div>
          <div>76600 Le Havre</div>
        </div>
        <div style={{ marginTop: 15 }}>
          <div>☎ <Link href="tel:+33235211747">02 35 21 17 47</Link></div>
          <div>☎ <Link href="tel:+33689121965">06 89 12 19 65</Link></div>
          <div>✉ <Link href="mailto:boristesniere@yahoo.fr">boristesniere@yahoo.fr</Link></div>
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <div>
          <Link
            href="www.lairduthe.com"
            style={{ textDecoration: 'underline' }}
            target="_blank"
            >
            www.lairduthe.com
          </Link>
        </div>
        <div>
          <Link
            href="https://www.facebook.com/LAirDuThe"
            style={{ textDecoration: 'underline' }}
            target="_blank"
          >
            https://www.facebook.com/LAirDuThe
          </Link>
        </div>
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
