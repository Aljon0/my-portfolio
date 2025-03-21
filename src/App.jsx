import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Stack from "./components/Stack";

function App() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" &&
        target.getAttribute("href").startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href").substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div className="bg-[#fefffe]">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
