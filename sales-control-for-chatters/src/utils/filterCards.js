import moment from "moment"
import { totalSales } from "../utils/totalSales"
function filterCards(sales) {
    const salesLastHours = totalSales(sales.filter((sale) => moment(sale.SecretDate).isAfter(moment().subtract(8, "hours"))));
    const salesToday = totalSales(sales.filter((sale) => moment(sale.SecretDate).isSame(moment(), "day")));
    const sales7Days = totalSales(sales.filter((sale) => moment(sale.SecretDate).isAfter(moment().subtract(7, "days"))));
    const sales15Days = totalSales(sales.filter((sale) => moment(sale.SecretDate).isAfter(moment().subtract(15, "days"))));
    const sales30Days = totalSales(sales.filter((sale) => moment(sale.SecretDate).isAfter(moment().subtract(30, "days"))));
    return {salesLastHours, salesToday, sales7Days, sales15Days, sales30Days}
}
export { filterCards }