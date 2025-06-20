import { motion } from "framer-motion";
import { BiCategory } from "react-icons/bi";
import { FaCalendarAlt, FaExternalLinkAlt, FaTrophy } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

const TimelineItem = ({
  item,
  index,
  setSelectedProject,
  getTechBadgeColor,
  accentColor,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
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
                        border: `1px solid ${getTechBadgeColor(tech)}40`,
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
                    <span className="font-medium">View Project</span>
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
  );
};

export default TimelineItem;
