"use client";
import { useState } from "react";
import styles from "./styles.module.scss";

const CustomInput = ({ onChange, label, type, error }) => {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
    onChange?.(e);
  };

  const focusedLabel = isFocus || value;

  return (
    <div className={styles.container}>
      <label
        htmlFor={label}
        className={`${styles.label} ${focusedLabel ? styles.focus : ""}`}
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        onChange={handleChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className={
          error ? `${styles.input} ${styles.input__error}` : styles.input
        }
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default CustomInput;
