import { FC } from "react";
import { icons } from "../../../icons/icons";
import "./Pagination.css";

const Pagination: FC = () => {
  return (
    <div className="pagination">
      <img src={icons.leftArrow} alt="left arrow" className="arrow"/>
      <img src={icons.rightArrow} alt="right arrow" className="arrow"/>
    </div>
  );
};

export default Pagination;
