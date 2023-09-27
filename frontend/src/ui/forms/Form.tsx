import { FC, useState } from "react";
import Input from "../common/input/Input";
import "./Form.css";
import Button from "../common/button/Button";
import { Superhero, Superpower } from "../../types";
import { useAppDispatch } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { createNewSuperhero } from "../../store/services/superhero.services";
import { routes } from "../../utils/routes";
import Dropdown from "../common/dropdown/Dropdown";

type FormProps = {
  title: string;
};

const Form: FC<FormProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [superhero, setSuperhero] = useState<Superhero>({
    nickname: "",
    real_name: "",
    origin_description: "",
    superpowers: [],
    catch_phrase: "",
  });
  const [warning, setWarning] = useState<string>();
  const [selectedPowers, setSelectedPowers] = useState<Set<Superpower>>(
    new Set()
  );
  const fields: string[] = [
    "Nickname",
    "Real name",
    "Origin description",
    "Catch phrase",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSuperhero((prevSuperhero) => ({
      ...prevSuperhero,
      [name]: value,
    }));
  };

  const handleSuperpowersChange = (option: Superpower) =>
    setSelectedPowers((prevValues) => {
      const newSet = new Set(prevValues);
      newSet.add(option);
      return newSet;
    });

  const handleSubmit = () => {
    const isAnyStringFieldEmpty = Object.entries(superhero).some(
      ([key, value]) => {
        if (typeof value === "string") {
          return value.trim() === ""; //to change
        }
        return false;
      }
    );
    if (isAnyStringFieldEmpty) {
      setWarning("All fields should be filled!");
    } else {
      dispatch(createNewSuperhero({...superhero, superpowers: Array.from(selectedPowers)}));
      navigate(routes.home);
    }
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
            isWarned={
              !!warning &&
              superhero[
                field.toLowerCase().replace(" ", "_") as keyof Superhero
              ]?.toString() === ""
            }
          />
        ))}
        <Dropdown selectedPowers={Array.from(selectedPowers)} setSelectedOptions={handleSuperpowersChange} />
      </div>
      <Button variant={"primary"} onClick={handleSubmit}>
        {props.title}
      </Button>
      {warning && <p className="form-warning-text">{warning}</p>}
    </div>
  );
};

export default Form;
