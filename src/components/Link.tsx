import React from 'react';

const Link: React.FC<React.HTMLProps<HTMLAnchorElement>> = ({ style, children, ...props }) => (
  <a
    style={{
      ...style,
    }}
    {...props}
  >
    { children }
  </a>
);

export default Link;
