import React from 'react';

const Row = ({ children }) => {
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960
      }}
    >
      {children}
    </div>
  );
};
export default Row;
