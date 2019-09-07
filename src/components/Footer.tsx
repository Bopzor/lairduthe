import React from 'react';

import Link from './Link';

const Footer: React.FC = () => (
  <div style={{ color: '#777', fontSize: 11, margin: '15px 0', textAlign: 'center' }}>
    Made with {'<3'} and <Link href="https://reactjs.org" target="_blank">React</Link> by Bopzor & Nils - 2019
  </div>
);

export default Footer;
