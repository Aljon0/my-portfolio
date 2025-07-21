import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import {
  certificates,
  featuredProjects,
  smallProjects,
} from "../components/ProjectsData";
import styles from "./Projects.module.css";

// Mock theme context
const useTheme = () => ({ theme: "dark" });

const Projects = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const accentColor = theme === "light" ? "#1E40AF" : "#90D5FF";

  // Combine all items for display
  const allItems = [
    ...featuredProjects.map((p) => ({ ...p, type: "featured" })),
    ...smallProjects.map((p) => ({ ...p, type: "project" })),
    ...certificates.map((c) => ({
      ...c,
      type: "certificate",
      description: `Certificate from ${c.issuer}`,
    })),
  ];

  // Filter items based on active tab
  const filteredItems =
    activeTab === "all"
      ? allItems
      : allItems.filter((item) => item.type === activeTab);

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
      TypeScript: "#3178C6",
    };
    return colors[tech] || "#90D5FF";
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
  };

  return (
    <div>
      <section
        id="projects"
        className="min-h-screen py-8 md:py-16 transition-colors duration-300"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2
              className={`text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white ${styles.floatingAnimation}`}
              style={{
                textShadow:
                  "0 0 20px rgba(144, 213, 255, 0.5), 0 0 40px rgba(144, 213, 255, 0.3)",
                background: "linear-gradient(45deg, #90D5FF, #ffffff, #90D5FF)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Projects & Achievements
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
              Explore my portfolio of web applications, AI integrations, and
              professional certifications
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-4 mb-8">
              <div className={styles.statsBadge}>
                <span className="font-bold">{featuredProjects.length}</span>{" "}
                Featured Projects
              </div>
              <div className={styles.statsBadge}>
                <span className="font-bold">{smallProjects.length}</span> Web
                Apps
              </div>
              <div className={styles.statsBadge}>
                <span className="font-bold">{certificates.length}</span>{" "}
                Certificates
              </div>
            </div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8 md:mb-12"
          >
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
              {[
                { key: "all", label: "All Projects", count: allItems.length },
                {
                  key: "featured",
                  label: "Featured",
                  count: featuredProjects.length,
                },
                {
                  key: "project",
                  label: "Web Apps",
                  count: smallProjects.length,
                },
                {
                  key: "certificate",
                  label: "Certificates",
                  count: certificates.length,
                },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`${styles.tabButton} ${
                    activeTab === tab.key ? styles.active : ""
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={styles.gridContainer}
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${item.type}-${item.id}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setHoveredProject(item.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className={`${styles.projectCard3d} rounded-2xl p-6 cursor-pointer relative`}
                  onClick={() => setSelectedProject(item)}
                >
                  {/* Badge */}
                  {item.type === "featured" && (
                    <div className={styles.featuredBadge}>⭐ Featured</div>
                  )}
                  {item.type === "certificate" && (
                    <div className={styles.certificateBadge}>
                      🏆 Certificate
                    </div>
                  )}

                  {/* Project Image */}
                  <div className="overflow-hidden rounded-xl mb-4">
                    <img
                      src={item.image || "/api/placeholder/400/200"}
                      alt={item.title}
                      className={styles.projectImage}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-1">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    {item.technologies && (
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {item.technologies
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={styles.techBadge}
                              style={{
                                borderColor: `${getTechBadgeColor(tech)}60`,
                                color: getTechBadgeColor(tech),
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        {item.technologies.length > 3 && (
                          <span className={styles.techBadge}>
                            +{item.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Certificate specific info */}
                    {item.type === "certificate" && (
                      <div className="mt-2 text-sm text-gray-400">
                        Issued by: {item.issuer}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 text-lg">
                No projects found in this category.
              </div>
            </motion.div>
          )}
        </div>

        {/* Project Modal */}
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
