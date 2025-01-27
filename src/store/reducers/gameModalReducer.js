import { OPEN_MODAL, CLOSE_MODAL } from "../types";

const initialState = {
  game: {},
  isModalOpen: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        game: action.payload,
        isModalOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        game: {},
        isModalOpen: false,
      };
    default:
      return state;
  }
}
