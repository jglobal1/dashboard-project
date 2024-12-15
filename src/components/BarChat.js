import { Bar } from 'react-chartjs-2';

export default function BarChart({ labels, values }) {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Number of Sales',
        data: values,
        backgroundColor: 'rgba(75,192,192,0.4)',
      },
    ],
  };

  return <Bar data={chartData} />;
}
