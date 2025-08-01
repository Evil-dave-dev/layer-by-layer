import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
  padding_x?: string;
  padding_y?: string;
}

const Box = ({
  children,
  className,
  padding_x = "px-9",
  padding_y = "py-9",
}: Props) => {
  return (
    <div
      className={clsx(
        "w-full border border-gray-200 rounded bg-white",
        className,
        padding_x,
        padding_y
      )}
    >
      {children}
    </div>
  );
};

export default Box;
