import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addCharacter } from "../../redux/actions";
import { deleteCharacter } from "../../redux/actions";
import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(isFav);
  console.log(state);

  function handleFavorite() {
    if (isFav === true) {
      setIsFav(false);
      dispatch(deleteCharacter(props.id));
    }
    if (isFav === false) {
      setIsFav(true);
      dispatch(addCharacter(props));
    }
  }
  useEffect(() => {
    props.myFavorites?.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
    return function(){
      props.myFavorites?.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }
  });

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

      <img src={props.image} alt={props.image} />
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

export default Card;

//tuve que hacer uso del hook useSelector y useDispatch porque con mapdispatchtoprops y mapState no me funcionaba a pesar de que tenia todo bien la verdad nose porque al usar los hooks anduvo sin problemas
