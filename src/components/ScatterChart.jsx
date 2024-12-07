import ChartComponent from './ChartComponent';

const ScatterChart = ({ data }) => {
    const scatterChartData = {
        //changing x axis to expenses
      labels: data.expenses,
      datasets: [
        {
          label: 'Expenses vs. Profits',
          //changing y axis to profits
          data: data.profits,
          //changing the color for the scatter chart to make it stand out
          backgroundColor: 'rgba(0, 192, 0, 0.2)',
          borderColor: 'rgba(0, 192, 0, 1)',
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

      //changing chart type to scatter
      return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions} />;
    };

    export default ScatterChart;
