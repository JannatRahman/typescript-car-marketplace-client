import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[var(--secondary)] text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold">
            Drive<span className="text-[var(--accent)]">Mart</span>
          </h2>

          <p className="mt-4 text-gray-300">
            Discover, compare and buy your dream car from trusted sellers.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="/cars">Cars</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">
            Contact
          </h3>

          <p>Email: support@drivemart.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Dhaka, Bangladesh</p>
        </div>

      </div>

      <div className="border-t border-gray-700 py-6 text-center text-sm">
        © {new Date().getFullYear()} DriveMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;