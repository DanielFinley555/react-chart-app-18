import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
    const lineChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Sales',
          data: data.sales,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    const lineChartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      return <ChartComponent type="bar" data={lineChartData} options={lineChartOptions} />;
    };

    export default LineChart;