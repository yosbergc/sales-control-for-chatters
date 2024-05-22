function addSaleToDB(sale, token) {
    return fetch('http://localhost:3000/api/sales', {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: sale
    })
    .then(res => res)
    .catch(error => error)
}
export { addSaleToDB }