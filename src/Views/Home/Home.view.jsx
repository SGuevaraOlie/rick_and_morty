import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import PATHROUTES from '../../helpers/PathRoutes.helper'

const Home = () => {
  return (
    <div className={styles.body}>
        <h1 className={styles.titulo}>¡Bienvenidos!</h1>
        <p className={styles.parrafo}>En esta página web, podrás consultar la base de datos de personajes correspondientes al universo de Rick & Morty.</p>
        <p className={styles.parrafo}>Para comenzar tu búsqueda, dirígete a:</p>
        <Link to={PATHROUTES.BROWSER} className={styles.link}>Browser</Link>
        <p className={styles.parrafo}>Si deseas obtener información sobre mí y mis proyectos, dirígete a:</p>
        <Link to={PATHROUTES.ABOUT} className={styles.link}>About me</Link>
    </div>
  )
}

export default Home
