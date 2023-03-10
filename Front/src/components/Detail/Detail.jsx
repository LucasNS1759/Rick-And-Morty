import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../Detail/Detail.module.css";
import { useDispatch,useSelector } from "react-redux";
import { getDetailChar } from "../../redux/actions";


const Detail = () => {
const dispatch = useDispatch()
const state = useSelector((state)=>state)
console.log(state.characterDetail);
  const {detailId} = useParams();
  console.log(detailId);
  // const [state.characterDetail, setstate.characterDetail] = useState({});

  useEffect(() => {
    dispatch(getDetailChar(detailId))
  }, [dispatch, detailId]);

  return (
    <div className={styles.divPadreDetail}>
      <div className={styles.contenedorInfo}>
        <h1>NOMBRE: {state?.characterDetail?.name}</h1>
        <h3>STATUS: {state?.characterDetail?.status}</h3>
        <h3>ESPECIE: {state?.characterDetail?.species}</h3>
        <h3>GENERO: {state?.characterDetail?.gender}</h3>
        <h3>ORIGIN: {state?.characterDetail?.origin}</h3>
      </div>

      <img
        className={styles?.imageDetail}
        src={state?.characterDetail?.image}
        alt={state?.characterDetail?.name}
      />
    </div>
  );
};

export default Detail;
