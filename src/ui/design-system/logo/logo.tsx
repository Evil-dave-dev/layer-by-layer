interface Props {
  size?: "very-small" | "small" | "medium" | "large";
}

const Logo = ({ size = "medium" }: Props) => {
  let sizeLogo: number;

  switch (size) {
    case "very-small":
      sizeLogo = 34;
      break;
    case "small":
      sizeLogo = 61;
      break;
    case "medium": // default
      sizeLogo = 88;
      break;
    case "large":
      sizeLogo = 140;
      break;
  }
  return (
    <svg
      width={sizeLogo}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="#4F46E5"
        strokeWidth="10"
        fill="#EEF2FF"
      />
      <path d="M50 20 L70 70 L30 70 Z" fill="#6366F1" />
      <circle cx="50" cy="50" r="10" fill="white" />
    </svg>
  );
};

export default Logo;
