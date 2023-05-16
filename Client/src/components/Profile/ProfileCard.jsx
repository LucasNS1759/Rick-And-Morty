/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

const ProfileCard = (props) => {
  const [image64, setImage64] = useState("");

  const [edit, setEdit] = useState({
    id: props?.id,
    name: props?.name,
    status: props?.status,
    gender: props?.gender,
    species: props?.species,
    origin: props?.origin,
    location: props?.location,
    nickName: JSON.parse(window.localStorage.getItem("nickName")),
    created: true,
  });

  const handlerEdit = (e) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };

  const onclickEdit = async (e) => {
    e.preventDefault();
    console.log(image64);
    try {
      let response = await axios.put(
        "http://localhost:3001/rickandmorty/charactersCreated",
        {
          ...edit,
          image: image64 ? image64 : props?.image,
        }
      );
      if(response.data){
        alert("Personaje Modificado con exito")
        props.charactersCreated()
      } 
    } catch (error) {
      window.alert(error.message);
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (event) => {
    const files = event.target.files;
    console.log(files[0]);

    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      setImage64(base64);
      return;
    }
  };

  const handlerDelete = async (id) => {
    console.log(id);
    try {
      const userId = window.localStorage.getItem("userId");
      await axios.delete(
        `http://localhost:3001/rickandmorty/charactersCreated?id=${id}`
      );

      let currentsCharacters = await axios.get(
        `http://localhost:3001/rickandmorty/charactersCreated?userId=${JSON.parse(
          userId
        )}`
      );
      props.setCharacters(currentsCharacters.data);
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <div
      key={props.id}
      className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative"
    >
      <img className="w-full" src={props.image} alt="props created" />
      <div
        onClick={() => handlerDelete(props.id)}
        className="badge absolute top-0 lefth-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded cursor-pointer"
      >
        X
      </div>

      <div className="dropdown absolute top-0 right-0 dropdown-end m-1   text-xs font-bold rounded cursor-pointer">
        <label tabIndex={0} className="btn m-1">
          Editar
        </label>
        <form
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-56 "
        >
          <label htmlFor="">name</label>
          <input
            onChange={handlerEdit}
            name="name"
            value={edit.name}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-xs w-full max-w-xs"
          />

          <label htmlFor="">status</label>
          <select
            name="status"
            onChange={handlerEdit}
            className="select select-bordered select-xs w-full max-w-xs"
          >
            <option disabled selected>
              Seleccione un status
            </option>
            <option value={"Alive"}>Alive</option>
            <option value={"Dead"}>Dead</option>
            <option value={"unknown"}>unknown</option>
          </select>

          <label htmlFor="">gender</label>
          <select
            name="gender"
            onChange={handlerEdit}
            className="select select-bordered select-xs w-full max-w-xs"
          >
            <option disabled selected>
              Seleccione un genero
            </option>
            <option value={"Female"}>Female</option>
            <option value={"Male"}>Male</option>
            <option value={"Genderless"}>Genderless</option>
            <option value={"unknown"}>unknown</option>
          </select>

          <label htmlFor="">origin</label>
          <input
            onChange={handlerEdit}
            name="origin"
            value={edit.origin}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-xs w-full max-w-xs"
          />

          <label htmlFor="">species</label>
          <select
            name="species"
            onChange={handlerEdit}
            className="select select-bordered select-xs w-full max-w-xs"
          >
            <option disabled selected>
              Seleccione un genero
            </option>
            <option value={"Human"}>Human</option>
            <option value={"Alien"}>Alien</option>
            <option value={"Humanoid"}>Humanoid</option>
            <option value={"Poopybuuhole"}>Poopybuuhole</option>
            <option value={"Mythological Creature"}>
              Mythological Creature
            </option>
            <option value={"Animal"}>Animal</option>
            <option value={"Robot"}>Robot</option>
            <option value={"Cronenberg"}>Cronenberg</option>
            <option value={"Disease"}>Disease</option>
            <option value={"unknown"}>unknown</option>
          </select>

          <label htmlFor="">location</label>
          <input
            onChange={handlerEdit}
            name="location"
            value={edit.location}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-xs w-full max-w-xs"
          />

          <label htmlFor="">image</label>
          <input
            key={props?.id}
            onChange={(event) => uploadImage(event)}
            type="file"
            className="file-input file-input-bordered file-input-xs w-full max-w-xs"
          />
          <button onClick={(e) => onclickEdit(e)}>Editar</button>
        </form>
      </div>

      <div className="desc p-4 text-gray-800">
        <span className="description text-sm block py-2 border-gray-400 mb-2">
          name:{props.name}
        </span>
        <span className="description text-sm block py-2 border-gray-400 mb-2">
          status:{props.status}
        </span>
        <span className="description text-sm block py-2 border-gray-400 mb-2">
          gender:{props.gender}
        </span>
        <span className="description text-sm block py-2 border-gray-400 mb-2">
          origin:{props.origin}
        </span>
        <span className="description text-sm block py-2 border-gray-400 mb-2">
          species:{props.species}
        </span>
        <span className="description text-sm block py-2 border-gray-400 mb-2">
          location:{props.location}
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
