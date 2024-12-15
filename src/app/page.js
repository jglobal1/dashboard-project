import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';

export default function Dashboard() {
  const pieData = [50, 30, 20]; // Mock data
  const barLabels = ['Category A', 'Category B', 'Category C'];
  const barValues = [100, 200, 150]; // Mock data

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <Header />
        <div className="p-6 grid grid-cols-4 gap-4">
          <StatCard title="Total Customers" value="1" color="bg-purple-500" />
          <StatCard title="Total Orders" value="0" color="bg-blue-500" />
          <StatCard title="Total Product Categories" value="34" color="bg-pink-500" />
          <StatCard title="Total Product Brands" value="12" color="bg-orange-500" />
        </div>
        <div className="p-6 grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <PieChart data={pieData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Category-wise Product Sale</h3>
            <BarChart labels={barLabels} values={barValues} />
          </div>
        </div>
      </div>
    </div>
  );
}
