const axios = require('axios');
const { Pokemon, Type } = require('../db')
const getPokemonBypk = require('./getPokemonByPk')
const getPokemonByApi = require('./getPokemonByApi')

//id,magen,tipo,nombre
const allPokemons = async () => {
    const dataApi = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')).data.results
    const filterPokemon = dataApi.map((e) => {
        return ({
            name: e.name,
        })
    })
    const dataDB = await Pokemon.findAll();
    const allData = [...dataDB, ...filterPokemon];
    return allData;
};

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
