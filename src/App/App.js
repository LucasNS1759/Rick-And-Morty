import "./App.css";
import Nav from "../components/Nav/Nav";
import Cards from "../components/Cards/Cards.jsx";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Abaut from "../components/Abaout/Abaut";
import Detail from "../components/Detail/Detail";
import Form from "../components/Form/Form";
import Error404 from "../components/Error/Error404";
import { useNavigate } from "react-router-dom";
import Favorites from "../components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = "lucashenry@gmail.com";
  const password = "Lucas113356@";
  const navigate = useNavigate();
  const location = useLocation();

  const login = (userData) => {
    if (username === userData.username && password === userData.password) {
      setAccess(true);
      navigate("/home");
    }
  };
  useEffect(() => {
    !access && navigate("/");
  }, []);

  const logOut = (setAccess) => {
    setAccess({
      ...access,
      setAccess: false,
    });
    navigate("/");
  };

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const random = () => {
    fetch(
      `https://rickandmortyapi.com/api/character/${Math.floor(
        Math.random() * 826
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCharacters((oldChars) => [...oldChars, data]);
      });
  };

  return (
    <div className="divPadre">
      {location.pathname !== "/" ? (
        <div className="divNav">
          <Nav
            random={random}
            onSearch={onSearch}
            logOut={logOut}
            setAccess={setAccess}
          />
        </div>
      ) : (
        location.pathname
      )}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/abaout" element={<Abaut />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
