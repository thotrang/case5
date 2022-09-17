const axios = require('axios')
const customAxios = axios.create({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
    }
})
export default customAxios;