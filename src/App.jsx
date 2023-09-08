// Styles
import './App.css';
// Hooks
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
// Components
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards.jsx';
import Favorites from './components/Favorites/Favorites';
// Views
import Detail from './Views/Detail/Detail.view';
import About from './Views/About/About.view.jsx'
import Error from './Views/Error/Error';
import Home from './Views/Home/Home.view';
// Helpers
import PATHROUTES from './helpers/PathRoutes.helper';



function App() {

   const {pathname} = useLocation()

   const [characters, setCharacters] = useState([])

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'santiguevara98@gmail.com';
   const PASSWORD = 'proyecto1';

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL){
         setAccess(true);
         navigate(PATHROUTES.HOME);
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const logout = () => {
      setAccess(false);
      navigate(PATHROUTES.LOGIN);
   }
   
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
         {pathname !==  '/' && <Nav onSearch={onSearch} onRandomSearch={onRandomSearch} onLogOut={logout}/>}
         <Routes>
            <Route path={PATHROUTES.LOGIN} element={<Form login={login} />} />
            <Route path={PATHROUTES.HOME} element={<Home />} />
            <Route path={PATHROUTES.BROWSER} element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path={PATHROUTES.ABOUT} element={<About />} />
            <Route path={PATHROUTES.DETAIL} element={<Detail />} />
            <Route path={PATHROUTES.FAVORITES} element={<Favorites />} />
            <Route path='x' element={<Error />} />
         </Routes>
      </div>
   );
}

export default App;
