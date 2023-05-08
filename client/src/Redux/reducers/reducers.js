
import * as action from '../actions/ActionsTypes'


const initialState = {
    numPage: 1,
    allPokemons: [],
    namePokemons: [],
    pokemonsFilter: [],
    detailPokemon: {},
    loading: false,
    error: null,
   
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case action.GET_DETAIL_POKEMON:
            return {
                ...state,
                detailPokemon: payload

            };
        case action.GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: [...state.allPokemons, ...payload]

            };
        case action.NEXT_PAGE:
            return {
                ...state,
                numPage: state.numPage + 1
            };
        case action.PREV_PAGE:
            return {
                ...state,
                numPage: state.numPage - 1
            };
        case action.GET_POKEMON_NAME_LOADING:
            return {
                ...state,
                loading: true,
                error: null,

            };
        case action.GET_POKEMON_NAME_SUCCESS:
            console.log("Name Pokemons fetched successfully:", payload);
            return {
                ...state,
                namePokemons: [payload],
                loading: false,
                error: null,

            };
        case action.GET_POKEMON_NAME_ERROR:
            return {
                ...state,
                loading: false,
                error: payload,

            };
        case action.FILTER_TYPES:
            const pokemonsOrder = state.allPokemons.filter((pokemon) => pokemon.types.split(',').includes(payload))
            return {
                ...state,

                pokemonsFilter: pokemonsOrder
            };
        case action.FILTER_ASCENDING_DESCENDING:

            const order = payload
            let sortedPokemon
            if (order === 'Ascendente') {
                sortedPokemon = state.allPokemons.sort((a, b) => {
                   if(a.id === b.id) return 0;   
                   return a.id > b.id ? 1 : -1
                })
            }
            else if (order === 'Descendente') {
                sortedPokemon = state.allPokemons.sort((a, b) =>{
                    if(a.id === b.id) return 0 
                    return a.id < b.id? 1 : -1
                } )
            } else {
                sortedPokemon = state.allPokemons; // hacer una copia de la lista original
              }
        
            return {
                ...state,

                pokemonsFilter: sortedPokemon
            };
            case action.FILTER_ALFABETIC:

                const alfabetic = payload
                let sortAlfaPokemon
                if (alfabetic === 'AZ') {
                    sortAlfaPokemon = state.allPokemons.sort((a, b) => {
                       if(a.name === b.name) return 0;   
                       return a.name> b.name ? 1 : -1
                    })
                }
                else if (alfabetic === 'ZA') {
                    sortAlfaPokemon = state.allPokemons.sort((a, b) =>{
                        if(a.name === b.name) return 0 
                        return a.name < b.name? 1 : -1
                    } )
                } else {
                    sortAlfaPokemon = [...state.allPokemons] // hacer una copia de la lista original
                }
            
                return {
                    ...state,
    
                    pokemonsFilter: sortAlfaPokemon
                };
                case action.FILTER_ATTACK:
                    
                let HigherAttack = state.allPokemons.sort((a, b) => b.attack - a.attack )
                        
                return {
                    ...state,
                    pokemonsFilter: HigherAttack
                };   

        case action.RESET_FILTER:

            return {
                ...state,
                pokemonsFilter: [...state.allPokemons]
            };

        default:
            return { ...state }

    }
}

export default rootReducer;


 // const pokemonAscDec = state.allPokemons.sort((a, b) => {
            //     if (a.id > b.id) {
            //         return 'Ascendente' === payload ? 1 : -1
            //     }
            //     if (a.id > b.id) {
            //         return 'Descendente' === payload ? 1 : -1
            //     }
            //     return 0
            // })