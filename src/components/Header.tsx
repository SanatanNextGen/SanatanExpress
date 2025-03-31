import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg transform hover:scale-105 transition-all duration-500">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.jpeg"
            alt="Sanatan Express Logistics Logo"
            className="h-20 object-contain" // Adjusted for better responsive sizing
            width={128}
            height={128}
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-blue-800 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-md transform hover:bg-blue-600 hover:shadow-lg hover:translate-y-1"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-gray-600 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-md transform hover:bg-blue-600 hover:shadow-lg hover:translate-y-1"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-md transform hover:bg-blue-600 hover:shadow-lg hover:translate-y-1"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-md transform hover:bg-blue-600 hover:shadow-lg hover:translate-y-1"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none transition-transform duration-300 transform hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            } bg-gray-600 w-6 h-1 mb-2`}
          />
          <span
            className={`block transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            } bg-gray-600 w-6 h-1`}
          />
          <span
            className={`block transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            } bg-gray-600 w-6 h-1 mt-2`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out transform ${
          isMenuOpen
            ? "max-h-screen translate-y-0 opacity-100"
            : "max-h-0 translate-y-10 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4 pb-4">
          <a
            href="#"
            className="text-blue-800 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-md transform hover:bg-blue-600 hover:shadow-lg hover:translate-y-1"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-gray-600 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-md transform hover:bg-blue-600 hover:shadow-lg hover:translate-y-1"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-md transform hover:bg-blue-600 hover:shadow-lg hover:translate-y-1"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-md transform hover:bg-blue-600 hover:shadow-lg hover:translate-y-1"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
