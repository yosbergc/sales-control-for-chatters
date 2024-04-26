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
    {
        "Amount": "80",
        "Date": "2021-01-08",
        "Hour": "09:45"
    },
    {
        "Amount": "175",
        "Date": "2021-01-09",
        "Hour": "16:10"
    },
    {
        "Amount": "60",
        "Date": "2021-01-10",
        "Hour": "10:15"
    }
];

const labels = ventas.map(singleSale => singleSale.Date);

const data = {
    labels,
    datasets: [
        {
        label: 'Ventas de hoy',
        data: ventas.map(singleSale => singleSale.Amount),
        borderColor: 'BLUE',
        backgroundColor: 'BLUE',
        },
    ]
};

const options = {
responsive: true,
plugins: {
    legend: {
    position: 'top',
    },
    title: {
    display: false,

    },
},
};



function ChartComponent () {
    return <Line data={data} options={options}/>;
}
export { ChartComponent }