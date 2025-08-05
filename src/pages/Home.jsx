import {
  AlertCircle,
  CheckCircle,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Send,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Resume from "../components/Resume";
import styles from "./Home.module.css";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [contactExpanded, setContactExpanded] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false); // New state for resume
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (contactExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [contactExpanded]);

  const handleContactClick = () => {
    setContactExpanded(true);
    // Reset form state when opening
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleResumeClick = () => {
    setResumeOpen(true);
  };

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

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)",
        }}
      >
        <div className={`absolute inset-0 ${styles.gridBackground}`}></div>

        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 flex items-center justify-center z-10 relative">
          <div className="w-full max-w-4xl text-center px-2 sm:px-0">
            <h1
              className={`${styles.heroText3d} text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white`}
              style={{
                transform: `perspective(1000px) rotateX(${
                  mousePosition.y * 5
                }deg) rotateY(${mousePosition.x * 5}deg)`,
                background: "linear-gradient(45deg, #90D5FF, #ffffff, #90D5FF)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hi, I'm <span className="text-[#90D5FF]">Al-jon Santiago</span>
            </h1>

            <h2
              className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#90D5FF] font-medium"
              style={{
                transform: `perspective(800px) rotateX(${
                  mousePosition.y * 3
                }deg) rotateY(${mousePosition.x * 3}deg)`,
                textShadow: "0 0 20px rgba(144, 213, 255, 0.3)",
              }}
            >
              Full Stack Developer | AI & Workflow Automation Specialist
            </h2>

            <p
              className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{
                transform: `perspective(600px) rotateX(${
                  mousePosition.y * 2
                }deg) rotateY(${mousePosition.x * 2}deg)`,
              }}
            >
              Crafting modern, scalable web applications with AI-powered
              features and automated workflows using tools like Hugging Face,
              Mistral AI, Make.com, and n8n.
            </p>

            <div className="flex justify-center mt-6 sm:mt-8 space-x-6 sm:space-x-8">
              {[
                {
                  icon: FaFacebook,
                  url: "https://www.facebook.com/aljon.santiago.528",
                },
                { icon: FaGithub, url: "https://github.com/Aljon0" },
                {
                  icon: FaLinkedin,
                  url: "https://www.linkedin.com/in/santiago-al-jon-b-31a478281/",
                },
              ].map(({ icon: Icon, url }, index) => (
                <a
                  key={`social-${index}`}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialIcon3d} text-white text-2xl`}
                >
                  <Icon />
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-10">
              <button
                onClick={handleResumeClick}
                className={`${styles.downloadBtn3d} px-8 py-4 text-white rounded-2xl font-semibold flex items-center justify-center group relative overflow-hidden cursor-pointer text-base sm:text-lg`}
              >
                <span className="flex items-center relative z-10 gap-3">
                  <FaFileDownload className="text-xl" /> Resume/CV
                </span>
              </button>

              <button
                onClick={handleContactClick}
                className={`${styles.contactBtn3d} px-8 py-4 text-white rounded-2xl font-semibold flex items-center justify-center group relative overflow-hidden cursor-pointer text-base sm:text-lg`}
              >
                <span className="flex items-center relative z-10 gap-3">
                  <Mail className="text-xl" /> Contact Me
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${styles.scrollIndicator}`}
        >
          <div className="flex flex-col items-center text-[#90D5FF]">
            <span className="text-sm mb-2 opacity-70">Scroll Down</span>
            <ChevronDown size={24} className="opacity-70" />
          </div>
        </div>
      </section>

      {/* Resume Component */}
      <Resume isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Contact Form Modal */}
      {contactExpanded && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center ${styles.contactOverlay}`}
        >
          <div
            className={`${styles.contactModal} w-full max-w-6xl rounded-3xl backdrop-blur-xs overflow-hidden mx-4 md:mx-8`}
          >
            <div className={styles.contactModalContent}>
              <div className="p-6 md:p-8 relative">
                <button
                  onClick={() => setContactExpanded(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500/20 hover:bg-red-500/30 flex cursor-pointer items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
                >
                  <X size={20} />
                </button>

                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Let's Work Together
                  </h2>
                  <p className="text-xl text-[#90D5FF] font-serif italic">
                    "Looking forward to working with you!"
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Profile Section */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-[#90D5FF]/20">
                      <div className="text-center mb-6">
                        <div className="w-24 h-24 mx-auto rounded-xl overflow-hidden mb-4 border-2 border-[#90D5FF]/30">
                          <img
                            src="/Aljon.webp"
                            alt="Al-jon Santiago"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          AL-JON SANTIAGO
                        </h3>
                        <p className="text-[#90D5FF]">
                          Full Stack Developer | AI & Workflow Automation
                          Specialist
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-[#90D5FF]/20">
                      <h3 className="text-white font-semibold mb-4 text-center">
                        Connect With Me
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#90D5FF]/10 border border-[#90D5FF]/20">
                            <Phone size={16} className="text-[#90D5FF]" />
                          </div>
                          <p className="text-gray-300 text-sm">
                            +63 9669206512
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#90D5FF]/10 border border-[#90D5FF]/20">
                            <Mail size={16} className="text-[#90D5FF]" />
                          </div>
                          <p className="text-gray-300 text-sm">
                            aljon.media08@gmail.com
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#90D5FF]/10 border border-[#90D5FF]/20">
                            <MapPin size={16} className="text-[#90D5FF]" />
                          </div>
                          <p className="text-gray-300 text-sm">
                            General Trias Cavite, Philippines
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="md:col-span-2 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-6 border border-[#90D5FF]/20">
                    {status.submitted ? (
                      <div className="h-full flex flex-col items-center justify-center text-center py-12">
                        <CheckCircle
                          size={60}
                          className="text-green-400 mb-4"
                        />
                        <h3 className="text-2xl font-semibold mb-3 text-white">
                          Thank You!
                        </h3>
                        <p className="text-gray-300 mb-6">
                          Your message has been sent successfully. I'll get back
                          to you soon!
                        </p>
                        <button
                          onClick={() =>
                            setStatus({ ...status, submitted: false })
                          }
                          className={`${styles.submitBtn} px-6 py-3 text-white rounded-xl font-semibold backdrop-filter backdrop-blur-lg`}
                        >
                          Send Another Message
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-[#90D5FF] mb-2 font-medium">
                              Name
                            </label>
                            <input
                              type="text"
                              name="from_name"
                              value={formData.from_name}
                              onChange={handleChange}
                              placeholder="Your Name"
                              required
                              className={`${styles.formInput} w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 backdrop-filter backdrop-blur-sm`}
                            />
                          </div>
                          <div>
                            <label className="block text-[#90D5FF] mb-2 font-medium">
                              Email
                            </label>
                            <input
                              type="email"
                              name="reply_to"
                              value={formData.reply_to}
                              onChange={handleChange}
                              placeholder="Your Email"
                              required
                              className={`${styles.formInput} w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 backdrop-filter backdrop-blur-sm`}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[#90D5FF] mb-2 font-medium">
                            Subject
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="What is this regarding?"
                            required
                            className={`${styles.formInput} w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 backdrop-filter backdrop-blur-sm`}
                          />
                        </div>

                        <div>
                          <label className="block text-[#90D5FF] mb-2 font-medium">
                            Message
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message here..."
                            required
                            rows="5"
                            className={`${styles.formInput} w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 backdrop-filter backdrop-blur-sm resize-none`}
                          ></textarea>
                        </div>

                        {status.info.msg && (
                          <div
                            className={`flex items-center gap-3 p-4 rounded-xl ${
                              status.info.error
                                ? "bg-red-900/30 text-red-200 border border-red-700/50"
                                : "bg-green-900/30 text-green-200 border border-green-700/50"
                            }`}
                          >
                            {status.info.error ? (
                              <AlertCircle size={20} className="text-red-300" />
                            ) : (
                              <CheckCircle
                                size={20}
                                className="text-green-300"
                              />
                            )}
                            <span>{status.info.msg}</span>
                          </div>
                        )}

                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={status.submitting}
                          className={`${styles.submitBtn} w-full px-6 py-4 text-white rounded-xl font-semibold flex items-center justify-center gap-3 disabled:opacity-70 backdrop-filter backdrop-blur-lg`}
                        >
                          <span>
                            {status.submitting ? "Sending..." : "Send Message"}
                          </span>
                          {!status.submitting && <Send size={20} />}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
