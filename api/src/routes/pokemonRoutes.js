const { Router } = require('express');
const {
    getPokemonsHandler,
    detailPokemonHandler,
    createPokemonHandler,
    // NamePokemon,

} = require('../handlers/pokemonHandler');

const pokemonsRouter = Router();

pokemonsRouter.get('/', getPokemonsHandler);
pokemonsRouter.get('/:id', detailPokemonHandler);
pokemonsRouter.post('/new', createPokemonHandler);
// pokemonsRouter.get('/name', NamePokemon);


module.exports = pokemonsRouter;



