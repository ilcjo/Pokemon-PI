import axios from 'axios'

export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREV_PAGE = 'PREV_PAGE'

export const getAllPokemons = () => {
    return function (dispatch) {
        return axios('http://localhost:3001/pokemons')
        .then((response) => dispatch({ type: GET_ALL_POKEMONS, payload: response.data }))
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
