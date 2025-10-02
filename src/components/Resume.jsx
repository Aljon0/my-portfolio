import {
  Briefcase,
  Download,
  Globe,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Terminal,
  User,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const Resume = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);
      document.body.style.overflow = "hidden";
    } else if (isVisible) {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "unset";
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isVisible]);

  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = "/Aljon_Santiago_CV.pdf"; // Make sure this file is in your public folder
    link.download = "Aljon_Santiago_CV.pdf";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isVisible) return null;

  const technicalSkills = {
    "Languages & Frameworks": [
      "JavaScript",
      "TypeScript",
      "PHP",
      "Express.js",
      "React",
      "Three.js",
      "Tailwind CSS",
      "Python",
    ],
    "AI & Automation": [
      "Hugging Face",
      "OpenAI API",
      "Mistral AI",
      "Claude AI",
      "Make.com",
      "n8n",
    ],
    "Databases & Cloud": ["Firebase", "Supabase", "Node.js", "MongoDB"],
    "Other Tools": [
      "HTML5",
      "CSS3",
      "API Integrations",
      "Stripe Payments",
      "Slack",
      "Gmail",
      "Twilio",
    ],
  };

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
      title: "Backend Developer Intern",
      company: "Seiwa Kaiun Philippines, Golden Gate General Trias Cavite",
      period: "February 17, 2025 - May 16, 2025",
      responsibilities: [
        "Developed and maintained backend functionalities for internal systems, including a Performance Evaluation System and Invoice Management System",
        "Conducted system testing, bug fixing, and data validation to ensure reliability and optimal performance",
        "Collaborated with the MIS team to present project updates and implement feedback into system improvements",
      ],
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Remote",
      period: "2024 - Present",
      responsibilities: [
        "Delivered AI-integrated web applications for international clients",
        "Built and deployed SaaS-style features including authentication, subscriptions, and automated email delivery",
        "Designed and implemented custom workflow automations using Make.com and n8n to optimize client business processes",
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
      tech: "Full Stack Development | React, Tailwind CSS, Firebase, Mistral AI",
      description:
        "Built a smart resume builder with AI-generated skill suggestions and PDF export. Implemented secure authentication and resume management.",
    },
    {
      name: "BAYMAX - AI Health Companion",
      tech: "Full Stack Development | React, Tailwind CSS, Firebase, Mistral AI, MedlinePlus API",
      description:
        "Created an AI-powered app for symptom checking, journaling, and wellness reminders.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <style jsx>{`
        .resume-panel::-webkit-scrollbar {
          width: 8px;
        }
        .resume-panel::-webkit-scrollbar-track {
          background: rgba(144, 213, 255, 0.05);
        }
        .resume-panel::-webkit-scrollbar-thumb {
          background: rgba(144, 213, 255, 0.2);
          border-radius: 4px;
        }
        .resume-panel::-webkit-scrollbar-thumb:hover {
          background: rgba(144, 213, 255, 0.3);
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .gradient-text {
          background: linear-gradient(135deg, #90d5ff, #6ab7ff, #90d5ff);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s ease infinite;
        }

        .skill-tag {
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(144, 213, 255, 0.2);
        }

        .section-card {
          transition: all 0.3s ease;
        }

        .section-card:hover {
          transform: translateX(4px);
          box-shadow: 0 0 20px rgba(144, 213, 255, 0.1);
          border-color: rgba(144, 213, 255, 0.3);
        }

        .download-btn {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.2),
            rgba(106, 183, 255, 0.1)
          );
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          border: 1px solid rgba(144, 213, 255, 0.3);
        }

        .download-btn:hover {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.3),
            rgba(106, 183, 255, 0.2)
          );
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(144, 213, 255, 0.2);
          border-color: rgba(144, 213, 255, 0.5);
        }

        .icon-glow {
          filter: drop-shadow(0 0 8px rgba(144, 213, 255, 0.4));
        }

        .close-btn {
          background: linear-gradient(
            135deg,
            rgba(239, 68, 68, 0.2),
            rgba(220, 38, 38, 0.1)
          );
          border: 1px solid rgba(239, 68, 68, 0.3);
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          background: linear-gradient(
            135deg,
            rgba(239, 68, 68, 0.3),
            rgba(220, 38, 38, 0.2)
          );
          border-color: rgba(239, 68, 68, 0.5);
          transform: scale(1.1);
        }
      `}</style>

      {/* Background overlay */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Resume panel - adjusted position to account for header */}
      <div
        className={`resume-panel absolute left-0 w-full md:w-3/5 lg:w-1/2 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95 backdrop-blur-xl overflow-y-auto transition-transform duration-700 ease-out ${
          isAnimating ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          top: "64px", // Adjust this value based on your header height
          height: "calc(100% - 64px)", // Subtract the header height from total height
          boxShadow:
            "0 0 50px rgba(144, 213, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          borderRight: "1px solid rgba(144, 213, 255, 0.2)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="close-btn absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Download button */}
        <button
          onClick={handleDownload}
          className="download-btn absolute top-6 right-20 px-6 py-2.5 text-white rounded-xl font-medium flex items-center justify-center gap-2 text-sm cursor-pointer"
        >
          <Download size={16} />
          <span>Download PDF</span>
        </button>

        <div className="p-8 pt-24">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="gradient-text text-5xl font-bold mb-3 tracking-tight">
              AL-JON B. SANTIAGO
            </h1>
            <p className="text-2xl text-[#90D5FF] mb-2 font-light">
              Full Stack Developer
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-2xl mx-auto text-sm">
              AI Integration & Automation
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#90D5FF]" />
                <span>aljons702@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#90D5FF]" />
                <span>+63 9669206512</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#90D5FF]" />
                <span>General Trias, Cavite</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-[#90D5FF]" />
                <a
                  href="https://bit.ly/4dcGquu"
                  className="hover:text-[#90D5FF] transition-colors"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <User size={18} className="text-[#90D5FF] icon-glow" />
              <h2 className="text-xl font-semibold text-white">Summary</h2>
            </div>
            <div className="bg-gradient-to-br from-[#90D5FF]/10 to-[#6AB7FF]/5 rounded-xl p-6 border border-[#90D5FF]/20 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed text-sm">
                Motivated and self-taught Full Stack Developer specializing in
                building scalable web platforms with AI-powered features and
                workflow automations. Skilled in React, Node.js, Supabase,
                Firebase, and low-code tools like Make.com. Experienced in
                creating real-world client projects, integrating AI APIs, and
                delivering secure, production-ready solutions.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Terminal size={18} className="text-[#90D5FF] icon-glow" />
              <h2 className="text-xl font-semibold text-white">
                Technical Skills
              </h2>
            </div>

            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category} className="mb-4">
                <h3 className="text-sm font-medium text-[#90D5FF]/70 mb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="skill-tag px-3 py-1.5 bg-gradient-to-r from-[#90D5FF]/20 to-[#6AB7FF]/20 border border-[#90D5FF]/30 rounded-lg text-[#90D5FF] text-xs font-medium backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={18} className="text-[#90D5FF] icon-glow" />
              <h2 className="text-xl font-semibold text-white">Soft Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-tag px-3 py-1.5 bg-gradient-to-r from-gray-700/30 to-gray-600/30 border border-gray-500/30 rounded-lg text-gray-300 text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase size={18} className="text-[#90D5FF] icon-glow" />
              <h2 className="text-xl font-semibold text-white">
                Professional Experience
              </h2>
            </div>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="section-card bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-5 border border-[#90D5FF]/10"
                >
                  <h3 className="text-[#90D5FF] font-semibold text-base mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-white font-medium text-sm">
                    {exp.company}
                  </p>
                  <p className="text-gray-400 text-xs mb-3">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li
                        key={respIndex}
                        className="text-gray-300 text-xs flex items-start gap-2 leading-relaxed"
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

          {/* Projects */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Layers size={18} className="text-[#90D5FF] icon-glow" />
              <h2 className="text-xl font-semibold text-white">
                Projects Experience
              </h2>
            </div>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="section-card bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-5 border border-[#90D5FF]/10"
                >
                  <h3 className="text-[#90D5FF] font-semibold text-base mb-1">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-xs mb-2 font-medium">
                    {project.tech}
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap size={18} className="text-[#90D5FF] icon-glow" />
              <h2 className="text-xl font-semibold text-white">Education</h2>
            </div>
            <div className="section-card bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-5 border border-[#90D5FF]/10">
              <h3 className="text-[#90D5FF] font-semibold text-base mb-1">
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-white font-medium text-sm">
                Cavite State University - CCAT Campus
              </p>
              <p className="text-gray-400 text-xs">Rosario, Cavite</p>
              <p className="text-gray-400 text-xs">A.Y. 2021 - 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
