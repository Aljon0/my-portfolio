/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";

const Contact = ({ isActive }) => {
  // Animation variants
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
          {/* Introduction container with text */}
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

          {/* Form container */}
          <motion.div
            className="bg-[#333333] rounded-xl shadow-lg p-6"
            variants={formContainerVariants}
          >
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Input */}
                <motion.div custom={0} variants={formItemVariants}>
                  <label className="block text-[#90D5FF] mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#333333] rounded-lg text-white focus:border-[#90D5FF] focus:outline-none focus:ring-1 focus:ring-[#90D5FF] transition-all duration-300"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div custom={1} variants={formItemVariants}>
                  <label className="block text-[#90D5FF] mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#333333] rounded-lg text-white focus:border-[#90D5FF] focus:outline-none focus:ring-1 focus:ring-[#90D5FF] transition-all duration-300"
                  />
                </motion.div>
              </div>

              {/* Subject Input */}
              <motion.div custom={2} variants={formItemVariants}>
                <label className="block text-[#90D5FF] mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="What is this regarding?"
                  className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#333333] rounded-lg text-white focus:border-[#90D5FF] focus:outline-none focus:ring-1 focus:ring-[#90D5FF] transition-all duration-300"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div custom={3} variants={formItemVariants}>
                <label className="block text-[#90D5FF] mb-2">Message</label>
                <textarea
                  placeholder="Your message here..."
                  className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#333333] rounded-lg text-white focus:border-[#90D5FF] focus:outline-none focus:ring-1 focus:ring-[#90D5FF] transition-all duration-300"
                  rows="4"
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                className="pt-2"
                custom={4}
                variants={formItemVariants}
              >
                <motion.button
                  type="submit"
                  variants={buttonVariants}
                  whileHover="hover"
                  className="px-6 py-3 bg-[#90D5FF] text-white rounded-lg hover:opacity-90 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[#90D5FF] shadow-[0_0_15px_5px_rgba(144,213,255,0.5)] transition-all duration-300 group-hover:shadow-none"></div>
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
