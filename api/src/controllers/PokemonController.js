const axios = require('axios');
const { Pokemon, Type } = require('../db')
const getPokemonBypk = require('./getPokemonByPk')
const getPokemonByApi = require('./getPokemonByApi')

//id,magen,tipo,nombre

const allPokemons = async () => {
    const getdataApi = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=12&offset=24')).data.results
    const getPokemondata = await Promise.all(getdataApi.map(async (e) => {
        const getIntoUrl = await axios(e.url);
        const types = getIntoUrl.data.types.map((type)=> type.type.name).join(', ')
        const getIntoStats = getIntoUrl.data.stats.map((data)=> ({
            stat: data.base_stat,
            name: data.stat.name}) );
         const attack = getIntoStats.find((value) => value.name === 'attack' ).stat;
        return {
            id: getIntoUrl.data.id,
            name: e.name,
            image: getIntoUrl.data.sprites.other['official-artwork'].front_default,
            attack: attack,
            type: types
           // image: getImagNamePokemon.data.sprites.front_default
        }
    }))
    const dataDB = await Pokemon.findAll();
    const allData = [...dataDB, ...getPokemondata];
    return allData;
};
// const allPokemons = async () => {
//     const getdataApi = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=24')).data.results;
  
//     const result = [];
  
//     for (const pokemon of getdataApi) {
//       const getImagNamePokemon = await axios(pokemon.url);
//       const types = [];
//       for (const type of getImagNamePokemon.data.types) {
//         types.push(type.type.name);
//       }
//       const pokemonData = {
//         name: pokemon.name,
//         image: getImagNamePokemon.data.sprites.other['official-artwork'].front_default,
//         types: types.join(', ')
//       };
//       result.push(pokemonData);
//     }
  
//     const dataDB = await Pokemon.findAll();
//     const allData = [...dataDB, ...result];
//     return allData;
//   };
  

const detailPokemon = async (id, source) => {
    const pokemon = source === "API"
        ? await getPokemonByApi(id)
        : await getPokemonBypk(id)
    return pokemon

};

const createPokemon = async (name,
    front_default,
    life,
    attack,
    effect,
    defense,
    speed,
    weight,
) => {

    const newPokemon = Pokemon.create({
        name,
        front_default,
        life,
        attack,
        effect,
        defense,
        speed,
        weight,
    });
    // await newPokemon.addTypeId(typeId)
    return newPokemon

};

module.exports = {
    allPokemons,
    detailPokemon,
    createPokemon,
}
