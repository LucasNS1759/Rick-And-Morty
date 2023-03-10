import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { searchByName,AllCharsAux} from "../../redux/actions";
import styles from "../SearchBar/SearchBar.module.css";

export default function SearchBar(props) {
const state = useSelector((state)=>state)
console.log(state.allCharsAux);
const disptach = useDispatch()
  const { onSearch, random } = props;

  const [character, setCharcter] = useState("");

  const handler = (e) => {
    setCharcter(e.target.value);
  };
  
   const dispatchHandler = () =>{
   disptach(searchByName(character))
   }
   
   const dispatchHandlerAll = () =>{
   disptach(AllCharsAux())
   }

  return (
    <div className={styles.divSearch}>
    
    <button onClick={dispatchHandlerAll} >All</button>
      <input
        className={styles.input}
        onChange={handler}
        type="search"
        value={character}
      />
      <button
        className={styles.buttonSearch}
        onClick={dispatchHandler}
      >
        🔎
      </button>
      <button className={styles.buttonRandom} onClick={random}>
        🎲
      </button>
    </div>
  );
}
