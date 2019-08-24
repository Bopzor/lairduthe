import React from 'react';
import { RouteComponentProps } from '@reach/router';

import PageLayout from '../components/PageLayout';

const Home: React.FC<RouteComponentProps> = () => (
  <PageLayout>
    <div>Home</div>
    <a href="/contact.html">Contact</a>
  </PageLayout>
);

export default Home;
