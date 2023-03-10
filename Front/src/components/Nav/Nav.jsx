import React from "react";
import SearchBar from "../SearchBar/SearchBar";

import styles from "../Nav/Nav.module.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { logOut, setAccess } = props;

  //tengo que mejorar los botones con css cambiar la distribucion a lo mejor mejorar el nav
  return (
    <div className={styles.Nav}>
      <div className={styles.h3}>
        <h3>Con 🧡 para henry 🚀</h3>
      </div>

      <Link to={"/home"}>
        <button className={styles.btnInicio}>🏠</button>
      </Link>
      <Link to={"/abaout"}>
        <button className={styles.btnAbaout}>💌</button>
      </Link>
      <button className={styles.btnLogOut} onClick={() => logOut(setAccess)}>
        🔐
      </button>
      <SearchBar onSearch={props.onSearch} random={props.random} />

      <Link to={"/favorites"}>
        <button className={styles.btnFav}>🧡</button>
      </Link>
    </div>
  );
};

export default Nav;
