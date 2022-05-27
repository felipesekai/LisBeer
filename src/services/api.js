import axios from "axios";
import { useQuery } from 'react-query';
import base64 from 'react-native-base64';
import { authApi } from "../../.envi/enviConfig";

const { username, password } = authApi

const authHeader = 'Basic ' + base64.encode(`${username}:${password}`);

const api = axios.create({
    baseURL: "https://lis-beer-api.herokuapp.com",
    headers: {'Authorization': authHeader} 
});

export const getAllBeers = api.get('beers');
export const getStoreById = id => api.get(`stores/${id}`);
export const getAllStore = api.get(`stores`);

// const {data , isFetching } = useQuery("allBeers", 
//     async ()=>{
//         const response = await api.get('beers');

//         return response.data;
//     },
//     {
//         staleTime: 1000 * 60 // 1 minuto
//     }
//     );
