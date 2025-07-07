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
      xmlns="http://www.w3.org/2000/svg"
      width={sizeLogo}
      viewBox="0 0 1024 1024"
      fill="none"
    >
      <g clipPath="url(#clip0_189_240)">
        <rect
          width="1024"
          height="1024"
          rx="123"
          fill="url(#paint0_linear_189_240)"
        />
        <path
          d="M833.818 301.234C795.963 347.247 692.175 474.307 609.731 575.301L505.049 469.026C599.73 384.767 716.927 280.616 759.281 243.319C834.628 176.912 900.7 137.408 915.06 153.556C924.056 162.496 900.169 220.494 833.818 301.234ZM591.432 597.651C559.5 636.735 532.009 670.4 515.191 691.046L391.26 570.272C411.347 552.392 444.788 522.638 483.565 488.164L591.432 597.651ZM496.724 713.675V713.34C424.785 989.362 105.096 830.677 105.096 830.677C105.096 830.677 239.224 847.579 239.224 722.475C239.224 601.199 362.484 590.247 370.055 589.688L496.975 713.368C496.975 713.396 496.724 713.675 496.724 713.675Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_189_240"
          x1="4.95022e-06"
          y1="2.72762"
          x2="1024"
          y2="1021.27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2A7B9B" stopOpacity="0.96" />
          <stop offset="0.490385" stopColor="#57C785" stopOpacity="0.977308" />
          <stop offset="1" stopColor="#EDDD53" />
        </linearGradient>
        <clipPath id="clip0_189_240">
          <rect width="1024" height="1024" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;
