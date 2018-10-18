import axios from 'axios';

const URL = 'https://kantinefunctions.azurewebsites.net/';

const instance = axios.create({
    baseURL: URL
});


export default instance;