import { connect } from 'react-redux';
import Card from '../Card/Card';
import styles from './Favorites.module.css';


import React from 'react'

const Favorites = (props) => {
    const { myFavorites } = props;
    return (
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
                    origin = {char.origin.name}
                    image = {char.image}
                    />
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps,null)(Favorites)