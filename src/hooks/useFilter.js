import { useState, useEffect } from "react"
import moment from "moment"
function useFilter ({sales}) {
    const [filters, setFilters] = useState({
        today: true,
        last7: false,
        last15: false,
        last30: false
    })
    const [filteredSales, setFilteredSales] = useState([])

    useEffect(() => {
        let filtered = sales;
        if (filtered.length === 0) return
        if (filters.today) {
          filtered = sales.filter((sale) =>
            moment(sale.SecretDate).isSame(moment(), "day")
          );
        } else if (filters.last7) {
          filtered = sales.filter((sale) =>
            moment(sale.SecretDate).isAfter(moment().subtract(7, "days"))
          );
        } else if (filters.last15) {
          filtered = sales.filter((sale) =>
            moment(sale.SecretDate).isAfter(moment().subtract(15, "days"))
          );
        } else if (filters.last30) {
          filtered = sales.filter((sale) =>
            moment(sale.SecretDate).isAfter(moment().subtract(30, "days"))
          );
        }
        setFilteredSales(filtered);
      }, [sales, filters])

    return {filters, filteredSales, setFilters}
}
export {useFilter}