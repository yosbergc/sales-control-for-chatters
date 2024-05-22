import { NoSales } from "../NoSales/NoSales"
import { SaleSingle } from "../SaleSingle/SaleSingle"
function Sales ({salesArray, handleDelete}) {
    return (
        <>
        {salesArray.length > 0 ? 
        salesArray.map(sale => <SaleSingle 
        Amount={sale.amount}
        Date={sale.date}
        Hour={sale.hour}
        imgsrc={sale.imgsource}
        key={sale.id}
        ID={sale.id}
        onDelete={handleDelete}
        />) : <NoSales/>}
        </>
    )
}
export { Sales }