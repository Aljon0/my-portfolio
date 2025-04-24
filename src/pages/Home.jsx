/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import {
  FaFacebook,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
  X,
} from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

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
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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
      ? "shadow-lg shadow-blue-100"
      : "shadow-lg shadow-[#7ac1f0]/20";
  const buttonShadow =
    theme === "light"
      ? "shadow-[0_0_15px_5px_rgba(144,213,255,0.3)]"
      : "shadow-[0_0_15px_5px_rgba(34,108,224,0.5)]";

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

      <div className="container mx-auto px-8 md:px-12 py-16 flex flex-col lg:flex-row items-center justify-between gap-12 z-10 relative">
        {/* Left side - Introduction */}
        <div className="lg:w-1/2 text-center lg:text-left max-w-lg">
          <h1
            className={`text-4xl md:text-5xl font-bold ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            Hi, I'm <span className="text-[#90D5FF]">Al-jon Santiago</span>
          </h1>

          <h2 className="mt-4 text-xl text-[#90D5FF] font-medium">
            Web Developer
          </h2>

          <p
            className={`mt-4 text-lg md:text-xl ${
              theme === "light" ? "text-gray-700" : "text-white"
            }`}
          >
            Crafting responsive web applications with modern technologies.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start mt-6 space-x-4">
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
                className={`transition-colors duration-300 text-3xl ${
                  theme === "light"
                    ? "text-gray-700 hover:text-[#90D5FF]"
                    : "text-white hover:text-[#90D5FF]"
                }`}
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Download CV Button */}
          <button
            className={`mt-8 px-6 py-3 shadow-md ${
              theme === "light" ? "shadow-blue-300" : "shadow-[#7ac1f0]"
            } bg-[#90D5FF] text-white rounded-lg font-semibold flex items-center justify-center group relative overflow-hidden cursor-pointer hover:scale-105 transition-transform`}
          >
            <span className="flex items-center relative z-10">
              <FaFileDownload className="mr-2" /> Download CV
            </span>
            {/* Glow effect */}
            <div
              className={`absolute inset-0 bg-[#90D5FF] ${buttonShadow} transition-all duration-300 group-hover:shadow-none`}
            ></div>
          </button>
        </div>

        {/* Right side - ID Card */}
        <motion.div
          layout
          className="lg:w-1/2 flex justify-center"
          animate={{
            width: contactExpanded ? "100%" : "50%",
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
                className={`w-full max-w-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${cardBgColor} border border-[#90D5FF] ${cardShadow}`}
              >
                {/* Card Content - Keeping original layout */}
                <div className="p-6">
                  <div className="flex flex-row gap-6">
                    {/* Left side - Photo */}
                    <div className="flex items-center">
                      <div className="w-40 h-40 rounded-lg overflow-hidden bg-gray-300">
                        <img
                          src="/Toji.jpg"
                          alt="Al-jon Santiago"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Right side - Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      {/* Name and Title */}
                      <div>
                        <h3
                          className={`text-2xl font-bold ${textColor} uppercase`}
                        >
                          AL-JON SANTIAGO
                        </h3>
                        <div className="mt-1 mb-4">
                          <h4 className="text-xl text-[#90D5FF] uppercase font-medium">
                            WEB DEVELOPER
                          </h4>
                          <div className="h-px w-full bg-[#90D5FF] mt-1"></div>
                        </div>
                      </div>

                      {/* Contact Details */}
                      <div className="space-y-4 py-2">
                        <div className="flex items-center gap-4">
                          <Phone size={20} className="text-[#90D5FF]" />
                          <p className={textColor}>+63 9669206512</p>
                        </div>

                        <div className="flex items-center gap-4">
                          <Mail size={20} className="text-[#90D5FF]" />
                          <p className={textColor}>aljon.media08@gmail.com</p>
                        </div>

                        <div className="flex items-center gap-4">
                          <MapPin size={20} className="text-[#90D5FF]" />
                          <p className={textColor}>
                            General Trias Cavite, Philippines
                          </p>
                        </div>
                      </div>

                      {/* Contact Me Button */}
                      <div className="mt-4 flex justify-end">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setContactExpanded(true)}
                          className="px-6 py-2 bg-[#90D5FF] text-white rounded-lg font-medium flex items-center justify-center group relative overflow-hidden transition-all duration-300"
                        >
                          <span className="flex items-center gap-2 relative z-10">
                            Contact Me <Send size={16} />
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
                className={`w-full max-w-6xl rounded-xl ${cardBgColor} border border-[#90D5FF] overflow-hidden ${cardShadow}`}
              >
                {/* Expanded Contact Form */}
                <div className="p-6 relative">
                  {/* Close button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setContactExpanded(false)}
                    className={`absolute top-4 right-4 w-8 h-8 rounded-full ${
                      theme === "light" ? "bg-gray-200" : "bg-[#444444]"
                    } flex items-center justify-center ${textColor} z-10`}
                  >
                    <X size={16} />
                  </motion.button>

                  <h2
                    className={`text-2xl font-bold ${textColor} mb-6 text-center`}
                  >
                    Get In Touch
                  </h2>

                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Left side - Personal Info */}
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: { delay: 0.2 },
                      }}
                      className="md:w-1/3"
                    >
                      {/* Profile Card */}
                      <div
                        className={`${innerCardBgColor} rounded-lg p-6 mb-6 border ${borderColor}`}
                      >
                        <div className="flex flex-col items-center mb-4">
                          <div className="w-20 h-20 rounded-lg overflow-hidden mb-4">
                            <img
                              src="/Toji.jpg"
                              alt="Al-jon Santiago"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-center">
                            <h3 className={`text-xl font-bold ${textColor}`}>
                              AL-JON SANTIAGO
                            </h3>
                            <p className="text-[#90D5FF]">Web Developer</p>
                          </div>
                        </div>
                      </div>

                      {/* Connect With Me */}
                      <div
                        className={`${innerCardBgColor} rounded-lg p-6 border ${borderColor}`}
                      >
                        <h3 className={`${textColor} font-semibold mb-4`}>
                          Connect With Me
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={`p-2 rounded-lg ${
                                theme === "light" ? "bg-white" : "bg-[#333333]"
                              }`}
                            >
                              <Phone size={16} className="text-[#90D5FF]" />
                            </div>
                            <p className={secondaryTextColor}>+63 9669206512</p>
                          </div>

                          <div className="flex items-center gap-3">
                            <div
                              className={`p-2 rounded-lg ${
                                theme === "light" ? "bg-white" : "bg-[#333333]"
                              }`}
                            >
                              <Mail size={16} className="text-[#90D5FF]" />
                            </div>
                            <p className={secondaryTextColor}>
                              aljon.media08@gmail.com
                            </p>
                          </div>

                          <div className="flex items-center gap-3">
                            <div
                              className={`p-2 rounded-lg ${
                                theme === "light" ? "bg-white" : "bg-[#333333]"
                              }`}
                            >
                              <MapPin size={16} className="text-[#90D5FF]" />
                            </div>
                            <p className={secondaryTextColor}>
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
                      className={`md:w-2/3 ${innerCardBgColor} rounded-lg p-6 border ${borderColor}`}
                    >
                      {status.submitted ? (
                        <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                          <CheckCircle
                            size={64}
                            className="text-green-400 mb-4"
                          />
                          <h3
                            className={`text-2xl font-semibold mb-4 ${textColor}`}
                          >
                            Thank You!
                          </h3>
                          <p className={secondaryTextColor}>
                            Your message has been sent successfully. I'll get
                            back to you soon!
                          </p>
                          <button
                            onClick={() =>
                              setStatus({ ...status, submitted: false })
                            }
                            className="px-6 py-3 bg-[#90D5FF] text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 mt-4"
                          >
                            Send Another Message
                          </button>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[#90D5FF] mb-2">
                                Name
                              </label>
                              <input
                                type="text"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className={`w-full px-4 py-2 rounded-lg focus:border-[#90D5FF] focus:outline-none focus:ring-1 focus:ring-[#90D5FF] transition-all duration-300 ${formBgColor} border ${borderColor} ${textColor}`}
                              />
                            </div>

                            <div>
                              <label className="block text-[#90D5FF] mb-2">
                                Email
                              </label>
                              <input
                                type="email"
                                name="reply_to"
                                value={formData.reply_to}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className={`w-full px-4 py-2 rounded-lg focus:border-[#90D5FF] focus:outline-none focus:ring-1 focus:ring-[#90D5FF] transition-all duration-300 ${formBgColor} border ${borderColor} ${textColor}`}
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[#90D5FF] mb-2">
                              Subject
                            </label>
                            <input
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="What is this regarding?"
                              required
                              className={`w-full px-4 py-2 rounded-lg focus:border-[#90D5FF] focus:outline-none focus:ring-1 focus:ring-[#90D5FF] transition-all duration-300 ${formBgColor} border ${borderColor} ${textColor}`}
                            />
                          </div>

                          <div>
                            <label className="block text-[#90D5FF] mb-2">
                              Message
                            </label>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Your message here..."
                              required
                              className={`w-full px-4 py-2 rounded-lg focus:border-[#90D5FF] focus:outline-none focus:ring-1 focus:ring-[#90D5FF] transition-all duration-300 ${formBgColor} border ${borderColor} ${textColor}`}
                              rows="4"
                            ></textarea>
                          </div>

                          {status.info.msg && (
                            <div
                              className={`flex items-center gap-2 p-3 rounded-lg ${
                                status.info.error
                                  ? "bg-red-900/50 text-red-200 border border-red-700"
                                  : "bg-green-900/50 text-green-200 border border-green-700"
                              }`}
                            >
                              {status.info.error ? (
                                <AlertCircle
                                  size={20}
                                  className="text-red-300"
                                />
                              ) : (
                                <CheckCircle
                                  size={20}
                                  className="text-green-300"
                                />
                              )}
                              <span>{status.info.msg}</span>
                            </div>
                          )}

                          <div className="pt-2">
                            <button
                              type="submit"
                              disabled={status.submitting}
                              className="w-full px-6 py-3 bg-[#90D5FF] text-white rounded-lg hover:opacity-90 transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2 disabled:opacity-70 hover:scale-105"
                            >
                              <span className="relative z-10">
                                {status.submitting
                                  ? "Sending..."
                                  : "Send Message"}
                              </span>
                              {!status.submitting && (
                                <Send size={18} className="relative z-10" />
                              )}
                              <div
                                className={`absolute inset-0 bg-[#90D5FF] ${buttonShadow} transition-all duration-300`}
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
