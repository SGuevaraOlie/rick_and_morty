import React, { useState } from "react";
import styles from "./SearchBar.module.css"


const SearchBar = (props) => {

   const [id, setId] = useState('')

   const {onSearch, onRandomSearch} = props;

   const handleChange = (event) => {
      setId(event.target.value)
   };

   return (
      <div className={styles.divBar}>
         <input type='search' placeholder="Write ID...🔍" onChange={handleChange} value={id} className={styles.inputBar}/>
         <button onClick={() => onSearch(id)} className={styles.btn}>Agregar</button>
         <button onClick={onRandomSearch} className={styles.btnR}>Random</button>
      </div>
   );
}

export default SearchBar;