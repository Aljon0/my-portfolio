import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { FaCalendarAlt, FaExternalLinkAlt, FaTrophy } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

// Mock theme context
const useTheme = () => ({ theme: "dark" });

// Projects data (using your provided data)
const featuredProjects = [
  {
    id: 1,
    title: "AI-Health Companion",
    description:
      "A smart healthcare assistant web app that uses Mistral AI and public medical APIs to help users check symptoms, track mental health, and access timely health advice.",
    image: "/projects/AI-HealthCare.webp",
    category: "Web App",
    technologies: ["React", "Tailwind", "Firebase", "Express", "Mistral AI"],
    link: "https://projectbaymax.onrender.com/",
    featured: true,
    year: "2025",
  },
  {
    id: 2,
    title: "AI-Resume Builder",
    description:
      "An intelligent resume builder that uses Mistral AI for skill suggestions, customizable templates, and PDF export with Firebase integration.",
    image: "/projects/AI-Resume Builder.webp",
    category: "Web App",
    technologies: ["React", "Tailwind", "Firebase", "Express", "Mistral AI"],
    link: "https://ai-rb-haee.onrender.com",
    featured: true,
    year: "2025",
  },
  {
    id: 3,
    title: "ED3C: Eternal Design",
    description:
      "Interactive 3D customization web application for memorial design and gravestone creation.",
    image: "/projects/ed3c.webp",
    category: "Web App",
    technologies: ["React", "Tailwind", "Three.js", "Firebase"],
    link: "#",
    featured: true,
    year: "2024",
  },
];

const smallProjects = [
  {
    id: 5,
    title: "Expense Tracker",
    description:
      "A streamlined expense tracking application built with React and Appwrite to help users manage their personal finances effectively.",
    image: "/projects/expensetracker.webp",
    category: "Web App",
    technologies: ["React", "Tailwind", "Appwrite"],
    link: "https://expensetracker-hrws.onrender.com",
    featured: false,
    year: "2025",
  },
  {
    id: 6,
    title: "Chat Sphere",
    description:
      "ChatSphere is a sleek, responsive chat app built with React, Vite, and Tailwind CSS, showcasing real-time messaging powered by Firebase.",
    image: "/projects/chatsphere.webp",
    category: "Web App",
    technologies: ["React", "Tailwind", "Firebase"],
    link: "https://chat-web-app-1c91d.web.app/",
    featured: false,
    year: "2025",
  },
  {
    id: 7,
    title: "Task Master",
    description:
      "A responsive and efficient task management app built with React, TailwindCSS, and Supabase. It allows users to manage tasks with features like creation, filtering, and real-time updates via a RESTful API.",
    image: "/projects/taskmanager.webp",
    category: "Web App",
    technologies: ["React", "Tailwind", "Supabase"],
    link: "https://task-manager-app-cwgb.onrender.com",
    featured: false,
    year: "2025",
  },
  {
    id: 8,
    title: "Movie Recommendation Chatbot",
    description:
      "An AI-powered movie recommendation chatbot built with React that lets users chat and receive personalized movie suggestions in real-time, no account required.",
    image: "/projects/ai-mr.webp",
    category: "Web App",
    technologies: ["React", "Tailwind", "Express"],
    link: "https://ai-movie.onrender.com",
    featured: false,
    year: "2025",
  },
];

