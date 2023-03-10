import React, { useState } from "react";
import styles from "../Form/form.module.css";
import { validate } from "../Form/validation";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { getAllCharacter } from "../../redux/actions"


const Form = ({ login }) => {
  const dispatch = useDispatch()
  const state = useSelector((state)=>state)
  console.log(state.allCharacters);
  
  
   

  const [userData, setUserData] = useState({ username: "", password: "" });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    complete: "",
  });
  
  

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
    dispatch(getAllCharacter())
  };

  return (
    <div className={styles.divForm}>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="username">
          username
        </label>
        <input
          className={styles.userInput}
          onChange={handleInputChange}
          value={userData.username}
          type="text"
          name="username"
          placeholder="Ingrese su usuario..."
        ></input>
        {errors.username ? <p>{errors.username}</p> : ""}
        <label className={styles.label} htmlFor="password">
          password
        </label>
        <input
          className={styles.passInput}
          onChange={handleInputChange}
          value={userData.password}
          type="password"
          name="password"
          placeholder="Ingrese su contraseña..."
        ></input>
        {errors.password ? <p>{errors.password}</p> : ""}

        <button onClick={handleSubmit} className={styles.submit} type="submit">
          🔑
        </button>
      </form>
    </div>
  );
};

export default Form;
