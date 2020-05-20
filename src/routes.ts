import express from 'express'

import userCotroller from './controllers/userController'

const routes = express.Router()

routes.post('/', userCotroller.index)
routes.get('/list/:id', userCotroller.listRepos)

export default routes
