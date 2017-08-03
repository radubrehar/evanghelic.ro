import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { css } from 'glamor';

import Row from './Row';

const mainCls = css({
  background: 'gray'
});
const Menu = () => {
  return <Row className={mainCls}>xxx</Row>;
};

export default Menu;
