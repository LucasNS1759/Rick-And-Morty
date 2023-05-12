import NavBar from "../Nav/NavBar";
import Cards from "../Cards/Cards";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import { createSearchParams } from "react-router-dom";

const Home = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    let query = window.localStorage.getItem("querys");
    if (query) {
      let params = `?${createSearchParams(JSON.parse(query))}`;
      dispatch(getAllCharacters(params));
      return;
    } else {
      dispatch(getAllCharacters());
      return;
    }
  }, [dispatch]);

  return (
    <>
      

      <Pagination />

      {state.allCharacters && <Cards allCharacters={state?.allCharacters} />}
    </>
  );
};

export default Home;
