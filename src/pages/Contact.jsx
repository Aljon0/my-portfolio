/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import React, { useRef, useState } from "react";

const Contact = ({ isActive }) => {
  const form = useRef();
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

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null },
    });

    console.log("Form submitted successfully:", formData);
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

        // Reset form data
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
      console.error("Error:", error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: error.message },
      });
    }
  };

  // Animation variants...
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const introVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  const formContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const formItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.4,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        delay: 0.9,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 15px 5px rgba(144, 213, 255, 0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const contactInfoItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15 + 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.15 + 0.3,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    }),
    hover: {
      scale: 1.2,
      color: "#90D5FF",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] py-16"
    >
      <motion.div
        className="w-full"
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        variants={containerVariants}
        key={isActive ? "active" : "inactive"}
      >
        <motion.h2
          className="text-4xl font-bold text-white mb-10 text-center font-[poppins]"
          variants={headerVariants}
        >
          Contact
        </motion.h2>

        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            className="bg-gradient-to-r from-[#2a2a2a] to-[#333333] p-5 rounded-lg border-l-4 border-[#90D5FF] shadow-md mb-10 w-full"
            variants={introVariants}
          >
            <p className="text-lg leading-relaxed text-gray-300 text-center">
              Let's{" "}
              <span className="text-[#90D5FF] font-semibold">connect!</span>{" "}
              Feel free to reach out for collaborations or inquiries.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div
              className="lg:w-2/5 bg-[#2a2a2a] rounded-xl shadow-lg p-6 flex flex-col justify-center"
              variants={formContainerVariants}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 border-b border-[#444444] pb-3">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4"
                  custom={0}
                  variants={contactInfoItemVariants}
                >
                  <motion.div
                    className="p-3 bg-[#333333] rounded-full"
                    custom={0}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <Phone size={24} className="text-[#90D5FF]" />
                  </motion.div>
                  <div>
                    <h4 className="text-[#90D5FF] font-medium">Phone</h4>
                    <p className="text-gray-300">+63 9669206512</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4"
                  custom={1}
                  variants={contactInfoItemVariants}
                >
                  <motion.div
                    className="p-3 bg-[#333333] rounded-full"
                    custom={1}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <Mail size={24} className="text-[#90D5FF]" />
                  </motion.div>
                  <div>
                    <h4 className="text-[#90D5FF] font-medium">Email</h4>
                    <p className="text-gray-300">aljon.media08@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4"
                  custom={2}
                  variants={contactInfoItemVariants}
                >
                  <motion.div
                    className="p-3 bg-[#333333] rounded-full"
                    custom={2}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <MapPin size={24} className="text-[#90D5FF]" />
                  </motion.div>
                  <div>
                    <h4 className="text-[#90D5FF] font-medium">Location</h4>
                    <p className="text-gray-300">
                      General Trias Cavite, Philippines
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="mt-8 border-t border-[#444444] pt-6"
                variants={introVariants}
              >
                <p className="text-gray-400 italic text-center">
                  "Looking forward to working with you!"
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:w-3/5 bg-[#333333] rounded-xl shadow-lg p-6"
              variants={formContainerVariants}
            >
              {status.submitted ? (
                <motion.div
                  className="h-full flex flex-col items-center justify-center p-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle size={64} className="text-green-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Your message has been sent successfully. I'll get back to
                    you soon!
                  </p>
                  <motion.button
                    onClick={() => setStatus({ ...status, submitted: false })}
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-[#90D5FF] text-white rounded-lg hover:bg-opacity-90 transition-all duration-300"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div custom={0} variants={formItemVariants}>
                      <label className="block text-[#90D5FF] mb-2">Name</label>
                      <input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#444444] rounded-lg text-white focus:border-[#90D5FF] focus:outline-none focus:ring-1 focus:ring-[#90D5FF] transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div custom={1} variants={formItemVariants}>
                      <label className="block text-[#90D5FF] mb-2">Email</label>
                      <input
                        type="email"
                        name="reply_to"
                        value={formData.reply_to}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#444444] rounded-lg text-white focus:border-[#90D5FF] focus:outline-none focus:ring-1 focus:ring-[#90D5FF] transition-all duration-300"
                      />
                    </motion.div>
                  </div>

                  <motion.div custom={2} variants={formItemVariants}>
                    <label className="block text-[#90D5FF] mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                      className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#444444] rounded-lg text-white focus:border-[#90D5FF] focus:outline-none focus:ring-1 focus:ring-[#90D5FF] transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div custom={3} variants={formItemVariants}>
                    <label className="block text-[#90D5FF] mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      required
                      className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#444444] rounded-lg text-white focus:border-[#90D5FF] focus:outline-none focus:ring-1 focus:ring-[#90D5FF] transition-all duration-300"
                      rows="4"
                    ></textarea>
                  </motion.div>

                  {status.info.msg && (
                    <motion.div
                      className={`flex items-center gap-2 p-3 rounded-lg ${
                        status.info.error
                          ? "bg-red-900/50 text-red-200 border border-red-700"
                          : "bg-green-900/50 text-green-200 border border-green-700"
                      }`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {status.info.error ? (
                        <AlertCircle size={20} className="text-red-300" />
                      ) : (
                        <CheckCircle size={20} className="text-green-300" />
                      )}
                      <span>{status.info.msg}</span>
                    </motion.div>
                  )}

                  <motion.div
                    className="pt-2"
                    custom={4}
                    variants={formItemVariants}
                  >
                    <motion.button
                      type="submit"
                      disabled={status.submitting}
                      variants={buttonVariants}
                      whileHover="hover"
                      className="w-full sm:w-auto px-6 py-3 bg-[#90D5FF] text-white rounded-lg hover:opacity-90 transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      <span className="relative z-10">
                        {status.submitting ? "Sending..." : "Send Message"}
                      </span>
                      {!status.submitting && (
                        <Send size={18} className="relative z-10" />
                      )}
                      <div className="absolute inset-0 bg-[#90D5FF] shadow-[0_0_15px_5px_rgba(144,213,255,0.5)] transition-all duration-300 group-hover:shadow-none"></div>
                    </motion.button>
                  </motion.div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
