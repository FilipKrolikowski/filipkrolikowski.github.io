import { GET_GAMES, GAMES_ERROR } from "../types";
import axios from "axios";

const apiKey = "56aabe91e53f42468dcb6424b4cdc6a6";

export const getGames = (name, setIsLoading, page) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.rawg.io/api/games?token&key=${apiKey}&page_size=10&page=${page || "1"}&search=${name}`,
      {
        withCredentials: false,
        mode: "no-cors",
      }
    );
    dispatch({
      type: GET_GAMES,
      payload: res.data,
    });
    setIsLoading(false);
  } catch (error) {
    dispatch({
      type: GAMES_ERROR,
      payload: error,
    });
  }
};
