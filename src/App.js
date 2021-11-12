  
import React, {useState} from 'react';
import { Line } from 'react-chartjs-2';
import './App.css';

const App = () => {

  const [chartData, setChartData] = useState(null)

  const data = {
    labels: ['2000', '2005', '2010', '2015', '2020', '2025'],
    datasets: [
      {
        label: 'Votes',
        data: [1300, 1400, 1325, 1475, 1550, 1475],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Male',
        data: [650, 650, 700, 825, 875, 775],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Female',
        data: [650, 750, 625, 650, 675, 700],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Childs',
        data: [200, 250, 275, 225, 250, 275],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Total People',
        data: [1500, 1650, 1600, 1700, 1800, 1750],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: {
        beginAtZero: false
      }
    }
  };

  const toggleLegends = (data) => {
    let newData = {...data}
    newData.datasets.forEach((test) => data.hidden = true);
    setChartData.update(newData)
    console.log(test)
  };



  return (
    <div className="App">
    <div className='header'>
      <h1 >Line Chart</h1>
    </div>
    <div className="chart">
      <div>
        <input type="checkbox" onClick={() => toggleLegends({...chartData})}/>
        <label>Select Check box to unselect legends</label>
      </div>
      <Line
        data={data}
        options={options}
      />
    </div>

  </div>
  )
  
   
  };

export default App;
