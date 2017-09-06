import React from 'react';
import PropTypes from 'prop-types';

import Text from '@app/Text';
import boxShadow from '@app/boxShadow';

import { accentColor } from '@app/colors';

import MenuItem from './MenuItem';

const ITEMS = [
  <MenuItem to="/">Acasă</MenuItem>,
  <MenuItem to="/despre-noi">Despre noi</MenuItem>,
  <MenuItem to="/viziune">Viziune</MenuItem>,
  <MenuItem to="/resurse">Resurse</MenuItem>,
  <MenuItem to="/blog">Blog</MenuItem>,
  <MenuItem to="/cum-pot-fi-mantuit">Cum pot fi mântuit?</MenuItem>,
  <MenuItem to="/contact">Contact</MenuItem>
];

export default () => {
  return (
    <div
      className="container-fluid"
      style={{
        background: accentColor,
        width: '100%',
        boxShadow
      }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col"
            style={{ textAlign: 'center' }}
            children={ITEMS}
          />
        </div>
      </div>
    </div>
  );
};