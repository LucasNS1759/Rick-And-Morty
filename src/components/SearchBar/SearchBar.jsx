import { useState } from "react";
import styles from "../SearchBar/SearchBar.module.css"

export default function SearchBar(props) {
  const { onSearch,random } = props;
  
  const [character, setCharcter] = useState("");

  const handler = (e) => {
    setCharcter(e.target.value);
  };
  

  
  return (
    <div className={styles.divSearch}>
      <input className={styles.input} onChange={handler} type="search" value={character} />
      <button className={styles.buttonSearch} onClick={() => onSearch(character)}>Agregar</button>
      <button className={styles.buttonRandom} onClick={random}>Add Random</button>
    </div>
  );
}
