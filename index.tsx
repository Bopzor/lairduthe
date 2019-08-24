import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDomServer from 'react-dom/server';

import Home from './src/pages/Home';
import Contact from './src/pages/Contact';

const PUBLIC_DIR = path.resolve(__dirname, 'public');
const OUT_DIR = path.resolve(__dirname, 'dist');

fs.mkdirSync(OUT_DIR, { recursive: true });

const pages = [
  { Component: Home, filename: 'index.html' },
  { Component: Contact, filename: 'contact.html' },
];

pages.forEach(({ Component, filename }) => {
  const markup = ReactDomServer.renderToStaticMarkup((
    <html lang="fr">

      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link type="text/css" rel="stylesheet" href="/assets/styles.css" />
        <title>L'air du thé - Salon de thé havrais</title>
      </head>

      <body>
        <Component />
      </body>

    </html>
  ));

  fs.writeFileSync(path.join(OUT_DIR, filename), '<!DOCTYPE html>' + markup);
});

const assets = [
  'robots.txt',
  path.join('assets', 'styles.css'),
  path.join('assets', 'tea_leaf.jpg'),
];

assets.forEach(asset => {
  fs.mkdirSync(path.join(OUT_DIR, path.dirname(asset)), { recursive: true });
  fs.copyFileSync(path.join(PUBLIC_DIR, asset), path.join(OUT_DIR, asset));
});
