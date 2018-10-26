import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://kantinefunctions.azurewebsites.net/api',
   
});

export default instance;