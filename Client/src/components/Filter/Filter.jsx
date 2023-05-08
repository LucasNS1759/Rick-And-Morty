import { useSelector, useDispatch } from "react-redux";
// import { filterAndOrder,currentPage } from "../../redux/actions";
import { useState } from "react";

const Filter = () => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const [order, setOrder] = useState("");
  const [filter, setFilter] = useState("");

  const handlerOnchangeOrder = (e) => {
    // setOrder(e.target.value);
    // dispatch(filterAndOrder(filter, e.target.value));
    // dispatch(currentPage(1))
  };

  const handlerOnchangeFilter = (e) => {
    // setFilter(e.target.value);
    // dispatch(filterAndOrder(e.target.value, order));
    // dispatch(currentPage(1))
  };

  return (
    <div>
      <select
        className="select w-full max-w-xs"
        onChange={handlerOnchangeFilter}
      >
        <option disabled selected>
          Filter
        </option>
        <option value={"Male"}>Male</option>
        <option value={"Female"}>Female</option>
        <option value={"unknown"}>unknown</option>
        <option value={"Genderless"}>Genderless</option>
      </select>

      <select
        className="select w-full max-w-xs"
        onChange={handlerOnchangeOrder}
      >
        <option disabled selected>
          Sort
        </option>
        <option value={"ASC"}>ASC</option>
        <option value={"DESC"}>DESC</option>
      </select>
    </div>
  );
};

export default Filter;

// 'Male', 'Female', 'unknown', 'Genderless'
