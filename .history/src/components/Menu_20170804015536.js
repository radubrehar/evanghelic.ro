import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { css } from 'glamor';

import Row from './Row';

const mainCls = css({
  display: 'flex',
  flexFlow: 'row',
  alignItems: 'center',
  // paddingTop: 20,
  // paddingBottom: 20,
  // borderBottom: '1px solid gray',
  // justifyContent: 'flex-end',
  // margin: 0,
  // maxWidth: 'auto',
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
    <div
      className={`${mainCls} mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark`}
    >
      <a href="#overview" className="mdl-layout__tab is-active">
        Overview
      </a>
      <a href="#features" className="mdl-layout__tab">
        Features
      </a>
      <a href="#details" className="mdl-layout__tab">
        Details
      </a>
      <a href="#features" className="mdl-layout__tab">
        Technology
      </a>
      <a href="#faq" className="mdl-layout__tab">
        FAQ
      </a>
      <button
        className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent"
        id="add"
      >
        <i className="material-icons" role="presentation">
          add
        </i>
        <span className="visuallyhidden">Add</span>
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
