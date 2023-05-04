const { Pokemon } = require ('../db')

const getPokemonBypk= async (id)=> {

  const pokemonByPk =  await Pokemon.findByPk(id);
    return pokemonByPk;

}
 module.exports = getPokemonBypk 
