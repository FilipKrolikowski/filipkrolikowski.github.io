import "../styles/SearchResults.css";
import { SearchReult } from "./index";

export const SearchReults = ({ games }) => {
  return (
    <div className="results-container">
      {games?.results?.map((i) => (
        <SearchReult result={i} key={i?.name} />
      ))}
    </div>
  );
};
