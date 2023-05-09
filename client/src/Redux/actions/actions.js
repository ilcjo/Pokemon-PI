import axios from 'axios'
import {
    CREATE_POKEMON,
    FILTER_ALFABETIC,
    FILTER_ASCENDING_DESCENDING,
    FILTER_ATTACK,
    FILTER_TYPES,
    GET_ALL_POKEMONS,
    GET_DETAIL_POKEMON,
    GET_POKEMON_NAME_SUCCESS,
    NEXT_PAGE,
    PREV_PAGE,
    RESET_FILTER,
    SEARCH_POKEMON_NAME
} from './ActionsTypes';


export const getAllPokemons =  () => {
    return async function (dispatch) {
         await axios('http://localhost:3001/pokemons')
            .then((response) => dispatch({ type: GET_ALL_POKEMONS, payload: response.data }))
    };
};

export const getNamePokemons = (name) => {
    console.log(name)
    try {
        return async function (dispatch) {
            console.log(name)
            await axios(`http://localhost:3001/pokemons/?name=${name}`)
                .then((response) => {
                    console.log(response.data)
                    dispatch({ type: GET_POKEMON_NAME_SUCCESS, payload: response.data });

                })
                .catch(error => {
                    console.error(error)
                })
        }
    } catch (error) {
        console.error(error)
    }
};

export const getDetailPokemon =  (id) => {
    return async function (dispatch) {
        await axios(`http://localhost:3001/pokemons/${id}`)
            .then((response) => {
                console.log(response.data);
                dispatch({ type: GET_DETAIL_POKEMON, payload: response.data });
            })
    };
};

export const createPokemon = (inputs) => {
    return async function (dispatch) {
        try {
            const getData = await axios.post('http://localhost:3001/pokemons/new', inputs);
            const response = getData.data;
            dispatch({ type: CREATE_POKEMON, payload: response })
        }

        catch (error) {
            console.error(error)
        }

    }
}

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

export const searchName = (name) => {
    return {
        type: SEARCH_POKEMON_NAME, name
    }
};

