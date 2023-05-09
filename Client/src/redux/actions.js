import { GET_ALL_CHARACTERS, GET_FAVORITES} from "./types";
import axios from "axios";

export const getAllCharacters = (params) => {
  return async function (dispatch) {
    try {
      if (params) {
        console.log(params);
        const response = await axios.get(
          `http://localhost:3001/rickandmorty/Characters${params}`
        );
        if (response.data) {
          return dispatch({
            type: GET_ALL_CHARACTERS,
            payload: response.data,
          });
        } else {
          throw new Error();
        }
      } else {
        const response = await axios.get(
          `http://localhost:3001/rickandmorty/Characters`
        );
        if (response.data) {
          return dispatch({
            type: GET_ALL_CHARACTERS,
            payload: response.data,
          });
        } else {
          throw new Error();
        }
      }
    } catch (error) {
      return window.alert(error.message);
    }
  };
};

export const getFavorites = (nickName) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/favorites?nickName=${nickName}`
      );
      if (response.data) {
        return dispatch({
          type: GET_FAVORITES,
          payload: response.data,
        });
      }
    } catch (error) {
      return window.alert(error.message);
    }
  };
};

