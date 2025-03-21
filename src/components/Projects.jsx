import React, { useEffect, useState } from "react";
import { FaChartBar, FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Featured projects data
  const featuredProjects = [
    {
      id: 1,
      title: "ED3C: Memorial Design Platform",
      description:
        "Interactive 3D customization web application for memorial design and gravestone creation.",
      image: "/path-to-memorial-design-img.jpg",
      category: "Web App",
      technologies: ["React", "Three.js", "Firebase"],
      link: "#",
      featured: true,
      caseStudy: {
        title: "ED3C: Revolutionizing Memorial Design",
        overview:
          "ED3C is an innovative web application designed to transform the memorial design process for Double Seven Lapida Maker Incorporation. By providing an intuitive, real-time 3D customization platform, it addresses key challenges in memorial design.",
        features: [
          "Interactive 3D design tool",
          "Real-time customization of gravestones, table signs, urns, and bases",
          "User-friendly design management system",
          "Comprehensive order tracking",
        ],
        technologyStack: [
          "Frontend: React.js",
          "3D Rendering: Three.js",
          "Backend & Database: Firebase",
        ],
        impact:
          "The platform significantly reduces design iteration time and enhances client satisfaction by providing instant visualization and comprehensive design control.",
        ownerAccount: {
          username: "owner@gmail.com",
          password: "123456",
        },
      },
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "Secure online shopping application with payment integration and user authentication system.",
      image: "/path-to-ecommerce-img.jpg",
      category: "Web App",
      technologies: ["React", "Node.js", "Tailwind"],
      link: "#",
      featured: true,
      caseStudy: "Case study content for E-Commerce Platform",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Responsive portfolio built with React and Tailwind CSS showcasing projects and skills.",
      image: "/path-to-portfolio-img.jpg",
      category: "Web App",
      technologies: ["React", "Tailwind", "Three.js"],
      link: "#",
      featured: true,
      caseStudy: "Case study content for Portfolio Website",
    },
    {
      id: 4,
      title: "Task Manager",
      description:
        "Collaborative tool for teams to organize and assign tasks, and track progress.",
      image: "/path-to-taskmanager-img.jpg",
      category: "Web App",
      technologies: ["React", "Express", "MongoDB"],
      link: "#",
      featured: true,
      caseStudy: "Case study content for Task Management App",
    },
  ];

  // Small projects data
  const smallProjects = [
    {
      id: 1,
      title: "Weather Dashboard",
      description: "Real-time weather forecasting application.",
      image: "/path-to-weather-img.jpg",
      category: "Web App",
      technologies: ["React", "Weather API"],
      link: "#",
      featured: false,
    },
    {
      id: 2,
      title: "Recipe Finder",
      description: "Search and save your favorite recipes.",
      image: "/path-to-recipe-img.jpg",
      category: "Web App",
      technologies: ["React", "Firebase"],
      link: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Budget Calculator",
      description: "Track your expenses and manage your budget.",
      image: "/path-to-budget-img.jpg",
      category: "Web App",
      technologies: ["React", "Chart.js"],
      link: "#",
      featured: false,
    },
    {
      id: 4,
      title: "DevConnector",
      description: "Network with other developers.",
      image: "/path-to-devconnector-img.jpg",
      category: "Web App",
      technologies: ["React", "Express", "MongoDB"],
      link: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Movie Finder",
      description: "Movie search application with reviews and recommendations.",
      image: "/path-to-movie-img.jpg",
      category: "Web App",
      technologies: ["React", "Firebase"],
      link: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description:
        "Exercise tracking app with progress charts and workout plans.",
      image: "/path-to-fitness-img.jpg",
      category: "Web App",
      technologies: ["React", "Chart.js"],
      link: "#",
      featured: false,
    },
  ];

  // Map of technology icons with colors
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
  };

  // Add effect to control body scroll when overlay is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function
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

  // Featured project card component
  const ProjectCard = ({ project }) => (
    <div className="project-card group bg-gradient-to-b from-[#2a2a2a] to-[#333333] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105">
      <div className="h-32 bg-gradient-to-r from-[#2a2a2a] to-[#444444] relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#90D5FF_1px,transparent_1px)] bg-[size:16px_16px]"></div>
        )}

        {/* Project type badge */}
        <div className="absolute top-2 right-2 bg-[#90D5FF] text-[#333333] text-xs font-bold px-2 py-0.5 rounded-full">
          {project.category}
        </div>
      </div>

      <div className="p-3">
        <h3 className="text-lg font-semibold text-white mb-1">
          {project.title}
        </h3>
        <p className="text-gray-300 text-xs mb-2 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies used with colored icons */}
        <div className="flex flex-wrap gap-1 mb-2">
          {project.technologies.map((tech, index) => {
            const techIcon = techIcons[tech];
            return (
              <span
                key={index}
                className="bg-[#444444] text-gray-300 text-xs px-1.5 py-0.5 rounded-full flex items-center gap-1"
              >
                {techIcon && (
                  <techIcon.icon
                    className="mr-0.5"
                    color={techIcon.color}
                    style={{ fontSize: "0.75rem" }}
                  />
                )}
                {tech}
              </span>
            );
          })}
        </div>

        {/* Action buttons */}
        <div className="flex space-x-2">
          <button
            onClick={() => handleViewProject(project)}
            className="text-xs bg-[#90D5FF] text-[#333333] px-2 py-1 rounded-md font-medium hover:bg-[#7bc8ff] transition-colors"
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );

  // Small project card component
  const SmallProjectCard = ({ project }) => (
    <div
      className="small-project-card group bg-gradient-to-b from-[#2a2a2a] to-[#333333] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 flex flex-col h-full cursor-pointer"
      onClick={() => handleViewProject(project)}
    >
      <div className="h-28 bg-gradient-to-r from-[#2a2a2a] to-[#444444] relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#90D5FF_1px,transparent_1px)] bg-[size:16px_16px]"></div>
        )}

        {/* Project type badge */}
        <div className="absolute top-2 right-2 bg-[#90D5FF] text-[#333333] text-xs font-bold px-2 py-1 rounded-full">
          {project.category}
        </div>
      </div>

      <div className="p-3 flex-grow flex flex-col">
        <h3 className="text-sm font-semibold text-white mb-2 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-gray-300 text-xs mb-2 line-clamp-2 flex-grow">
          {project.description}
        </p>

        {/* Technologies used with colored icons - limit to 3 */}
        <div className="flex flex-wrap gap-1 mt-1">
          {project.technologies.slice(0, 3).map((tech, index) => {
            const techIcon = techIcons[tech];
            return (
              <span
                key={index}
                className="bg-[#444444] text-gray-300 text-xs px-2 py-1 rounded-full flex items-center gap-1"
              >
                {techIcon && (
                  <techIcon.icon
                    className="mr-0.5"
                    color={techIcon.color}
                    size={12}
                  />
                )}
                <span className="text-xs">{tech}</span>
              </span>
            );
          })}
          {project.technologies.length > 3 && (
            <span className="text-xs text-gray-400 ml-1">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );

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

        <div className={`${selectedProject ? "blur-sm" : ""}`}>
          {/* Featured Projects Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#90D5FF] border-b border-gray-700 pb-2 mb-4">
              Featured Projects
            </h2>

            <div className="overflow-x-auto pb-4 hide-scrollbar">
              <div
                className="flex space-x-4"
                style={{ minWidth: "min-content" }}
              >
                {featuredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex-shrink-0"
                    style={{ width: "300px" }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Small Projects Section */}
          <div>
            <h2 className="text-xl font-bold text-[#90D5FF] border-b border-gray-700 pb-2 mb-4">
              Small Projects
            </h2>

            <div className="overflow-x-auto pb-4 hide-scrollbar">
              <div
                className="flex space-x-4"
                style={{ minWidth: "min-content" }}
              >
                {smallProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex-shrink-0"
                    style={{ width: "250px" }}
                  >
                    <SmallProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          </div>
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
                  {selectedProject.technologies.map((tech, index) => (
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
