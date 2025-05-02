/* eslint-disable no-unused-vars */
import { Menu, Moon, Sun, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Add scroll listener to create subtle background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    window.location.hash = id;
    setIsMenuOpen(false);
  };

  // Updated nav items array
  const navItems = ["home", "about", "projects", "stack", "testimonials"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? theme === "light"
            ? "bg-white/80 backdrop-blur-sm shadow-md"
            : "bg-[#333333]/80 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("home");
          }}
          className={`font-bold text-2xl transition-colors duration-300 tracking-wider`}
        >
          <span className="font-mono relative group">
            <span
              className={`${
                theme === "light" ? "text-blue-700" : "text-[#90D5FF]"
              }`}
            >
              &lt;/
            </span>
            <span
              className={`font-extrabold ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
            >
              AJ
            </span>
            <span
              className={`${
                theme === "light" ? "text-blue-700" : "text-[#90D5FF]"
              }`}
            >
              &gt;
            </span>
            <span
              className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                theme === "light" ? "bg-blue-700" : "bg-[#90D5FF]"
              } transition-all duration-300 group-hover:w-full`}
            ></span>
          </span>
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
                  className={`hover:${
                    theme === "light" ? "text-blue-800" : "text-[#90D5FF]"
                  } pb-1 transition-all duration-300 ${
                    activeSection === section
                      ? `border-b-2 ${
                          theme === "light"
                            ? "border-blue-800 text-blue-800"
                            : "border-[#90D5FF] text-[#90D5FF]"
                        }`
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
            className={`p-2 rounded-full transition-colors duration-300 cursor-pointer ${
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
            theme === "light" ? "bg-white/95" : "bg-[#333333]/95"
          } backdrop-blur-sm`}
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
                  className={`block hover:${
                    theme === "light" ? "text-blue-800" : "text-[#90D5FF]"
                  } transition-all duration-300 ${
                    activeSection === section
                      ? theme === "light"
                        ? "text-blue-800"
                        : "text-[#90D5FF]"
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
