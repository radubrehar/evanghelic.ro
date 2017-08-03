import React from 'react';

const Row = ({ style, children }) => {
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        ...style
      }}
    >
      {children}
    </div>
  );
};
export default Row;
