function totalSales(sales){
    return sales.map(sale => Number(sale.amount)).reduce((acum, val) => acum + val, 0).toFixed(2);
}
export { totalSales }