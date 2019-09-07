import React from 'react';

import Link from './Link';

const Footer: React.FC = () => (
  <div style={{ color: '#777', fontSize: 11, margin: '15px 0', textAlign: 'center', fontFamily: 'sans-serif' }}>
    Made with {'<3'} and <Link href="https://reactjs.org" rel="noreferrer" target="_blank">React</Link> by <Link href="https://github.com/bopzor/lairduthe" rel="noreferrer" target="_blank">Bopzor & Nils</Link> - 2019
  </div>
);

export default Footer;
