/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ContactForm from "./ContactForm";

const About = () => {
  const { theme } = useTheme();
  const [contactExpanded, setContactExpanded] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  // Define the accent colors based on theme
  const accentColor = theme === "light" ? "#1E40AF" : "#90D5FF";
  
  // Define theme-dependent styles for contact card
  const cardBgColor = theme === "light" ? "bg-white" : "bg-[#333333]";
  const textColor = theme === "light" ? "text-gray-800" : "text-white";
  const cardShadow =
    theme === "light"
      ? "shadow-lg shadow-blue-800/20"
      : "shadow-lg shadow-[#7ac1f0]/20";

  // Contact form animation constraints
  const formConstraints = {
    maxWidth: "100%",
    maxHeight: "fit-content"
  };

  return (
    <section
      id="about"
      className={`min-h-screen flex flex-col justify-center transition-colors duration-300 ${
        theme === "light"
          ? "bg-gradient-to-br from-gray-100 to-gray-200"
          : "bg-[#333333]"
      }`}
    >
      <div className="w-full py-8">
        <h2
          className={`text-4xl font-bold mb-6 text-center font-[poppins] ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          About Me
        </h2>

        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Top Intro Section */}
          <div className="mb-6">
            {/* Introduction */}
            <div
              className={`p-4 rounded-lg border-l-4 shadow-md ${
                theme === "light"
                  ? "bg-gradient-to-r from-gray-100 to-gray-200"
                  : "bg-gradient-to-r from-[#333333] to-[#2a2a2a]"
              }`}
              style={{ borderColor: accentColor }}
            >
              <p
                className={`text-lg leading-relaxed ${
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                Hello! I'm{" "}
                <span className="font-semibold" style={{ color: accentColor }}>
                  Al-Jon Santiago
                </span>{" "}
                , a Full Stack Web Developer from General Trias, Cavite,
                Philippines.
              </p>
            </div>
          </div>

          {/* Main Content Grid - Rearranged */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            {/* Left Side: Information Containers */}
            <div className="space-y-6">
              {/* AI Focus */}
              <div
                className={`rounded-xl shadow-lg p-5 border-t-2 ${
                  theme === "light" 
                    ? "bg-white bg-opacity-90" 
                    : "bg-[#2a2a2a] bg-opacity-95"
                }`}
                style={{ borderColor: accentColor }}
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl" style={{ color: accentColor }}>
                    🔍
                  </span>
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: accentColor }}
                    >
                      AI Integration Focus
                    </h3>
                    <p
                      className={`leading-relaxed ${
                        theme === "light" ? "text-gray-700" : "text-white"
                      } text-sm`}
                    >
                      Recently, I've been focusing on integrating AI into web apps — building smart, responsive systems using tools like Hugging Face APIs and Mistral AI. From an AI-powered resume builder to a healthcare companion bot, I enjoy creating applications that go beyond CRUD and deliver real user intelligence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Expertise Container */}
              <div
                className={`rounded-xl shadow-lg p-5 ${
                  theme === "light" ? "bg-white" : "bg-[#2a2a2a]"
                }`}
              >
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: accentColor }}
                >
                  Expertise
                </h3>
                <p
                  className={`leading-relaxed ${
                    theme === "light" ? "text-gray-700" : "text-white"
                  } text-sm`}
                >
                  I specialize in building secure, responsive web applications
                  solutions using modern technologies like React, Express.js,
                  Node.js, and implementing best practices for application
                  security and performance.
                </p>
              </div>

              {/* Background Container */}
              <div
                className={`rounded-xl shadow-lg p-5 ${
                  theme === "light" ? "bg-white" : "bg-[#2a2a2a]"
                }`}
              >
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: accentColor }}
                >
                  Background
                </h3>
                <p
                  className={`leading-relaxed ${
                    theme === "light" ? "text-gray-700" : "text-white"
                  } text-sm`}
                >
                  With a background in web development, I bring a versatile
                  skillset to projects, ensuring they're not only functional but
                  also deliver seamless experiences across all devices and
                  platforms.
                </p>
              </div>
            </div>

            {/* Right Side: Contact and Quote */}
            <div className="flex flex-col space-y-6">
              {/* Contact Card Section */}
              <div>
                <h3
                  className="text-xl font-semibold mb-3 text-center"
                  style={{ color: accentColor }}
                >
                  Contact Me
                </h3>
                
                <div className="flex-1 flex items-center">
                  <motion.div
                    layout
                    className="w-full"
                    animate={{
                      width: contactExpanded ? "100%" : undefined,
                      transition: { duration: 0.5 },
                    }}
                    style={contactExpanded ? { maxHeight: "600px", overflowY: "auto" } : {}}
                  >
                    <AnimatePresence mode="wait">
                      {!contactExpanded ? (
                        <motion.div
                          key="business-card"
                          layout
                          initial={{ opacity: 1 }}
                          exit={{
                            opacity: 0,
                            scale: 1.05,
                            transition: { duration: 0.3 },
                          }}
                          className={`w-full rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${cardBgColor} border ${
                            theme === "light" ? "border-blue-800" : "border-[#90D5FF]"
                          } ${cardShadow}`}
                        >
                          {/* Card Content - Horizontal layout */}
                          <div className="p-4">
                            <div className="flex items-center gap-4">
                              {/* Left side - Photo */}
                              <div className="flex-shrink-0">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-gray-300">
                                  <img
                                    src="/Aljon.webp"
                                    alt="Al-jon Santiago"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </div>

                              {/* Right side - Details */}
                              <div className="flex-1">
                                <h3
                                  className={`text-lg font-bold mb-1 ${textColor}`}
                                >
                                  GET IN TOUCH
                                </h3>
                                <div
                                  className={`h-px w-full ${
                                    theme === "light" ? "bg-blue-800" : "bg-[#90D5FF]"
                                  } mb-2`}
                                ></div>

                                {/* Contact Details */}
                                <div className="space-y-1 text-sm">
                                  <div className="flex items-center gap-2">
                                    <Phone
                                      size={14}
                                      className={
                                        theme === "light"
                                          ? "text-blue-800"
                                          : "text-[#90D5FF]"
                                      }
                                    />
                                    <p className={textColor}>+63 9669206512</p>
                                  </div>

                                  <div className="flex items-center gap-2">
                                    <Mail
                                      size={14}
                                      className={
                                        theme === "light"
                                          ? "text-blue-800"
                                          : "text-[#90D5FF]"
                                      }
                                    />
                                    <p className={textColor}>aljon.media08@gmail.com</p>
                                  </div>

                                  <div className="flex items-center gap-2">
                                    <MapPin
                                      size={14}
                                      className={
                                        theme === "light"
                                          ? "text-blue-800"
                                          : "text-[#90D5FF]"
                                      }
                                    />
                                    <p className={textColor}>
                                      General Trias Cavite, Philippines
                                    </p>
                                  </div>
                                </div>

                                {/* Contact Me Button */}
                                <div className="mt-3 flex justify-end">
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setContactExpanded(true)}
                                    className={`px-3 py-1 ${
                                      theme === "light" ? "bg-blue-800" : "bg-[#90D5FF]"
                                    } text-white rounded-lg font-medium flex items-center justify-center text-sm cursor-pointer`}
                                  >
                                    <span className="flex items-center gap-1 relative z-10">
                                      Contact Me <Send size={12} />
                                    </span>
                                  </motion.button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <ContactForm
                          contactExpanded={contactExpanded}
                          setContactExpanded={setContactExpanded}
                          formData={formData}
                          setFormData={setFormData}
                          status={status}
                          setStatus={setStatus}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>
              
              {/* Remote Opportunities removed from here since it's now the quote */}
              
              {/* Inspirational Quote - Using remote opportunities text */}
              <div 
                className={`p-5 rounded-xl shadow-lg border-t-2 ${
                  theme === "light" 
                    ? "bg-white" 
                    : "bg-[#2a2a2a]"
                }`}
                style={{ borderColor: accentColor }}
              >
                <blockquote>
                  <p 
                    className={`text-lg italic mb-1 leading-relaxed text-center ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    "Currently open to <strong>remote opportunities</strong> — contract, freelance, or full-time."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;