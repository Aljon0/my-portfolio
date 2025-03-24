import React, { useEffect, useState } from "react";
import { HiChevronRight } from "react-icons/hi";
import ProjectCard from "./ProjectCard";
import FeaturedProjects from "./FeaturedProjects";
import SmallProjects from "./SmallProjects";
import Certificates from "./Certificates";

import { featuredProjects, smallProjects, certificates } from "./projectsData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("featured");

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
        <h1 className="text-3xl font-bold text-white mb-4 text-center">
          {caseStudy.title}
        </h1>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Project Overview
          </h2>
          <p className="text-gray-300 text-justify">{caseStudy.overview}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Key Features
          </h2>
          <ul className="list-disc pl-5 text-gray-300">
            {caseStudy.features.map((feature, index) => (
              <li key={index} className="text-justify">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Technology Stack
          </h2>
          <ul className="list-disc pl-5 text-gray-300">
            {caseStudy.technologyStack.map((tech, index) => (
              <li key={index} className="text-justify">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Impact</h2>
          <p className="text-gray-300 text-justify">{caseStudy.impact}</p>
        </div>

        {caseStudy.ownerAccount && (
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Owner Account
            </h2>
            <p className="text-gray-300">
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
        <div className="flex bg-[#333333] rounded-lg overflow-hidden">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? "bg-[#90D5FF] text-[#333333]"
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
      className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] py-16"
    >
      <div className="container mx-auto px-6">
        {/* Centered Projects title */}
        <h2 className="text-4xl font-bold text-white mb-10 text-center font-[poppins]">
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

        {/* Case Study Overlay */}
        {selectedProject && (
          <div className="fixed inset-0 bg-opacity-75 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div
              className="bg-[#2a2a2a] rounded-lg max-w-2xl w-full p-6 relative shadow-xl"
              style={{ maxHeight: "85vh", overflowY: "auto" }}
            >
              <button
                onClick={closeOverlay}
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors z-10"
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
                <h2 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-300">{selectedProject.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies &&
                    selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-[#444444] text-gray-300 text-sm px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                </div>

                {selectedProject.caseStudy &&
                  renderCaseStudy(selectedProject.caseStudy)}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;
