const axios = require('axios')
export const customAxios = axios.create({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
})
export const checkToken = () => {
    let token = JSON.parse(localStorage.getItem('accessToken'));
    if(token){
        return true
    }else{
        return false
    }
}
