import React, { useEffect, useState } from "react";
// import * as styles from './Button.module.css';

// import style from "./Button.css";

// Inject to `<head>` and also available as `style`
import "./global.css";
import style from "./Button.module.css";
export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  const [count, setCount] = useState(0);

  console.log("count change", count);

  useEffect(() => {
    console.log("useEffect", count);
  }, [count]);

  return (
    <button
      className={`${style.button} button-global`}
      onClick={() => {
        setCount((state) => state + 1);
      }}
    >
      holaaa
      {props.label}
    </button>
  );
};

export default Button;
