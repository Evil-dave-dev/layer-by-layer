"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import { Eye, EyeOff } from "lucide-react";

const CustomInput = ({ onChange, value = "", label, type, error }) => {
  const [inputValue, setInputValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  const isPassword = type === "password";
  const inpuType = isPassword && showPassword ? "text" : type;
  const focusedLabel = isFocus || inputValue;

  return (
    <div className={styles.container}>
      <label
        htmlFor={label}
        className={`${styles.label} ${focusedLabel ? styles.focus : ""}`}
      >
        {label}
      </label>
      <input
        type={inpuType}
        id={label}
        onChange={handleChange}
        value={inputValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className={
          error ? `${styles.input} ${styles.input__error}` : styles.input
        }
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className={styles.input__password}
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
      )}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default CustomInput;
