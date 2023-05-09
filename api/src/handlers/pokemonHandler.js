const { 
    allPokemons,
    detailPokemon,
    createPokemon,
    //getNamePokemon,
} = require('../controllers/PokemonController')

//retorna todos los pokemons
//arreglo de objetos
//buscar por nombre pokemon api y DB
//debo pasar req lower case (validation en model) 
//no tenga espacios nombre

const getPokemonsHandler = async (req, res) => {
    try {
        const { name } = req.query
        console.log("holi1")
        const pokemons = await allPokemons();
        
        if (name) {
            const pokemonName = pokemons.filter((pokemon) =>
        (pokemon.name).toLowerCase() === name.toLowerCase())
        res.status(200).json(pokemonName)
            
       }
        else res.status(200).json(pokemons)
    } catch (error) {
        res.status(400).json({ error: error.message })
    
    }
};

//busca por id = ver el detalle 
//api y db validation

const detailPokemonHandler = async (req, res) => {
    const { id } = req.params;
    const source = (isNaN(id)) ? 'DB' : 'API';
    try {
        const getdetail = await detailPokemon(id, source);
        res.status(200).json(getdetail);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

};
// const NamePokemon = async (req, res) => {
//     try {
//         const {name} = req.query
//         const theNamePokemon= await getNamePokemon(name);
//         res.status(200).jason(theNamePokemon)
//     } catch (error) {
//         res.status(400).json({error: error.message})
        
//     }


// }
//crea pokemons nuevos en DB valiadaciones:-no puede esatr API NI DB nombre -error pokemon ya existe  
//EXTRA agregar el tiempo que se creo
const createPokemonHandler = async (req, res) => {
    try {
        const {
            name,
            image,
            life,
            attack,
            effect,
            defense,
            speed,
            weight,
            type
        } = req.body

        const newPokemon = await createPokemon(
            name,
            image,
            life,
            attack,
            effect,
            defense,
            speed,
            weight,
            type );

        res.status(200).json(newPokemon);
    } catch (error) {
        res.status(400).json(  error.message )
        console.log(error.message)
    }
};

//crear en DB tipos de pokemons si estan vacios
 //findAll({include: [{model: Country, attributes: ['id'], through: { attributes: [] }} ]})me o


module.exports = {
    getPokemonsHandler,
    detailPokemonHandler,
    createPokemonHandler,
    //NamePokemon
 
};