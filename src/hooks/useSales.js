import React from 'react'
import moment from 'moment';
import { addSaleToDB } from '../services/sales';
import { userContext } from '../context/userContext';
import { useContext } from 'react';
function useSales({closeModal}) {
    const { user } = useContext(userContext)
    const [sales, setSales] = React.useState([])
    const totalGenerado = React.useMemo(() => {
        return sales.map(sale => Number(sale.amount)).reduce((acum, val) => acum + val, 0).toFixed(2);
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
          amount: quantity,
          date: `${actualDate.format('DD-MM-YYYY')}`,
          hour: `${actualDate.hour()}:${actualDate.minute()}`,
          File: file,
          imgsource: '',
          SecretDate: actualDate
        }

        const formData = new FormData()
        formData.append("amount", newSale.amount)
        formData.append("date", newSale.date)
        formData.append("hour", newSale.hour)
        formData.append("uploadImage", newSale.File)

        addSaleToDB(formData, user.token)
        .then(res => {
          if (res.ok) {
            res.json().then(response => {
              newSale.imgsource = response.imgsource
              newSale.ID = response.id
              newSales.push(newSale);
              setSales(newSales);
              closeModal()
            })
          }
        })
        .catch(error => {

        })
        
    }
    function gotSales(saleList) {
      setSales(saleList)
    }
    return {sales, totalGenerado, handleDelete, handleSales, gotSales}
}
export { useSales }