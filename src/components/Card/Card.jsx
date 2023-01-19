import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addCharacter } from "../../redux/actions";
import { deleteCharacter } from "../../redux/actions";
import { React, useState, useEffect } from "react";


export function Card(props) {
  const [isFav, setIsFav] = useState(false);
 

  function handleFavorite() {
    if (isFav === true) {
      setIsFav(false);
      deleteCharacter(props.id);
    }
    if (isFav === false) {
      setIsFav(true);
      addCharacter(props);
      console.log(props);
      console.log(props.myFavorites);
    }
  } //vaya dios a saber porque carajo no anda esto si lo descomento al buscar queda mas roto que el el mcDonalds del obelisco
  useEffect(() => {
    props.myFavorites?.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
    <div className={styles.divCard}>
      {isFav ? (
        <button className={styles.btnfav} onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className={styles.btnfav} onClick={handleFavorite}>
          🤍
        </button>
      )}

      <img src={props.image} alt="" />
      <button className={styles.boton} onClick={props.onClose}>
        X
      </button>

      <div className={styles.divName}>
        <Link to={`/detail/${props.id}`}>
          <h2 className={styles.name}>{props.name}</h2>
        </Link>
      </div>

      <div className={styles.caracteristicas}>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    deleteCharacter: (id) => dispatch(deleteCharacter(id)),

    addCharacter: (character) => dispatch(addCharacter(character)),
  };
}

export function mapStateToProps(state) {

  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);
