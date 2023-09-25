import { FC, PropsWithChildren } from "react";
import { icons } from "../../../icons/icons";
import './Button.css';

type ButtonProps = {
    children: string;
    variant: 'primary' | 'secondary';
};

const Button: FC<ButtonProps> = (props) => {
  return <button className={props.variant}>{props.children}</button>;
};

export default Button;
