import {
    GET_ALL_POKEMONS, NEXT_PAGE, PREV_PAGE
} from '../actions/actions'

const initialState = {
    numPage: 1,
    allPokemons: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: payload
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
        default:
            return { ...state }

    }
}

export default rootReducer;