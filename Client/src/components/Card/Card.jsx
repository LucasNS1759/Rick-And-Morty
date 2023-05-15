/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import axios from "axios";
import { Link } from "react-router-dom";
const Card = (props) => {

const handlerPostFav = async () =>{
try {
  let nickName = window.localStorage.getItem("nickName");
     await axios.post("http://localhost:3001/favorites",{
        name:props.name,
        species : props.species,
        image:props.image,
        nickName :JSON.parse(nickName)
        
        })
} catch (error) {
    window.alert(error.message)
}
}



  return (
    // CONTENEDOR
<div className="group max-w-[400px] max-h-[400px] relative">
  {/* Contenedor de la imagen */}
  <div className="bg-gray-200 rounded-xl overflow-hidden transition-all duration-500 transform-gpu group-hover:rotate-180">
    <img src={props.image} alt={props.name} className="w-full h-full object-cover" />
    {/* Botón de favorito */}
    
  </div>
  {/* Contenedor de los h2 */}
  <div className="bg-gray-800 absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-all duration-500 transform-gpu group-hover:opacity-100">
  <button onClick={()=>handlerPostFav()} className="absolute top-4 right-4 p-2 rounded-full bg-black hover:bg-gray-200">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M10 17.178L3.187 20l1.621-7.493L.36 7.822l7.48-.645L10 1.545l2.16 5.632 7.48.645-4.448 3.685 1.622 7.493z" clipRule="evenodd" />
      </svg>
    </button>
    <h2 className="text-2xl">Name: {props.name}</h2>
    <h2 className="text-lg">Gender: {props.gender}</h2>
    <h2 className="text-lg">Specie: {props.species}</h2>
    <Link to={`/Detail/${props.id}`}>
    <button  className="absolute bottom-2  p-2 rounded-full bg-black hover:bg-gray-200">
     More
    </button>
    </Link>
  </div>
</div>


  );
};

export default Card;

