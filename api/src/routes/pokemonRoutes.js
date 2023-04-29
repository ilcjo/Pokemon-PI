const { Router } = require('express');
const {
    getPokemonHandler,
    detailPokemonHandler,
    createPokemonHandler,
    pokemonsByType,
} = require('../handlers/pokemonHandler');

const pokemonsRouter = Router();

pokemonsRouter.get('/', getPokemonHandler);
pokemonsRouter.get('/:id', detailPokemonHandler);
pokemonsRouter.post('/new', createPokemonHandler);
//pokemonsRouter.get('/', pokemonsByType);

module.exports = pokemonsRouter;



