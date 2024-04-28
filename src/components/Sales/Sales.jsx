import { NoSales } from "../NoSales/NoSales"
import { SaleSingle } from "../SaleSingle/SaleSingle"
function Sales ({salesArray, handleDelete}) {
    return (
        <>
        {salesArray.length > 0 ? 
        salesArray.map(sale => <SaleSingle 
        Amount={sale.Amount}
        Date={sale.Date}
        Hour={sale.Hour}
        File={sale.File}
        key={sale.ID}
        ID={sale.ID}
        onDelete={handleDelete}
        />) : <NoSales/>}
        </>
    )
}
export { Sales }