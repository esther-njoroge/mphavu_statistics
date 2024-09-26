// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const StatsChart = ({ label, value }) => {
//   const data = {
//     labels: [label, 'Remaining'],
//     datasets: [
//       {
//         label: label,
//         data: [value, 100 - value],  // Adjust '100' to any value as needed
//         backgroundColor: ['#36A2EB', '#E0E0E0'],
//         hoverBackgroundColor: ['#36A2EB', '#E0E0E0'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     cutout: '80%',  // Makes the chart look more like a ring
//     plugins: {
//       tooltip: { enabled: false },
//       legend: { display: false },
//     },
//   };

//   return (
//     <div style={{ width: '100px', height: '100px' }}>
//       <Doughnut data={data} options={options} />
//       <p>{`${label}: ${value}`}</p>
//     </div>
//   );
// };

// export default StatsChart;






import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// Define the types for the component's props
interface StatsChartProps {
  label: string;
  value: number;
}

const StatsChart: React.FC<StatsChartProps> = ({ label, value }) => {
  const data = {
    labels: [label, 'Remaining'],
    datasets: [
      {
        label: label,
        data: [value, 100 - value],  // Adjust '100' to any value as needed
        backgroundColor: ['#36A2EB', '#E0E0E0'],
        hoverBackgroundColor: ['#36A2EB', '#E0E0E0'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: '80%',  // Makes the chart look more like a ring
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
  };

  return (
    <div style={{ width: '100px', height: '100px' }}>
      <Doughnut data={data} options={options} />
      <p>{`${label}: ${value}`}</p>
    </div>
  );
};

export default StatsChart;

