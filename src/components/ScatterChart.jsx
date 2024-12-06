import ChartComponent from './ChartComponent';

const ScatterChart = ({ data }) => {
    const scatterChartData = {
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

    const scatterChartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      return <ChartComponent type="bar" data={scatterChartData} options={scatterChartOptions} />;
    };

    export default ScatterChart;