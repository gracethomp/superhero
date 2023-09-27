import { FC } from "react";
import "./Button.css";

type ButtonProps = {
  children: string;
  variant: "primary" | "secondary" | "caution";
  icon?: string;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = (props) => {
  return (
    <button className={props.variant} onClick={props.onClick}>
      {props.icon ? <img src={props.icon} alt="button icon" className="button-icon"/> : <></>}
      {props.children}
    </button>
  );
};

export default Button;
