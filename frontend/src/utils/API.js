import axios from './defaultAxios'

const getLoans = (query) => {
    return axios.get(`/data/?string=${query}`, {
        timeout: 5000
    })
}
const getLoansByID = (id) => {

  return axios.get(`/loanSearch/${id}`, {
      timeout: 5000
  })
}

const APIUtil = {
    getLoans,
    getLoansByID
}
export default APIUtil