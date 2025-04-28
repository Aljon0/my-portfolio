/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
  X,
} from "lucide-react";
import React, { useRef, useState } from "react";
import {
  FaFacebook,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useTheme();
  const form = useRef();
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null },
    });

    try {
      const response = await fetch(
        "https://contact-api-p7in.onrender.com/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: data.message },
        });
        setFormData({
          from_name: "",
          reply_to: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: error.message },
      });
    }
  };

  // Define theme-dependent styles
  const cardBgColor = theme === "light" ? "bg-white" : "bg-[#333333]";
  const innerCardBgColor = theme === "light" ? "bg-gray-100" : "bg-[#282828]";
  const formBgColor = theme === "light" ? "bg-gray-50" : "bg-[#1e1e1e]";
  const borderColor =
    theme === "light" ? "border-gray-200" : "border-[#444444]";
  const textColor = theme === "light" ? "text-gray-800" : "text-white";
  const secondaryTextColor =
    theme === "light" ? "text-gray-600" : "text-gray-300";
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
              <FaFileDownload className="mr-2" /> Download CV
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
                          src="/Aljon.jpg"
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
                          } text-white rounded-lg font-medium flex items-center justify-center group relative overflow-hidden transition-all duration-300 text-sm sm:text-base`}
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
              <motion.div
                key="expanded-contact"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl rounded-xl ${cardBgColor} border ${
                  theme === "light" ? "border-blue-800" : "border-[#90D5FF]"
                } overflow-hidden ${cardShadow}`}
              >
                {/* Expanded Contact Form */}
                <div className="p-3 sm:p-4 md:p-6 relative">
                  {/* Close button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setContactExpanded(false)}
                    className={`absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full ${
                      theme === "light" ? "bg-gray-200" : "bg-[#444444]"
                    } flex items-center justify-center ${textColor} z-10`}
                  >
                    <X size={14} className="sm:w-4 sm:h-4" />
                  </motion.button>

                  {/* Changed header text to a formatted quote */}
                  <div className="text-center mb-3 sm:mb-4 md:mb-6">
                    <p
                      className={`text-lg sm:text-xl md:text-2xl font-serif italic ${textColor}`}
                    >
                      &ldquo;Looking forward to working with you!&rdquo;
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                    {/* Left side - Personal Info */}
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: { delay: 0.2 },
                      }}
                      className="w-full md:w-1/3"
                    >
                      {/* Profile Card */}
                      <div
                        className={`${innerCardBgColor} rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 border ${borderColor}`}
                      >
                        <div className="flex flex-col items-center mb-3">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg overflow-hidden mb-2 sm:mb-3">
                            <img
                              src="/Aljon.jpg"
                              alt="Al-jon Santiago"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-center">
                            <h3
                              className={`text-base sm:text-lg md:text-xl font-bold ${textColor}`}
                            >
                              AL-JON SANTIAGO
                            </h3>
                            <p
                              className={
                                theme === "light"
                                  ? "text-blue-800 text-xs sm:text-sm md:text-base"
                                  : "text-[#90D5FF] text-xs sm:text-sm md:text-base"
                              }
                            >
                              Web Developer
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Connect With Me */}
                      <div
                        className={`${innerCardBgColor} rounded-lg p-3 sm:p-4 border ${borderColor}`}
                      >
                        <h3
                          className={`${textColor} font-semibold mb-2 sm:mb-3 text-center md:text-left text-sm sm:text-base`}
                        >
                          Connect With Me
                        </h3>
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                            <div
                              className={`p-1 sm:p-2 rounded-lg ${
                                theme === "light" ? "bg-white" : "bg-[#333333]"
                              }`}
                            >
                              <Phone
                                size={14}
                                className={
                                  theme === "light"
                                    ? "text-blue-800"
                                    : "text-[#90D5FF]"
                                }
                              />
                            </div>
                            <p
                              className={`${secondaryTextColor} text-xs sm:text-sm md:text-base`}
                            >
                              +63 9669206512
                            </p>
                          </div>

                          <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                            <div
                              className={`p-1 sm:p-2 rounded-lg ${
                                theme === "light" ? "bg-white" : "bg-[#333333]"
                              }`}
                            >
                              <Mail
                                size={14}
                                className={
                                  theme === "light"
                                    ? "text-blue-800"
                                    : "text-[#90D5FF]"
                                }
                              />
                            </div>
                            <p
                              className={`${secondaryTextColor} text-xs sm:text-sm md:text-base`}
                            >
                              aljon.media08@gmail.com
                            </p>
                          </div>

                          <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                            <div
                              className={`p-1 sm:p-2 rounded-lg ${
                                theme === "light" ? "bg-white" : "bg-[#333333]"
                              }`}
                            >
                              <MapPin
                                size={14}
                                className={
                                  theme === "light"
                                    ? "text-blue-800"
                                    : "text-[#90D5FF]"
                                }
                              />
                            </div>
                            <p
                              className={`${secondaryTextColor} text-xs sm:text-sm md:text-base`}
                            >
                              General Trias Cavite, Philippines
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Right side - Contact Form */}
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: { delay: 0.3 },
                      }}
                      className={`w-full md:w-2/3 ${innerCardBgColor} rounded-lg p-3 sm:p-4 border ${borderColor}`}
                    >
                      {status.submitted ? (
                        <div className="h-full flex flex-col items-center justify-center p-3 sm:p-6 text-center">
                          <CheckCircle
                            size={40}
                            className="text-green-400 mb-2 sm:mb-3"
                          />
                          <h3
                            className={`text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 ${textColor}`}
                          >
                            Thank You!
                          </h3>
                          <p
                            className={`${secondaryTextColor} text-xs sm:text-sm md:text-base`}
                          >
                            Your message has been sent successfully. I'll get
                            back to you soon!
                          </p>
                          <button
                            onClick={() =>
                              setStatus({ ...status, submitted: false })
                            }
                            className={`px-3 sm:px-4 py-1 sm:py-2 ${
                              theme === "light" ? "bg-blue-800" : "bg-[#90D5FF]"
                            } text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 mt-3 text-sm sm:text-base`}
                          >
                            Send Another Message
                          </button>
                        </div>
                      ) : (
                        <form
                          onSubmit={handleSubmit}
                          className="space-y-2 sm:space-y-3"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                            <div>
                              <label
                                className={`block ${
                                  theme === "light"
                                    ? "text-blue-800"
                                    : "text-[#90D5FF]"
                                } mb-1 text-xs sm:text-sm`}
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className={`w-full px-2 sm:px-3 py-1 sm:py-2 rounded-lg focus:border-${
                                  theme === "light" ? "blue-800" : "[#90D5FF]"
                                } focus:outline-none focus:ring-1 focus:ring-${
                                  theme === "light" ? "blue-800" : "[#90D5FF]"
                                } transition-all duration-300 ${formBgColor} border ${borderColor} ${textColor} text-xs sm:text-sm`}
                              />
                            </div>

                            <div>
                              <label
                                className={`block ${
                                  theme === "light"
                                    ? "text-blue-800"
                                    : "text-[#90D5FF]"
                                } mb-1 text-xs sm:text-sm`}
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                name="reply_to"
                                value={formData.reply_to}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className={`w-full px-2 sm:px-3 py-1 sm:py-2 rounded-lg focus:border-${
                                  theme === "light" ? "blue-800" : "[#90D5FF]"
                                } focus:outline-none focus:ring-1 focus:ring-${
                                  theme === "light" ? "blue-800" : "[#90D5FF]"
                                } transition-all duration-300 ${formBgColor} border ${borderColor} ${textColor} text-xs sm:text-sm`}
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              className={`block ${
                                theme === "light"
                                  ? "text-blue-800"
                                  : "text-[#90D5FF]"
                              } mb-1 text-xs sm:text-sm`}
                            >
                              Subject
                            </label>
                            <input
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="What is this regarding?"
                              required
                              className={`w-full px-2 sm:px-3 py-1 sm:py-2 rounded-lg focus:border-${
                                theme === "light" ? "blue-800" : "[#90D5FF]"
                              } focus:outline-none focus:ring-1 focus:ring-${
                                theme === "light" ? "blue-800" : "[#90D5FF]"
                              } transition-all duration-300 ${formBgColor} border ${borderColor} ${textColor} text-xs sm:text-sm`}
                            />
                          </div>

                          <div>
                            <label
                              className={`block ${
                                theme === "light"
                                  ? "text-blue-800"
                                  : "text-[#90D5FF]"
                              } mb-1 text-xs sm:text-sm`}
                            >
                              Message
                            </label>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Your message here..."
                              required
                              className={`w-full px-2 sm:px-3 py-1 sm:py-2 rounded-lg focus:border-${
                                theme === "light" ? "blue-800" : "[#90D5FF]"
                              } focus:outline-none focus:ring-1 focus:ring-${
                                theme === "light" ? "blue-800" : "[#90D5FF]"
                              } transition-all duration-300 ${formBgColor} border ${borderColor} ${textColor} text-xs sm:text-sm`}
                              rows="4"
                            ></textarea>
                          </div>

                          {status.info.msg && (
                            <div
                              className={`flex items-center gap-1 p-2 rounded-lg text-xs sm:text-sm ${
                                status.info.error
                                  ? "bg-red-900/50 text-red-200 border border-red-700"
                                  : "bg-green-900/50 text-green-200 border border-green-700"
                              }`}
                            >
                              {status.info.error ? (
                                <AlertCircle
                                  size={14}
                                  className="text-red-300"
                                />
                              ) : (
                                <CheckCircle
                                  size={14}
                                  className="text-green-300"
                                />
                              )}
                              <span>{status.info.msg}</span>
                            </div>
                          )}

                          <div className="pt-1 sm:pt-2">
                            <button
                              type="submit"
                              disabled={status.submitting}
                              className={`w-full px-3 sm:px-4 py-1 sm:py-2 ${
                                theme === "light"
                                  ? "bg-blue-800"
                                  : "bg-[#90D5FF]"
                              } text-white rounded-lg hover:opacity-90 transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-1 sm:gap-2 disabled:opacity-70 hover:scale-105 text-xs sm:text-sm`}
                            >
                              <span className="relative z-10">
                                {status.submitting
                                  ? "Sending..."
                                  : "Send Message"}
                              </span>
                              {!status.submitting && (
                                <Send size={14} className="relative z-10" />
                              )}
                              <div
                                className={`absolute inset-0 ${
                                  theme === "light"
                                    ? "bg-blue-800"
                                    : "bg-[#90D5FF]"
                                } ${buttonShadow} transition-all duration-300`}
                              ></div>
                            </button>
                          </div>
                        </form>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
