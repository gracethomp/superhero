import { FC, useState, useEffect } from "react";
import { Superpower } from "../../../types";
import "./Dropdown.css";
import { icons } from "../../../icons/icons";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { fetchAllSuperpowers } from "../../../store/services/superpowers.services";
import Tag from "../tag/Tag";

type SelectProps = {
  className?: string;
  onChange?: (value: string) => void;
  selectedPowers: Superpower[];
  setSelectedOptions: (power: Superpower) => void;
};

const Dropdown: FC<SelectProps> = (props) => {
  const dispatch = useAppDispatch();
  const options: Superpower[] = useAppSelector(
    (state) => state.superpowers.superpowers
  );
  const [openSelect, setOpenSelect] = useState(false);
  useEffect(() => {
    dispatch(fetchAllSuperpowers());
  }, [dispatch]);

  const handleChange = (option: Superpower) => {
    setOpenSelect(false);
    props.setSelectedOptions(option);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown" onClick={() => setOpenSelect(!openSelect)}>
        {props.selectedPowers.map((option) => (
          <Tag key={option.id}>{option.superpower}</Tag>
        ))}
        <input
          placeholder={props.selectedPowers.length === 0 ? "Superpowers" : ""}
        />
        <img src={icons.downArrow} alt="arrow down" className="arrow" />
      </div>
      {openSelect && (
        <div className="dropdown-list">
          <div className="dropdown-list-items">
            {options?.map((option) => (
              <div
                className="dropdown-option"
                key={option.id}
                onClick={() => handleChange(option)}
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
