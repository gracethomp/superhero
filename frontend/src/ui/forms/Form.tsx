import { FC, useState } from "react";
import Input from "../common/input/Input";
import "./Form.css";
import Button from "../common/button/Button";
import { Superhero } from "../../types";
import { useAppDispatch } from "../../hooks/redux";
import { createNewSuperhero } from "../../store/services/superhero.services";

type FormProps = {
  title: string;
};

const Form: FC<FormProps> = (props) => {
  const dispatch = useAppDispatch();
  const [superhero, setSuperhero] = useState<Superhero>({
    nickname: "",
    real_name: "",
    origin_description: "",
    superpowers: "",
    catch_phrase: "",
  });
  const fields: string[] = [
    "Nickname",
    "Real name",
    "Origin description",
    "Superpowers",
    "Catch phrase",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSuperhero((prevSuperhero) => ({
      ...prevSuperhero,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    dispatch(createNewSuperhero(superhero));
  };

  return (
    <div className="superhero-form">
      <h1>{props.title}</h1>
      <div className="fields">
        {fields.map((field, index) => (
          <Input
            key={index}
            name={field.toLowerCase().replace(" ", "_") as keyof Superhero}
            placeholder={field}
            value={superhero[
              field.toLowerCase().replace(" ", "_") as keyof Superhero
            ]?.toString()}
            onChange={handleInputChange}
          />
        ))}
      </div>
      <Button variant={"primary"} onClick={handleSubmit}>
        Create superhero
      </Button>
    </div>
  );
};

export default Form;
