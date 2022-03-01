const axios = require("axios")
const {baseURL} = require("../assets/js/config")
const $http = axios.create({
    baseURL
})

export const userLogin = ({data}) => {
    return $http.post('auth', data)
}

export const userRegister = ({data}) => {
    return $http.post('user', data)
}