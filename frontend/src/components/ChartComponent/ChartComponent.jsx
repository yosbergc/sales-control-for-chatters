import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
Chart.register(...registerables)

const ventas = [
    {
        "Amount": "100",
        "Date": "2021-01-01",
        "Hour": "09:00"
    },
    {
        "Amount": "50",
        "Date": "2021-01-02",
        "Hour": "14:30"
    },
    {
        "Amount": "200",
        "Date": "2021-01-03",
        "Hour": "11:15"
    },
    {
        "Amount": "75",
        "Date": "2021-01-04",
        "Hour": "13:45"
    },
    {
        "Amount": "120",
        "Date": "2021-01-05",
        "Hour": "10:30"
    },
    {
        "Amount": "90",
        "Date": "2021-01-06",
        "Hour": "15:20"
    },
    {
        "Amount": "150",
        "Date": "2021-01-07",
        "Hour": "12:00"
    },
];

const labels = ventas.map(singleSale => singleSale.Date);

const data = {
    labels,
    datasets: [
        {
        data: ventas.map(singleSale => singleSale.Amount),
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



function ChartComponent () {
    return <Line data={data} options={options}/>;
}
export { ChartComponent }