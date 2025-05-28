import { IconProps } from "@/types/iconProps";
import clsx from "clsx";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "secondary" | "outline" | "disabled" | "icon";
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}

const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    iconSize: number = 0;

  switch (variant) {
    case "accent": // default
      variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
      break;
    case "secondary":
      variantStyles =
        "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
      break;
    case "outline":
      variantStyles =
        "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
      break;
    case "disabled":
      variantStyles =
        "bg-gray-400 border border-gray-400 text-gray-600 rounded cursor-not-allowed";
      break;
    case "icon":
      if (iconTheme === "accent") {
        variantStyles =
          "bg-primary hover:bg-primary-400 text-white rounded-full";
      }
      if (iconTheme === "secondary") {
        variantStyles =
          "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
      }
      if (iconTheme === "gray") {
        variantStyles = "bg-gray-700 hover:bg-gray-600 text-white rounded-full";
      }
      break;
  }

  switch (size) {
    case "small":
      sizeStyles = `text-sm font-medium  ${
        variant === "icon"
          ? "flex items-center justify-center w-[40px] h-[40px]"
          : "px-[14px] py-[12px]"
      }`;
      iconSize = 18;
      break;
    case "medium": // default
      sizeStyles = `text-base font-medium ${
        variant === "icon"
          ? "flex items-center justify-center w-[50px] h-[50px]"
          : "px-[18px] py-[15px]"
      }`;
      iconSize = 20;
      break;
    case "large":
      sizeStyles = `text-lg font-medium ${
        variant === "icon"
          ? "flex items-center justify-center w-[60px] h-[60px]"
          : "px-[22px] py-[18px]"
      }`;
      iconSize = 24;
      break;
  }

  return (
    <>
      <button
        type="button"
        className={clsx(variantStyles, iconSize, sizeStyles)}
        onClick={() => console.log("click")}
        disabled={disabled}
      >
        {icon && variant === "icon" ? (
          <icon.icon size={iconSize} />
        ) : (
          <div className={clsx(icon && "flex items-center gap-1")}>
            {icon && iconPosition === "left" && <icon.icon size={iconSize} />}
            {children}
            {icon && iconPosition === "right" && <icon.icon size={iconSize} />}
          </div>
        )}
      </button>
    </>
  );
};

export default Button;
