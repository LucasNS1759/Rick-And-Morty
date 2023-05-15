import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const Detail = () => {
  const { id } = useParams();
  console.log(id);

  const [character, setCharacter] = useState("");

  const getDetail = async () => {
    let response = await axios.get(
      `http://localhost:3001/rickandmorty/detail/${id}`
    );

    setCharacter(response.data);
  };

  useEffect(() => {
    getDetail()
    return(()=>{
    setCharacter("")
    })
  }, []);
  return (
    <>
      <div
        className="grid grid-cols-1 min-h-screen "
        style={{
          backgroundImage: `url("/espacioRM.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {character && (
        
          <div className="hero min-h-screen flex flex-col-reverse lg:flex-row justify-center items-center">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={character.image}
                className="max-w-xl rounded-lg shadow-2xl "
              />
              <div className="mr-80 text-white">
                <div>
                  <h1 className="text-5xl font-bold">Name: {character.name}</h1>
                  <ul>
                    <li className="text-3xl font-bold">
                      Status: {character.status}
                    </li>
                    <li className="text-3xl font-bold">
                      species: {character.species}
                    </li>
                    <li className="text-3xl font-bold">
                      gender: {character.gender}
                    </li>
                    <li className="text-3xl font-bold">
                      origin: {character.origin}
                    </li>
                    <li className="text-3xl font-bold">
                      location: {character.location}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          
        )}
      </div>
    </>
  );
};

export default Detail;
