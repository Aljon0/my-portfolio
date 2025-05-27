/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import { featuredProjects, smallProjects } from "../components/ProjectsData";
import SmallProjects from "../components/SmallProjects";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("featured");
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const clickPositionRef = useRef({ x: 0, y: 0 });

  // For carousel functionality
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Define the accent colors based on theme
  const accentColor = theme === "light" ? "#1E40AF" : "#90D5FF";

  // Update visible cards based on screen size
  const [visibleCards, setVisibleCards] = useState(3);
  const totalFeaturedCards = featuredProjects.length;
  const totalSmallCards = smallProjects.length;

  // Calculate the number of pagination indicators needed
  const getPaginationCount = () => {
    const totalCards =
      activeSection === "featured" ? totalFeaturedCards : totalSmallCards;
    return Math.max(1, totalCards - visibleCards + 1);
  };

  // Update visible cards based on window width
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // Tablet: 2 cards
      } else {
        setVisibleCards(3); // Desktop: 3 cards
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

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

  // Effect to scroll to the active index with smooth animation
  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth / visibleCards;
      const scrollAmount = activeIndex * cardWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [activeIndex, visibleCards]);

  // Reset activeIndex when changing sections
  useEffect(() => {
    setActiveIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [activeSection]);

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

  // Function to update active index based on current scroll position
  const updateActiveIndexFromScroll = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.clientWidth / visibleCards;
    const scrollPosition = container.scrollLeft;

    const nearestIndex = Math.round(scrollPosition / cardWidth);
    const boundedIndex = Math.max(
      0,
      Math.min(nearestIndex, getPaginationCount() - 1)
    );

    if (boundedIndex !== activeIndex) {
      setActiveIndex(boundedIndex);
    }
  };

  // Mouse and touch event handlers for dragging/sliding
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current || isDragging) return;
    updateActiveIndexFromScroll();
  };

  const handleDragEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      updateActiveIndexFromScroll();
    }
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

  // Section navigation buttons with 3D styling
  const SectionNav = () => {
    const sections = [
      { id: "featured", label: "Featured Projects" },
      { id: "small", label: "Small Projects" },
    ];

    return (
      <>
        <style jsx>{`
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
        `}</style>

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
      </>
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

        .pagination-dot-3d {
          background: linear-gradient(
            135deg,
            rgba(75, 85, 99, 0.8),
            rgba(55, 65, 81, 0.9)
          );
          border: 1px solid rgba(144, 213, 255, 0.2);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }

        .pagination-dot-3d:hover {
          transform: translateY(-2px) scale(1.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4),
            0 0 10px rgba(144, 213, 255, 0.3);
        }

        .pagination-dot-active-3d {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.9),
            rgba(30, 64, 175, 0.9)
          );
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4),
            0 0 20px rgba(144, 213, 255, 0.5);
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

        .hide-scrollbar-3d {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .hide-scrollbar-3d::-webkit-scrollbar {
          display: none;
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
            <div
              ref={scrollContainerRef}
              className="hide-scrollbar-3d overflow-x-auto scroll-smooth snap-x select-none"
              style={{
                cursor: isDragging ? "grabbing" : "grab",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
              }}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleDragEnd}
              onMouseUp={handleDragEnd}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleDragEnd}
              onTouchMove={handleTouchMove}
              onTouchCancel={handleDragEnd}
            >
              {activeSection === "featured" && (
                <FeaturedProjects
                  projects={featuredProjects}
                  handleViewProject={handleViewProject}
                  accentColor={accentColor}
                />
              )}

              {activeSection === "small" && (
                <SmallProjects
                  projects={smallProjects}
                  handleViewProject={handleViewProject}
                  accentColor={accentColor}
                />
              )}
            </div>

            {/* Enhanced 3D Pagination dots */}
            <div className="flex justify-center mt-8 gap-3">
              {Array.from({ length: getPaginationCount() }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`pagination-dot-3d w-4 h-4 rounded-full transition-all cursor-pointer ${
                    activeIndex === index ? "pagination-dot-active-3d w-8" : ""
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
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
