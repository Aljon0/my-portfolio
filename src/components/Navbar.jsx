import { Menu, X, Sun, Moon } from "lucide-react";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleScroll = (id) => {
    window.location.hash = id;
    setIsMenuOpen(false);
  };

  // Updated nav items array to include testimonials
  const navItems = ["home", "about", "projects", "stack", "testimonials"];

  return (
    <nav
      className={`fixed top-0 w-full shadow-md z-50 transition-colors duration-300 ${
        theme === "light" ? "bg-white text-gray-800" : "bg-[#333333] text-white"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center font-[Poppins]">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("home");
          }}
          className={`font-bold text-xl ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-6 mr-6">
            {navItems.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(section);
                  }}
                  className={`hover:text-[#90D5FF] pb-1 transition-all duration-300 ${
                    activeSection === section
                      ? "border-b-2 border-[#90D5FF] text-[#90D5FF]"
                      : theme === "light"
                      ? "text-gray-800"
                      : "text-white"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 ${
              theme === "light"
                ? "bg-gray-100 hover:bg-gray-200"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={20} className="text-gray-800" />
            ) : (
              <Sun size={20} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {/* Theme Toggle Button (Mobile) */}
          <button
            onClick={toggleTheme}
            className={`p-2 mr-2 rounded-full transition-colors duration-300 ${
              theme === "light"
                ? "bg-gray-100 hover:bg-gray-200"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon
                size={20}
                className={theme === "light" ? "text-gray-800" : "text-white"}
              />
            ) : (
              <Sun
                size={20}
                className={theme === "light" ? "text-gray-800" : "text-white"}
              />
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`focus:outline-none ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className={`md:hidden py-3 ${
            theme === "light" ? "bg-white" : "bg-[#333333]"
          }`}
        >
          <ul className="flex flex-col items-center">
            {navItems.map((section) => (
              <li key={section} className="py-2 w-full text-center">
                <a
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(section);
                  }}
                  className={`block hover:text-[#90D5FF] transition-all duration-300 ${
                    activeSection === section
                      ? "text-[#90D5FF]"
                      : theme === "light"
                      ? "text-gray-800"
                      : "text-white"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
