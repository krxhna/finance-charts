import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return(
   <div className="s">
     <p>Charts baby</p>
    <button>{props.label}</button>
   </div>
  );
};

export default Button;
