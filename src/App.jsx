import './App.css';
import {useState} from "react";
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import Detail from './Views/Detail/Detail.view';
import axios from 'axios';
import About from './Views/About/About.view.jsx'
import { Routes, Route } from "react-router-dom";
import PATHROUTES from './helpers/PathRoutes.helper';
import Error from './Views/Error/Error';
import Home from './Views/Home/Home.view';



function App() {

   const [characters, setCharacters] = useState([])
   
   const onSearch = (id) => {
      if (isNaN(id) || id <= 0 || id > 826) {
         window.alert('¡No hay personajes con este ID!')
      }
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            if (!characters.find((char) => char.id === data.id)){
            setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('Este personaje ya está en la lista.');
            }
      }});
   }

   const onRandomSearch = () => {
      const randomId = Math.floor(Math.random()*826)
      onSearch(randomId);
   }

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id)
         })
      )
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} onRandomSearch={onRandomSearch}/>
         <Routes>
            <Route path={PATHROUTES.HOME} element={<Home />} />
            <Route path={PATHROUTES.BROWSER} element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path={PATHROUTES.ABOUT} element={<About />} />
            <Route path={PATHROUTES.DETAIL} element={<Detail />} />
            <Route path='*' element={<Error />} />
         </Routes>
      </div>
   );
}

export default App;
