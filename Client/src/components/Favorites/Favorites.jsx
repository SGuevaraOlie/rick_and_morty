import { connect, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import styles from './Favorites.module.css';
import { filterCards,orderCards } from '../../redux/actions'


import React, { useState } from 'react'

const Favorites = (props) => {
    const dispatch = useDispatch();
    const { myFavorites } = props;

    const [aux, setAux] = useState(false);

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
        setAux(!aux)
    }
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    return (
        <div>
            <div className={styles.selectoresDiv}>
                <select onChange={handleOrder} className={styles.select}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select onChange={handleFilter}className={styles.select}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div className={styles.characters}>
                {myFavorites.map((char) => {
                    return(
                        <Card
                        id = {char.id}
                        key = {char.id}
                        name = {char.name}
                        status = {char.status}
                        species = {char.species}
                        gender = {char.gender}
                        origin = {char.origin}
                        image = {char.image}
                        />
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps,null)(Favorites)