import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/models'

async function getModels(token) {
    const { data } = await axios.get(baseUrl, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    return data;
}
export { getModels }