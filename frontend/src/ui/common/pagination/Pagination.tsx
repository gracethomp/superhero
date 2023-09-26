import { FC } from "react";
import { icons } from "../../../icons/icons";
import "./Pagination.css";
import { useAppDispatch } from "../../../hooks/redux";
import {
  decrementPage,
  incrementPage,
} from "../../../store/slices/superheroes.slice";

const Pagination: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="pagination">
      <img
        src={icons.leftArrow}
        alt="left arrow"
        className="arrow"
        onClick={() => dispatch(decrementPage())}
      />
      <img
        src={icons.rightArrow}
        alt="right arrow"
        className="arrow"
        onClick={() => dispatch(incrementPage())}
      />
    </div>
  );
};

export default Pagination;
