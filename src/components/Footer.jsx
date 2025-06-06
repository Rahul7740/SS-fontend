import { useEffect } from "react";
// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-neutral-700">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Shri Shyam Stone
          </h2>
          <p className="text-sm">
            Premium handcrafted stone chaukhats for homes, temples and more. We
            deliver across India with custom designs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-red-600">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-red-600">
                Products
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-red-600">
                Gallery
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-red-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>📍 Punjab, India</li>
            <li>📞 +91 98765 43210</li>
            <li>📧 info@shreeshyamstone.in</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-red-600">
              🌐
            </a>
            <a href="#" className="hover:text-red-600">
              📷
            </a>
            <a href="#" className="hover:text-red-600">
              📘
            </a>
            <a href="#" className="hover:text-red-600">
              📞
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 text-xs border-t border-gray-300 dark:border-neutral-700">
        © {new Date().getFullYear()} Shri Shyam Stone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
