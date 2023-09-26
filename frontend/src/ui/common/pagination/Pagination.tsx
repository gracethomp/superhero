import { FC } from "react";
import { icons } from "../../../icons/icons";
import "./Pagination.css";

const Pagination: FC = () => {
  return (
    <div className="pagination">
      <button>
        <img src={icons.leftArrow} alt="left arrow" />
      </button>
      <button>
        <img src={icons.rightArrow} alt="right arrow" />
      </button> 
    </div>
  );
};

export default Pagination;
