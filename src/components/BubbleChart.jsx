import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
    const bubbleChartData = {
      labels: data.sales,
      datasets: [
        {
          label: 'Sales, Profits, and Expenses',
          data: data.profits,
          //changing the color for the line chart to make it stand out
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    const bubbleChartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
    };

    export default BubbleChart;

//was not able to figure out how to include the 3rd varaible of expenses a long with sales and profits.
//so the bubble chart only has 2 variables instead of 3.