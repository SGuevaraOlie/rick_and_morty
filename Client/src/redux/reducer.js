import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions"
import axios from 'axios';

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };
        case REMOVE_FAV:
            return { ...state, myFavorites: payload };
        case FILTER:
            return { ...state, myFavorites: action.payload === "All" ? [...state.allCharacters] : state.allCharacters.filter((char) => char.gender === action.payload)}
        case ORDER:
            return { ...state, myFavorites: state.allCharacters.sort((a,b) => {
                if (action.payload === "A") return a.id - b.id;
                else if (action.payload === "D") return b.id - a.id;
                else return 0;
            })}
        default:
            return {...state}
    }
}

export default rootReducer;