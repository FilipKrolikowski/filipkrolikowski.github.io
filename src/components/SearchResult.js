import "../styles/SearchResult.css";
import { IoIosStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useWindowResize } from "./hooks";

export const SearchReult = ({ result }) => {
  const dispatch = useDispatch();
  const windowSize = useWindowResize();
  const isScreenWide = windowSize.width > 767;

  const handleOpenDetailsModal = () => {
    if (isScreenWide) {
      dispatch({
        type: "OPEN_MODAL",
        payload: result,
      });
    }
  };

  return (
    <div className={`result-tile ${isScreenWide ? "cursor-pointer" : ""}`} onClick={handleOpenDetailsModal}>
      <div className="result-rating">
        <IoIosStar />
        {result.rating}
      </div>
      <img className="result-image" src={result.background_image} />
      <div className="result-info">
        <div>{result.name}</div>
        {result?.parent_platforms && (
          <div className="result-platforms">
            {result.parent_platforms.map(
              (p, index) => `${p.platform.name}${index + 1 !== result.parent_platforms.length ? ", " : ""}`
            )}
          </div>
        )}
      </div>
    </div>
  );
};
