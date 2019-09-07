import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDomServer from 'react-dom/server';

import Home from './src/pages/Home';
import Presentation from './src/pages/Presentation';
import Carte from './src/pages/Carte';
import Contact from './src/pages/Contact';

const PUBLIC_DIR = path.resolve(__dirname, 'public');
const OUT_DIR = path.resolve(__dirname, 'dist');

fs.mkdirSync(OUT_DIR, { recursive: true });

const pages = [
  { Component: Home, filename: 'index.html' },
  { Component: Presentation, filename: 'presentation.html' },
  { Component: Carte, filename: 'carte.html' },
  { Component: Contact, filename: 'contact.html' },
];

pages.forEach(({ Component, filename }) => {
  const markup = ReactDomServer.renderToStaticMarkup((
    <html lang="fr">

      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="Site web L'Air du Thé Le Havre" />
        <meta
          name="keywords"
          content="thé, tea, thé blanc, le havre, thé noir, thé vert, thé bio, salon de thé, restaurant"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/favicon.png" />
        <link type="text/css" rel="stylesheet" href="/assets/css/reset.css" />
        <link type="text/css" rel="stylesheet" href="/assets/css/styles.css" />
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
  path.join('assets', 'css', 'reset.css'),
  path.join('assets', 'css', 'styles.css'),
  path.join('assets', 'images', 'tea_leaf2.jpg'),
  path.join('assets', 'images', 'flower.jpg'),
  path.join('assets', 'images', 'tea_cup.jpg'),
  path.join('assets', 'images', 'tea_box.jpg'),
  path.join('assets', 'images', 'store.jpg'),
  path.join('assets', 'images', 'logo.png'),
  path.join('assets', 'images', 'favicon.png'),
  path.join('assets', 'images', 'carte', 'carte_2019.pdf'),
  path.join('assets', 'images', 'carte', 'carte_2019_p01.png'),
  path.join('assets', 'images', 'carte', 'carte_2019_p02.png'),
  path.join('assets', 'images', 'carte', 'carte_2019_p03.png'),
  path.join('assets', 'images', 'carte', 'carte_2019_p04.png'),
  path.join('assets', 'images', 'carte', 'carte_2019_p05.png'),
  path.join('assets', 'images', 'carte', 'carte_2019_p06.png'),
  path.join('assets', 'images', 'carte', 'carte_2019_p07.png'),
  path.join('assets', 'images', 'carte', 'carte_2019_p08.png'),
  path.join('assets', 'images', 'carte', 'carte_2019_p09.png'),
  path.join('assets', 'images', 'carte', 'carte_2019_p10.png'),
  path.join('assets', 'fonts', 'jose_fernandez', 'JoseFernandez.ttf'),
];

assets.forEach(asset => {
  fs.mkdirSync(path.join(OUT_DIR, path.dirname(asset)), { recursive: true });
  fs.copyFileSync(path.join(PUBLIC_DIR, asset), path.join(OUT_DIR, asset));
});
