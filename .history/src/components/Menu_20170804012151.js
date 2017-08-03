import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { css } from 'glamor';

import Row from './Row';

const mainCls = css({
  display: 'flex',
  flexFlow: 'row',
  paddingTop: 20,
  paddingBottom: 20,
  borderBottom: '1px solid gray',
  justifyContent: 'flex-end'
});

const Menu = () => {
  return (
    <Row className={mainCls}>
      <Link to="/">Acasă</Link>
      <Link to="/despre-noi">Despre noi</Link>
      <Link to="/contact">Contact</Link>
    </Row>
  );
};

export default Menu;
