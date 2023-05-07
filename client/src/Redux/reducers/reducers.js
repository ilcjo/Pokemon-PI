import {
    GET_ALL_POKEMONS,
    NEXT_PAGE,
    PREV_PAGE,
    GET_POKEMON_NAME_ERROR,
    GET_POKEMON_NAME_LOADING,
    GET_POKEMON_NAME_SUCCESS
} from '../actions/ActionsTypes.js'

const initialState = {
    numPage: 1,
    allPokemons: [],
    namePokemons: [],
    loading: false,
    error: null,
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
        case GET_POKEMON_NAME_LOADING:
            return {
                ...state,
                loading: true,
                error: null,

            };
            case GET_POKEMON_NAME_SUCCESS:
            return {
                ...state,
                namePokemons: [payload],
                loading: false,
                error: null,

            };
            case GET_POKEMON_NAME_ERROR:
            return {
                ...state,
                loading: false,
                error: payload,

            };
        default:
            return { ...state }

    }
}

export default rootReducer;