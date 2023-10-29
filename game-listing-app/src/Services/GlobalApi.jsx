import axios from "axios"

const key="f69a185005cd40749e8ef7c0324f9e18"
const axiosCreate = axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key)
const getAllGames=axiosCreate.get('/games?key='+key)
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)
export default{
    getGenreList,
    getAllGames,
    getGameListByGenreId
}

