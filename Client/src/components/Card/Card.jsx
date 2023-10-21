import React, { useEffect, useState } from "react";
import styles from "./Card.module.css"
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions"
import { connect } from 'react-redux';

const Card = (props) => {

   const {id, name, image, onClose, addFav, removeFav, myFavorites} = props

   const [isFav, setIsFav] = useState(false);

   const { pathname } = useLocation();
   
   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav(props);
      setIsFav(!isFav);
   };

   useEffect(() => {
      myFavorites.forEach((fav)=>{
         if (Number(fav.id) === Number(props.id)){
            setIsFav(true);
         }
      });
   },[myFavorites]);
   
   return (
      <div className={styles.div}>
         {isFav ? (<button onClick={handleFavorite} className={styles.favBtn}>💚</button>) : (<button onClick={handleFavorite} className={styles.favBtn}>🖤</button>)}
         {pathname !== '/favorites' && <button onClick={() => onClose(id)} className={styles.btn}>X</button>}
         <img src={image} className={styles.image} alt='' />
         <Link to={`/detail/${id}`}className={styles.linkName}><h2 className={styles.name}>{name}</h2></Link>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) => {
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

const mapStateToProps =  (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);