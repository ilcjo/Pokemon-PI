const { 
    allPokemons,
    detailPokemon,
    createPokemon,
    //findNamePokemons,
    typesPokemons
} = require('../controllers/PokemonController')



//retorna todos los pokemons
//arreglo de objetos
//buscar por nombre pokemon api y DB
//debo pasar req lower case (validation en model) 
//no tenga espacios nombre

const getPokemonsHandler = async (req, res) => {
    try {
        const { name } = req.query
        const pokemons = await allPokemons();
        console.log(pokemons)
        if (name) {
            const pokemonName = pokemons.filter((pokemon) =>
        (pokemon.name).toLowerCase() === name.toLowerCase())
            res.status(200).json(pokemonName)
            
        }
        else res.status(200).json(pokemons)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.parent.detail })
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
        console.log(error)
        res.status(400).json({ error: error.parent.detail })
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
        res.status(400).json({ error: error.parent.detail })
    }
};

//crear en DB tipos de pokemons si estan vacios
//  const getTypesPokemons = async (req, res) => {
//      try {
//          const typePokemon = await typesPokemons()
//         res.status(200).json(typePokemon)
//     } catch (error) {
//          res.status(400).json({ error: error})
//      }
//  };


module.exports = {
    getPokemonsHandler,
    detailPokemonHandler,
    createPokemonHandler,
   // getTypesPokemons,
};