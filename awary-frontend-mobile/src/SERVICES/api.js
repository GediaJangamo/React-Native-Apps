import axios from 'axios'

const api = axios.create(
    {
       baseURL: "https://awary-backend-production.up.railway.app/" 
    }
)

export default api