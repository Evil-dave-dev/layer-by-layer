import { LinkType, LinkTypes } from "@/lib/link-type";
import { IconProps } from "@/types/iconProps";
import Spinner from "@/ui/design-system/spinner/spinner";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  size?: "small" | "medium" | "large";
  variant?:
    | "accent"
    | "secondary"
    | "outline"
    | "disabled"
    | "icon"
    | "success"
    | "danger";
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  baseUrl?: string;
  linkType?: LinkType;
  action?: Function;
  children?: React.ReactNode;
  type?: "button" | "submit";
  widthFull?: boolean;
}

const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  baseUrl,
  linkType = "internal",
  type = "button",
  action = () => {},
  children,
  widthFull = false,
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
    case "success":
      variantStyles =
        "bg-[var(--alert-success)] hover:bg-[var(--alert-success)]/75 text-white rounded";
      break;
    case "danger":
      variantStyles =
        "bg-[var(--alert-danger)] hover:[var(--alert-danger)]/75 text-white rounded";
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
        variantStyles = "bg-gray-800 hover:bg-gray-600 text-white rounded-full";
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

  const handleClick = () => {
    if (action) {
      action();
    }
  };

  const buttonContent = (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {variant === "accent" || variant === "icon" ? (
            <Spinner size="small" variant="white" />
          ) : (
            <Spinner size="small" variant="primary" />
          )}
        </div>
      )}
      <div className={clsx(isLoading && "invisible")}>
        {icon && variant === "icon" ? (
          <icon.icon size={iconSize} />
        ) : (
          <div className={clsx(icon && "flex items-center gap-1")}>
            {icon && iconPosition === "left" && <icon.icon size={iconSize} />}
            {children}
            {icon && iconPosition === "right" && <icon.icon size={iconSize} />}
          </div>
        )}
      </div>
    </>
  );

  const buttonElement = (
    <button
      type={type}
      className={clsx(
        variantStyles,
        iconSize,
        sizeStyles,
        widthFull && "w-full",
        isLoading && "cursor-not-allowed",
        "relative animate"
      )}
      onClick={handleClick}
      disabled={disabled || isLoading ? true : false}
    >
      {buttonContent}
    </button>
  );

  if (baseUrl) {
    if (linkType === LinkTypes.EXTERNAL) {
      return (
        <a href={baseUrl} target="_blank">
          {buttonElement}
        </a>
      );
    } else {
      return <Link href={baseUrl}>{buttonElement}</Link>;
    }
  }

  return buttonElement;
};

export default Button;
