import { useState, useEffect } from 'react';

import './App.css'

//import the chart components
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';
import ChartComponent from './components/ChartComponent';

function App() {
  const [chartData, setChartData] = useState(null);



//Task 4: Fetch Data for Charts
useEffect(() => {
  fetch('public/financial_data.json')
    .then((response) => response.json())
    .then((data) => setChartData(data));
}, []);



//Task 5: Render Charts in the App

//display loading message
if (!chartData) {
  return <div>Loading...</div>;
}

//render the chart components
return (
  <div style={{ textAlign: 'center' }}>
    <h1>Dynamic Charts with React and Chart.js</h1>
    <BarChart data={chartData} />
    <LineChart data={chartData} />
    <ScatterChart data={chartData} />
    <BubbleChart data={chartData} />
  </div>
);
}

export default App
