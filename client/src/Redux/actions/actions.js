import axios from 'axios'
import {
    GET_ALL_POKEMONS,
    GET_POKEMON_NAME,
    NEXT_PAGE, 
    PREV_PAGE
} from './ActionsTypes';


export const getAllPokemons = () => {
    return function (dispatch) {
        return axios('http://localhost:3001/pokemons')
            .then((response) => dispatch({ type: GET_ALL_POKEMONS, payload: response.data }))
    };
};

export const getNamePokemons = (name) => {
    return function (dispatch) {
        return axios(`http://localhost:3001/pokemons/?name=${name}`)
            .then((response) => dispatch({ type: GET_POKEMON_NAME, payload: response.data }))
            .catch((error) => console.log(error));
    };
};

export const nextPage = () => {
    return {
        type: NEXT_PAGE
    };
};


export const prevPage = () => {
    return {
        type: PREV_PAGE
    };
};
