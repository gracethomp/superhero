import { FC } from "react";
import Input from "../common/input/Input";
import "./Form.css";
import Button from "../common/button/Button";

type FormProps = {
  title: string;
};

const Form: FC<FormProps> = (props) => {
  const fields = [
    "Nickname",
    "Real name",
    "Origin description",
    "Superpowers",
    "Catch phrase",
  ];
  return (
    <div className="superhero-form">
      <h1>{props.title}</h1>
      <div className="fields">
        {fields.map((value, index) => (
          <Input key={index} placeholder={value} />
        ))}
      </div>
      <Button variant={"primary"}>Create superhero</Button>
    </div>
  );
};

export default Form;
