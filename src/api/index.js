import axios from 'axios'
const URL = 'https://api.themoviedb.org/3/movie/'
const key = '3d88b65410f9e6257e2fd017134190b8'


export const ApiAll = {
    getUpcoming(type, params) {
        return axios.get(`${URL}${type}?api_key=${key}`, {params})
    },
    getToprated(type, params) {
        return axios.get(`${URL}${type}?api_key=${key}`, {params})
    },
    getPopular(type, params) {
        return axios.get(`${URL}${type}?api_key=${key}`, {params})
    },
    getNowplaying(type, params) {
        return axios.get(`${URL}${type}?api_key=${key}`, {params})
    },
    getDetail(IdMovie) {
        return axios.get(`${URL}${IdMovie}?api_key=${key}`)
    },
    getCast(IdMovie) {
        return axios.get(`${URL}${IdMovie}/credits?api_key=${key}`)
    },
    getTrailer(IdMovie) {
        return axios.get(`${URL}${IdMovie}/videos?api_key=${key}`)
    },
    getSearch(params) {
        return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}`, {params})
    }
}