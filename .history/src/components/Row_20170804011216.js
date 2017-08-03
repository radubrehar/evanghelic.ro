import React from 'react';

import { css } from 'glamor';

import join from './join';

const mainCls = css({
  margin: '0 auto',
  maxWidth: 960,
  padding: '0px 1.0875rem 1.45rem'
});

const Row = props => {
  return <div {...props} className={join(mainCls, props.className)} />;
};
export default Row;
