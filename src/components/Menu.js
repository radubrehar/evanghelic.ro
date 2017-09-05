import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { css } from 'glamor';

import Text from '@app/Text';
import boxShadow from '@app/boxShadow';

import {
  accentColor,
  dividerColor,
  primaryColor,
  primaryColorDark,
  primaryColorLight
} from '@app/colors';

const mainCls = css({
  display: 'flex',
  flexFlow: 'row',
  paddingTop: 20,
  paddingBottom: 20,
  borderBottom: '1px solid gray',
  justifyContent: 'flex-end',
  maxWidth: 'auto',
  flex: 'none'
});

const menuItemCls = css({
  display: 'inline-block',
  '&:not(:last-child)': {
    marginRight: 20
  },

  padding: '18px 10px 10px 10px',
  textDecoration: 'none !important',
  ':hover': {
    borderBottom: `8px solid white`
  }
});

const menuItemActiveCls = css({
  borderBottom: `8px solid ${primaryColor}`,
  ':hover': {
    borderBottom: `8px solid ${primaryColorDark}`
  }
});

const MenuItem = ({ children, to }) => {
  return (
    <Link
      to={to}
      exact
      activeClassName={`${menuItemActiveCls}`}
      className={`${menuItemCls}`}
    >
      <Text primaryColor xstyle={{ color: 'black' }} size={16} light>
        {children}
      </Text>
    </Link>
  );
};

const Menu = () => {
  return (
    <div
      className="container-fluid"
      style={{
        background: accentColor,
        width: '100%',
        boxShadow
      }}
    >
      <div className="row">
        <div className="col" style={{ textAlign: 'center' }}>
          <MenuItem to="/">Acasă</MenuItem>
          <MenuItem to="/despre-noi">Despre noi</MenuItem>
          <MenuItem to="/contact">Contact</MenuItem>
        </div>
      </div>
    </div>
  );
};

export default Menu;
