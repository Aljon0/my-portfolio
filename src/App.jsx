/* eslint-disable no-unused-vars */
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import ChatBot from "./components/Chatbot";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Stack = lazy(() => import("./pages/Stack"));
const Testimonials = lazy(() => import("./pages/Testimonials"));

// Loading fallback component for lazy-loaded components
const LoadingFallback = ({ isLoading = true }) => (
  <div className="flex items-center justify-center h-screen">
    <div
      className={`${
        isLoading ? "animate-spin" : ""
      } rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500`}
    ></div>
  </div>
);

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [lazyComponentsLoading, setLazyComponentsLoading] = useState(true);
  const scrollTimeout = useRef(null);
  const isScrolling = useRef(false);
  const sectionsRef = useRef({
    home: null,
    about: null,
    projects: null,
    stack: null,
    testimonials: null,
    contact: null,
  });

  useEffect(() => {
    // Set initial active section from URL hash
    const hash = window.location.hash.replace("#", "") || "home";
    if (
      [
        "home",
        "about",
        "projects",
        "stack",
        "testimonials",
        "contact",
      ].includes(hash)
    ) {
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
        const sections = [
          "home",
          "about",
          "projects",
          "stack",
          "testimonials",
          "contact",
        ];
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

  // Function to handle when lazy components are loaded
  const handleLazyComponentsLoaded = () => {
    setLazyComponentsLoading(false);
  };

  return (
    <ThemeProvider>
      <div className="bg-[#fefffe] transition-colors duration-300">
        <Navbar activeSection={activeSection} />

        {/* All sections rendered with isActive prop and Suspense for lazy loading */}
        <Suspense
          fallback={<LoadingFallback isLoading={lazyComponentsLoading} />}
        >
          <div onLoad={handleLazyComponentsLoaded}>
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
              id="testimonials"
              className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] dark:from-[#1a1a1a] dark:to-[#2d2d2d] light:from-gray-100 light:to-gray-200 z-10 relative"
            >
              <Testimonials isActive={activeSection === "testimonials"} />
            </section>
          </div>
        </Suspense>

        <Footer className="relative z-10 bg-[#333333] dark:bg-[#333333] light:bg-gray-200" />
      </div>
      <ChatBot />
    </ThemeProvider>
  );
}

export default App;
