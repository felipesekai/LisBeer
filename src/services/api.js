import axios from "axios";
import { useQuery } from 'react-query';
import base64 from 'react-native-base64';
// import { authApi } from "../../.envi/enviConfig";
export const authApi = {
    username: 'user',
    password: 'password'
}
const { username, password } = authApi

const authHeader = 'Basic ' + base64.encode(`${username}:${password}`);

const api = axios.create({
    // baseURL: "https://lis-beer-api.herokuapp.com",
    baseURL: "http://dapi-lis-beer.us-east-1.elasticbeanstalk.com",
});

export const getAllBeers = auth => api.get('beers', {
    headers: {
        "authorization": auth
    }
});
export const getStoreById = (auth, id) => api.get(`stores/${id}`, {
    headers: {
        "authorization": auth
    }
});
export const getAllStore = auth => api.get(`stores`, {
    headers: {
        "authorization": auth
    }
});
export const SignIn = (email, password) => api.post(`users/signin`, JSON.stringify({ email, password }));
export const SignUp = user => api.post(`users/signup`, JSON.stringify(user));

export const getMe = auth => api.get('users/me', {
    headers: {
        "authorization": auth
    }
});

// const {data , isFetching } = useQuery("allBeers",
//     async ()=>{
//         const response = await api.get('beers');

//         return response.data;
//     },
//     {
//         staleTime: 1000 * 60 // 1 minuto
//     }
//     );
