import {
  ADD_CHARACTER,
  DELETE_CHARACTER,
  SEARCH_BY_ID,
  GET_ALL_CHARACTER,
  SEARCH_BY_NAME,
  USE_ALL_CHAR_AUX,
  GET_DETAIL_CHARACTER,
} from "./types";
import axios from "axios";

export const getAllCharacter = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "http://localhost:3001/rickandmorty/character/name?"
      );
      console.log(response.data);
      return dispatch({
        type: GET_ALL_CHARACTER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetailChar = (detailId) => {
  return async function (dispatch) {
  try {
    let response = await  axios(
      `http://localhost:3001/rickandmorty/detail/${detailId}`
    );
    return dispatch({
      type: GET_DETAIL_CHARACTER,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
    
  };
};

export const AllCharsAux = () => {
  return {
    type: USE_ALL_CHAR_AUX,
  };
};

export const searchByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/rickandmorty/character/name?name=${name}`
      );
      console.log(response);
      return dispatch({
        type: SEARCH_BY_NAME,
        payload: response.data,
      });
    } catch (error) {}
  };
};

export const addCharacter = async (character) => {
  const response = await axios.post(`http://localhost:3001/rickandmorty/fav`);

  return { type: ADD_CHARACTER, payload: response.data };
};

export const deleteCharacter = async (id) => {
  // const response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
  return { type: DELETE_CHARACTER, payload: id };
};

export const searchById = async (id) => {
  const response = await axios.get(
    `http://localhost:3001/rickandmorty/character/${id}`
  );
  return {
    type: SEARCH_BY_ID,
    payload: response.data,
  };
};
