import clsx from "clsx";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "white";
}

const Spinner = ({ size = "medium", variant = "primary" }: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "";

  switch (size) {
    case "small":
      sizeStyles = "w-5 h-5";
      break;
    case "medium": // default
      sizeStyles = "w-9 h-9";
      break;
    case "large":
      sizeStyles = "w-12 h-12";
      break;
  }

  switch (variant) {
    case "primary": // default
      variantStyles = "text-primary";
      break;
    case "white":
      variantStyles = "text-white";
      break;
  }

  return (
    <svg
      className={clsx("animate-spin", sizeStyles, variantStyles)}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        className="opacity-25"
        fill="currentColor"
      />
      <path
        d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
        className="opacity-75"
        fill="currentColor"
      />
    </svg>
  );
};

export default Spinner;
