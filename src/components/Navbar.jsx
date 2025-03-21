import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  // Function to detect active section based on scroll position
  useEffect(() => {
    const handleScrollPosition = () => {
      const sections = ["home", "about", "projects", "stack", "contact"];

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScrollPosition);
    return () => window.removeEventListener("scroll", handleScrollPosition);
  }, []);

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Updated section names - changed "skills" to "stack"
  const navItems = ["home", "about", "projects", "stack", "contact"];

  return (
    <nav className="fixed top-0 w-full bg-[#333333] shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center font-[Poppins]">
        <a
          href="#home"
          onClick={() => handleScroll("home")}
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
                onClick={() => handleScroll(section)}
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
            onClick={toggleMenu}
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
                  onClick={() => handleScroll(section)}
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
