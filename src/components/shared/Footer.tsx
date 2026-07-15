import Link from "next/link";
import {
  CarFront,
  
 
  
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-28 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-4">
        {/* Brand */}

        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-lg">
              <CarFront size={24} />
            </div>

            <div>
              <h2 className="text-2xl font-black">
                Drive
                <span className="text-[var(--primary)]">
                  Mart
                </span>
              </h2>

              <p className="text-xs uppercase tracking-[0.25em] text-[var(--foreground-muted)]">
                Premium Marketplace
              </p>
            </div>
          </div>

          <p className="mt-6 leading-7 text-[var(--foreground-muted)]">
            Bangladesh's trusted marketplace for buying and selling premium
            vehicles. Discover verified listings with confidence.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#"
              className="rounded-xl border border-[var(--border)] p-3 transition hover:bg-[var(--surface-secondary)]"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="rounded-xl border border-[var(--border)] p-3 transition hover:bg-[var(--surface-secondary)]"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="rounded-xl border border-[var(--border)] p-3 transition hover:bg-[var(--surface-secondary)]"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Navigation */}

        <div>
          <h3 className="mb-6 text-lg font-bold">
            Navigation
          </h3>

          <div className="space-y-4">
            <Link
              href="/"
              className="block text-[var(--foreground-muted)] transition hover:text-[var(--primary)]"
            >
              Home
            </Link>

            <Link
              href="/explore-cars"
              className="block text-[var(--foreground-muted)] transition hover:text-[var(--primary)]"
            >
              Explore Cars
            </Link>

            <Link
              href="/dashboard/add-car"
              className="block text-[var(--foreground-muted)] transition hover:text-[var(--primary)]"
            >
              Sell Your Car
            </Link>

            <Link
              href="/about"
              className="block text-[var(--foreground-muted)] transition hover:text-[var(--primary)]"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="block text-[var(--foreground-muted)] transition hover:text-[var(--primary)]"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Services */}

        <div>
          <h3 className="mb-6 text-lg font-bold">
            Services
          </h3>

          <div className="space-y-4 text-[var(--foreground-muted)]">
            <p>Buy Cars</p>
            <p>Sell Cars</p>
            <p>Verified Listings</p>
            <p>Premium Dealers</p>
            <p>Secure Transactions</p>
          </div>
        </div>

        {/* Contact */}

        <div>
          <h3 className="mb-6 text-lg font-bold">
            Contact
          </h3>

          <div className="space-y-5 text-[var(--foreground-muted)]">
            <div className="flex items-start gap-3">
              <MapPin
                size={18}
                className="mt-1 text-[var(--primary)]"
              />

              <span>
                Dhaka,
                <br />
                Bangladesh
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone
                size={18}
                className="text-[var(--primary)]"
              />

              <span>+880 1234 567890</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail
                size={18}
                className="text-[var(--primary)]"
              />

              <span>support@drivemart.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-[var(--foreground-muted)] md:flex-row">
          <p>
            © {new Date().getFullYear()} DriveMart. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="#"
              className="hover:text-[var(--primary)]"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="hover:text-[var(--primary)]"
            >
              Terms
            </Link>

            <Link
              href="#"
              className="hover:text-[var(--primary)]"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;