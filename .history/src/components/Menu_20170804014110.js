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
  maxWidth: 'auto',
  flex: 'none'
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
    <div class="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
      <a href="#overview" class="mdl-layout__tab is-active">
        Overview
      </a>
      <a href="#features" class="mdl-layout__tab">
        Features
      </a>
      <a href="#features" class="mdl-layout__tab">
        Details
      </a>
      <a href="#features" class="mdl-layout__tab">
        Technology
      </a>
      <a href="#features" class="mdl-layout__tab">
        FAQ
      </a>
      <button
        class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent"
        id="add"
      >
        <i class="material-icons" role="presentation">
          add
        </i>
        <span class="visuallyhidden">Add</span>
      </button>
    </div>
  );
  return (
    <Row className={mainCls}>
      <MenuItem to="/">Acasă</MenuItem>
      <MenuItem to="/despre-noi">Despre noi</MenuItem>
      <MenuItem to="/contact">Contact</MenuItem>
    </Row>
  );
};

export default Menu;
