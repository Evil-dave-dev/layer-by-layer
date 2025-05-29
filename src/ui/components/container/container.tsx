import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={clsx("w-full max-w-7xl mx-auto px-5 lg:px-10", className)}>
      {children}
    </div>
  );
};

export default Container;
