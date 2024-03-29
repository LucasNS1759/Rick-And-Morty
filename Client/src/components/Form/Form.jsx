import  { useEffect, useState } from "react";


import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    nickName: "",
    password: "",
    password2: "",
    email: "",
  });

  // const [errors, setErrors] = useState({
  //   username: "",
  //   password: "",
  // });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  
  useEffect(() => {
    let token = window.localStorage.getItem("token");
    if (token) {
      navigate("/Home");
    }
    if (!token) {
      return;
    }
  }, [navigate]);



  const hanldlerRegister = async (e) => {
  e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3001/user", {
        nickName: userData.nickName,
        email: userData.email,
        password: userData.password,
      });
      if (response.data) {
        window.alert("usuario registrado con exito");
      }
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label
              htmlFor=""
              className="block mt-3 text-sm text-gray-700 text-center font-semibold"
            >
              Registrate
            </label>
            <form method="#" action="#" className="mt-10">
              {/* NICKNAME */}
              <div>
                <input
                  name="nickName"
                  value={userData.nickName}
                  onChange={(e) => handleInputChange(e)}
                  type="text"
                  placeholder="nickName"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              {/* CORREO ELECTRONICO */}
              <div className="mt-7">
                <input
                  name="email"
                  value={userData.email}
                  onChange={(e) => handleInputChange(e)}
                  type="email"
                  placeholder="Correo electronico"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              {/* PASSWORD */}
              <div className="mt-7">
                <input
                  name="password"
                  value={userData.password}
                  onChange={(e) => handleInputChange(e)}
                  type="password"
                  placeholder="Contraseña"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              {/* PASSWORD */}
              <div className="mt-7">
                <input
                  name="password2"
                  value={userData.password2}
                  onChange={(e) => handleInputChange(e)}
                  type="password"
                  placeholder="Confirmar contraseña"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <button
                  onClick={(e)=>hanldlerRegister(e)}
                  className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Registrar
                </button>
              </div>

              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">
                  Registrate con
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <div className="flex mt-7 justify-center w-full">
                <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Facebook
                </button>

                <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Google
                </button>
              </div>

              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2">¿Ya tienes una cuenta?</label>
                  <a
                  
                    href="/singUp"
                    className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    Iniciar sesion
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

