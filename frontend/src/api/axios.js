import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3500'
    //baseURL: 'https://lichtheky-backend.onrender.com'
});