import Link from 'next/link'; // Import Link from next/link

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50">
      <div className="max-w-sm mx-auto flex justify-center items-center px-8 py-4">
        <div className="flex space-x-6 items-center">
          <Link href="/" className="text-white hover:text-blue-300 transition">HOME</Link>
          <Link href="/training" className="text-white hover:text-blue-300 transition">ONLINE PERSONAL TRAINING</Link>
          <Link href="/reviews" className="text-white hover:text-blue-300 transition">REVIEWS & TESTIMONIALS</Link>
          <Link href="/One" className="text-white hover:text-blue-300 transition">ONE ON ONE</Link>
          <Link href="/consultation" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
             BOOK CONSULTATION
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
