'use strict'; Object.defineProperty(exports, '__esModule', { value: true }); function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } } const _axios = require('axios'); const _axios2 = _interopRequireDefault(_axios)

const userCotroller = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async index (req, res) {
    const { login } = req.body

    const respose = await _axios2.default.get(`https://api.github.com/users/${login}`)

    return res.json(respose.data)
  },

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async listRepos (req, res) {
    const { id } = req.params

    const response = await _axios2.default.get(`https://api.github.com/users/${id}/repos`)

    return res.json(response.data)
  }
}

exports.default = userCotroller
