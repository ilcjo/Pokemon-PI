const { Router } = require('express');
const pokemonRouter = require('./pokemonRoutes')
// Importar todos los routers; responsabildad de definir routes
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

mainRouter.use('/pokemons', pokemonRouter);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = mainRouter;
