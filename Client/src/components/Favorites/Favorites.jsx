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
            <div className=" ml-80 card w-96 bg-base-100 shadow-xl " key={index}>
              <div className="card-body">
                <button
                  onClick={() => handlerDelete(fav.id)}
                  className="btn btn-square btn-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <h1 className="card-title">{fav.name}</h1>
                <img src={fav.image} alt="" />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Favorites;
