/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import { HiChevronRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import FeaturedProjects from "../components/FeaturedProjects";
import SmallProjects from "../components/SmallProjects";
import Certificates from "../components/Certificates";
import {
  certificates,
  featuredProjects,
  smallProjects,
} from "../components/ProjectsData";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("featured");
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const clickPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const handleViewProject = (project, event) => {
    // Store the click position for the animation origin
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      clickPositionRef.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };

      // Calculate center position of the screen for the final position
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      setModalPosition({
        x: viewportWidth / 2 - clickPositionRef.current.x,
        y: viewportHeight / 2 - clickPositionRef.current.y,
      });
    }

    setSelectedProject(project);
  };

  const closeOverlay = () => {
    setSelectedProject(null);
  };

  const renderCaseStudy = (caseStudy) => {
    if (typeof caseStudy === "string")
      return <p className="text-justify">{caseStudy}</p>;

    return (
      <div className="space-y-4">
        <h1
          className={`text-3xl font-bold mb-4 text-center ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          {caseStudy.title}
        </h1>

        <div>
          <h2
            className={`text-2xl font-semibold mb-2 ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            Project Overview
          </h2>
          <p
            className={`text-justify ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            {caseStudy.overview}
          </p>
        </div>

        <div>
          <h2
            className={`text-2xl font-semibold mb-2 ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            Key Features
          </h2>
          <ul className="list-disc pl-5">
            {caseStudy.features.map((feature, index) => (
              <li
                key={index}
                className={`text-justify ${
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2
            className={`text-2xl font-semibold mb-2 ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            Technology Stack
          </h2>
          <ul className="list-disc pl-5">
            {caseStudy.technologyStack.map((tech, index) => (
              <li
                key={index}
                className={`text-justify ${
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {caseStudy.ownerAccount && (
          <div>
            <h2
              className={`text-2xl font-semibold mb-2 ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
            >
              Owner Account
            </h2>
            <p
              className={theme === "light" ? "text-gray-700" : "text-gray-300"}
            >
              Username: {caseStudy.ownerAccount.username}
              <br />
              Password: {caseStudy.ownerAccount.password}
            </p>
          </div>
        )}
      </div>
    );
  };

  // Section navigation buttons
  const SectionNav = () => {
    const sections = [
      { id: "featured", label: "Featured Projects" },
      { id: "small", label: "Small Projects" },
      { id: "certificates", label: "Certificates" },
    ];

    return (
      <div className="flex justify-center mb-8">
        <div
          className={`flex rounded-lg overflow-hidden ${
            theme === "light" ? "bg-gray-200" : "bg-[#333333]"
          }`}
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? "bg-[#90D5FF] text-[#333333]"
                  : theme === "light"
                  ? "text-gray-800 hover:bg-gray-300"
                  : "text-white hover:bg-[#444444]"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className={`min-h-screen py-16 z-10 transition-colors duration-300 ${
        theme === "light"
          ? "bg-gradient-to-br from-gray-100 to-gray-200"
          : "bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]"
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Centered Projects title */}
        <h2
          className={`text-4xl font-bold mb-10 text-center font-[poppins] ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Projects
        </h2>

        {/* Section Navigation */}
        <SectionNav />

        <div className={`${selectedProject ? "blur-sm" : ""}`}>
          {/* Featured Projects Section */}
          {activeSection === "featured" && (
            <>
              <FeaturedProjects
                projects={featuredProjects}
                handleViewProject={handleViewProject}
              />

              {/* "View All" links for quick navigation when in featured view */}
              <div className="flex justify-end space-x-4 mt-2">
                <button
                  onClick={() => setActiveSection("small")}
                  className="text-sm text-[#90D5FF] flex items-center hover:underline"
                >
                  View all small projects <HiChevronRight className="ml-1" />
                </button>

                <button
                  onClick={() => setActiveSection("certificates")}
                  className="text-sm text-[#90D5FF] flex items-center hover:underline"
                >
                  View certificates <HiChevronRight className="ml-1" />
                </button>
              </div>
            </>
          )}

          {/* Small Projects Section */}
          {activeSection === "small" && (
            <SmallProjects
              projects={smallProjects}
              handleViewProject={handleViewProject}
            />
          )}

          {/* Certificates Section */}
          {activeSection === "certificates" && (
            <Certificates certificates={certificates} />
          )}
        </div>

        {/* Case Study Overlay with Framer Motion */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-opacity-75 backdrop-blur-xs z-50 flex items-center justify-center p-4 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                if (e.target === e.currentTarget) closeOverlay();
              }}
            >
              <motion.div
                className={`rounded-lg max-w-2xl w-full p-6 relative shadow-xl ${
                  theme === "light" ? "bg-white" : "bg-[#2a2a2a]"
                }`}
                style={{ maxHeight: "85vh", overflowY: "auto" }}
                initial={{
                  scale: 0.2,
                  x: -modalPosition.x,
                  y: -modalPosition.y,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  x: 0,
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{
                  scale: 0.2,
                  x: -modalPosition.x,
                  y: -modalPosition.y,
                  opacity: 0,
                  transition: { duration: 0.2 },
                }}
              >
                <button
                  onClick={closeOverlay}
                  className={`absolute top-4 right-4 text-2xl transition-colors z-10 ${
                    theme === "light" ? "text-gray-800" : "text-white"
                  }`}
                >
                  &times;
                </button>

                {/* Large Project Image */}
                {selectedProject.image && (
                  <div className="w-full h-64 mb-6 mt-8 overflow-hidden rounded-lg">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {selectedProject.link && (
                  <div className="mb-4 text-center">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#90D5FF] text-[#333333] px-4 py-2 rounded-md hover:bg-[#7bc8ff] transition-colors"
                    >
                      Visit Project
                    </a>
                  </div>
                )}

                <div className="space-y-4">
                  <h2
                    className={`text-2xl font-bold ${
                      theme === "light" ? "text-gray-800" : "text-white"
                    }`}
                  >
                    {selectedProject.title}
                  </h2>
                  <p
                    className={
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }
                  >
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies &&
                      selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`text-sm px-2 py-1 rounded-full ${
                            theme === "light"
                              ? "bg-gray-200 text-gray-700"
                              : "bg-[#444444] text-gray-300"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                  </div>

                  {selectedProject.caseStudy &&
                    renderCaseStudy(selectedProject.caseStudy)}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
