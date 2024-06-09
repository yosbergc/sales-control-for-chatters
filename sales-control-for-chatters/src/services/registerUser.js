import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/users'


async function registerUser(username, password, name, paymentEmail) {
    const information = {
        username: username,
        passwordhash: password,
        name,
        paymentEmail
    }
    const { data } = await axios.post(baseUrl, information)
    return data;
} 
export { registerUser }