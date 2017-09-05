import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import 'bootstrap/scss/bootstrap-reboot.scss';
import 'bootstrap/scss/bootstrap-grid.scss';

import 'typeface-roboto';

import Text from '@app/Text';

import { primaryColor, primaryColorText, primaryColorDark } from '@app/colors';

import boxShadow from '@app/boxShadow';

import './extra.scss';
// import './index.css';
// import './mdl.css';

import Menu from '../components/Menu';
import { css } from 'glamor';

const headerPaddingCls = css({
  maxWidth: 960,
  padding: '1.45rem 1.0875rem'
});

const Footer = () => {
  return (
    <div
      style={{
        margin: '0 auto'
      }}
      className={headerPaddingCls}
    >
      Footer
    </div>
  );
};

const Header = () => (
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
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 10
      }}
    />
    <div
      style={{
        margin: '0 auto'
      }}
      className={headerPaddingCls}
    >
      <h1 style={{ margin: 0, fontSize: 32 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          <Text size={34} block align="end" light>
            Biserica Creștină după Evanghelie
          </Text>
          <Text size={16} block align="end" thin>
            — Cluj-Napoca
          </Text>
        </Link>
      </h1>
    </div>
  </div>
);

const TemplateWrapper = ({ children }) => (
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
        paddingTop: 0
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
