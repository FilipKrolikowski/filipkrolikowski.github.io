import { GET_GAMES, GAMES_ERROR } from "../types";

const initialState = {
  games: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
      };
    case GAMES_ERROR:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
}
