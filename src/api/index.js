
import axios from '@/axios.js'
let api={
    getMenuList(){
       return axios.get('api/meituan/index/nav.json')
    },
    getSearchList(){
        return axios.get('/api/meituan/header/search.json')
    },
    getcityList(){
        return axios.get('/api/meituan/city/cityList.json')
    },
    getHotCityList(){
        return axios.get('/api/meituan/city/hot.json')
    },
    getRecentCity(){
        return axios.get('/api/meituan/city/recents.json')
    },
    getProvinceCity(){
        return axios.get('/api/meituan/city/province.json')
    },
    getPosition(){
        return axios.get('/api/meituan/city/getPosition.json')
    }
}

export default api