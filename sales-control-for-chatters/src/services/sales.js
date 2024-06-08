function addSaleToDB(sale, token) {
    return fetch('https://madachatters.nexuspolygon.com/api/sales', {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: sale
    })
    .then(res => res)
    .catch(error => error)
}

function deleteSalefromDB(saleId, token) {
    const object = {
        saleId: saleId
    }
    return fetch('http://localhost:3001/api/sales', {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(object)
    })
    .then(res => res)
    .catch(error => error)
}
export { addSaleToDB, deleteSalefromDB }
