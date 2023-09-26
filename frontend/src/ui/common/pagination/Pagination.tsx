import { FC } from "react";
import { icons } from "../../../icons/icons";
import "./Pagination.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  decrementPage,
  incrementPage,
} from "../../../store/slices/superheroes.slice";

const Pagination: FC = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(state => state.superheroes.page);
  const totalCount = useAppSelector(state => state.superheroes.totalCount); //think about it

  return (
    <div className="pagination">
      <img
        src={page !== 1 ? icons.leftArrow : icons.leftArrowDisabled}
        alt="left arrow"
        className="arrow"
        onClick={() => dispatch(decrementPage())}
      />
      <img
        src={Math.ceil(totalCount / 5) >= page + 1 ? icons.rightArrow : icons.rightArrowDisabled}
        alt="right arrow"
        className="arrow"
        onClick={() => dispatch(incrementPage())}
      />
    </div>
  );
};

export default Pagination;
