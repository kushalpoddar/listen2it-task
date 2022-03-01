const axios = require("axios")
const {baseURL} = require("../assets/js/config")
const $http = axios.create({
    baseURL
})

export const getAllFastingTypes = () => {
    return $http.get('fasting/types')
}

export const getFastingSummary = () => {
    return $http.get('fasting/summary')
}

export const getFastingRecent = () => {
    return $http.get('fasting/recent')
}

export const addFastingData = ({data}) => {
    return $http.post('fasting', data)
}

