import { FC, useState } from "react";
import Input from "../common/input/Input";
import "./Form.css";
import Button from "../common/button/Button";
import { Superhero, Superpower } from "../../types";
import { useAppDispatch } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import {
  createNewSuperhero,
  updateSuperhero,
} from "../../store/services/superhero.services";
import { routes } from "../../utils/routes";
import Dropdown from "../common/dropdown/Dropdown";
import FileUploader from "../common/file-uploader/FileUploader";

type FormProps = {
  title: string;
  superhero?: Superhero;
};

const Form: FC<FormProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isNew = props.superhero === undefined;
  const [superhero, setSuperhero] = useState<Superhero>(
    props.superhero ?? {
      nickname: "",
      real_name: "",
      origin_description: "",
      superpowers: [],
      catch_phrase: "",
    }
  );
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [warning, setWarning] = useState<string>();
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

  const handleSuperpowersChange = (option: Superpower) => {
    if (!superhero.superpowers.some((value) => value.id === option.id)) {
      setSuperhero((prevSuperhero) => ({
        ...prevSuperhero,
        superpowers: [...prevSuperhero.superpowers, option],
      }));
    }
  };

  const handleSubmit = () => {
    const isAnyStringFieldEmpty = Object.entries(superhero).some(
      ([key, value]) => {
        return !value;
      }
    );
    if (isAnyStringFieldEmpty) {
      setWarning("All fields should be filled!");
    } else {
      if (isNew) {
        dispatch(
          createNewSuperhero({
            superhero: superhero,
            files: selectedFiles,
          })
        );
        navigate(routes.home);
      } else {
        dispatch(
          updateSuperhero({
            ...superhero,
          })
        );
        navigate(routes.superhero + superhero.id);
      }
    }
  };

  return (
    <div className="superhero-form-container">
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
          <Dropdown
            selectedPowers={superhero.superpowers}
            setSelectedOptions={handleSuperpowersChange}
          />
        </div>
        <Button variant={"primary"} onClick={handleSubmit}>
          {props.title}
        </Button>
        {warning && <p className="form-warning-text">{warning}</p>}
      </div>
      <FileUploader
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
      />
    </div>
  );
};

export default Form;
