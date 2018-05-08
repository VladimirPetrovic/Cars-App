import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/'

export default class CarsService {
    getAll() {
        return axios.get('cars')
    }
}

export const carsService = new CarsService()