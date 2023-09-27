import { Router } from '@reach/router';
import React from 'react';
import { hot } from 'react-hot-loader/root';

import CarteRestaurant from './pages/CarteRestaurant';
import CarteTakeAway from './pages/CarteTakeAway';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Presentation from './pages/Presentation';

const App = () => {
  return (
    <Router style={{ height: '100%' }}>
      <Home path="/" />
      <Presentation path="/presentation.html" />
      <CarteTakeAway path="/carte-au-poids.html" />
      <CarteRestaurant path="/carte-sur-place.html" />
      <Contact path="/contact.html" />
    </Router>
  );
};

export default hot(App);
