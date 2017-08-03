import React from 'react';

export default ({ children }) => {
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
