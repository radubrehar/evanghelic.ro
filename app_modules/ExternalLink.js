import React from 'react';

const ExternalLink = props => {
  const size = props.iconSize || 18;
  return (
    <a target="_blank" {...props}>
      <svg
        css={{ verticalAlign: 'middle', marginRight: 5 }}
        fill={props.fill || 'white'}
        height={size}
        viewBox="0 0 24 24"
        width={size}
      >
        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
      </svg>
      {props.children}
    </a>
  );
};

export default ExternalLink;
