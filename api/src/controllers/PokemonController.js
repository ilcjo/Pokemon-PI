const axios = require('axios');
const { Pokemon, Type } = require('../db')
const getPokemonBypk = require("./getPokemonByPk")
const getPokemonByApi = require("./getPokemonByApi")


const URL_TYPE = 'https://pokeapi.co/api/v2/type';


//id,magen,tipo,nombre
const findAllPokemon = async () => {
    const dataApi = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1500')).data.results
    const dataDB = await Pokemon.findAll();
    const allData = [...dataApi, ...dataDB]
    return allData
};

//stat -> defensa 
//vida hp.state
//git@github.com:ilcjo/Pokemon-PI.git
const findDetailPokemon = async (id, source) => {

    const pokemon = source === "API"
        ? await getPokemonByApi(id)
        : await getPokemonBypk(id);

    return pokemon

};

//validacion que sean sin espacio, 
//que sean todas en lowercase al entrar el dato,
const findNamePokemons = async (name) => {
    const pokemons = findAllPokemon
    const pokeFiltered = pokemons.filter((pokemon) => 
    (pokemon.name).toLowerCase().trim() === name.toLowerCase().trim());
    return pokeFiltered

};

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

//  const findTypePOkemon = async () => { };


module.exports = {
    findAllPokemon,
    findNamePokemons,
    findDetailPokemon,
    createPokemon,

}
