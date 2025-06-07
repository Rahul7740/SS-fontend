import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70  dark:bg-neutral-900/70 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-600">
          <img src="/assets/images/main_logo.png" alt="logo" className="w-14 h-14" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`transition ${
                  isActive
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-800 dark:text-gray-200 hover:text-red-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-neutral-900 border-t dark:border-neutral-700">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`transition ${
                    isActive
                      ? "text-red-600 font-semibold"
                      : "text-gray-800 dark:text-gray-200 hover:text-red-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
