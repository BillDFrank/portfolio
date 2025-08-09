import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} William Frank. All Rights Reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/about" className="hover:text-primary">About</Link>
        </div>
      </div>
    </footer>
  );
};