import axios from "axios";

export default axios.create({
    baseURL: 'https://api.openweathermap.org',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});