import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import 'bootstrap/scss/bootstrap.scss';

import 'typeface-roboto';

import Text from '@app/Text';

import {
  primaryColor,
  primaryColorText,
  primaryColorLight,
  primaryColorDark
} from '@app/colors';

import boxShadow from '@app/boxShadow';

import './extra.scss';
// import './index.css';
// import './mdl.css';

import Menu from '../components/Menu';
import { css } from 'glamor';

const headerPaddingCls = css({
  padding: '1.45rem 0px'
});

const Footer = () => {
  return (
    <div
      style={{
        color: 'white',
        width: '100%',
        marginTop: 20,
        background: primaryColorDark
      }}
      {...headerPaddingCls}
      className={'container-fluid'}
    >
      <div className="row">
        <div className="container">
          <div
            className="row justify-content-center"
            style={{ textAlign: 'end' }}
          >
            <div className="col-6" />
            <div className="col-4">
              <Text size={20} block style={{ paddingBottom: 10 }}>
                Intalniri:
              </Text>
              <Text size={14} block>
                Duminica: 9:30 - 12:00 si 18:00 - 20:00
              </Text>
              <Text size={14} block>
                Joi: 18:00 - 20:00
              </Text>
            </div>
            <div className="col-2">
              <Text size={20} block style={{ paddingBottom: 10 }}>
                Adresa:
              </Text>
              <Text size={14} block>
                str Crisului nr 9, Cluj-Napoca, Romania
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () =>
  <div
    style={{
      background: primaryColor,
      color: primaryColorText,
      position: 'relative'
    }}
  >
    <div
      style={{
        background: primaryColorDark,
        height: 10
      }}
    />
    <div {...headerPaddingCls} className="container">
      <div className="row">
        <Text className="col" size={34}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none'
            }}
          >
            <Text
              size={'headline-large'}
              block
              color="white"
              style={{ textAlign: 'end' }}
              weight="light"
            >
              Biserica Creștină după Evanghelie
            </Text>
            <Text
              size={'std-large'}
              block
              color="white"
              style={{ textAlign: 'end' }}
              weight="thin"
              css={{ marginTop: 10 }}
            >
              — Cluj-Napoca
            </Text>
          </Link>
        </Text>
      </div>
    </div>
  </div>;

const TemplateWrapper = ({ children }) =>
  <div>
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
      style={{
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
