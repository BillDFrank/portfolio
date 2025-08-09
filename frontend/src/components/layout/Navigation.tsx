'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`transition-colors hover:text-text-primary ${
            pathname === item.href ? 'text-text-primary' : 'text-text-secondary'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};