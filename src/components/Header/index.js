import React from 'react';
import Link from 'gatsby-link';
import { css } from 'glamor';
import { primaryColor, primaryColorText, primaryColorDark } from '@app/colors';

import Text from '@app/Text';
const Header = () => (
  <div
    css={{
      flex: 'none',
      background: primaryColor,
      color: primaryColorText,
      position: 'relative'
    }}
  >
    <div
      css={{
        background: primaryColorDark,
        height: 10
      }}
    />
    <div
      css={{
        padding: '1.45rem 0px'
      }}
      className="container"
    >
      <div className="row">
        <div className="col">
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none'
            }}
          >
            <Text
              size={'headline-large'}
              block
              color="white"
              style={{ textAlign: 'end' }}
              weight="light"
            >
              Biserica Creștină după Evanghelie
            </Text>
            <Text
              size={'std-large'}
              block
              color="white"
              style={{ textAlign: 'end' }}
              weight="thin"
            >
              — Cluj-Napoca
            </Text>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
