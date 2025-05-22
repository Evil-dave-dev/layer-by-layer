import styles from "./styles.module.scss";

const CustomButton = ({ children, onClick, type, secondary, small }) => {
  const classNames = [styles.container];
  if (secondary) classNames.push(styles.secondary);
  if (small) classNames.push(styles.small);

  return (
    <button className={classNames.join(" ")} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default CustomButton;
