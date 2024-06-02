async function getUserInformation(token) {
    try {
        const request = await fetch('http://localhost:3001/api/users/single', {
        headers: {
            "Authorization": `Bearer ${token}`
        }
        })
        const response = await request.json()
        return response;
    } catch (error) {
        return error
    }
}
export { getUserInformation }