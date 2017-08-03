import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';

const Footer = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      Footer
    </div>
  );
};

const Header = () =>
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0, fontSize: 32 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Biserica Creștină după Evanghelie, Cluj-Napoca
        </Link>
      </h1>
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
    <div
      style={{
        flex: '1 0 auto',
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
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
