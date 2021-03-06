import React from 'react';
import Link from 'gatsby-link';

import { css } from 'glamor';

import Text from '@app/Text';

import { primaryColor, primaryColorDark } from '@app/colors';

const menuItemCls = css({
  display: 'inline-block',
  '&:not(:last-child)': {
    marginRight: 20
  },

  padding: '18px 10px 10px 10px',
  textDecoration: 'none !important',
  borderBottom: `8px solid transparent`,
  ':hover': {
    borderBottom: `8px solid white`
  }
});

const menuItemActiveCls = css({
  // ':before': {
  //   content: '',
  //   transform: 'scale(1, 1)',
  //   transformOrigin: '50% 50%'
  // },
  borderBottom: `8px solid ${primaryColor}`,
  transition: 'border-bottom-color 0.5s',
  ':hover': {
    borderBottom: `8px solid ${primaryColorDark}`
    // ':before': {
    //   transform: 'scale(1, 1)'
    // }
  }
});

const MenuItem = ({ children, to }) => {
  return (
    <Link
      to={to}
      exact={to == '/'}
      activeClassName={`${menuItemActiveCls}`}
      className={`${menuItemCls}`}
    >
      <Text size={'std-large'} weight="light" color="white">
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
