import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import gameModalReducer from "./gameModalReducer";

export default combineReducers({
  gamesList: gamesReducer,
  gameModal: gameModalReducer,
});
