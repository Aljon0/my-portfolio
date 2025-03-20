import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to detect active section based on scroll position
  useEffect(() => {
    const handleScrollPosition = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];

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

  return (
    <nav className="fixed top-0 w-full bg-[#fefffe] shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center font-[Poppins]">
        <a
          href="#home"
          onClick={() => handleScroll("home")}
          className="text-[#12130F] text-xl font-bold"
        >
          AS
        </a>
        <ul className="flex space-x-6">
          {["home", "about", "projects", "skills", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={() => handleScroll(section)}
                className={`text-[#12130F] hover:text-[#226CE0] pb-1 transition-all duration-300 ${
                  activeSection === section
                    ? "border-b-2 border-[#226CE0] text-[#226CE0]"
                    : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
