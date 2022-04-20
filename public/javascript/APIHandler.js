
class APIHandler {

  constructor(baseURL) {
    this.axiosApp = axios.create({
      baseURL: "https://minions-api.herokuapp.com/"
    })
  }

  getFullList() {
    return this.axiosApp.get('/characters')
  }

  getOneRegister = (minionId) => {
    return this.axiosApp.get(`/characters/${minionId}`)
  }

  createOneRegister = (minionInfo) => {
    return this.axiosApp.post('/characters', minionInfo);
  }

  updateOneRegister = (minionId, minionInfo) => {
    return this.axiosApp.put(`/characters/${minionId}`, minionInfo);
  }

  deleteOneRegister(minionId) {
    return this.axiosApp.delete(`/characters/${minionId}`);
  }
}
