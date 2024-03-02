import axios from 'axios'

const URL = 'http://localhost:8080/watches';
const url='/get?page=${currentPage}&size=${itemsPerPage}'
class ApiService{

    getAllWatchs(){
        return axios.get(URL)
    }
    getWatchsPage(){
        return axios.get(URL+url);
    }

    createWatch(watch){
        return axios.post(URL,watch)
    }

    getWatchById(watchId){
        return axios.get(URL + '/' + watchId);
    }

    updateWatch(watchId, watch){
        return axios.put(URL + '/' +watchId, watch);
    }

    deleteWatch(watchId){
        return axios.delete(URL + '/' + watchId);
    }
    deleteAllWatch(watchId){
        return axios.delete(URL);
    }
}

export default new ApiService();