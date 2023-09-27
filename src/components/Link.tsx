import React from 'react';

type LinkProps = React.HTMLProps<HTMLAnchorElement> & {
  active?: boolean;
};

const Link = ({ active, style, children, ...props }: LinkProps) => (
  <a
    style={{
      fontWeight: active ? 'bold' : 'initial',
      ...style,
    }}
    {...props}
  >
    {children}
  </a>
);

export default Link;
