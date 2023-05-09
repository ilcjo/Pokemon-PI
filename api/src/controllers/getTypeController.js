const axios = require('axios')
const { Type } = require('../db.js')

const createTypesDb = async () => {

    // Hacer una llamada a la API de PokéAPI para obtener los tipos de Pokémon
    const response = await axios.get('https://pokeapi.co/api/v2/type')
    console.log(response)
    const types = response.data.results;
    //mapear en type y obtener el array de las propiedad name
    const typeData = types.map((type) => ({name: type.name}));
    // console.log(typeData)
    // const array = []
    // for( let type of typeData){
    //     const result = await Type.create(type)
    //     array.push(result)
    // }
    // return array
    return await Type.bulkCreate(typeData)
}

module.exports = { createTypesDb }