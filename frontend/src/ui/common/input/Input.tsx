import { FC } from "react";
import './Input.css';

type InputProps = {
    placeholder: string;
}

const Input: FC<InputProps> = (props) => {
  return <input type="text" placeholder={props.placeholder} />;
};

export default Input;
