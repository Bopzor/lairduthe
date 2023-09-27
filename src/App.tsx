import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router } from '@reach/router';

import Home from './pages/Home';
import Presentation from './pages/Presentation';
import Carte from './pages/Carte';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router style={{ height: '100%' }}>
      <Home path="/" />
      <Presentation path="/presentation.html" />
      <Carte path="/carte.html" />
      <Contact path="/contact.html" />
    </Router>
  );
};

export default hot(App);
