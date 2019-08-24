import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router } from '@reach/router';

import Introduction from './pages/Introduction';
import Home from './pages/Home';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router style={{ height: '100%' }}>
      <Introduction path="/" />
      <Home path="/presentation.html" />
      <Contact path="/contact.html" />
    </Router>
  );
}

export default hot(App);
