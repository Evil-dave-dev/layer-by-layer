import styles from "./styles.module.scss";

const CustomButton = ({ children, onClick, type, secondary }) => {
  return (
    <button
      className={
        secondary ? `${styles.container} ${styles.secondary}` : styles.container
      }
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default CustomButton;
