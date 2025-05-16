/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
  X,
} from "lucide-react";
import React from "react";
import { useTheme } from "../context/ThemeContext";

const ContactForm = ({
  contactExpanded,
  setContactExpanded,
  formData,
  setFormData,
  status,
  setStatus,
}) => {
  const { theme } = useTheme();

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
          } flex items-center justify-center ${textColor} z-10 cursor-pointer`}
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
                    src="/Aljon.webp"
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
                        theme === "light" ? "text-blue-800" : "text-[#90D5FF]"
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
                        theme === "light" ? "text-blue-800" : "text-[#90D5FF]"
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
                        theme === "light" ? "text-blue-800" : "text-[#90D5FF]"
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
                  Your message has been sent successfully. I'll get back to you
                  soon!
                </p>
                <button
                  onClick={() => setStatus({ ...status, submitted: false })}
                  className={`px-3 sm:px-4 py-1 sm:py-2 ${
                    theme === "light" ? "bg-blue-800" : "bg-[#90D5FF]"
                  } text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 mt-3 text-sm sm:text-base cursor-pointer`}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                  <div>
                    <label
                      className={`block ${
                        theme === "light" ? "text-blue-800" : "text-[#90D5FF]"
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
                        theme === "light" ? "text-blue-800" : "text-[#90D5FF]"
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
                      theme === "light" ? "text-blue-800" : "text-[#90D5FF]"
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
                      theme === "light" ? "text-blue-800" : "text-[#90D5FF]"
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
                      <AlertCircle size={14} className="text-red-300" />
                    ) : (
                      <CheckCircle size={14} className="text-green-300" />
                    )}
                    <span>{status.info.msg}</span>
                  </div>
                )}

                <div className="pt-1 sm:pt-2">
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className={`w-full px-3 sm:px-4 py-1 sm:py-2 ${
                      theme === "light" ? "bg-blue-800" : "bg-[#90D5FF]"
                    } text-white rounded-lg hover:opacity-90 transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-1 sm:gap-2 disabled:opacity-70 hover:scale-105 text-xs sm:text-sm cursor-pointer`}
                  >
                    <span className="relative z-10">
                      {status.submitting ? "Sending..." : "Send Message"}
                    </span>
                    {!status.submitting && (
                      <Send size={14} className="relative z-10" />
                    )}
                    <div
                      className={`absolute inset-0 ${
                        theme === "light" ? "bg-blue-800" : "bg-[#90D5FF]"
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
  );
};

export default ContactForm;
