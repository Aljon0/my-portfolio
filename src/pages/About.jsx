/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, X } from "lucide-react";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
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

          {/* Main Content Grid - Rearranged with improved responsiveness */}
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
                      Recently, I've been focusing on integrating AI into web
                      apps — building smart, responsive systems using tools like
                      Hugging Face APIs and Mistral AI. From an AI-powered
                      resume builder to a healthcare companion bot, I enjoy
                      creating applications that go beyond CRUD and deliver real
                      user intelligence.
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
                  <div className="w-full">
                    <div
                      className={`w-full rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${cardBgColor} border ${
                        theme === "light"
                          ? "border-blue-800"
                          : "border-[#90D5FF]"
                      } ${cardShadow}`}
                    >
                      {/* Card Content - Improved responsive layout */}
                      <div className="p-4">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          {/* Left side - Photo */}
                          <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start mb-4 sm:mb-0">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-gray-300">
                              <img
                                src="/Aljon.webp"
                                alt="Al-jon Santiago"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          {/* Right side - Details */}
                          <div className="flex-1 w-full text-center sm:text-left">
                            <h3
                              className={`text-lg font-bold mb-1 ${textColor}`}
                            >
                              GET IN TOUCH
                            </h3>
                            <div
                              className={`h-px w-full ${
                                theme === "light"
                                  ? "bg-blue-800"
                                  : "bg-[#90D5FF]"
                              } mb-2`}
                            ></div>

                            {/* Contact Details - Improved for mobile */}
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center justify-center sm:justify-start gap-2">
                                <Phone
                                  size={14}
                                  className={
                                    theme === "light"
                                      ? "text-blue-800"
                                      : "text-[#90D5FF]"
                                  }
                                />
                                <p className={`${textColor} break-all`}>
                                  +63 9669206512
                                </p>
                              </div>

                              <div className="flex items-center justify-center sm:justify-start gap-2">
                                <Mail
                                  size={14}
                                  className={
                                    theme === "light"
                                      ? "text-blue-800"
                                      : "text-[#90D5FF]"
                                  }
                                />
                                <p className={`${textColor} break-all`}>
                                  aljon.media08@gmail.com
                                </p>
                              </div>

                              <div className="flex items-center justify-center sm:justify-start gap-2">
                                <MapPin
                                  size={14}
                                  className={
                                    theme === "light"
                                      ? "text-blue-800"
                                      : "text-[#90D5FF]"
                                  }
                                />
                                <p className={`${textColor} break-all`}>
                                  General Trias Cavite, Philippines
                                </p>
                              </div>
                            </div>

                            {/* Contact Me Button */}
                            <div className="mt-4 flex justify-center sm:justify-end">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setContactExpanded(true)}
                                className={`px-4 py-2 ${
                                  theme === "light"
                                    ? "bg-blue-800"
                                    : "bg-[#90D5FF]"
                                } text-white rounded-lg font-medium flex items-center justify-center text-sm cursor-pointer`}
                              >
                                <span className="flex items-center gap-2 relative z-10">
                                  Contact Me <Send size={14} />
                                </span>
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inspirational Quote - Using remote opportunities text */}
              <div
                className={`p-5 rounded-xl shadow-lg border-t-2 ${
                  theme === "light" ? "bg-white" : "bg-[#2a2a2a]"
                }`}
                style={{ borderColor: accentColor }}
              >
                <blockquote>
                  <p
                    className={`text-lg italic mb-1 leading-relaxed text-center ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    "Currently open to <strong>remote opportunities</strong> —
                    contract, freelance, or full-time."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Background Overlay - Improved for mobile */}
      <AnimatePresence>
        {contactExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 backdrop-blur-sm bg-opacity-50 z-40 flex items-center justify-center p-4"
            onClick={() => setContactExpanded(false)}
          >
            {/* Contact Form Modal - Improved responsiveness */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`${
                theme === "light" ? "bg-white" : "bg-[#2a2a2a]"
              } w-full max-w-5xl rounded-xl max-h-[90vh] overflow-auto z-50`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Handle/Dragbar */}
              <div className="flex justify-center pt-2">
                <div
                  className={`w-12 h-1 rounded-full ${
                    theme === "light" ? "bg-gray-300" : "bg-gray-600"
                  }`}
                ></div>
              </div>

              {/* Close Button - Better positioning */}
              <div className="absolute top-3 right-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setContactExpanded(false)}
                  className={`p-2 rounded-full ${
                    theme === "light"
                      ? "bg-gray-200 hover:bg-gray-300"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                  aria-label="Close contact form"
                >
                  <X
                    size={20}
                    className={
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }
                  />
                </motion.button>
              </div>

              {/* Contact Form - Improved padding for mobile */}
              <div className="p-4 sm:p-6 pt-6">
                <ContactForm
                  contactExpanded={contactExpanded}
                  setContactExpanded={setContactExpanded}
                  formData={formData}
                  setFormData={setFormData}
                  status={status}
                  setStatus={setStatus}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
