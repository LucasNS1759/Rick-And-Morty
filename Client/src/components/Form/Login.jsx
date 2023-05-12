import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    nickName: "",
    password: "",
    email: "",
  });

  // const [errors, setErrors] = useState({
  //   username: "",
  //   password: "",
  // });

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/user/login", {
        nickName: userData.nickName,
        email: userData.email,
        password: userData.password,
      });
      console.log(response);
      if (response.data) {
        window.localStorage.setItem(
          "token",
          JSON.stringify(response.data.data.token)
        );
        window.localStorage.setItem(
          "userId",
          JSON.stringify(response.data.data.userId)
        );
        window.localStorage.setItem(
          "nickName",
          JSON.stringify(response.data.data.nickName)
        );

        navigate("/Home");

        return;
      } else window.alert("usuario invalido");
    } catch (error) {
      window.alert(error.message);
    }
  };

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
              inicia sesion
            </label>
            <form className="mt-10">
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

              <div className="mt-7">
                <button
                  onClick={(e) => login(e)}
                  className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  iniciar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
