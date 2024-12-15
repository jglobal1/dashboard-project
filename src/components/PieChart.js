import { Doughnut } from 'react-chartjs-2';

export default function PieChart({ data }) {
  const chartData = {
    labels: ['Published Products', 'Seller Products', 'Admin Products'],
    datasets: [
      {
        label: 'Products',
        data: data,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return <Doughnut data={chartData} />;
}
