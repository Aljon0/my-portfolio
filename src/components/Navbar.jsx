/* eslint-disable no-unused-vars */
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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

  const navItems = ["home", "about", "projects", "stack", "testimonials"];

  return (
    <div>
      <style jsx>{`
        .navbar-3d {
          background: linear-gradient(
            135deg,
            rgba(20, 20, 20, 0.95) 0%,
            rgba(35, 35, 35, 0.98) 100%
          );
          border-bottom: 1px solid rgba(144, 213, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6),
            0 0 20px rgba(144, 213, 255, 0.1);
          backdrop-filter: blur(15px);
        }

        .logo-3d {
          transform-style: preserve-3d;
          transition: all 0.3s ease;
        }

        .logo-3d:hover {
          transform: translateZ(10px) rotateY(5deg);
          text-shadow: 0 0 20px rgba(144, 213, 255, 0.5);
        }

        .nav-item-3d {
          position: relative;
          transition: all 0.3s ease;
          transform-style: preserve-3d;
        }

        .nav-item-3d::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #90d5ff, transparent);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-item-3d:hover::after,
        .nav-item-3d.active::after {
          width: 100%;
        }

        .nav-item-3d:hover {
          transform: translateY(-2px) translateZ(5px);
          text-shadow: 0 0 10px rgba(144, 213, 255, 0.3);
        }
      `}</style>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "navbar-3d" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("home");
            }}
            className="logo-3d font-bold text-2xl tracking-wider cursor-pointer"
          >
            <span className="font-mono relative group">
              <span className="text-[#90D5FF]">&lt;/</span>
              <span className="font-extrabold text-white">AJ</span>
              <span className="text-[#90D5FF]">&gt;</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8 mr-6">
              {navItems.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(section);
                    }}
                    className={`nav-item-3d cursor-pointer ${
                      activeSection === section
                        ? "active text-[#90D5FF]"
                        : "text-white hover:text-[#90D5FF]"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden navbar-3d">
            <ul className="flex flex-col items-center py-4">
              {navItems.map((section) => (
                <li key={section} className="py-3 w-full text-center">
                  <a
                    href={`#${section}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(section);
                    }}
                    className={`nav-item-3d cursor-pointer ${
                      activeSection === section
                        ? "text-[#90D5FF]"
                        : "text-white hover:text-[#90D5FF]"
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
    </div>
  );
};

export default Navbar;
