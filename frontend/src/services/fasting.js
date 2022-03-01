const axios = require("axios")
const {baseURL} = require("../assets/js/config")
const $http = axios.create({
    baseURL
})

const token = localStorage.getItem("token")

export const getAllFastingTypes = () => {
    return $http.get('fasting/types')
}

export const getFastingSummary = () => {
    return $http.get('fasting/summary', {
        headers : { 'x-auth-token' : token }
    })
}

export const getFastingRecent = () => {
    return $http.get('fasting/recent', {
        headers : { 'x-auth-token' : token }
    })
}

export const addFastingData = ({data}) => {
    return $http.post('fasting', data, {
        headers : { 'x-auth-token' : token }
    })
}

