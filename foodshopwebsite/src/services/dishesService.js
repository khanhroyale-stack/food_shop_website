
import axios from "axios"


const apiURL = 'https://67b09b223fc4eef538e7e2d5.mockapi.io/Dishes'

export const getAllDishes = async () => {
    const response = await axios.get(apiURL)
    return response.data
}

export const createDishes = async(dishes) =>{
    const response = await axios.post(apiURL,dishes)
    return response.data;

}