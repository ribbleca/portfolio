import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-white hover:text-gray-300 transition-colors">
            Adna Fika Agestifanka
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}