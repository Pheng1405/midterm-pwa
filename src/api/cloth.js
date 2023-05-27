import axios from "axios";

const URL = `https://fakestoreapi.com/products?limit=10`;


export const getAllClothes = async () => {
    const {data} = await axios.get(URL);
    return data;
}