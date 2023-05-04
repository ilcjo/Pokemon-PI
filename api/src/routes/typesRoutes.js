const { Router } = require('express')
const { getTypes } = require('../handlers/typesHandler')


const typesRoutes = Router()

typesRoutes.get('/', getTypes)

module.exports = typesRoutes 
