import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router } from '@reach/router';

import Home from './pages/Home';
import Carte from './pages/Carte';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router style={{ height: '100%' }}>
      <Home path="/" />
      <Carte path="/carte.html" />
      <Contact path="/contact.html" />
    </Router>
  );
}

export default hot(App);
