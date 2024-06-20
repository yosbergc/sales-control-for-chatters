import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/users'

async function getUsers(token) {
    const { data } = await axios.get(baseUrl, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    return data;
}
async function updateUser(token, userId, newInfo) {
    if (!token || !userId || !newInfo) return;
    const information = {
        userId,
        newInfo
    }
    const { data } = await axios.post(baseUrl, information, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    return data;
}
export { getUsers, updateUser }