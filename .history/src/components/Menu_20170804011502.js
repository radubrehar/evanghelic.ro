import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { css } from 'glamor';

import Row from './Row';

const mainCls = css({
  background: 'gray',
  display: 'flex',
  flexFlow: 'row',
  paddingTop: 20,
  paddingBottom: 20,
  justifyContent: 'flex-end'
});
const Menu = () => {
  return (
    <Row className={mainCls}>
      <button>first</button>
      <button>second</button>
      <button>third</button>
    </Row>
  );
};

export default Menu;
