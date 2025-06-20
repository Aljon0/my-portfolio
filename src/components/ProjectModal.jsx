import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

const ProjectModal = ({ selectedProject, onClose, getTechBadgeColor }) => {
  if (!selectedProject) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 modal-backdrop"
      onClick={onClose}
      style={{ paddingTop: "80px" }} // Add padding to account for header
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotateX: 15 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
        }}
        className="modal-content-3d rounded-2xl p-4 md:p-8 max-w-4xl w-full max-h-[calc(90vh-80px)] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-start justify-between">
            <h3 className="text-2xl md:text-3xl font-bold text-white modal-title">
              {selectedProject.title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl cursor-pointer"
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

          {/* Case Study Section */}
          {selectedProject.caseStudy && (
            <div className="case-study-section">
              <h4 className="case-study-title">
                <HiOutlineSparkles className="w-5 h-5" />
                Case Study: {selectedProject.caseStudy.title}
              </h4>

              {/* Overview */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-blue-300 mb-3">
                  Overview
                </h5>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.caseStudy.overview}
                </p>
              </div>

              {/* Problem & Solution (if exists) */}
              {selectedProject.caseStudy.problemAndSolution && (
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-blue-300 mb-4">
                    Problem & Solution
                  </h5>
                  <div className="problem-solution-container">
                    <div className="problem-section">
                      <h6 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        Problems
                      </h6>
                      <ul className="feature-list">
                        {selectedProject.caseStudy.problemAndSolution.problem.map(
                          (problem, index) => (
                            <li key={index}>{problem}</li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="solution-section">
                      <h6 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Solutions
                      </h6>
                      <ul className="feature-list">
                        {selectedProject.caseStudy.problemAndSolution.solution.map(
                          (solution, index) => (
                            <li key={index}>{solution}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Features */}
              {selectedProject.caseStudy.features && (
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-blue-300 mb-3">
                    Key Features
                  </h5>
                  <ul className="feature-list">
                    {selectedProject.caseStudy.features.map(
                      (feature, index) => (
                        <li key={index}>{feature}</li>
                      )
                    )}
                  </ul>
                </div>
              )}

              {/* Technology Stack */}
              {selectedProject.caseStudy.technologyStack && (
                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-blue-300 mb-3">
                    Technology Stack
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.caseStudy.technologyStack.map(
                      (tech, index) => (
                        <span key={index} className="tech-stack-item">
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Original Technologies Section */}
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

          {/* Action Buttons */}
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
  );
};

export default ProjectModal;
