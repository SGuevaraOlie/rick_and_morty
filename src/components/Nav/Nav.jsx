import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import PATHROUTES from '../../helpers/PathRoutes.helper';



const Nav = (props) => {

  const {onSearch,onRandomSearch} = props;

  return (
    <div className={styles.navBar}>
      <Link to={PATHROUTES.HOME} className={styles.linkHome}><h1 className={styles.titulo}>Rick and Morty API</h1></Link>
      <Link to={PATHROUTES.BROWSER} className={styles.linkBrowser}>Browser</Link>
      <Link to={PATHROUTES.ABOUT} className={styles.linkAbout}>About me</Link>
      <Routes>
      <Route path={PATHROUTES.BROWSER} element={<SearchBar onSearch={onSearch} onRandomSearch={onRandomSearch}/>} />
      </Routes>
    </div>
  )
}

export default Nav