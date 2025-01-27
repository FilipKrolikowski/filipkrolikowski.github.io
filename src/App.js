import "./styles/App.css";
import { Header, Pagination, SearchReults } from "./components/index";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "./store/actions/gamesAction";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { ModalGameDetails } from "./components/index";

function App() {
  const [name, setName] = useState("");
  const [page, setPage] = useState("1");
  const dispatch = useDispatch();
  const gamesListData = useSelector((state) => state.gamesList);
  const { error, games } = gamesListData;
  const [nameDebounced] = useDebounce(name, 1000);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (nameDebounced) {
      setIsLoading(true);
      setPage("1");
      dispatch(getGames(name, setIsLoading, page));
    }
  }, [dispatch, nameDebounced]);

  const handleName = (value) => {
    setName(value);
  };

  return (
    <div>
      <ModalGameDetails />
      <Header name={name} handleName={handleName} />
      {error && !games ? (
        <div className="error-message">{error?.message}</div>
      ) : !games || games?.count === 0 ? (
        <div className="message">No results</div>
      ) : isLoading ? (
        <div className="spinner-container">
          <div className="lds-dual-ring"></div>
        </div>
      ) : (
        <SearchReults games={games} />
      )}
      <Pagination
        name={name}
        disabled={!games || !name}
        max={games?.count / 10 || 1}
        page={page}
        setPage={setPage}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

export default App;
