import axios from "axios";
import { useState } from "react";

const CreateForm = () => {
  const [character, setCharacter] = useState({
    name: "",
    status: "",
    species: "",
    gender: "",
    origin: "",
    location: "",
    created: true,
  });

  const [image, setImage] = useState("");

  const handlerCreateCharacter = (e) => {
    setCharacter({
      ...character,
      [e.target.name]: e.target.value,
    });
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
      setImage(base64);
      return;
    }
  };

  function createCharacter(e) {
  e.preventDefault()
    {
      axios.post("http://localhost:3001/rickandmorty/characters", {
        image: image,
        name: character.name,
        status: character.status,
        species: character.species,
        gender: character.gender,
        origin: character.origin,
        location: character.location,
        userId :JSON.parse( window.localStorage.getItem("userId"))
      });
    }
  }

  return (
    <>
      <div className="bg-white dark:bg-gray-900  ">
        <div className="flex justify-center h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/3">
            <div
              className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40 "
              style={{ backgroundImage: `url('/rickmorty.jpg')` }}
            ></div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Crea un nuevo Personaje
                </p>
              </div>

              <div className="mt-8">
                <form>
                  <div>
                    {/* NAME */}
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input w-full max-w-xs"
                      name="name"
                      onChange={handlerCreateCharacter}
                      value={character.name}
                    />

                    {/* STATUS */}
                    <label
                      htmlFor="status"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Status
                    </label>
                    <select
                      name="status"
                      onChange={handlerCreateCharacter}
                      className="select w-full max-w-xs"
                    >
                      <option disabled selected>
                        Seleccione un status
                      </option>
                      <option value={"Alive"}>Alive</option>
                      <option value={"Dead"}>Dead</option>
                      <option value={"unknown"}>unknown</option>
                    </select>

                    {/* GENDER */}
                    <label
                      htmlFor="gender"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Gender
                    </label>
                    <select
                      name="gender"
                      onChange={handlerCreateCharacter}
                      className="select w-full max-w-xs"
                    >
                      <option disabled selected>
                        Seleccione un genero
                      </option>
                      <option value={"Female"}>Female</option>
                      <option value={"Male"}>Male</option>
                      <option value={"Genderless"}>Genderless</option>
                      <option value={"unknown"}>unknown</option>
                    </select>

                    {/* SPECIES */}
                    <label
                      htmlFor="species"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Species
                    </label>
                    <select
                      name="species"
                      onChange={handlerCreateCharacter}
                      className="select w-full max-w-xs"
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

                    {/* ORIGIN */}
                    <label
                      htmlFor="origin"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Origin
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input w-full max-w-xs"
                      name="origin"
                      value={character.origin}
                      onChange={handlerCreateCharacter}
                    />

                    {/* LOCATION */}
                    <label
                      htmlFor="location"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Location
                    </label>

                    <input
                      type="text"
                      placeholder="Type here"
                      className="input w-full max-w-xs"
                      name="location"
                      value={character.location}
                      onChange={handlerCreateCharacter}
                    />

                    {/* IMAGE */}
                    <label
                      htmlFor="image"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Sube tu Imagen
                    </label>
                    <input
                      onChange={uploadImage}
                      type="file"
                      className="file-input w-full max-w-xs"
                    />
                  </div>

                  <div className="mt-6">
                    <button onClick={createCharacter} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      Crear
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateForm;

// name,status,species,gender,origin,image,location,created
