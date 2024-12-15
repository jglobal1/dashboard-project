export default function StatCard({ title, value, color }) {
    return (
      <div className={`p-4 rounded-lg shadow-md ${color}`}>
        <h3 className="text-sm text-gray-100">{title}</h3>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
    );
  }
  