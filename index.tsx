import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDomServer from 'react-dom/server';

import Home from './src/pages/Home';
import Contact from './src/pages/Contact';

const outdir = path.resolve(__dirname, 'dist');
fs.mkdirSync(outdir, { recursive: true });

const pages = [
  { component: <Home />, filename: 'index.html' },
  { component: <Contact />, filename: 'contact.html' },
];

pages.forEach((page) => {
  const markup = ReactDomServer.renderToStaticMarkup(page.component);
  fs.writeFileSync(path.join(outdir, page.filename), markup);
});
