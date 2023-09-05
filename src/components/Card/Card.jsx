import React from "react";
import styles from "./Card.module.css"
import { Link } from "react-router-dom";

const Card = (props) => {
   const {id, name, status, species, gender, origin, image, onClose} = props
   return (
      <div className={styles.div}>
         <button onClick={() => onClose(id)} className={styles.btn}>X</button>
         <img src={image} className={styles.image} alt='' />
         <Link to={`/detail/${id}`}className={styles.linkName}><h2 className={styles.name}>{name}</h2></Link>
      </div>
   );
}

export default Card;