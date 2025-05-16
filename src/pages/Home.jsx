/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import {
  FaFacebook,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";
import { useTheme } from "../context/ThemeContext";
import ContactForm from "./ContactForm";

const Home = () => {
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

  // Define theme-dependent styles
  const cardBgColor = theme === "light" ? "bg-white" : "bg-[#333333]";
  const textColor = theme === "light" ? "text-gray-800" : "text-white";
  const cardShadow =
    theme === "light"
      ? "shadow-lg shadow-blue-800/20"
      : "shadow-lg shadow-[#7ac1f0]/20";
  const buttonShadow =
    theme === "light"
      ? "shadow-[0_0_15px_5px_rgba(30,64,175,0.3)]"
      : "shadow-[0_0_15px_5px_rgba(144,213,255,0.5)]";

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden z-0 transition-colors duration-500 ${
        theme === "light"
          ? "bg-gradient-to-br from-gray-100 to-gray-200"
          : "bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]"
      }`}
    >
      {/* Add ParticlesBackground with absolute positioning INSIDE the Home section */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <ParticlesBackground theme={theme} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 xl:gap-12 z-10 relative">
        {/* Left side - Introduction */}
        <div className="w-full lg:w-1/2 text-center lg:text-left max-w-lg mx-auto lg:mx-0 px-2 sm:px-0">
          {/* Adjusted text sizes and spacing for mobile */}
          <h1
            className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2 ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            Hi, I'm{" "}
            <span
              className={theme === "light" ? "text-blue-800" : "text-[#90D5FF]"}
            >
              Al-jon Santiago
            </span>
          </h1>

          <h2
            className={`mt-2 sm:mt-3 md:mt-4 text-lg sm:text-xl md:text-2xl ${
              theme === "light" ? "text-blue-800" : "text-[#90D5FF]"
            } font-medium`}
          >
            Web Developer
          </h2>

          <p
            className={`mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg ${
              theme === "light" ? "text-gray-700" : "text-white"
            }`}
          >
            Crafting responsive web applications with modern technologies.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start mt-3 sm:mt-4 md:mt-6 space-x-3 sm:space-x-4">
            {[FaGithub, FaLinkedin, FaFacebook].map((Icon, index) => (
              <a
                key={`social-${index}`}
                href={
                  [
                    "https://github.com/Aljon0",
                    "https://www.linkedin.com/in/santiago-al-jon-b-31a478281/",
                    "https://www.facebook.com/aljon.santiago.528",
                  ][index]
                }
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 text-xl sm:text-2xl ${
                  theme === "light"
                    ? "text-gray-700 hover:text-blue-800"
                    : "text-white hover:text-[#90D5FF]"
                }`}
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Download CV Button */}
          <button
            className={`mt-4 sm:mt-5 md:mt-6 px-4 sm:px-5 py-1 sm:py-2 shadow-md ${
              theme === "light"
                ? "bg-blue-800 shadow-blue-800/30"
                : "bg-[#90D5FF] shadow-[#7ac1f0]"
            } text-white rounded-lg font-medium flex items-center justify-center group relative overflow-hidden cursor-pointer hover:scale-105 transition-transform mx-auto lg:mx-0 text-sm sm:text-base`}
          >
            <span className="flex items-center relative z-10">
              <a href="/Aljon Santiago-CV.pdf" download className="flex gap-2 items-center"><FaFileDownload className="mr-2" /> Download CV</a>
            </span>
            {/* Glow effect */}
            <div
              className={`absolute inset-0 ${
                theme === "light" ? "bg-blue-800" : "bg-[#90D5FF]"
              } ${buttonShadow} transition-all duration-300 group-hover:shadow-none`}
            ></div>
          </button>
        </div>

        {/* Right side - ID Card */}
        <motion.div
          layout
          className="w-full lg:w-1/2 flex justify-center mt-6 sm:mt-8 lg:mt-0 px-2 sm:px-0"
          animate={{
            width: contactExpanded ? "100%" : undefined,
            transition: { duration: 0.5 },
          }}
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
                className={`w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${cardBgColor} border ${
                  theme === "light" ? "border-blue-800" : "border-[#90D5FF]"
                } ${cardShadow}`}
              >
                {/* Card Content - Responsive layout */}
                <div className="p-3 sm:p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
                    {/* Left side - Photo */}
                    <div className="flex items-center justify-center sm:justify-start">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg overflow-hidden bg-gray-300">
                        <img
                          src="/Aljon.webp"
                          alt="Al-jon Santiago"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Right side - Details */}
                    <div className="flex-1 flex flex-col justify-between text-center sm:text-left">
                      {/* Get In Touch */}
                      <div>
                        <h3
                          className={`text-lg sm:text-xl md:text-2xl font-bold ${textColor}`}
                        >
                          GET IN TOUCH
                        </h3>
                        <div className="mt-1 mb-2 sm:mb-3">
                          <div
                            className={`h-px w-full ${
                              theme === "light" ? "bg-blue-800" : "bg-[#90D5FF]"
                            } mt-1`}
                          ></div>
                        </div>
                      </div>

                      {/* Contact Details */}
                      <div className="space-y-1 sm:space-y-2 md:space-y-3 py-1 sm:py-2">
                        <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                          <Phone
                            size={16}
                            className={
                              theme === "light"
                                ? "text-blue-800"
                                : "text-[#90D5FF]"
                            }
                          />
                          <p
                            className={`${textColor} text-xs sm:text-sm md:text-base`}
                          >
                            +63 9669206512
                          </p>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                          <Mail
                            size={16}
                            className={
                              theme === "light"
                                ? "text-blue-800"
                                : "text-[#90D5FF]"
                            }
                          />
                          <p
                            className={`${textColor} text-xs sm:text-sm md:text-base`}
                          >
                            aljon.media08@gmail.com
                          </p>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                          <MapPin
                            size={16}
                            className={
                              theme === "light"
                                ? "text-blue-800"
                                : "text-[#90D5FF]"
                            }
                          />
                          <p
                            className={`${textColor} text-xs sm:text-sm md:text-base`}
                          >
                            General Trias Cavite, Philippines
                          </p>
                        </div>
                      </div>

                      {/* Contact Me Button */}
                      <div className="mt-3 sm:mt-4 flex justify-center sm:justify-end">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setContactExpanded(true)}
                          className={`px-3 sm:px-4 py-1 sm:py-2 ${
                            theme === "light" ? "bg-blue-800" : "bg-[#90D5FF]"
                          } text-white rounded-lg font-medium flex items-center justify-center group relative overflow-hidden transition-all duration-300 text-sm sm:text-base cursor-pointer`}
                        >
                          <span className="flex items-center gap-1 sm:gap-2 relative z-10">
                            Contact Me <Send size={14} />
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
    </section>
  );
};

export default Home;
