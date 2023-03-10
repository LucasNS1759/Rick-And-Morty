import { Card } from "../Card/Card";
import styles from "../Cards/Cards.module.css";
import { useSelector } from "react-redux";

export default function Cards({ characters, onClose }) {

const state = useSelector((state)=>state)


  return (
    <div className={styles.divCards}>
      {state?.allCharacters?.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            name={name}
            species={`Species: ${species}`}
            gender={`Gender: ${gender}`}
            image={image}
            id={id}
            onClose={() => onClose(id)}
          />
        );
      })}
    </div>
  );
}