const certificates = [
  {
    id: 8,
    title: "Introduction to Computer Networking",
    image: "/certificates/ICN.png",
    category: "Certificate",
    issuer: "Simplilearn",
    date: "2025",
    year: "2025",
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const accentColor = theme === "light" ? "#1E40AF" : "#90D5FF";

  // Combine all items for timeline
  const allItems = [
    ...featuredProjects.map((p) => ({ ...p, type: "featured" })),
    ...smallProjects.map((p) => ({ ...p, type: "project" })),
    ...certificates.map((c) => ({
      ...c,
      type: "certificate",
      description: `Certificate from ${c.issuer}`,
    })),
  ].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  const filters = ["All", "Featured", "Projects", "Certificates"];

  const getFilteredItems = () => {
    if (activeFilter === "All") return allItems;
    if (activeFilter === "Featured")
      return allItems.filter((item) => item.type === "featured");
    if (activeFilter === "Projects")
      return allItems.filter((item) => item.type === "project");
    if (activeFilter === "Certificates")
      return allItems.filter((item) => item.type === "certificate");
    return allItems;
  };

  const getTechBadgeColor = (tech) => {
    const colors = {
      React: "#61DAFB",
      Tailwind: "#38B2AC",
      Firebase: "#FFCA28",
      Express: "#68A063",
      "Mistral AI": "#6352D9",
      "Three.js": "#000000",
      Appwrite: "#FD366E",
      Supabase: "#3ECF8E",
      Vite: "#646CFF",
    };
    return colors[tech] || "#90D5FF";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateX: 15,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div>
      <style jsx>{`
        @keyframes float-timeline {
          0%,
          100% {
            transform: translateY(0px) rotateX(0deg);
          }
          50% {
            transform: translateY(-10px) rotateX(2deg);
          }
        }

        @keyframes glow-pulse-timeline {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(144, 213, 255, 0.3),
              0 0 40px rgba(144, 213, 255, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(144, 213, 255, 0.5),
              0 0 60px rgba(144, 213, 255, 0.3);
          }
        }

        .timeline-line {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(144, 213, 255, 0.6) 10%,
            rgba(144, 213, 255, 0.8) 50%,
            rgba(144, 213, 255, 0.6) 90%,
            transparent 100%
          );
          box-shadow: 0 0 20px rgba(144, 213, 255, 0.4);
        }

        .timeline-dot {
          background: radial-gradient(circle, #90d5ff 0%, #1e40af 70%);
          box-shadow: 0 0 30px rgba(144, 213, 255, 0.8),
            inset 0 0 20px rgba(255, 255, 255, 0.2);
          animation: glow-pulse-timeline 3s ease-in-out infinite;
        }

        .project-card-3d {
          background: linear-gradient(
            135deg,
            rgba(30, 30, 30, 0.95) 0%,
            rgba(45, 45, 45, 0.98) 50%,
            rgba(60, 60, 60, 0.95) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.3);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7),
            0 8px 20px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          transform-style: preserve-3d;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .project-card-3d:hover {
          transform: translateY(-20px) rotateX(8deg) rotateY(-3deg) scale(1.02);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.8),
            0 15px 35px rgba(0, 0, 0, 0.6), 0 0 50px rgba(144, 213, 255, 0.4),
            inset 0 2px 0 rgba(255, 255, 255, 0.2);
        }

        .filter-button-3d {
          background: linear-gradient(
            135deg,
            rgba(30, 30, 30, 0.9) 0%,
            rgba(45, 45, 45, 0.95) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.3);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .filter-button-3d:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6),
            0 0 20px rgba(144, 213, 255, 0.3);
        }

        .filter-button-3d.active {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.2) 0%,
            rgba(30, 64, 175, 0.3) 100%
          );
          border-color: rgba(144, 213, 255, 0.6);
          animation: glow-pulse-timeline 2s ease-in-out infinite;
        }

        .floating-animation-timeline {
          animation: float-timeline 6s ease-in-out infinite;
        }

        .modal-backdrop {
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
        }

        .modal-content-3d {
          background: linear-gradient(
            135deg,
            rgba(20, 20, 20, 0.98) 0%,
            rgba(35, 35, 35, 0.99) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.4);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.9),
            0 0 60px rgba(144, 213, 255, 0.2);
          backdrop-filter: blur(20px);
        }
        .submit-btn {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.2) 0%,
            rgba(30, 64, 175, 0.6) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.5);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
            0 0 20px rgba(144, 213, 255, 0.3);
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6),
            0 0 30px rgba(144, 213, 255, 0.5);
        }

        /* Responsive styles */
        @media (max-width: 1024px) {
          .project-card-3d:hover {
            transform: none;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .timeline-line {
            left: 1.5rem;
          }

          .timeline-dot {
            left: 1.375rem;
          }

          .year-badge {
            left: 3.5rem;
          }

          .project-card {
            margin-left: 4.5rem;
          }

          .project-content {
            flex-direction: column;
          }

          .project-image {
            width: 100%;
          }

          .project-details {
            width: 100%;
          }

          .modal-content-3d {
            width: 95%;
            padding: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .header-title {
            font-size: 2.5rem;
          }

          .header-description {
            font-size: 1rem;
          }

          .filter-buttons {
            gap: 0.5rem;
          }

          .filter-button-3d {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }

          .timeline-line {
            left: 1rem;
          }

          .timeline-dot {
            left: 0.875rem;
            width: 0.75rem;
            height: 0.75rem;
          }

          .year-badge {
            left: 2.5rem;
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
          }

          .project-card {
            margin-left: 3rem;
            padding: 1rem;
          }

          .project-title {
            font-size: 1.25rem;
          }

          .project-description {
            font-size: 0.875rem;
          }

          .tech-badge {
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
          }

          .modal-title {
            font-size: 1.5rem;
          }

          .modal-description {
            font-size: 0.875rem;
          }

          .modal-tech-badge {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }
        }

        @media (max-width: 400px) {
          .header-title {
            font-size: 2rem;
          }

          .filter-buttons {
            flex-wrap: wrap;
            justify-content: center;
          }

          .project-card {
            margin-left: 2.5rem;
          }

          .year-badge {
            left: 2rem;
          }
        }
      `}</style>

      <section
        id="projects"
        className="min-h-screen py-8 md:py-16 transition-colors duration-300"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white floating-animation-timeline header-title"
              style={{
                textShadow:
                  "0 0 20px rgba(144, 213, 255, 0.5), 0 0 40px rgba(144, 213, 255, 0.3)",
                background: "linear-gradient(45deg, #90D5FF, #ffffff, #90D5FF)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              My Journey
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto header-description">
              Explore my projects and achievements through an interactive
              timeline
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 md:mb-12 filter-buttons"
          >
            {filters.map((filter, index) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-button-3d px-4 py-2 md:px-6 md:py-3 rounded-xl font-medium cursor-pointer text-sm md:text-base ${
                  activeFilter === filter ? "active" : ""
                }`}
              >
                <span className="text-gray-200">{filter}</span>
              </button>
            ))}
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-8 top-0 w-1 h-full timeline-line rounded-full"></div>

            {/* Timeline Items */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 md:space-y-12"
            >
              {getFilteredItems().map((item, index) => (
                <motion.div
                  key={`${item.type}-${item.id}`}
                  variants={itemVariants}
                  className="relative flex items-start project-item"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-3 sm:left-6 w-3 sm:w-5 h-3 sm:h-5 timeline-dot rounded-full z-10"></div>

                  {/* Year Badge */}
                  <div className="absolute left-8 sm:left-16 top-2 year-badge">
                    <div
                      className="px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold text-white"
                      style={{
                        background: `linear-gradient(45deg, ${accentColor}80, ${accentColor}40)`,
                        border: `1px solid ${accentColor}60`,
                      }}
                    >
                      {item.year}
                    </div>
                  </div>

                  {/* Project Card */}
                  <div className="ml-12 sm:ml-32 w-full project-card">
                    <div
                      className="project-card-3d p-4 md:p-6 rounded-2xl cursor-pointer group"
                      onClick={() => setSelectedProject(item)}
                    >
                      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 project-content">
                        {/* Image */}
                        <div className="w-full lg:w-1/3 project-image">
                          <div className="relative overflow-hidden rounded-xl">
                            <img
                              src={item.image || "/api/placeholder/300/200"}
                              alt={item.title}
                              className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                            {/* Type Badge */}
                            <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                              <div className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold bg-black/70 text-white">
                                {item.type === "featured" && (
                                  <FaTrophy className="w-2 h-2 sm:w-3 sm:h-3 text-yellow-400" />
                                )}
                                {item.type === "certificate" && (
                                  <FaCalendarAlt className="w-2 h-2 sm:w-3 sm:h-3 text-green-400" />
                                )}
                                <BiCategory className="w-2 h-2 sm:w-3 sm:h-3" />
                                <span className="capitalize text-xs sm:text-sm">
                                  {item.type}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-2/3 space-y-3 md:space-y-4 project-details">
                          <div className="flex items-start justify-between">
                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 project-title">
                              {item.title}
                            </h3>
                            <HiOutlineSparkles className="w-5 h-5 md:w-6 md:h-6 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>

                          <p className="text-sm md:text-base text-gray-300 leading-relaxed project-description">
                            {item.description}
                          </p>

                          {/* Technologies */}
                          {item.technologies && (
                            <div className="flex flex-wrap gap-1 md:gap-2">
                              {item.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium text-white tech-badge"
                                  style={{
                                    background: `${getTechBadgeColor(tech)}20`,
                                    border: `1px solid ${getTechBadgeColor(
                                      tech
                                    )}40`,
                                    color: getTechBadgeColor(tech),
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Actions */}
                          <div className="flex items-center gap-2 md:gap-4 pt-1 md:pt-2">
                            {item.link && item.link !== "#" && (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 md:gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-xs md:text-sm"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <FaExternalLinkAlt className="w-3 h-3 md:w-4 md:h-4" />
                                <span className="font-medium">
                                  View Project
                                </span>
                              </a>
                            )}

                            {item.issuer && (
                              <span className="text-xs md:text-sm text-gray-400">
                                Issued by {item.issuer}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 modal-backdrop"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="modal-content-3d rounded-2xl p-4 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl md:text-3xl font-bold text-white modal-title">
                      {selectedProject.title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <img
                    src={selectedProject.image || "/api/placeholder/400/250"}
                    alt={selectedProject.title}
                    className="w-full h-48 sm:h-64 object-cover rounded-xl"
                  />

                  <p className="text-sm md:text-lg text-gray-300 leading-relaxed modal-description">
                    {selectedProject.description}
                  </p>

                  {selectedProject.technologies && (
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 md:px-4 md:py-2 rounded-full font-medium text-xs md:text-sm text-white modal-tech-badge"
                            style={{
                              background: `${getTechBadgeColor(tech)}30`,
                              border: `1px solid ${getTechBadgeColor(tech)}60`,
                              color: getTechBadgeColor(tech),
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.link && selectedProject.link !== "#" && (
                    <div className="flex gap-3 md:gap-4">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="submit-btn flex items-center gap-1 md:gap-2 px-4 py-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-300 font-medium text-sm md:text-base"
                      >
                        <FaExternalLinkAlt className="w-3 h-3 md:w-4 md:h-4" />
                        View Live Project
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Projects;
