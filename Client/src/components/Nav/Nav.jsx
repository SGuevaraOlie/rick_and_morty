import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import PATHROUTES from '../../helpers/PathRoutes.helper';



const Nav = (props) => {

  const {onSearch,onRandomSearch, onLogOut} = props;

  return (
    <div className={styles.navBar}>
      <div className={styles.containerLinks}>
        <Link to={PATHROUTES.HOME} className={styles.linkHome}><h1 className={styles.titulo}>Rick and Morty API</h1></Link>
        <Link to={PATHROUTES.BROWSER} className={styles.linkBrowser}>Browser</Link>
        <Link to={PATHROUTES.ABOUT} className={styles.linkAbout}>About me</Link>
        <Link to={PATHROUTES.FAVORITES} className={styles.linkFavorites}>Favorites</Link>
      </div>
      <Routes>
      <Route path={PATHROUTES.BROWSER} element={<SearchBar onSearch={onSearch} onRandomSearch={onRandomSearch}/>} />
      </Routes>
      <button onClick={onLogOut} className={styles.btn}>Log Out</button>
    </div>
  )
}

export default Nav