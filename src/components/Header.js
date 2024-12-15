export default function Header() {
    return (
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Clear Cache</button>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      </div>
    );
  }
  