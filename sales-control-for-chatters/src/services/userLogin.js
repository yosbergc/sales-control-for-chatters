import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/login'
async function userLogin(username, password) {
    const information = {
        username: username,
        password: password
    }
    const { data } = await axios.post(baseUrl, information)
    return data;
}
export { userLogin }