import {
  Award,
  Briefcase,
  Code,
  Download,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import "./Resume.css";

const Resume = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle opening/closing animation
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);
      document.body.style.overflow = "hidden";
    } else if (isVisible) {
      // Start closing animation
      setIsAnimating(false);
      // Delay hiding to allow close animation to complete
      const timer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "unset";
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [isOpen, isVisible]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Aljon_Santiago_CV.pdf";
    link.download = "Aljon_Santiago_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Don't render anything if not visible
  if (!isVisible) return null;

  const technicalSkills = [
    "JavaScript",
    "React.js",
    "Node.js",
    "Python",
    "MongoDB",
    "Express.js",
    "HTML5",
    "CSS3",
    "Three.js",
    "Tailwind CSS",
    "Databases & Platforms",
    "Firebase",
    "AI Integration",
  ];

  const softSkills = [
    "Problem Solving",
    "Critical Thinking",
    "Attention to Detail",
    "Collaboration",
    "Adaptability",
    "Time Management",
  ];

  const experiences = [
    {
      title: "Backend Developer",
      company: "Seiwa Kaiun Philippines Inc., Golden Gate General Trias Cavite",
      period: "February 17, 2025 - May 16, 2025",
      responsibilities: [
        "Developed and maintained backend functionalities for internal systems, including a Performance Evaluation System for 500+ employees.",
        "Conducted system testing, bug fixing, and data validation to ensure reliability and optimal performance.",
        "Collaborated with the MIS team to present project updates and implement feedback into system improvements.",
      ],
    },
  ];

  const projects = [
    {
      name: "ED3C - 3D Customization System",
      tech: "Full Stack Development | React, Three.js, Firebase",
      description:
        "Developed an interactive system for memorial design customization with 3D visuals. Added payment integration, inventory tracking, and report exports.",
    },
    {
      name: "AI Resume Builder",
      tech: "Full Stack Development | React, Tailwind CSS, Database, Material AI",
      description:
        "Built a smart resume builder with AI-generated skill suggestions and PDF export. Implemented secure authentication and resume management.",
    },
    {
      name: "BAYMAX - AI Health Companion",
      tech: "Full Stack Development | React, CSS, Database, Material AI, MedlinePlus API",
      description:
        "Created an AI-powered app for symptom checking, journaling, and wellness reminders.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden mt-16">
      {/* Background overlay */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Resume panel sliding from left */}
      <div
        className={`resume-panel absolute top-0 left-0 h-full w-full md:w-1/2 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95 backdrop-blur-xl border-r border-[#90D5FF]/20 overflow-y-auto transition-transform duration-700 ease-out ${
          isAnimating ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          boxShadow:
            "0 0 50px rgba(144, 213, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-red-500/20 hover:bg-red-500/30 flex cursor-pointer items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
        >
          <X size={20} />
        </button>

        {/* Download button */}
        <button
          onClick={handleDownload}
          className="absolute top-6 right-20 px-4 py-2 bg-gradient-to-r cursor-pointer from-[#90D5FF] to-[#6AB7FF] text-white rounded-lg hover:shadow-lg hover:shadow-[#90D5FF]/25 transition-all duration-300 flex items-center gap-2 text-sm font-medium"
        >
          <Download size={16} />
          Download PDF
        </button>

        <div className="p-8 pt-20">
          {/* Header Section */}
          <div className="text-center mb-8 relative">
            <div className="profile-image w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-[#90D5FF]/30 shadow-2xl shadow-[#90D5FF]/20">
              <img
                src="/Aljon.webp"
                alt="Al-jon Santiago"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="gradient-text text-4xl font-bold mb-2">
              AL-JON SANTIAGO
            </h1>
            <p className="text-xl text-[#90D5FF] mb-4 font-medium">
              Full Stack Developer
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Motivated and self-taught full stack developer passionate about
              building impactful, real-world web applications. Skilled in modern
              JavaScript frameworks, and integrating AI-powered features.
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
              <div className="stagger-item flex items-center justify-center sm:justify-start gap-2">
                <Mail size={16} className="contact-icon text-[#90D5FF]" />
                <span>aljon.media08@gmail.com</span>
              </div>
              <div className="stagger-item flex items-center justify-center sm:justify-start gap-2">
                <Phone size={16} className="contact-icon text-[#90D5FF]" />
                <span>+63 9669206512</span>
              </div>
              <div className="stagger-item flex items-center justify-center sm:justify-start gap-2 sm:col-span-2">
                <MapPin size={16} className="contact-icon text-[#90D5FF]" />
                <span>General Trias Cavite, Philippines</span>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="stagger-item mb-8 bg-gradient-to-br from-[#90D5FF]/10 to-[#6AB7FF]/5 rounded-lg p-6 border border-[#90D5FF]/20">
            <div className="flex items-center gap-3 mb-4">
              <Award size={20} className="text-[#90D5FF]" />
              <h2 className="text-xl font-bold text-white">
                Professional Summary
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Motivated and self-taught full stack developer passionate about
              building impactful, real-world web applications. Skilled in modern
              JavaScript frameworks, and integrating AI-powered features.
              Experienced in developing performance evaluation systems and
              collaborating with cross-functional teams to deliver reliable
              software solutions.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="stagger-item mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Code size={20} className="text-[#90D5FF]" />
              <h2 className="text-xl font-bold text-white">Technical Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-tag px-3 py-1 bg-gradient-to-r from-[#90D5FF]/20 to-[#6AB7FF]/20 border border-[#90D5FF]/30 rounded-full text-[#90D5FF] text-sm font-medium backdrop-blur-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills Section */}
          <div className="stagger-item mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Award size={20} className="text-[#90D5FF]" />
              <h2 className="text-xl font-bold text-white">Soft Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-tag px-3 py-1 bg-gradient-to-r from-gray-700/30 to-gray-600/30 border border-gray-500/30 rounded-full text-gray-300 text-sm font-medium backdrop-blur-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Experience Section */}
          <div className="stagger-item mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase size={20} className="text-[#90D5FF]" />
              <h2 className="text-xl font-bold text-white">
                Professional Experience
              </h2>
            </div>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="section-card bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-lg p-4 border border-[#90D5FF]/10"
                >
                  <h3 className="text-[#90D5FF] font-semibold text-lg">
                    {exp.title}
                  </h3>
                  <p className="text-white font-medium">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li
                        key={respIndex}
                        className="text-gray-300 text-sm flex items-start gap-2"
                      >
                        <span className="text-[#90D5FF] mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="stagger-item mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Globe size={20} className="text-[#90D5FF]" />
              <h2 className="text-xl font-bold text-white">
                Projects Experience
              </h2>
            </div>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="section-card bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-lg p-4 border border-[#90D5FF]/10"
                >
                  <h3 className="text-[#90D5FF] font-semibold text-lg">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2 font-medium">
                    {project.tech}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="stagger-item mb-8">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap size={20} className="text-[#90D5FF]" />
              <h2 className="text-xl font-bold text-white">Education</h2>
            </div>
            <div className="section-card bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-lg p-4 border border-[#90D5FF]/10">
              <h3 className="text-[#90D5FF] font-semibold text-lg">
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-white font-medium">
                Cavite State University - UCCATT Campus
              </p>
              <p className="text-gray-400 text-sm">Rosario, Cavite</p>
              <p className="text-gray-400 text-sm">2021 - 2025</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="stagger-item mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Award size={20} className="text-[#90D5FF]" />
              <h2 className="text-xl font-bold text-white">Certifications</h2>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#90D5FF]"></div>
                <span className="text-gray-300 text-sm">
                  Web Development Certification
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#90D5FF]"></div>
                <span className="text-gray-300 text-sm">
                  AI & Machine Learning
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="text-center pt-6 border-t border-[#90D5FF]/20">
            <p className="text-gray-400 text-sm italic">
              "Passionate about creating innovative web solutions with
              cutting-edge technology"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
