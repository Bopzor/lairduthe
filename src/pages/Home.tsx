import React from 'react';
import { RouteComponentProps } from '@reach/router';

const Home: React.FC<RouteComponentProps> = () => (
  <>
    <div>Home</div>
    <a href="/contact.html">Contact</a>
  </>
);

export default Home;
