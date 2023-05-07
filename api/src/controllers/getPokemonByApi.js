const axios = require('axios');

const getPokemonByApi = async (id) => {

    const response = (await axios(`https://pokeapi.co/api/v2/pokemon/${id}`))
    const { id: pokemonId, name, sprites, stats, weight, height } = response.data;
    const oficialArtWork = sprites.other['official-artwork'].front_default; 
    const filterStats = stats.map((pokemon) => ({
        stat: pokemon.base_stat,
        name: pokemon.stat.name,
    }));

    
    const hp = filterStats.find((stat) => stat.name === 'hp').stat;
    const attack = filterStats.find((stat) => stat.name === 'attack').stat;
    const defense = filterStats.find((stat) => stat.name === 'defense').stat;
    const speed = filterStats.find((stat) => stat.name === 'speed').stat;

    const pokemonFinal = {
        id: pokemonId,
        name,
        image: oficialArtWork,
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