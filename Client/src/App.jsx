import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import LandinPage from "./components/LandinPage/LandinPage";
import Form from "./components/Form/Form";
import Favorite from "./components/Favorites/Favorites";
import Login from "./components/Form/Login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Nav/NavBar";
import CreateForm from "./components/FormCharacter/CreateForm";
import Profile from "./components/Profile/Profile";
import Detail from "./components/Detail/Detail";


function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let token = window.localStorage.getItem("token");
    if (token) {
      if (location.pathname === "login" || location.pathname === "singUp") {
        navigate("home");
      }
    }
    if (!token) {
      if (location.pathname !== "login" || location.pathname !== "singUp") {
        return;
      }
    }
  }, [location.pathname, navigate]);

  return (
    <main className="grid grid-cols-1 min-h-screen">
      {/* RUTAS "PROTEGIDAS" PARA USUARIOS LOGUEADOS */}
      {location.pathname !== "/login" &&
        location.pathname !== "/singUp" &&
        location.pathname !== "/" && <NavBar />}

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<LandinPage />} />
        <Route path="/Favorites" element={<Favorite />} />
        <Route path="/Login" element={<Form />} />
        <Route path="/singUp" element={<Login />} />
        <Route path="/CreateCharacter" element={<CreateForm/>} />
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Detail/:id" element={<Detail/>}/>
        
        
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
