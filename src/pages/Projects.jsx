/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HiChevronRight } from "react-icons/hi";
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const sectionNavVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.4,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

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

  const handleViewProject = (project) => {
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
      <motion.div
        className="flex justify-center mb-8"
        variants={sectionNavVariants}
      >
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
      </motion.div>
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
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Centered Projects title */}
        <motion.h2
          className={`text-4xl font-bold mb-10 text-center font-[poppins] ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
          variants={titleVariants}
        >
          Projects
        </motion.h2>

        {/* Section Navigation */}
        <SectionNav />

        <div className={`${selectedProject ? "blur-sm" : ""}`}>
          {/* Featured Projects Section */}
          {activeSection === "featured" && (
            <>
              <FeaturedProjects
                projects={featuredProjects}
                handleViewProject={handleViewProject}
                variants={projectCardVariants}
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
              variants={projectCardVariants}
            />
          )}

          {/* Certificates Section */}
          {activeSection === "certificates" && (
            <Certificates
              certificates={certificates}
              variants={projectCardVariants}
            />
          )}
        </div>

        {/* Case Study Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-opacity-75 backdrop-blur-xs z-50 flex items-center justify-center p-4 mt-10"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className={`rounded-lg max-w-2xl w-full p-6 relative shadow-xl ${
                  theme === "light" ? "bg-white" : "bg-[#2a2a2a]"
                }`}
                style={{ maxHeight: "85vh", overflowY: "auto" }}
                variants={modalVariants}
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
      </motion.div>
    </section>
  );
};

export default Projects;
