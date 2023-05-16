import axios from "axios";
import { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  const [characters, setCharacters] = useState("");

  const charactersCreated = async () => {
    try {
      const userId = window.localStorage.getItem("userId");
      const response = await axios.get(
        `http://localhost:3001/rickandmorty/charactersCreated?userId=${JSON.parse(
          userId
        )}`
      );
      if (response.data) {
        setCharacters(response.data);
      }
    } catch (error) {
      window.alert(error.message);
    }
  };

  useEffect(() => {
    charactersCreated();
  }, []);

  return (
    <>
      <div className="heading text-center font-bold text-2xl m-5 text-black-100">
        Personajes Creados
      </div>

      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {characters && characters?.map((character) => {
          return (
            <ProfileCard
              key={character.id}
              id={character.id}
              image={character?.image}
              name={character?.name}
              status={character?.status}
              gender={character?.gender}
              species={character?.species}
              origin={character?.origin}
              location={character?.location}
              setCharacters={setCharacters}
              charactersCreated ={charactersCreated }
              
              
            />
          );
        })}
      </div>
    </>
  );
};

export default Profile;

{
  /* <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
          <img
            className="w-full"
            src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
            alt=""
          />
           <div className="badge absolute top-0 lefth-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded cursor-pointer">
           X
          </div>
          <div className="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded cursor-pointer">
            editar
          </div>

          <div className="desc p-4 text-gray-800">
            <span className="description text-sm block py-2 border-gray-400 mb-2">
              lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
            </span>
          </div>
        </div>
      </div> */
}

// {
/* <div>
<h1>Mis personajes creados</h1>
  {characters &&
    characters.map((character, index) => {
      return (
        <div key={index}>
          <h1>{character?.name}</h1>
          <img src={character?.image} alt="image" />
        </div>
      );
    })}
</div> */
// }

//  <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
//           <img
//             className="w-full"
//             src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
//             alt=""
//           />
//           <div className="badge absolute top-0 right-0 bg-indigo-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
//             10:53
//           </div>
//           <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
//             <span className="mr-1 p-1 px-2 font-bold">105 views</span>
//             <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
//               105 Likes
//             </span>
//             <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
//               105 Dislikes
//             </span>
//           </div>
//           <div className="desc p-4 text-gray-800">
//             <a
//               href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
//               target="_new"
//               className="title font-bold block cursor-pointer hover:underline"
//             >
//               Pubg Mobile Custom Room (Unlimited)
//             </a>
//             <a
//               href="https://www.youtube.com/user/sam14319"
//               target="_new"
//               className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
//             >
//               @dynamo_gaming
//             </a>
//             <span className="description text-sm block py-2 border-gray-400 mb-2">
//               lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
//             </span>
//           </div>
//         </div>

//         <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
//           <img
//             className="w-full"
//             src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
//             alt=""
//           />
//           <div className="badge absolute top-0 right-0 bg-indigo-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
//             10:53
//           </div>
//           <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
//             <span className="mr-1 p-1 px-2 font-bold">105 views</span>
//             <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
//               105 Likes
//             </span>
//             <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
//               105 Dislikes
//             </span>
//           </div>
//           <div className="desc p-4 text-gray-800">
//             <a
//               href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
//               target="_new"
//               className="title font-bold block cursor-pointer hover:underline"
//             >
//               Pubg Mobile Custom Room (Unlimited)
//             </a>
//             <a
//               href="https://www.youtube.com/user/sam14319"
//               target="_new"
//               className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
//             >
//               @dynamo_gaming
//             </a>
//             <span className="description text-sm block py-2 border-gray-400 mb-2">
//               lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
//             </span>
//           </div>
//         </div>

//         <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
//           <img
//             className="w-full"
//             src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
//             alt=""
//           />
//           <div className="badge absolute top-0 right-0 bg-indigo-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
//             10:53
//           </div>
//           <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
//             <span className="mr-1 p-1 px-2 font-bold">105 views</span>
//             <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
//               105 Likes
//             </span>
//             <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
//               105 Dislikes
//             </span>
//           </div>
//           <div className="desc p-4 text-gray-800">
//             <a
//               href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
//               target="_new"
//               className="title font-bold block cursor-pointer hover:underline"
//             >
//               Pubg Mobile Custom Room (Unlimited)
//             </a>
//             <a
//               href="https://www.youtube.com/user/sam14319"
//               target="_new"
//               className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
//             >
//               @dynamo_gaming
//             </a>
//             <span className="description text-sm block py-2 border-gray-400 mb-2">
//               lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
//             </span>
//           </div>
//         </div>
