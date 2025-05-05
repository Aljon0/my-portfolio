/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { HiChevronRight } from "react-icons/hi";
import Certificates from "../components/Certificates";
import FeaturedProjects from "../components/FeaturedProjects";
import {
  certificates,
  featuredProjects,
  smallProjects,
} from "../components/ProjectsData";
import SmallProjects from "../components/SmallProjects";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("featured");
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const clickPositionRef = useRef({ x: 0, y: 0 });

  // Define the accent colors based on theme
  const accentColor = theme === "light" ? "#1E40AF" : "#90D5FF";

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
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      clickPositionRef.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };

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

        {caseStudy.problemAndSolution && (
          <>
            <div>
              <h2
                className={`text-2xl font-semibold mb-2 ${
                  theme === "light" ? "text-gray-800" : "text-white"
                }`}
              >
                Problem Statement
              </h2>
              <ul className="list-disc pl-5">
                {caseStudy.problemAndSolution.problem.map((problem, index) => (
                  <li
                    key={index}
                    className={`text-justify ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    {problem}
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
                Solution Approach
              </h2>
              <ul className="list-disc pl-5">
                {caseStudy.problemAndSolution.solution.map((solution, index) => (
                  <li
                    key={index}
                    className={`text-justify ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

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
              className={`px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                activeSection === section.id
                  ? "text-white"
                  : theme === "light"
                  ? "text-gray-800 hover:bg-gray-300"
                  : "text-white hover:bg-[#444444]"
              }`}
              style={{
                backgroundColor:
                  activeSection === section.id ? accentColor : "",
              }}
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
        <h2
          className={`text-4xl font-bold mb-10 text-center font-[poppins] ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Projects
        </h2>

        <SectionNav />

        <div className={`${selectedProject ? "blur-sm" : ""}`}>
          {activeSection === "featured" && (
            <>
              <FeaturedProjects
                projects={featuredProjects}
                handleViewProject={handleViewProject}
                accentColor={accentColor}
              />

              <div className="flex justify-end space-x-4 mt-2">
                <button
                  onClick={() => setActiveSection("small")}
                  className="text-sm flex items-center hover:underline cursor-pointer"
                  style={{ color: accentColor }}
                >
                  View all small projects <HiChevronRight className="ml-1" />
                </button>

                <button
                  onClick={() => setActiveSection("certificates")}
                  className="text-sm flex items-center hover:underline cursor-pointer"
                  style={{ color: accentColor }}
                >
                  View certificates <HiChevronRight className="ml-1" />
                </button>
              </div>
            </>
          )}

          {activeSection === "small" && (
            <SmallProjects
              projects={smallProjects}
              handleViewProject={handleViewProject}
              accentColor={accentColor}
            />
          )}

          {activeSection === "certificates" && (
            <Certificates
              certificates={certificates}
              accentColor={accentColor}
            />
          )}
        </div>

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
                  className={`absolute top-4 right-4 text-2xl transition-colors z-10 cursor-pointer ${
                    theme === "light" ? "text-gray-800" : "text-white"
                  }`}
                >
                  &times;
                </button>

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
                      className="inline-block px-4 py-2 rounded-md hover:opacity-90 transition-colors cursor-pointer"
                      style={{
                        backgroundColor: accentColor,
                        color: theme === "light" ? "white" : "#333333",
                      }}
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