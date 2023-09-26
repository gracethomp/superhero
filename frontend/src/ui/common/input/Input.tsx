import { FC } from "react";
import "./Input.css";
import { icons } from "../../../icons/icons";

type InputProps = {
  name: string;
  placeholder: string;
  value?: string;
  isWarned?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<InputProps> = (props) => {
  return (
    <div className="input">
      <input
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className={props.isWarned ? 'warning' : ''}
      />
      {props.isWarned && <img src={icons.warning} alt="warning" />}
    </div>
  );
};

export default Input;
