const axios = require('axios');

const getPokemonByApi = async (id) => {

    const response = (await axios(`https://pokeapi.co/api/v2/pokemon/${id}`))
    const { id: pokemonId, name, sprites, stats, weight, height } = response.data;
    const filterStats = stats.map((pokemon) => ({
        stat: pokemon.base_stat,
        name: pokemon.stat.name,
        hp: pokemon.stat.name === 'hp', //? pokemon.base_stat : null,
        attack: pokemon.stat.name === 'attack', //? pokemon.base_stat : null,
        defense: pokemon.stat.name === 'defense', //? pokemon.base_stat : null,
    }));
    console.log(filterStats)
    const { hp, attack, defense, speed } = filterStats[0];

    const pokemonFinal = {
        id: pokemonId,
        name,
        image: sprites.front_default,
        hp,
        attack,
        defense,
        speed,
        weight,
        height,
    };
    return pokemonFinal;

}

module.exports = getPokemonByApi