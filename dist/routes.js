"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _userController = require('./controllers/userController'); var _userController2 = _interopRequireDefault(_userController);

const routes = _express2.default.Router()

routes.post('/', _userController2.default.index)
routes.get('/list/:id', _userController2.default.listRepos)

exports. default = routes
