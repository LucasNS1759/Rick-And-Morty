/* eslint-disable no-unreachable */
import { ADD_CHARACTER, DELETE_CHARACTER } from "../redux/types";

const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      break;

    case DELETE_CHARACTER:
      break;
      
    default:
      return {
        ...state,
      };
      break;
  }
};

export default reducer;
