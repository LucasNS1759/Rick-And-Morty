import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from "./components/Home/Home"
import LandinPage from "./components/LandinPage/LandinPage"
import Form from "./components/Form/Form"
import Favorite from "./components/Favorites/Favorites"

function App() {


  return (
    <div  className="min-h-screen min-w-screen ">
    <Routes>
    <Route path='/Home' element={<Home/>} />
    <Route path='/Landin' element={<LandinPage/>} />
    <Route path='/Login' element={<Form/>} />
    <Route path='/Favorites' element={<Favorite/>} />
    
    
    </Routes>
    </div>
  )
}

export default App
