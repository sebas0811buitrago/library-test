import React, { useState } from 'react';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  const [count, setCount] = useState(0);

  console.log('count change', count);
  return (
    <button
      onClick={() => {
        setCount((state) => state + 1);
      }}
    >
      {props.label}
    </button>
  );
};

export default Button;
