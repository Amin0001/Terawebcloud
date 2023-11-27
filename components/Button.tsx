// MyButton.js
import React from "react";
import styles from "./Button.module.css"; // Import your local styles

interface MyButtonProps {
  color: string;
  width: number;
  text: string;
  borderColor: string;
  textc: string;
  className?: string;
}

const MyButton: React.FC<MyButtonProps> = ({
  color,
  width,
  text,
  borderColor,
  textc,
  className = "",
}) => {
  return (
    <button
      className={`${styles.myButton} ${className}`}
      style={{ backgroundColor: color, width, borderColor, color: textc }}
    >
      {text}
    </button>
  );
};

export default MyButton;
