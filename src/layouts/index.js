import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import 'bootstrap/scss/bootstrap.scss';

// import 'typeface-roboto';

import Text from '@app/Text';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import './index.scss';

import {
  primaryColor,
  primaryColorText,
  primaryColorLight,
  primaryColorDark
} from '@app/colors';

import boxShadow from '@app/boxShadow';

import Menu from '../components/Menu';
import { css } from 'glamor';

const TemplateWrapper = ({ children }) => (
  <div
    css={{
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'stretch'
    }}
  >
    <Helmet>
      <html lang="ro-RO" />
      <title>Biserica Cluj - Biserica Creștină după Evanghelie</title>
      <meta
        name="google-site-verification"
        content="IWAaY8Sro5jqdm-xp7TsoXt3Lvklx4w7536lsO21Jdw"
      />
      <meta
        name="description"
        content="Situl Bisericii Creștine după Evanghelie, Cluj-Napoca"
      />
      <meta
        name="keywords"
        content="cluj-napoca, biserica, creștină, evanghelie"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400"
        rel="stylesheet"
      />
    </Helmet>
    <Header />
    <Menu />

    <div
      css={{
        flex: '1 0 auto',
        paddingTop: 20
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
