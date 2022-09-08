import React, { useEffect, useState } from "react";
// import * as styles from './Button.module.css';

// import style from "./Button.css";

// Inject to `<head>` and also available as `style`
import "./global.css";
import style from "./Button.module.css";
import useCounter from "../../../hooks/useCounter";
export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  const [count, setCount] = useState(0);

  const result = useCounter();
  console.log(result);
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
      test
      {props.label}
    </button>
  );
};

export default Button;
