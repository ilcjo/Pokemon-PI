const axios = require('axios');
const { Pokemon, Type } = require('../db')
const getPokemonBypk = require('./getPokemonByPk')
const getPokemonByApi = require('./getPokemonByApi')

//id,magen,tipo,nombre

const allPokemons = async () => {
    const getdataApi = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=24&offset=24')).data.results
    const promises = [];
    for(let data of getdataApi) {
        promises.push(axios(data.url))
    }
    console.log("holi2")
    let values = []
    for (let promise of promises){
        const value = await promise
        console.log(value)
        values.push(value)

    }
    const pokemosAPI = []
    for(results of values){
        // const getIntoUrl = await axios(data.url);
        const types = results.data.types.map((type)=> type.type.name).join(', ')
        const getIntoStats = results.data.stats.map((data)=> ({
            stat: data.base_stat,
            name: data.stat.name}) );
         const attack = getIntoStats.find((value) => value.name === 'attack' ).stat;
        pokemosAPI.push({
            id: results.data.id,
            name: results.data.name,
            image: results.data.sprites.other['official-artwork'].front_default,
            attack: attack,
            type: types
           // image: getImagNamePokemon.data.sprites.front_default
        }) 
    }
    // const results = await Promise.all(promises)
    console.log("holi")
    const dataDB = await Pokemon.findAll();
    console.log(dataDB)
    const allData = [...dataDB, ...pokemosAPI];
    return allData;
};

  

const detailPokemon = async (id, source) => {
    const pokemon = source === "API"
        ? await getPokemonByApi(id)
        : await getPokemonBypk(id)
    return pokemon

};


const createPokemon = async (name,
    image,
    life,
    attack,
    effect,
    defense,
    speed,
    weight,
    type
) => {

    const newPokemon = Pokemon.create({
        name,
        image,
        life,
        attack,
        effect,
        defense,
        speed,
        weight,
        type
    });
    
    return newPokemon;

};

module.exports = {
    allPokemons,
    detailPokemon,
    createPokemon,
   // getNamePokemon
}


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