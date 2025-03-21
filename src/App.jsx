import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Stack from "./components/Stack";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Get initial hash from URL or default to "home"
    const initialHash = window.location.hash.replace("#", "") || "home";
    setActiveSection(initialHash);

    // Handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveSection(hash);
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    // Handle anchor clicks for smooth scrolling
    const handleAnchorClick = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href").substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setActiveSection(id);
          // Update URL without causing a page jump
          history.pushState(null, null, `#${id}`);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Detect which section is in view
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Section must be at least 60% visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          // Update URL hash without scrolling
          history.replaceState(null, null, `#${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleAnchorClick);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#fefffe]">
      <Navbar activeSection={activeSection} />
      <AnimatePresence mode="wait">
        <Home
          key={`home-${activeSection === "home"}`}
          isActive={activeSection === "home"}
        />
        <About
          key={`about-${activeSection === "about"}`}
          isActive={activeSection === "about"}
        />
        <Projects
          key={`projects-${activeSection === "projects"}`}
          isActive={activeSection === "projects"}
        />
        <Stack
          key={`stack-${activeSection === "stack"}`}
          isActive={activeSection === "stack"}
        />
        <Contact
          key={`contact-${activeSection === "contact"}`}
          isActive={activeSection === "contact"}
        />
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
