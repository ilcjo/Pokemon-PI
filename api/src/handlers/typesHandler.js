const { createTypesDb } = require('../controllers/getTypeController')

const getTypes = async (req, res) => {
    try {
        const createTypesPokemons = await createTypesDb()
        console.log(createTypesDb)
        res.status(200).json(createTypesPokemons)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = { getTypes }

// const getTypes = async (req, res) => {
//     try {
//         const type = await Type.findAll({
//             include: [{ model: Pokemon, attributes: ['id'], through: { attributes: [] } }]
//         })
//         if (type.length === 0) {
//             const typeApi = (await axios.get('https://pokeapi.co/api/v2/type')).data.results
//             const findName = typeApi.map((e) => {
//                 return ({ name: e.name })
//             })
//             const typeDB = await Type.bulkCreate(findName);
//             res.status(200).json(typeDB)
//         }
//     } catch (error) {
//         res.status(404).json(error.message)
//     }

// };