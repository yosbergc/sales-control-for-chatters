import { useState, useEffect } from "react"
import { filterSales } from "../utils/filterSales"
function useFilter ({sales}) {
    const [filters, setFilters] = useState({
        today: true,
        last7: false,
        last15: false,
        last30: false
    })
    const [filteredSales, setFilteredSales] = useState([])

    useEffect(() => {
        let filtered = filterSales(sales, filters)
        setFilteredSales(filtered);
      }, [sales, filters])
      
    return {filters, filteredSales, setFilters}
}
export {useFilter}