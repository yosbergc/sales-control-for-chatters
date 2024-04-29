import React from 'react'
import moment from 'moment';
function useSales({closeModal}) {
    const [sales, setSales] = React.useState([])
    const totalGenerado = React.useMemo(() => {
        return sales.map(sale => Number(sale.Amount)).reduce((acum, val) => acum + val, 0).toFixed(2);
      }, [sales]);
    function handleDelete(id) {
    const newSales = [...sales];
    const element = newSales.findIndex(element => element.ID === id)
    newSales.splice(element, 1);
    setSales(newSales)
    }
    function handleSales({event, quantity, file}) {
        event.preventDefault()
        if (quantity === '' || !file) return
        let newSales = [...sales]
        let actualDate = moment();
        const newSale = {
          Amount: quantity,
          Date: `${actualDate.format('DD-MM-YYYY')}`,
          Hour: `${actualDate.hour()}:${actualDate.minute()}`,
          File: file,
          ID: actualDate.format('YYYYMMDDHHmmss')
        }
        newSales.push(newSale);
        console.log(newSale)
        setSales(newSales);
        closeModal()
    }
    return {sales, totalGenerado, handleDelete, handleSales}
}
export { useSales }