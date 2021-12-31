import axios from "axios";

const api = axios.create({
    baseURL: 'https://61cb30ce194ffe0017788c25.mockapi.io/api/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api;