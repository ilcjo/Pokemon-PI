import axios from 'axios'
import {
    FILTER_ASCENDING_DESCENDING,
    FILTER_ATTACK,
    FILTER_TYPES,
    GET_ALL_POKEMONS,
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
            .then((response) => dispatch({ type: GET_POKEMON_NAME_SUCCESS, payload: response.data }))
            .catch((error) => {
                console.log(error.message)
                dispatch({ type: GET_POKEMON_NAME_ERROR, payload: error.message })
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

export const filterTypes = (type) => {
    return {
        type: FILTER_TYPES,
        payload: type
    }
};

export const filterAttacks = (attack) => {
    return {
        type: FILTER_ATTACK,
        payload: attack
    }
};

export const resent = () => {
    return {
        type: RESET_FILTER
    }
};

export const ascending = (order) => {
    return {
        type: FILTER_ASCENDING_DESCENDING,
        payload: order
    }
};