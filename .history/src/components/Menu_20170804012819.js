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
  justifyContent: 'flex-end',
  margin: 0,
  maxWidth: 'auto'
});

const menuItemCls = css({
  '&:not(:last-child)': {
    marginRight: 20
  }
});

const MenuItem = ({ children, to }) => {
  return (
    <Link to={to} className={menuItemCls}>
      {children}
    </Link>
  );
};

const Menu = () => {
  return (
    <Row className={mainCls}>
      <MenuItem to="/">Acasă</MenuItem>
      <MenuItem to="/despre-noi">Despre noi</MenuItem>
      <MenuItem to="/contact">Contact</MenuItem>
    </Row>
  );
};

export default Menu;
