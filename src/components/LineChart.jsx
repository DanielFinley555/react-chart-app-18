//creating Line Chart for Monthly Profits

import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
    const lineChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Profits',
          //changing y axis to profits
          data: data.profits,
          //changing the color for the line chart to make it stand out
          backgroundColor: 'rgba(192, 0, 0, 0.2)',
          borderColor: 'rgba(192, 0, 0, 1)',
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

      //changing chart type to line
      return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;
    };

    export default LineChart;
