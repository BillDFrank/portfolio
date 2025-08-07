import Link from 'next/link';
import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary-gray bg-primary-dark/95 backdrop-blur supports-[backdrop-filter]:bg-primary-dark/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block text-text-accent">
              William Frank
            </span>
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
};