import { FC, useState, useEffect } from "react";
import "./Alert.css";
import { useAppSelector } from "../../../hooks/redux";

const Alert: FC = (props) => {
  const warning = useAppSelector((state) => state.superheroes.warning);
  const [isVisible, setIsVisible] = useState<boolean>(warning !== "");

  useEffect(() => {
    setIsVisible(warning !== "");
  }, [warning])

  return (
    <>
      {isVisible && (
        <div className="alert">
          <p>{warning}</p>
        </div>
      )}
    </>
  );
};

export default Alert;
