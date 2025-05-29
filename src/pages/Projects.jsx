/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { featuredProjects, smallProjects } from "../components/ProjectsData";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("featured");
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const clickPositionRef = useRef({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);

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
      return (
        <p className="text-justify text-gray-300 leading-relaxed">
          {caseStudy}
        </p>
      );

    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          {caseStudy.title}
        </h1>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-300 border-b border-blue-500/30 pb-2">
            Project Overview
          </h2>
          <p className="text-justify text-gray-300 leading-relaxed">
            {caseStudy.overview}
          </p>
        </div>

        {caseStudy.problemAndSolution && (
          <>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-300 border-b border-blue-500/30 pb-2">
                Problem Statement
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                {caseStudy.problemAndSolution.problem.map((problem, index) => (
                  <li
                    key={index}
                    className="text-justify text-gray-300 leading-relaxed"
                  >
                    {problem}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-300 border-b border-blue-500/30 pb-2">
                Solution Approach
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                {caseStudy.problemAndSolution.solution.map(
                  (solution, index) => (
                    <li
                      key={index}
                      className="text-justify text-gray-300 leading-relaxed"
                    >
                      {solution}
                    </li>
                  )
                )}
              </ul>
            </div>
          </>
        )}

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-300 border-b border-blue-500/30 pb-2">
            Key Features
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {caseStudy.features.map((feature, index) => (
              <li
                key={index}
                className="text-justify text-gray-300 leading-relaxed"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-300 border-b border-blue-500/30 pb-2">
            Technology Stack
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {caseStudy.technologyStack.map((tech, index) => (
              <li
                key={index}
                className="text-justify text-gray-300 leading-relaxed"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  // Enhanced Project Card Component with hover effects
  const ProjectCard = ({ project, isSmall = false }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        className="project-card-3d relative group cursor-pointer"
        onMouseEnter={() => {
          setIsHovered(true);
          setHoveredProject(project.id);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredProject(null);
        }}
        onClick={(e) => handleViewProject(project, e)}
        whileHover={{
          scale: 1.05,
          rotateY: 5,
          rotateX: 2,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.98 }}
        layout
      >
        <div className="relative overflow-hidden rounded-xl h-full">
          {/* Project Image */}
          <div
            className={`${isSmall ? "h-48" : "h-64"} overflow-hidden relative`}
          >
            {project.image && (
              <>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    isHovered ? "scale-110" : "scale-100"
                  } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => setImageLoaded(true)}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
                )}
              </>
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Hover Overlay with Project Details */}
            <motion.div
              className="absolute inset-0 bg-black/90 flex flex-col justify-center items-center p-6 text-center"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                transition: { duration: 0.3 },
              }}
            >
              <motion.h3
                className="text-xl font-bold text-white mb-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: isHovered ? 0 : 20,
                  opacity: isHovered ? 1 : 0,
                  transition: { delay: 0.1, duration: 0.3 },
                }}
              >
                {project.title}
              </motion.h3>

              {/* Only show description for non-small projects */}
              {!isSmall && (
                <motion.p
                  className="text-gray-300 text-sm mb-4 line-clamp-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: isHovered ? 0 : 20,
                    opacity: isHovered ? 1 : 0,
                    transition: { delay: 0.2, duration: 0.3 },
                  }}
                >
                  {project.description}
                </motion.p>
              )}

              <motion.div
                className="flex flex-wrap gap-2 justify-center mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: isHovered ? 0 : 20,
                  opacity: isHovered ? 1 : 0,
                  transition: { delay: isSmall ? 0.2 : 0.3, duration: 0.3 },
                }}
              >
                {project.technologies &&
                  project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="tech-badge-hover-3d text-xs px-2 py-1 rounded-full text-blue-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                {project.technologies && project.technologies.length > 3 && (
                  <span className="text-xs text-gray-400">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </motion.div>

              <motion.button
                className="explore-button-3d px-4 py-2 rounded-lg font-semibold text-white text-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: isHovered ? 0 : 20,
                  opacity: isHovered ? 1 : 0,
                  transition: { delay: isSmall ? 0.3 : 0.4, duration: 0.3 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Project
              </motion.button>
            </motion.div>
          </div>

          {/* Bottom Project Info (Always Visible) */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
            <h3 className="text-lg font-bold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm opacity-80">
              {project.technologies &&
                project.technologies.slice(0, 2).join(" • ")}
              {project.technologies &&
                project.technologies.length > 2 &&
                " ..."}
            </p>
          </div>
        </div>
      </motion.div>
    );
  };

  // Section navigation buttons with 3D styling
  const SectionNav = () => {
    const sections = [
      { id: "featured", label: "Featured Projects" },
      { id: "small", label: "Small Projects" },
    ];

    return (
      <div className="flex justify-center mb-12">
        <div className="nav-container-3d flex rounded-xl overflow-hidden p-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`nav-button-3d px-6 py-3 text-sm font-bold transition-all cursor-pointer rounded-lg mx-1 ${
                activeSection === section.id
                  ? "nav-button-active-3d text-white"
                  : "text-blue-200 hover:text-white"
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
    <>
      <style jsx>{`
        @keyframes float-3d {
          0%,
          100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg);
          }
          25% {
            transform: translateY(-10px) rotateX(5deg) rotateY(-2deg);
          }
          50% {
            transform: translateY(-15px) rotateX(0deg) rotateY(2deg);
          }
          75% {
            transform: translateY(-8px) rotateX(-3deg) rotateY(-1deg);
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(144, 213, 255, 0.3);
          }
          50% {
            text-shadow: 0 0 40px rgba(144, 213, 255, 0.6),
              0 0 60px rgba(144, 213, 255, 0.4);
          }
        }

        .main-title-3d {
          background: linear-gradient(45deg, #90d5ff, #ffffff, #90d5ff);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          animation: glow-pulse 4s ease-in-out infinite;
        }

        .main-title-3d::after {
          content: "";
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #90d5ff, transparent);
          border-radius: 2px;
          box-shadow: 0 0 15px rgba(144, 213, 255, 0.8);
        }

        .project-card-3d {
          background: linear-gradient(
            135deg,
            rgba(30, 30, 30, 0.9) 0%,
            rgba(45, 45, 45, 0.95) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
            0 4px 16px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          transform-style: preserve-3d;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .project-card-3d:hover {
          border-color: rgba(144, 213, 255, 0.4);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6),
            0 0 20px rgba(144, 213, 255, 0.3);
        }

        .tech-badge-hover-3d {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.3),
            rgba(30, 64, 175, 0.4)
          );
          border: 1px solid rgba(144, 213, 255, 0.5);
          backdrop-filter: blur(5px);
        }

        .explore-button-3d {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.9),
            rgba(30, 64, 175, 0.9)
          );
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4),
            0 0 15px rgba(144, 213, 255, 0.3);
        }

        .nav-container-3d {
          background: linear-gradient(
            135deg,
            rgba(30, 30, 30, 0.9) 0%,
            rgba(45, 45, 45, 0.95) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6),
            0 4px 16px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          transform-style: preserve-3d;
        }

        .nav-button-3d {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.1) 0%,
            rgba(30, 64, 175, 0.2) 100%
          );
          backdrop-filter: blur(5px);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }

        .nav-button-3d:hover {
          transform: translateY(-2px) rotateX(5deg);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4),
            0 0 15px rgba(144, 213, 255, 0.3);
        }

        .nav-button-active-3d {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.9) 0%,
            rgba(30, 64, 175, 0.9) 100%
          );
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 0 20px rgba(144, 213, 255, 0.4);
        }

        .nav-button-active-3d:hover {
          transform: translateY(-3px) rotateX(8deg);
        }

        .modal-3d {
          background: linear-gradient(
            135deg,
            rgba(20, 20, 20, 0.98) 0%,
            rgba(35, 35, 35, 0.99) 50%,
            rgba(45, 45, 45, 0.98) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.3);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.8),
            0 15px 40px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 0 50px rgba(144, 213, 255, 0.2);
          backdrop-filter: blur(20px);
          transform-style: preserve-3d;
        }

        .close-button-3d {
          background: linear-gradient(
            135deg,
            rgba(60, 60, 60, 0.9),
            rgba(40, 40, 40, 0.95)
          );
          border: 1px solid rgba(144, 213, 255, 0.3);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }

        .close-button-3d:hover {
          transform: translateY(-2px) rotateX(5deg);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6),
            0 0 15px rgba(144, 213, 255, 0.4);
          background: linear-gradient(
            135deg,
            rgba(80, 80, 80, 0.9),
            rgba(60, 60, 60, 0.95)
          );
        }

        .visit-button-3d {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.9),
            rgba(30, 64, 175, 0.9)
          );
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 0 20px rgba(144, 213, 255, 0.3);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }

        .visit-button-3d:hover {
          transform: translateY(-3px) rotateX(5deg);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6),
            0 0 30px rgba(144, 213, 255, 0.5);
        }

        .tech-badge-modal-3d {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.2),
            rgba(30, 64, 175, 0.3)
          );
          border: 1px solid rgba(144, 213, 255, 0.4);
          backdrop-filter: blur(5px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .floating-animation {
          animation: float-3d 6s ease-in-out infinite;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-card-3d {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .project-wrapper-3d {
          height: 100%;
        }

        .project-image-3d {
          flex-shrink: 0;
        }

        .project-card-3d .absolute.inset-0.bg-black\/90 {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .project-card-3d .text-gray-300.text-sm {
          max-height: 4.5em;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      `}</style>

      <section
        id="projects"
        className="min-h-screen py-20 z-10 transition-colors duration-300 relative"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)",
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="main-title-3d text-5xl font-bold mb-16 text-center font-[poppins] floating-animation">
            Projects
          </h2>

          <SectionNav />

          <div
            className={`transition-all duration-300 ${
              selectedProject ? "blur-sm scale-95" : ""
            }`}
          >
            {/* Featured Projects Grid */}
            {activeSection === "featured" && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
              >
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <ProjectCard project={project} isSmall={false} />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Small Projects Grid */}
            {activeSection === "small" && (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
              >
                {smallProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <ProjectCard project={project} isSmall={true} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Enhanced 3D Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                className="fixed inset-0 bg-opacity-80 backdrop-blur-xs z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={(e) => {
                  if (e.target === e.currentTarget) closeOverlay();
                }}
              >
                <motion.div
                  className="modal-3d rounded-2xl max-w-4xl w-full p-8 relative"
                  style={{ maxHeight: "90vh", overflowY: "auto" }}
                  initial={{
                    scale: 0.2,
                    x: -modalPosition.x,
                    y: -modalPosition.y,
                    opacity: 0,
                    rotateX: -15,
                    rotateY: 15,
                  }}
                  animate={{
                    scale: 1,
                    x: 0,
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    rotateY: 0,
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
                    rotateX: 15,
                    rotateY: -15,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Enhanced close button */}
                  <div className="sticky top-0 left-0 w-full z-20 flex justify-end mb-4">
                    <button
                      onClick={closeOverlay}
                      className="close-button-3d w-12 h-12 flex items-center justify-center rounded-full cursor-pointer text-white text-2xl font-bold"
                    >
                      ×
                    </button>
                  </div>

                  {selectedProject.image && (
                    <div className="w-full h-80 mb-8 overflow-hidden rounded-xl relative">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                        style={{
                          filter: "brightness(0.9) contrast(1.1) saturate(1.2)",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                  )}

                  {selectedProject.link && (
                    <div className="mb-8 text-center">
                      <motion.a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="visit-button-3d inline-block px-8 py-4 rounded-xl font-bold text-white cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Visit Project
                      </motion.a>

                      {selectedProject.id === 3 && (
                        <div className="mt-3 text-sm font-medium text-blue-300">
                          ⓘ This link will take you to a video demonstration of
                          this client project
                        </div>
                      )}
                    </div>
                  )}

                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h2>

                    <p className="text-gray-300 leading-relaxed text-lg">
                      {selectedProject.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {selectedProject.technologies &&
                        selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="tech-badge-modal-3d text-sm px-4 py-2 rounded-full text-blue-200 font-medium"
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
    </>
  );
};

export default Projects;
