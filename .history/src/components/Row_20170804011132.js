import React from 'react';

import { css } from 'glamor';

const mainCls = css({
  margin: '0 auto',
  maxWidth: 960,
  padding: '0px 1.0875rem 1.45rem'
});

const Row = props => {
  return <div {...props} className={`${mainCls} ${props.className}`} />;
};
export default Row;
