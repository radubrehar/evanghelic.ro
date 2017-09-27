import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import 'bootstrap/scss/bootstrap.scss';

import 'typeface-roboto';

import Text from '@app/Text';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import './extra.scss';

import {
  primaryColor,
  primaryColorText,
  primaryColorLight,
  primaryColorDark
} from '@app/colors';

import boxShadow from '@app/boxShadow';

import Menu from '../components/Menu';
import { css } from 'glamor';

const TemplateWrapper = ({ children }) =>
  <div
    css={{
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'stretch'
    }}
  >
    <Helmet
      title="Biserica Cluj - Biserica Creștină după Evanghelie"
      meta={[
        {
          name: 'description',
          content: 'Situl Bisericii Creștine după Evanghelie, Cluj-Napoca'
        },
        {
          name: 'keywords',
          content: 'cluj-napoca, biserica, creștină, evanghelie'
        }
      ]}
    />
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
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
