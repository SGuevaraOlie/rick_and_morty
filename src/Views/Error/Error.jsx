import React from 'react'
import styles from './Error.module.css'
import { Link } from 'react-router-dom'
import PATHROUTES from '../../helpers/PathRoutes.helper'

const Error = () => {
  return (
    <div className={styles.body}>
    <h1 className={styles.titulo}>¡Oops!</h1>
    <p className={styles.parrafo}>Parece que perdiste.</p>
    <p className={styles.parrafo}>¿Que intentabas buscar? 🤨</p>
    <p className={styles.parrafo}>Apretá este enlace para volver. 😒</p>
    <Link to={PATHROUTES.HOME} className={styles.link}>Llevame al inicio.</Link>
    <img src='https://www.pngmart.com/files/3/Rick-And-Morty-PNG-Photos.png' alt='' className={styles.img}></img>    </div>
  )
}

export default Error