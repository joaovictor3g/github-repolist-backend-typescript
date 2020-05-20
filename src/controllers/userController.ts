import axios from 'axios'

const userCotroller = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async index (req, res) {
    const { login } = req.body

    const respose = await axios.get(`https://api.github.com/users/${login}`)

    return res.json(respose.data)
  },

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async listRepos (req, res) {
    const { id } = req.params

    const response = await axios.get(`https://api.github.com/users/${id}/repos`)

    return res.json(response.data)
  }
}

export default userCotroller
