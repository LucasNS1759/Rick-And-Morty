import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../Detail/Detail.module.css";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={styles.divPadreDetail}>
      <div className={styles.contenedorInfo}>
        <h1>NOMBRE: {character?.name}</h1>
        <h3>STATUS: {character?.status}</h3>
        <h3>ESPECIE: {character?.species}</h3>
        <h3>GENERO: {character?.gender}</h3>
        <h3>ORIGIN: {character?.origin?.name}</h3>
      </div>
      <div className={styles.contenedorImg}>
        <img
          className={styles.imageDetail}
          src={character?.image}
          alt={character.name}
        />
      </div>
    </div>
  );
};

export default Detail;
