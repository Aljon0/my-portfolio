/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const scrollTimeout = useRef(null);
  const isScrolling = useRef(false);
  const sectionsRef = useRef({
    home: null,
    about: null,
    projects: null,
    stack: null,
    contact: null,
  });

  useEffect(() => {
    // Set initial active section from URL hash
    const hash = window.location.hash.replace("#", "") || "home";
    if (["home", "about", "projects", "stack", "contact"].includes(hash)) {
      setActiveSection(hash);
    }

    // Handle smooth scrolling to section
    const scrollToSection = (id) => {
      if (isScrolling.current) return;

      const element = document.getElementById(id);
      if (element) {
        isScrolling.current = true;
        element.scrollIntoView({ behavior: "smooth" });

        // Update URL without causing navigation
        window.history.replaceState(null, null, `#${id}`);

        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    };

    // Handle hash changes from URL or navigation
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      if (hash !== activeSection) {
        setActiveSection(hash);
        scrollToSection(hash);
      }
    };

    // Handle scroll events to detect active section
    const handleScroll = () => {
      if (isScrolling.current) return;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        const sections = ["home", "about", "projects", "stack", "contact"];
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              if (activeSection !== section) {
                setActiveSection(section);
                window.history.replaceState(null, null, `#${section}`);
              }
              break;
            }
          }
        }
      }, 100);
    };

    // Set up event listeners
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);

    // Initial scroll to section if hash exists
    const initialHash = window.location.hash.replace("#", "") || "home";
    scrollToSection(initialHash);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [activeSection]);

  return (
    <ThemeProvider>
      <div className="bg-[#fefffe] transition-colors duration-300">
        <Navbar activeSection={activeSection} />

        {/* All sections rendered with isActive prop */}
        <section id="home" className="relative z-0">
          <Home isActive={activeSection === "home"} />
        </section>
        <section
          id="about"
          className="relative z-10 bg-[#333333] dark:bg-[#333333] light:bg-gray-100"
        >
          <About isActive={activeSection === "about"} />
        </section>
        <section
          id="projects"
          className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] dark:from-[#1a1a1a] dark:to-[#2d2d2d] light:from-gray-100 light:to-gray-200 z-10 relative"
        >
          <Projects isActive={activeSection === "projects"} />
        </section>
        <section
          id="stack"
          className="bg-[#333333] dark:bg-[#333333] light:bg-gray-100 relative z-10"
        >
          <Stack isActive={activeSection === "stack"} />
        </section>
        <section
          id="contact"
          className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] dark:from-[#1a1a1a] dark:to-[#2d2d2d] light:from-gray-100 light:to-gray-200 z-10 relative"
        >
          <Contact isActive={activeSection === "contact"} />
        </section>

        <Footer className="relative z-10 bg-[#333333] dark:bg-[#333333] light:bg-gray-200" />
      </div>
    </ThemeProvider>
  );
}

export default App;
