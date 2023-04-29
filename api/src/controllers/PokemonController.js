const axios = require('axios');
const { Pokemon, Type } = require('../db')
const  getPokemonBypk  = require('./getPokemonByPk')
const getPokemonByApi  = require('./getPokemonByApi')

const URL_TYPE = 'https://pokeapi.co/api/v2/type';
//id,magen,tipo,nombre

const allPokemons = async () => {
    const dataApi = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1500')).data.results
    const dataDB = await Pokemon.findAll();
    const allData = [...dataApi, ...dataDB];
    return allData;
};

const detailPokemon = async (id, source) => {
    const pokemon = source === "API"
        ? await getPokemonByApi(id)
        : await getPokemonBypk(id)
    return pokemon

};

//validacion que sean sin espacio, 
//que sean todas en lowercase al entrar el dato,
// const findNamePokemons = async (name) => {

// const pokemons = await findAllPokemon(name)
// const pokeFiltered = pokemons.filter((pokemon) =>
//     (pokemon.name).toLowerCase() === name.toLowerCase());
// console.log(pokeFiltered)
// return pokeFiltered

// };

const createPokemon = async (name,
    front_default,
    life,
    attack,
    effect,
    defense,
    speed,
    type,
    weight) => {
    const newPokemon = Pokemon.create({
        name,
        front_default,
        life,
        attack,
        effect,
        defense,
        speed,
        type,
        weight
    });
    return newPokemon
};

// const typesPokemons = async () => {
// let types = await Type.findAll();
// if(types.length === 0){
//     const typeApi = (await axios.get(URL_TYPE)).data.results;
//     types = typeApi.map((data) => data.name);
//     await Promise.all(types.map((type) => Type.create({name:type})))
//     console.lof(typeApi)
// }
// return types

// };


module.exports = {
    allPokemons,
    //findNamePokemons,
    detailPokemon,
    createPokemon,
    //typesPokemons
}
