import "../styles/Pagination.css";
import { useDispatch } from "react-redux";
import { getGames } from "../store/actions/gamesAction";

export const Pagination = ({ name, disabled, max, page, setPage, setIsLoading }) => {
  const dispatch = useDispatch();
  const maxPage = Math.round(max);

  return (
    <div className="pagination-container">
      <span className="go-to-page-text">Go to page</span>
      <input
        type="number"
        className="pagination"
        placeholder="Enter page"
        value={page}
        onChange={(e) => {
          if (e.target.value > 0 && e.target.value <= maxPage) {
            dispatch(getGames(name, setIsLoading, e.target.value));
            setPage(e.target.value);
          }
        }}
        disabled={disabled}
        min={1}
        max={maxPage}
      />
    </div>
  );
};
