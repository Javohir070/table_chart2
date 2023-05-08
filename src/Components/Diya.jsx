import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
function Diya(props) {
    let user = [1, 2, 3, 4, 3];
    const data = {
        labels: [
          'Red',
          'Green',
          'Yellow',
          'Grey',
          'Blue'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: user,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ]
        }]
      };
     
    return (
        <div className='chart-item' >
            <div className='chart-items'>
                <PolarArea 
                data = {data}>
                </PolarArea>
            </div>
        </div>
    );
}


export default Diya;