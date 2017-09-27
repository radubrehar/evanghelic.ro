import React from 'react';
import Link from 'gatsby-link';
import { css } from 'glamor';
import { primaryColor, primaryColorText, primaryColorDark } from '@app/colors';

import Text from '@app/Text';
const Header = () =>
  <div
    style={{
      background: primaryColor,
      color: primaryColorText,
      position: 'relative'
    }}
  >
    <div
      style={{
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
        <Text className="col" size={34}>
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
        </Text>
      </div>
    </div>
  </div>;

export default Header;
