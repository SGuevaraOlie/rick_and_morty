import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.body}>
      <div className={styles.textBox}>
        <h1 className={styles.titulo}>¡Hola!</h1>
        <p className={styles.parrafo}>Mi nombre es Santiago Guevara Olié y soy estudiante del bootcamp Fullstack Dev de SoyHenry.</p>
        <p className={styles.parrafo}>En este proyecto, aplico mis conocimientos del Módulo 2, centrado en Front-End.</p>
        <p className={styles.parrafo}>Puedes encontrarme en GitHub y LinkedIn:</p>
        <a href='https://github.com/SGuevaraOlie/' target='_blank' className={styles.link}>Mi GitHub</a>
        <a href='https://www.linkedin.com/in/santiago-guevara-olié-aa039a161/' target='_blank' className={styles.link}>Mi Linkedin</a>
      </div>
      <div>
        <img src={'https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png'} alt='' className={styles.imgHenry}></img>
        <img src={'https://i.ibb.co/71xyXjs/Whats-App-Image-2023-04-28-at-21-29-51-1.jpg'} alt='' className={styles.imgYo}></img>
      </div>
    </div>
  )
}

export default About

