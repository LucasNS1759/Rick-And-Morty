/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import axios from "axios";
const Card = (props) => {

const handlerPostFav = async () =>{
try {
     await axios.post("http://localhost:3001/favorites",{
        name:props.name,
        species : props.species,
        image:props.image,
        nickName :"Lucas"
        
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
  </div>
</div>


  );
};

export default Card;

//  <div
// key={props.key}
// className="flex flex-col justify-center items-center h-[310px] "
// >
// BORDER EXTERIOR
//  <div className="!z-5 relative flex-col rounded-[20px] max-w-[400px] max-h-[400px] bg-clip-border shadow-3xl shadow-shadow-500 flex w-full !p-4 3xl:p-![18px] bg-black undefined transition hover:rotate-180">
//       IMAGE
//   <div className="relative w-full h-full">
//     <img
//       src={props.image}
//       className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
//       alt=""
//     />

//      FAV
//     <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
//       <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
//         <svg
//           stroke="currentColor"
//           fill="currentColor"
//           strokeWidth="0"
//           viewBox="0 0 512 512"
//           height="1em"
//           width="1em"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="32"
//             d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
//           ></path>
//         </svg>
//       </div>
//     </button>
//   </div>

//   <div className=" hover:transform:rotateY(180deg);">

//   </div>

// </div>
// </div>
