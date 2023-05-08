import axios from 'axios'
import {
    FILTER_ALFABETIC,
    FILTER_ASCENDING_DESCENDING,
    FILTER_ATTACK,
    FILTER_TYPES,
    GET_ALL_POKEMONS,
    GET_DETAIL_POKEMON,
    GET_POKEMON_NAME_ERROR,
    GET_POKEMON_NAME_LOADING,
    GET_POKEMON_NAME_SUCCESS,
    NEXT_PAGE,
    PREV_PAGE,
    RESET_FILTER
} from './ActionsTypes';


export const getAllPokemons = () => {
    return function (dispatch) {
        return axios('http://localhost:3001/pokemons')
            .then((response) => dispatch({ type: GET_ALL_POKEMONS, payload: response.data }))
    };
};

export const getNamePokemons = (name) => {
    return function (dispatch) {
        dispatch({ type: GET_POKEMON_NAME_LOADING })
        return axios(`http://localhost:3001/pokemons/?name=${name}`)
        .then((response) => {
            dispatch({ type: GET_POKEMON_NAME_SUCCESS, payload: response.data });
            console.log(response.data);
          })
            .catch((error) => {
                console.log(error.message)
                dispatch({ type: GET_POKEMON_NAME_ERROR, payload: error.message })
            })
    };
};

export const getDetailPokemon = (id) => {
    return function (dispatch) {
        return axios(`http://localhost:3001/pokemons/${id}`)
            .then((response) => {
                console.log(response.data);
                dispatch({ type: GET_DETAIL_POKEMON, payload: response.data });
            })
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

export const filterOrder = (order) => {
    return {
        type: FILTER_ASCENDING_DESCENDING,
        payload: order
    }
};

export const filterAlfabetic = (alfabetic) => {
    return {
        type: FILTER_ALFABETIC,
        payload: alfabetic
    }
};
export const filterTypes = (type) => {
    return {
        type: FILTER_TYPES,
        payload: type
    }
};

export const filterAttacks = () => {
    return {
        type: FILTER_ATTACK,
    }
};

export const resetAll = () => {
    return {
        type: RESET_FILTER
    }
};
