async function getUsers(token) {
    try {
        const request = await fetch('http://localhost:3001/api/users', {
        headers: {
            "Authorization": `Bearer ${token}`
        }
        })
        const response = await request.json()
        if (request.ok) {
            return response;
        } else {
            throw new Error(response.error);
        }
    } catch (error) {
        console.log(error)
        return new Error(error)
    }
}
export { getUsers }