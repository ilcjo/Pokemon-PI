const { Router } = require('express');
const {
    getPokemonsHandler,
    detailPokemonHandler,
    createPokemonHandler,

} = require('../handlers/pokemonHandler');

const pokemonsRouter = Router();

pokemonsRouter.get('/', getPokemonsHandler);
pokemonsRouter.get('/:id', detailPokemonHandler);
pokemonsRouter.post('/new', createPokemonHandler);


module.exports = pokemonsRouter;



