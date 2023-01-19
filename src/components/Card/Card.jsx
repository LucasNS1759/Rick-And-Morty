import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ name, species, gender, image, onClose, id }) {
  return (
    <div className={styles.divCard}>
      <img src={image} alt="" />
      <button className={styles.boton} onClick={onClose}>
        X
      </button>

      <div className={styles.divName}>
      <Link to={`/detail/${id}`}>
        <h2 className={styles.name}>{name}</h2>
        </Link>
      </div>

      <div className={styles.caracteristicas}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
}
