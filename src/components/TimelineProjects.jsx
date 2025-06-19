import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

// Sample data - replace with your actual project data
const featuredProjects = [
  {
    id: 1,
    title: "AI-Health Companion",
    description:
      "A smart healthcare assistant web app that uses Mistral AI and public medical APIs to help users check symptoms, track mental health, and access timely health advice.",
    image: "/api/placeholder/600/400",
    category: "Web App",
    technologies: ["React", "Tailwind", "Firebase", "Express", "Mistral AI"],
    link: "https://projectbaymax.onrender.com/",
    featured: true,
  },
  {
    id: 2,
    title: "AI-Resume Builder",
    description:
      "An intelligent resume builder that uses Mistral AI for skill suggestions, customizable templates, and PDF export with Firebase integration.",
    image: "/api/placeholder/600/400",
    category: "Web App",
    technologies: ["React", "Tailwind", "Firebase", "Express", "Mistral AI"],
    link: "https://ai-rb-haee.onrender.com",
    featured: true,
  },
  {
    id: 3,
    title: "ED3C: Eternal Design",
    description:
      "Interactive 3D customization web application for memorial design and gravestone creation.",
    image: "/api/placeholder/600/400",
    category: "Web App",
    technologies: ["React", "Tailwind", "Three.js", "Firebase"],
    link: "#",
    featured: true,
  },
];

const smallProjects = [
  {
    id: 5,
    title: "Expense Tracker",
    description:
      "A streamlined expense tracking application built with React and Appwrite to help users manage their personal finances effectively.",
    image: "/api/placeholder/600/400",
    category: "Web App",
    technologies: ["React", "Tailwind", "Appwrite"],
    link: "https://expensetracker-hrws.onrender.com",
    featured: false,
  },
  {
    id: 6,
    title: "Chat Sphere",
    description:
      "ChatSphere is a sleek, responsive chat app built with React, Vite, and Tailwind CSS, showcasing real-time messaging powered by Firebase.",
    image: "/api/placeholder/600/400",
    category: "Web App",
    technologies: ["React", "Tailwind", "Firebase"],
    link: "https://chat-web-app-1c91d.web.app/",
    featured: false,
  },
];

const TimelineProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  // Combine all projects for timeline
  const allProjects = [
    ...featuredProjects.map((p) => ({ ...p, type: "featured" })),
    ...smallProjects.map((p) => ({ ...p, type: "small" })),
  ];

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
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      setModalPosition({
        x: viewportWidth / 2 - (rect.left + rect.width / 2),
        y: viewportHeight / 2 - (rect.top + rect.height / 2),
      });
    }
    setSelectedProject(project);
  };

  const closeOverlay = () => {
    setSelectedProject(null);
  };

  // Timeline Item Component
  const TimelineItem = ({ project, index, isLeft }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        className={`relative flex items-center ${
          isLeft ? "flex-row" : "flex-row-reverse"
        } mb-24 group`}
        initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: isLeft ? -100 : 100 }
        }
        transition={{
          duration: 0.8,
          delay: 0.2,
          type: "spring",
          stiffness: 100,
        }}
      >
        {/* Timeline Node */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-20 timeline-node"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        />

        {/* Project Image */}
        <motion.div
          className={`w-80 h-64 relative overflow-hidden rounded-2xl cursor-pointer z-10 ${
            isLeft ? "mr-16" : "ml-16"
          }`}
          onClick={(e) => handleViewProject(project, e)}
          whileHover={{
            scale: 1.05,
            rotateY: isLeft ? 8 : -8,
            rotateX: 3,
            transition: { duration: 0.4 },
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Project Type Badge */}
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1.5 text-xs font-bold rounded-full backdrop-blur-sm ${
                project.type === "featured"
                  ? "bg-gradient-to-r from-blue-500/80 to-purple-600/80 text-white"
                  : "bg-gradient-to-r from-green-500/80 to-teal-600/80 text-white"
              }`}
            >
              {project.type === "featured" ? "Featured" : "Project"}
            </span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </motion.button>
          </div>
        </motion.div>

        {/* Project Content */}
        <motion.div
          className={`flex-1 max-w-md ${
            isLeft ? "text-left pl-8" : "text-right pr-8"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="mb-4">
            <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
            {project.title}
          </h3>

          <p className="text-gray-300 text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Technologies */}
          <div
            className={`flex flex-wrap gap-2 mb-6 ${
              isLeft ? "justify-start" : "justify-end"
            }`}
          >
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 text-blue-200 font-medium backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div
            className={`flex gap-3 ${isLeft ? "justify-start" : "justify-end"}`}
          >
            {project.link && project.link !== "#" && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt size={12} />
                Visit Site
              </motion.a>
            )}

            <motion.button
              onClick={(e) => handleViewProject(project, e)}
              className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500/50 text-blue-400 rounded-lg font-medium hover:bg-blue-500/10 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(#90D5FF_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent">
            Project Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />

          {allProjects.map((project, index) => (
            <TimelineItem
              key={project.id}
              project={project}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                if (e.target === e.currentTarget) closeOverlay();
              }}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-2xl max-w-4xl w-full p-8 relative max-h-[90vh] overflow-y-auto"
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
                  transition: { duration: 0.3 },
                }}
              >
                {/* Close Button */}
                <button
                  onClick={closeOverlay}
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700/80 text-white text-xl font-bold transition-colors z-10"
                >
                  ×
                </button>

                {/* Modal Content */}
                <div className="space-y-6">
                  {selectedProject.image && (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-80 object-cover rounded-xl"
                    />
                  )}

                  <div>
                    <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-3xl font-bold text-white mt-2 mb-4">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {selectedProject.link && selectedProject.link !== "#" && (
                    <div className="pt-4">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                      >
                        <FaExternalLinkAlt size={14} />
                        Visit Project
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .timeline-node {
          background: radial-gradient(circle, #60a5fa 0%, #3b82f6 70%);
          border: 3px solid rgba(0, 0, 0, 0.9);
          box-shadow: 0 0 20px rgba(96, 165, 250, 0.6),
            inset 0 0 10px rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 768px) {
          .relative.flex.items-center {
            flex-direction: column !important;
            text-align: center !important;
          }

          .relative.flex.items-center .absolute {
            position: relative !important;
            left: auto !important;
            transform: none !important;
            margin: 1rem 0 !important;
          }

          .w-80 {
            width: 100% !important;
            max-width: 20rem;
            margin: 0 !important;
          }

          .flex-1.max-w-md {
            max-width: none !important;
            margin: 0 !important;
            padding: 0 !important;
            text-align: center !important;
          }

          .justify-start,
          .justify-end {
            justify-content: center !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TimelineProjects;
