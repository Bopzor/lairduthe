import NextLink from "next/link";
import type { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof NextLink> & {
  active?: boolean;
};

const Link = ({ active, style, children, ...props }: LinkProps) => (
  <NextLink
    style={{
      fontWeight: active ? "bold" : "initial",
      ...style,
    }}
    {...props}
  >
    {children}
  </NextLink>
);

export default Link;
