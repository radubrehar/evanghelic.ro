import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Helmet from 'src/components/Helmet';

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
    <Helmet />
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
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500"
      rel="stylesheet"
    />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
