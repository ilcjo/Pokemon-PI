const axios = require('axios');
const { Pokemon, Type } = require('../db')
const getPokemonBypk = require('./getPokemonByPk')
const getPokemonByApi = require('./getPokemonByApi')

//id,magen,tipo,nombre
const allPokemons = async () => {
    const getdataApi = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=15')).data.results
    const getPokemondata = await Promise.all(getdataApi.map(async (e) => {
        const getImagNamePokemon = await axios(e.url);
        return {
            name: e.name,
            image: getImagNamePokemon.data.sprites.other['official-artwork'].front_default
        }
    }))
    const dataDB = await Pokemon.findAll();
    const allData = [...dataDB, ...getPokemondata];
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
