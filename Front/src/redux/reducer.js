import {
  ADD_CHARACTER,
  DELETE_CHARACTER,
  SEARCH_BY_ID,
  GET_ALL_CHARACTER,
  GET_DETAIL_CHARACTER,
  SEARCH_BY_NAME,
  USE_ALL_CHAR_AUX,
} from "../redux/types";

const initialState = {
  myFavorites: [],
  characterDetail: {},
  allCharacters: [],
  allCharsAux: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHARACTER:
      return {
        ...state,
        allCharacters: action.payload,
        allCharsAux: action.payload,
      };

    case USE_ALL_CHAR_AUX:
      return {
        ...state,
        allCharacters: [...state.allCharsAux],
      };

    case SEARCH_BY_NAME:
      return {
        ...state,
        allCharacters: action.payload,
      };

    case ADD_CHARACTER:
      return {
        ...state,
        myFavorites: [
          ...state.myFavorites,
          state.myFavorites && action.payload,
        ],
      };

    case DELETE_CHARACTER:
      return {
        ...state,
        myFavorites: [...state.myFavorites].filter((ele) => {
          return ele.id !== action.payload;
        }),
      };
    case SEARCH_BY_ID:
      return {
        ...state,
        characterDetail: action.payload,
      };
      
      case GET_DETAIL_CHARACTER:
      return{
      ...state,
      characterDetail: action.payload,
      
      }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
