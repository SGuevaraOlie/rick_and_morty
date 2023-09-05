import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './Detail.module.css'
import { useParams } from 'react-router-dom';

const Detail = () => {
    
  const {id} = useParams()

  const [character, setCharacter] = useState({})

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

  return (
    <div className={styles.divDetail}>
      <div className={styles.dataBox}>
        <h2 className={styles.dataName}>{character?.name}</h2>
        <h2 className={styles.data}>Status: {character?.status}</h2>
        <h2 className={styles.data}>Specie: {character?.species}</h2>
        <h2 className={styles.data}>Gender: {character?.gender}</h2>
        <h2 className={styles.data}>Origin: {character.origin?.name}</h2>
      </div>
      <img src={character?.image} alt='' className={styles.img} />
    </div>
  )
}

export default Detail;