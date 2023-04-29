const { findDetailPokemon,
    findAllPokemon,
    createPokemon,
    findNamePokemons,
} = require('../controllers/PokemonController')

//retorna todos los pokemons
//arreglo de objetos
//buscar por nombre pokemon api y DB
//debo pasar req lower case (validation en model) 
//no tenga espacios nombre

const getPokemonHandler = async (req, res) => {
    try {
        const { name } = req.query
        const pokemons = await findAllPokemon();
        console.log(pokemons)
        if (name) {
            const findByName = findNamePokemons()
            res.status(200).json(findByName)
        }
        else res.status(200).json(pokemons)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
};

//busca por id = ver el detalle 
//api y db validation

const detailPokemonHandler = async (req, res) => {
    const { id } = req.params;
    const source = (isNaN(id)) ? 'DB' : 'API';
    try {
        const detailPokemon = await findDetailPokemon(id, source);
        res.status(200).json(detailPokemon);
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }

};

//crea pokemons nuevos en DB valiadaciones:-no puede esatr API NI DB nombre -error pokemon ya existe  
//EXTRA agregar el tiempo que se creo
const createPokemonHandler = async (req, res) => {
    try {
        const {
            name,
            front_default,
            life,
            attack,
            effect,
            defense,
            speed,
            type,
            weight,
        } = req.body

        const newPokemon = await createPokemon(
            name,
            front_default,
            life,
            attack,
            effect,
            defense,
            speed,
            type,
            weight);

        res.status(200).json(newPokemon);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};
/*
//crear en DB tipos de pokemons si estan vacios
const pokemonsByType = async (req, res) => {
    try {
        const { id } = req.params
        const typePokemon = await findTypePOkemon(id)
        res.status(200).json(typePokemon)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};
*/
//pokemons => GET [todos los pokemons] => inicio //pokemon.findAll /Pokemons
//detail 1 pokemon => GET{idPokemon,typeID} params pokemon/detail
//SearchBar => /name?query => GETname// searchPokemon
//CreatePokemon => body => GET[todos los types] //type.findAll /createPokemon
//update => body => put
//deletPokemon => delet => deleter

module.exports = {
    getPokemonHandler,
    detailPokemonHandler,
    createPokemonHandler,
    //pokemonsByType,
};