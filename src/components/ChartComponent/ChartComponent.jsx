import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
Chart.register(...registerables)

function ChartComponent ({sales}) {
    const labels = sales.map(singleSale => singleSale.Date);
    const data = {
        labels,
        datasets: [
            {
            data: sales.map(singleSale => singleSale.Amount),
            borderColor: 'BLUE',
            backgroundColor: 'rgba(16, 25, 211, 0.20)',
            fill: true,
            },
        ]
    };
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            },
        }
    };
    return <Line data={data} options={options}/>;
}
export { ChartComponent }