import React, { useEffect, useState } from "react";
import styles from "../Form/form.module.css";
import { validate } from "../Form/validation";
import { useNavigate } from "react-router-dom";

const Form = ({ login }) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({ username: "", password: "" });

  const [createUser, setCreateUser] = useState({ userName: "", password: "" });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    
  };

  const handlerCreateUser = (e) => {
    setCreateUser({
      ...createUser,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...createUser,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handlerLogin = (e) => {
  e.preventDefault();
  let user = window.localStorage.getItem("userName")
  let password = window.localStorage.getItem("userPassword")
  console.log(JSON.parse(user));
  console.log(JSON.parse(password));
  if(userData.username === JSON.parse(user) && userData.password === JSON.parse(password)){
 navigate("/home")
  }else{
  return window.alert("contraseña o usuario incorrecto")
  }
 
}

  const handlerSingUp = () => {
    window.localStorage.setItem("userName", JSON.stringify(createUser.userName));
    window.localStorage.setItem("userPassword", JSON.stringify(createUser.password));
  };

  useEffect(() => {}, []);

  useEffect(() => {
    const newUser = window.localStorage.getItem("singUp");
    console.log(newUser);
    // if (JSON.parse(access.userName && access.password)) {
    //   navigate("/home");
    // } else {
    //   return;
    // }
  }, [navigate]);

  return (
    <div className={styles.divForm}>
      <form onSubmit={(e)=>handlerLogin(e)} className={styles.form}>
    
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

        <button className={styles.submit} type="submit">
          🔑
        </button>
        
        </form>
        
      <label className={styles.label} htmlFor="createUsername">
          Create userName
        </label>
        <input
          className={styles.passInput}
          type="text"
          onChange={handlerCreateUser}
          name="userName"
          value={createUser.userName}
          placeholder="Create a UserName"
        />
        {errors.username ? <p>{errors.username}</p> : ""}

        <label className={styles.label} htmlFor="createPassword">
          Create a password
        </label>
        <input
          className={styles.passInput}
          type="text"
          onChange={handlerCreateUser}
          name="password"
          value={createUser.password}
          placeholder="Create a Password"
        />
        {errors.password ? <p>{errors.password}</p> : ""}

        <button className={styles.submit} onClick={handlerSingUp}>
          Sing Up
        </button>
    </div>
  );
};

export default Form;
