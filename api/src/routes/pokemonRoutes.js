const { Router } = require('express');
const {
    getPokemonsHandler,
    detailPokemonHandler,
    createPokemonHandler,
    getTypesPokemons,
} = require('../handlers/pokemonHandler');

const pokemonsRouter = Router();

pokemonsRouter.get('/', getPokemonsHandler);
pokemonsRouter.get('/:id', detailPokemonHandler);
pokemonsRouter.post('/new', createPokemonHandler);
//pokemonsRouter.get('/type', getTypesPokemons);

module.exports = pokemonsRouter;



