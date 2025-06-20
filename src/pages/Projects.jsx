import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import {
  certificates,
  featuredProjects,
  smallProjects,
} from "../components/ProjectsData";
import TimelineItem from "../components/TimelineItem";

// Mock theme context
const useTheme = () => ({ theme: "dark" });

const Projects = () => {
  const { theme } = useTheme();
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

        .case-study-section {
          background: rgba(20, 20, 20, 0.6);
          border: 1px solid rgba(144, 213, 255, 0.2);
          border-radius: 12px;
          padding: 1.5rem;
          margin: 1rem 0;
        }

        .case-study-title {
          color: #90d5ff;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .feature-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: #e5e7eb;
        }

        .feature-list li::before {
          content: "•";
          color: #90d5ff;
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .tech-stack-item {
          background: rgba(144, 213, 255, 0.1);
          border: 1px solid rgba(144, 213, 255, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          color: #90d5ff;
          font-size: 0.875rem;
          margin: 0.25rem;
          display: inline-block;
        }

        .problem-solution-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin: 1rem 0;
        }

        .problem-section,
        .solution-section {
          background: rgba(25, 25, 25, 0.8);
          padding: 1rem;
          border-radius: 8px;
          border: 1px solid rgba(144, 213, 255, 0.2);
        }

        .problem-section {
          border-left: 4px solid #ef4444;
        }

        .solution-section {
          border-left: 4px solid #10b981;
        }

        @media (max-width: 1024px) {
          .project-card-3d:hover {
            transform: none;
          }
          .problem-solution-container {
            grid-template-columns: 1fr;
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
            max-height: 90vh;
            overflow-y: auto;
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
              Projects
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto header-description">
              Explore my projects and achievements through an interactive
              timeline
            </p>
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
              {allItems.map((item, index) => (
                <TimelineItem
                  key={`${item.type}-${item.id}`}
                  item={item}
                  index={index}
                  setSelectedProject={setSelectedProject}
                  getTechBadgeColor={getTechBadgeColor}
                  accentColor={accentColor}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Project Modal with Case Study */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              selectedProject={selectedProject}
              onClose={() => setSelectedProject(null)}
              getTechBadgeColor={getTechBadgeColor}
            />
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Projects;
