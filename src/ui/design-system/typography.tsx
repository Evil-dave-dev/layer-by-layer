import clsx from "clsx";
import React from "react";

interface Props {
  variant?: "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body-base";
  component?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "div"
    | "p"
    | "span"
    | "label";
  theme?: "black" | "gray" | "white" | "primary" | "secondary";
  weight?: "regular" | "medium";
  classname?: string;
  children: React.ReactNode;
}

const Typography = ({
  variant = "display",
  component: Component = "div",
  theme = "black",
  weight = "regular",
  classname,
  children,
}: Props) => {
  let variantStyles: string = "",
    colorStyles: string = "";

  switch (variant) {
    case "display":
      variantStyles = "text-6xl";
      break;
    case "h1":
      variantStyles = "text-8xl";
      break;
    case "h2":
      variantStyles = "text-7xl";
      break;
    case "h3": // default
      variantStyles = "text-6xl";
      break;
    case "h4":
      variantStyles = "text-5xl";
      break;
    case "h5":
      variantStyles = "text-4xl";
      break;
    case "h6":
      variantStyles = "text-3xl";
      break;
    case "body-base":
      variantStyles = "text-xl";
      break;
  }

  switch (theme) {
    case "black": // default
      colorStyles = "text-gray";
      break;
    case "gray":
      colorStyles = "text-gray-700";
      break;
    case "white":
      colorStyles = "text-white";
      break;
    case "primary":
      colorStyles = "text-primary";
      break;
    case "secondary":
      colorStyles = "text-secondary";
      break;
  }

  return (
    <Component
      className={clsx(
        variantStyles,
        colorStyles,
        weight === "medium" && "font-medium",
        classname,
        "text-primary"
      )}
    >
      {children}
    </Component>
  );
};

export default Typography;
