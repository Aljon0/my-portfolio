import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    window.location.hash = id;
    setIsMenuOpen(false);
  };

  const navItems = ["home", "about", "projects", "stack", "contact"];

  return (
    <nav className="fixed top-0 w-full bg-[#333333] shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center font-[Poppins]">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("home");
          }}
          className="text-white text-xl font-bold"
        >
          AS
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(section);
                }}
                className={`text-white hover:text-[#90D5FF] pb-1 transition-all duration-300 ${
                  activeSection === section
                    ? "border-b-2 border-[#90D5FF] text-[#90D5FF]"
                    : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#333333] py-3">
          <ul className="flex flex-col items-center">
            {navItems.map((section) => (
              <li key={section} className="py-2 w-full text-center">
                <a
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(section);
                  }}
                  className={`block text-white hover:text-[#90D5FF] transition-all duration-300 ${
                    activeSection === section ? "text-[#90D5FF]" : ""
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
