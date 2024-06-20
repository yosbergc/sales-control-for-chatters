import moment from "moment"
function filterSales(sales, filters) {
    let filtered = sales;
    if (filtered.length === 0) {
        filtered = [];
    }
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
    return filtered;
}
export { filterSales }