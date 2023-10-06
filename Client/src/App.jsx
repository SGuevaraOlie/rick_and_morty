// Styles
import './App.css';
// Hooks
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
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
import { removeFav } from './redux/actions';



function App() {

   const Dispatch = useDispatch();

   const {pathname} = useLocation()

   // Cards state
   const [characters, setCharacters] = useState([])
   const navigate = useNavigate();

   // Login
   const [access, setAccess] = useState(false);

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const logout = () => {
      setAccess(false);
      navigate(PATHROUTES.LOGIN);
   }
   
   const onSearch = async (id) => {
      if (isNaN(id) || id <= 0 || id > 826) {
         window.alert('¡No hay personajes con este ID!')
      }
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            if (!characters.find((char) => char.id === data.id)){
               setCharacters((oldChars) => [... oldChars, data]);
            } else {
               window.alert('Este personaje ya está en la lista')
            }
         }
      } catch (error) {
         console.log(error);
      }
   }

   const onRandomSearch = () => {
      const randomId = Math.floor(Math.random()*826)
      onSearch(randomId);
   }

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => {
            return char.id !== id
         })
      );
      Dispatch(removeFav(id))
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
