import clsx from "clsx";
import Image from "next/image";

interface Props {
  size?: "small" | "medium" | "large";
  src: string;
  alt: string;
}

const Avatar = ({ size = "medium", src, alt }: Props) => {
  let sizeStyles: string;

  switch (size) {
    case "small":
      sizeStyles = "w-20 h-20";
      break;
    case "medium": // default
      sizeStyles = "w-34 h-34";
      break;
    case "large":
      sizeStyles = "w-50 h-50";
      break;
  }
  return (
    <div className={clsx(sizeStyles, "bg-gray-400 rounded-full relative")}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center rounded-full"
      />
    </div>
  );
};

export default Avatar;
