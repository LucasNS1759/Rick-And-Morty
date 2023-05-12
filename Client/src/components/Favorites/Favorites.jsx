import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../redux/actions";
import axios from "axios";

const Favorites = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    let nickName = window.localStorage.getItem("nickName");

    dispatch(getFavorites(JSON.parse(nickName)));
  }, [dispatch]);

  const handlerDelete = async (id) => {
    try {
      let nickName = window.localStorage.getItem("nickName");
      await axios.delete(`http://localhost:3001/favorites?id=${id}`);
      dispatch(getFavorites(JSON.parse(nickName)));
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <div>
      {state.favorites &&
        state.favorites.map((fav, index) => {
          return (
            <div key={index}>
              <button onClick={() => handlerDelete(fav.id)}>X</button>
              <h1>{fav.name}</h1>
              <img src={fav.image} alt="" />
              <h2>{fav.species}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default Favorites;
