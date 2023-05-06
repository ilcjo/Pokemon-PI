import {
    GET_ALL_POKEMONS,
    NEXT_PAGE,
    PREV_PAGE,
    GET_POKEMON_NAME,
} from '../actions/ActionsTypes.js'

const initialState = {
    numPage: 1,
    allPokemons: [],
    namePokemons: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: [...state.allPokemons, ...payload]
            };
        case NEXT_PAGE:
            return {
                ...state,
                numPage: state.numPage + 1
            };
        case PREV_PAGE:
            return {
                ...state,
                numPage: state.numPage - 1
            };
        case GET_POKEMON_NAME:
            return {
                ...state,
                namePokemons: [payload]
            };
        default:
            return { ...state }

    }
}

export default rootReducer;