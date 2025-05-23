import React from "react";

interface Props {
  variant?: "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

const Typography = ({ variant, children }: Props) => {
  return <div>{children}</div>;
};

export default Typography;
