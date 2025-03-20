import React from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiThreedotjs,
} from "react-icons/si";

const Projects = () => {
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
    },
  ];

  const smallProjects = [
    {
      id: 1,
      title: "Weather Dashboard",
      description: "Real-time weather forecasting application.",
      image: "/path-to-weather-img.jpg",
      category: "Web App",
      technologies: ["React", "Weather API"],
      link: "#",
    },
    {
      id: 2,
      title: "Recipe Finder",
      description: "Search and save your favorite recipes.",
      image: "/path-to-recipe-img.jpg",
      category: "Web App",
      technologies: ["React", "Firebase"],
      link: "#",
    },
    {
      id: 3,
      title: "Budget Calculator",
      description: "Track your expenses and manage your budget.",
      image: "/path-to-budget-img.jpg",
      category: "Web App",
      technologies: ["React", "Chart.js"],
      link: "#",
    },
    {
      id: 4,
      title: "DevConnector",
      description: "Network with other developers.",
      image: "/path-to-devconnector-img.jpg",
      category: "Web App",
      technologies: ["React", "Express", "MongoDB"],
      link: "#",
    },
  ];

  // Function to render tech stack icons using react-icons
  const renderTechIcons = (techs) => {
    return techs.map((tech, index) => {
      // Select the appropriate icon based on the technology
      let icon;
      let bgColor = "bg-gray-800";
      let textColor = "text-gray-300";

      switch (tech) {
        case "React":
          icon = <FaReact className="mr-1" />;
          bgColor = "bg-blue-900";
          textColor = "text-blue-300";
          break;
        case "Node.js":
          icon = <FaNodeJs className="mr-1" />;
          bgColor = "bg-green-900";
          textColor = "text-green-300";
          break;
        case "Tailwind":
          icon = <SiTailwindcss className="mr-1" />;
          bgColor = "bg-cyan-900";
          textColor = "text-cyan-300";
          break;
        case "Three.js":
          icon = <SiThreedotjs className="mr-1" />;
          bgColor = "bg-purple-900";
          textColor = "text-purple-300";
          break;
        case "Firebase":
          icon = <SiFirebase className="mr-1" />;
          bgColor = "bg-orange-900";
          textColor = "text-orange-300";
          break;
        case "Express":
          icon = <SiExpress className="mr-1" />;
          bgColor = "bg-gray-700";
          textColor = "text-gray-300";
          break;
        case "MongoDB":
          icon = <SiMongodb className="mr-1" />;
          bgColor = "bg-green-900";
          textColor = "text-green-300";
          break;
        default:
          icon = <FaDatabase className="mr-1" />;
          break;
      }

      return (
        <span
          key={index}
          className={`inline-flex items-center px-2 py-1 mr-2 rounded text-xs font-medium ${bgColor} ${textColor}`}
        >
          {icon}
          {tech}
        </span>
      );
    });
  };

  // Project card component
  const ProjectCard = ({ project }) => (
    <div className="min-w-[300px] max-w-md bg-gray-800 rounded-lg overflow-hidden shadow-lg flex-shrink-0 border border-gray-700 flex flex-col">
      <div className="relative">
        <img
          src={project.image || "/api/placeholder/400/200"}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {project.category}
        </span>
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 text-center">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap mb-4">
          {renderTechIcons(project.technologies)}
        </div>
      </div>
      <div className="px-4 pb-4">
        <a
          href={project.link}
          className="block text-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );

  return (
    <section id="projects" className="min-h-screen bg-[#fefffe] py-16">
      <div className="container mx-auto px-6">
        {/* Centered Projects title without underline */}
        <h2 className="text-4xl font-bold text-[#12130F] mb-10 text-center">
          Projects
        </h2>

        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">
            Featured Projects
          </h3>
          <div className="relative">
            <div className="overflow-x-auto pb-4 hide-scrollbar flex space-x-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <div className="w-full max-w-3xl bg-gray-700 h-1 rounded-full">
                <div className="bg-blue-500 h-1 w-1/3 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Small Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">
            Small Projects
          </h3>
          <div className="relative">
            <div className="overflow-x-auto pb-4 hide-scrollbar flex space-x-6">
              {smallProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <div className="w-full max-w-3xl bg-gray-700 h-1 rounded-full">
                <div className="bg-blue-500 h-1 w-1/3 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
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
