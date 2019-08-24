import React from 'react';

type LinkProps = React.HTMLProps<HTMLAnchorElement> & {
  active?: boolean;
};

const Link: React.FC<LinkProps> = ({ active, style, children, ...props }) => (
  <a
    style={{
      fontWeight: active ? 'bold' : 'initial',
      ...style,
    }}
    {...props}
  >
    { children }
  </a>
);

export default Link;
