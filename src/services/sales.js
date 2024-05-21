function addSaleToDB(sale, token) {
    const saleToSend = {
        amount: sale.Amount, 
        imgsource: 'www.google.com', 
        date: sale.Date, 
        hour: sale.Hour
    }
    return fetch('http://localhost:3000/api/sales', {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(saleToSend)
    })
    .then(res => res)
    .catch(error => error)
}
export { addSaleToDB }