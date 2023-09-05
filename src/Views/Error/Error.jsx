import React from 'react'
import styles from './Error.module.css'
import { Link } from 'react-router-dom'
import PATHROUTES from '../../helpers/PathRoutes.helper'

const Error = () => {
  return (
    <div className={styles.body}>
      <div className={styles.divText}>
        <h1 className={styles.titulo}>¡Oops!</h1>
        <p className={styles.parrafo}>Parece que te has perdido. ¿Qué intentabas buscar? 🤨</p>
        <p className={styles.parrafo}>Haz clic en este enlace para volver: </p>
        <Link to={PATHROUTES.HOME} className={styles.link}>Llévame al inicio.</Link>
      </div>
      <img src='https://i.ibb.co/VgLtHtK/kisspng-morty-smith-rick-sanchez-nike-clip-art-rick-and-morty-5acbb5710264b6-3117878215232996970098.png' alt='' className={styles.img}></img>
    </div>
  )
}

export default Error