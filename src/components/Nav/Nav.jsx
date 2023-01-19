import React from "react";
import SearchBar from "../SearchBar/SearchBar";

import styles from "../Nav/Nav.module.css"
import { Link } from "react-router-dom";

const Nav = (props) => {
const {logOut, setAccess} = props



  return (
    <div className={styles.Nav}>
    <Link to={"/home"}>
    <button className={styles.btnInicio} >INICIO</button>
    </Link>
    <Link to={"/abaout"}>
    <button className={styles.btnAbaout} >ABAOUT</button>
    </Link>
      <button  className={styles.btnLogOut}onClick={()=>logOut(setAccess)}>LOGOUT</button>
      <SearchBar onSearch={props.onSearch} random={props.random} />
      
    </div>
  );
};

export default Nav;
