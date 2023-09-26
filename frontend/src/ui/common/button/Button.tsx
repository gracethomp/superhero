import { FC } from "react";
import "./Button.css";

type ButtonProps = {
  children: string;
  variant: "primary" | "secondary" | "caution";
  icon?: string;
};

const Button: FC<ButtonProps> = (props) => {
  return (
    <button className={props.variant}>
      {props.icon ? <img src={props.icon} alt="button icon" className="button-icon"/> : <></>}
      {props.children}
    </button>
  );
};

export default Button;
