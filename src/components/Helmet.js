import React from 'react';
import Helmet from 'react-helmet';

const TITLE = 'Biserica Cluj - Biserica Creștină după Evanghelie';

const TheHelmet = ({ title, description } = {}) => (
  <Helmet>
    <html lang="ro-RO" />
    <title>{title ? title + ' - ' + TITLE : TITLE}</title>
    <meta name="theme-color" content="#00BCD4" />

    <meta
      name="google-site-verification"
      content="IWAaY8Sro5jqdm-xp7TsoXt3Lvklx4w7536lsO21Jdw"
    />
    <meta
      name="description"
      content={
        description ||
        'Vino să îl cunoști pe Dumnezeu alături de noi! Biserica Cluj'
      }
    />
    <meta
      name="keywords"
      content="cluj, biserica, creștină, evanghelie, Dumnezeu, Isus, cluj-napoca"
    />
  </Helmet>
);

export default TheHelmet;
