/* eslint-disable no-unused-vars */
import Filter from "../Filter/Filter";
import { useDispatch } from "react-redux";
import { getAllCharacters } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerRefresh = () => {
    dispatch(getAllCharacters());
  };

  const logOut = () => {
    window.localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="navbar  bg-slate-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li></li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/favorites">Favorites</a>
            </li>
          </ul>
        </div>

        <a href="/home" className="btn btn-ghost normal-case text-xl">Rick And Morty App</a>
      </div>
      <div className="">
        {" "}
        <Filter />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={handlerRefresh}>Refresh</a>
          </li>
          <li>
            <a href="/CreateCharacter">Crea un Personaje</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/avatar.gif" />
              {/* ACA REEMPLAZAR POR LA IMAGEN DE PERFIL DE USUARIO, O AVATAR */}
            </div>
          </label>

          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="text" href="/profile">
                {" "}
                My Profile
              </a>
            </li>
            <li>
              <a className="text" href="/favorites">
                Favorites
              </a>

              <button onClick={logOut} className="text">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
