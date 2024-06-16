import { Chart, registerables, Colors } from 'chart.js';
import { Line } from 'react-chartjs-2';
Chart.register(Colors);
import './manychart.css'
Chart.register(...registerables)

function ManyChartComponent({users = [], title}) {
    const labels = users.sales?.map(singleSale => {
        if (filters.today === true) {
            return singleSale.hour;
        } else {
            return singleSale.date;
        }
    });
    const data = {
        labels,
        datasets: users.map(user => {
            return {
                label: user.name,
                data: user.sales.length > 0 ? user.sales.map(singleSale => singleSale.amount) : [0],
                fill: true,
            };
        })
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true
            },
            title: {
                display: false
            },
        }
    };

    return <section className='chart'>
        <h2>Rendimiento de {title}</h2>
        <Line data={data} options={options} className='chartComponent'/>
    </section>
}
export { ManyChartComponent }