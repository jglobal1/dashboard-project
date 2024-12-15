import Link from 'next/link';

export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Sales', href: '/sales' },
    { name: 'Customers', href: '/customers' },
    { name: 'Reports', href: '/reports' },
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="p-5 text-lg font-bold">Ball Locker 360</div>
      <nav className="mt-5">
        {menuItems.map((item, index) => (
          <Link href={item.href} key={index}>
            <a className="block px-4 py-2 text-gray-300 hover:bg-gray-700">{item.name}</a>
          </Link>
        ))}
      </nav>
    </div>
  );
}
