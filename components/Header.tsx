'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-zinc-950 border-b border-zinc-800">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <span className="text-lg font-semibold">Adna Fika Agestifanka</span>
        <ul className="flex gap-6">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`hover:text-teal-400 transition-colors ${
                  pathname === href ? 'text-teal-400' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}