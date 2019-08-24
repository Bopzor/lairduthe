import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router } from '@reach/router';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}

export default hot(App);
