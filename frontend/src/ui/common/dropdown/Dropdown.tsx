import { FC, useState } from "react";
import { Superpower } from "../../../types";
import "./Dropdown.css";
import { icons } from "../../../icons/icons";

type SelectProps = {
  className?: string;
  onChange?: (value: string) => void;
};

const Dropdown: FC<SelectProps> = (props) => {
  const [openSelect, setOpenSelect] = useState(false);
  const options: Superpower[] = [
    { id: 1, superpower: "power" },
    { id: 1, superpower: "power" },
    { id: 1, superpower: "power" },
    { id: 1, superpower: "power" },
    { id: 1, superpower: "power" },
  ];

  const handleChange = (index: number) => {
    setOpenSelect(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown" onClick={() => setOpenSelect(!openSelect)}>
        <input placeholder="Superpowers" />
        <img src={icons.downArrow} alt="arrow down" className="arrow" />
      </div>
      {openSelect && (
        <div className="dropdown-list">
          <div className="dropdown-list-items">
            {options?.map((option, index) => (
              <div
                className="dropdown-option"
                key={index}
                onClick={() => handleChange(index)}
              >
                {option.superpower}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
