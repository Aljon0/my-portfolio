/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
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

const ProjectCard = ({ project, handleViewProject, accentColor }) => {
  const { theme } = useTheme();

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
            box-shadow: 0 0 20px rgba(144, 213, 255, 0.3),
              0 0 40px rgba(144, 213, 255, 0.2),
              inset 0 0 20px rgba(144, 213, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(144, 213, 255, 0.5),
              0 0 60px rgba(144, 213, 255, 0.3),
              inset 0 0 30px rgba(144, 213, 255, 0.2);
          }
        }

        .project-card-3d {
          background: linear-gradient(
            135deg,
            rgba(30, 30, 30, 0.9) 0%,
            rgba(45, 45, 45, 0.95) 50%,
            rgba(60, 60, 60, 0.9) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6),
            0 4px 16px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(0, 0, 0, 0.3);
          transform-style: preserve-3d;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          backdrop-filter: blur(10px);
          perspective: 1000px;
        }

        .project-card-3d::before {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(144, 213, 255, 0.1),
            transparent
          );
          border-radius: inherit;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card-3d:hover::before {
          opacity: 1;
        }

        .project-card-3d:hover {
          transform: translateY(-15px) rotateX(10deg) rotateY(5deg) scale(1.05);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8),
            0 10px 30px rgba(0, 0, 0, 0.6),
            0 0 40px var(--glow-color, rgba(144, 213, 255, 0.4)),
            inset 0 2px 0 rgba(255, 255, 255, 0.2),
            inset 0 -2px 0 rgba(0, 0, 0, 0.4);
        }

        .project-image-3d {
          transform-style: preserve-3d;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .project-card-3d:hover .project-image-3d {
          transform: translateZ(20px);
        }

        .tech-badge-3d {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.2) 0%,
            rgba(30, 64, 175, 0.3) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.4);
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
        }

        .tech-badge-3d:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .project-button-3d {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.9) 0%,
            rgba(30, 64, 175, 0.9) 100%
          );
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transform-style: preserve-3d;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .project-button-3d:hover {
          transform: translateY(-3px) rotateX(5deg);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6),
            0 0 20px rgba(144, 213, 255, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .category-badge-3d {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(144, 213, 255, 0.3) 100%
          );
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .floating-animation {
          animation: float-3d 6s ease-in-out infinite;
        }
      `}</style>

      <div
        className={`project-card-3d rounded-2xl overflow-hidden floating-animation`}
        style={{
          "--glow-color": `${accentColor}40`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      >
        <div className="h-40 relative overflow-hidden project-image-3d">
          {project.image ? (
            <motion.div
              className="absolute inset-0 w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                style={{
                  filter: "brightness(0.9) contrast(1.1) saturate(1.2)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#90D5FF_1px,transparent_1px)] bg-[size:16px_16px]" />
            </div>
          )}

          <div className="category-badge-3d absolute top-3 right-3 text-xs font-bold px-3 py-1.5 rounded-full text-white">
            {project.category}
          </div>
        </div>

        <div className="p-5 space-y-4">
          <h3 className="text-xl font-bold text-white mb-2 leading-tight">
            {project.title}
          </h3>

          <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => {
              const techIcon = techIcons[tech];
              return (
                <span
                  key={index}
                  className="tech-badge-3d text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 text-blue-200 font-medium"
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
            {project.technologies.length > 4 && (
              <span className="tech-badge-3d text-xs px-3 py-1.5 rounded-full text-blue-200 font-medium">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <motion.button
            onClick={(e) => handleViewProject(project, e)}
            className="project-button-3d w-full text-sm px-4 py-3 rounded-xl font-bold text-white cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Project
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
