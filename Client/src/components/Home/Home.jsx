import NavBar from "../Nav/NavBar";
import Cards from "../Cards/Cards";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";

const Home = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCharacters());
  }, []);

  return (
    <>
      <NavBar />

      <Pagination />

      {state.allCharacters && <Cards allCharacters={state?.allCharacters} />}
    </>
  );
};

export default Home;
