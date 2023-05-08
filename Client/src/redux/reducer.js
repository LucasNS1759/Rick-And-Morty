import { GET_ALL_CHARACTERS, GET_FAVORITES } from "../redux/types";

const initialState = {
  allCharacters: [],
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        allCharacters: action.payload,
      };

    case GET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
