import { useSelector, useDispatch } from "react-redux";
import { getAllCharacters } from "../../redux/actions";
import { createSearchParams } from "react-router-dom";

const Filter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlerOnchangeOrder = (e) => {
    let querys = state.allCharacters.params;
    let params = { sort: "name", ...{ ...querys } };
    params.typeSort = e.target.value;
    dispatch(getAllCharacters(`?${createSearchParams(params)}`));
  };

  const handlerOnchangeFilter = (e) => {
    let querys = state.allCharacters.params;
    querys[e.target.name] = e.target.value;
    querys.page = 0;
    dispatch(getAllCharacters(`?${createSearchParams(querys)}`));
  };

  const arrSpecies = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybuuhole",
    "Mythological Creature",
    "Animal",
    "Robot",
    "Cronenberg",
    "Disease",
    "unknown",
  ];

  return (
    <div>
      <select
        name="gender"
        className="select select-bordered select-xs  max-w-xs"
        onChange={handlerOnchangeFilter}
      >
        <option disabled selected>
          Gender
        </option>
        <option value={"Male"}>Male</option>
        <option value={"Female"}>Female</option>
        <option value={"unknown"}>unknown</option>
        <option value={"Genderless"}>Genderless</option>
      </select>

      <select
        name="status"
        className="select select-bordered select-xs  max-w-xs"
        onChange={handlerOnchangeFilter}
      >
        <option disabled selected>
          Status
        </option>
        <option value={"Alive"}>Alive</option>
        <option value={"Dead"}>Dead</option>
        <option value={"unknown"}>unknown</option>
      </select>

      <select
        onChange={handlerOnchangeFilter}
        name="species"
        className="select select-bordered select-xs  max-w-xs"
      >
        <option disabled selected>
          Species
        </option>
        {arrSpecies.map((specie, index) => {
          return (
            <option key={index} value={specie}>
              {specie}
            </option>
          );
        })}
      </select>

      <select
        name="typeSort"
        className="select select-bordered select-xs  max-w-xs"
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
