import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaChartBar, FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAppwrite,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { useTheme } from "../context/ThemeContext";

const techIcons = {
  React: { icon: FaReact, color: "#61DAFB" },
  "Node.js": { icon: FaNodeJs, color: "#68A063" },
  Tailwind: { icon: SiTailwindcss, color: "#38B2AC" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  "Three.js": { icon: TbBrandThreejs, color: "#000000" },
  "Chart.js": { icon: FaChartBar, color: "#FF6384" },
  MongoDB: { icon: SiMongodb, color: "#4DB33D" },
  Express: { icon: SiExpress, color: "#303030" },
  "Weather API": { icon: FaDatabase, color: "#5F9EA0" },
  Appwrite: { icon: SiAppwrite, color: "#F02E65" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E" },
};

const ProjectCard = ({
  project,
  handleViewProject,
  accentColor,
  isSmall = false,
}) => {
  const { theme } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="project-card-3d relative group cursor-pointer h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => handleViewProject(project, e)}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 2,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative overflow-hidden rounded-xl h-full flex flex-col">
        {/* Project Image */}
        <div
          className={`${
            isSmall ? "h-48" : "h-64"
          } overflow-hidden relative flex-shrink-0`}
        >
          {project.image ? (
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
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#90D5FF_1px,transparent_1px)] bg-[size:16px_16px]" />
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Category Badge */}
          <div className="category-badge-3d absolute top-3 right-3 text-xs font-bold px-3 py-1.5 rounded-full text-white">
            {project.category}
          </div>

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

            {/* Only show description if not a small project */}
            {!isSmall && (
              <motion.p
                className="text-gray-300 text-sm mb-4 px-4"
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
                transition: { delay: 0.3, duration: 0.3 },
              }}
            >
              {project.technologies.slice(0, 3).map((tech, index) => {
                const techIcon = techIcons[tech];
                return (
                  <span
                    key={index}
                    className="tech-badge-hover-3d text-xs px-2 py-1 rounded-full text-blue-200 font-medium"
                  >
                    {techIcon && (
                      <techIcon.icon
                        className="flex-shrink-0"
                        color={techIcon.color}
                        style={{ fontSize: "0.75rem" }}
                      />
                    )}
                    {tech}
                  </span>
                );
              })}
              {project.technologies.length > 3 && (
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
                transition: { delay: 0.4, duration: 0.3 },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Project
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Project Info (Always Visible) */}
        <div className="flex-grow flex flex-col justify-end">
          <div className="p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
            <h3 className="text-lg font-bold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm opacity-80">
              {project.technologies.slice(0, 2).join(" • ")}
              {project.technologies.length > 2 && " ..."}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
