import React, { useRef, useState } from "react";
import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
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

  return (
    <section
      id="contact"
      className={`min-h-screen flex flex-col items-center justify-center py-16 transition-colors duration-300 ${
        theme === "light"
          ? "bg-gradient-to-br from-gray-100 to-gray-200"
          : "bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]"
      }`}
    >
      <div className="w-full">
        <h2
          className={`text-4xl font-bold mb-10 text-center font-[poppins] ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Contact
        </h2>

        <div className="container mx-auto px-6 max-w-5xl">
          <div
            className={`p-5 rounded-lg border-l-4 border-[#90D5FF] shadow-md mb-10 w-full ${
              theme === "light"
                ? "bg-gradient-to-r from-gray-100 to-gray-200"
                : "bg-gradient-to-r from-[#2a2a2a] to-[#333333]"
            }`}
          >
            <p
              className={`text-lg leading-relaxed text-center ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Let's{" "}
              <span className="text-[#90D5FF] font-semibold">connect!</span>{" "}
              Feel free to reach out for collaborations or inquiries.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div
              className="lg:w-2/5 rounded-xl shadow-lg p-6 flex flex-col justify-center"
              style={{
                backgroundColor: theme === "light" ? "#ffffff" : "#2a2a2a",
                border:
                  theme === "light" ? "1px solid #e5e7eb" : "1px solid #444444",
              }}
            >
              <h3
                className={`text-2xl font-semibold mb-6 border-b pb-3 ${
                  theme === "light"
                    ? "text-gray-800 border-gray-200"
                    : "text-white border-[#444444]"
                }`}
              >
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div
                    className="p-3 rounded-full"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#f3f4f6" : "#333333",
                    }}
                  >
                    <Phone size={24} className="text-[#90D5FF]" />
                  </div>
                  <div>
                    <h4 className="text-[#90D5FF] font-medium">Phone</h4>
                    <p
                      className={
                        theme === "light" ? "text-gray-600" : "text-gray-300"
                      }
                    >
                      +63 9669206512
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="p-3 rounded-full"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#f3f4f6" : "#333333",
                    }}
                  >
                    <Mail size={24} className="text-[#90D5FF]" />
                  </div>
                  <div>
                    <h4 className="text-[#90D5FF] font-medium">Email</h4>
                    <p
                      className={
                        theme === "light" ? "text-gray-600" : "text-gray-300"
                      }
                    >
                      aljon.media08@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="p-3 rounded-full"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#f3f4f6" : "#333333",
                    }}
                  >
                    <MapPin size={24} className="text-[#90D5FF]" />
                  </div>
                  <div>
                    <h4 className="text-[#90D5FF] font-medium">Location</h4>
                    <p
                      className={
                        theme === "light" ? "text-gray-600" : "text-gray-300"
                      }
                    >
                      General Trias Cavite, Philippines
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="mt-8 border-t pt-6"
                style={{
                  borderColor: theme === "light" ? "#e5e7eb" : "#444444",
                }}
              >
                <p
                  className={`italic text-center ${
                    theme === "light" ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  "Looking forward to working with you!"
                </p>
              </div>
            </div>

            <div
              className="lg:w-3/5 rounded-xl shadow-lg p-6"
              style={{
                backgroundColor: theme === "light" ? "#ffffff" : "#333333",
                border:
                  theme === "light" ? "1px solid #e5e7eb" : "1px solid #444444",
              }}
            >
              {status.submitted ? (
                <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                  <CheckCircle size={64} className="text-green-400 mb-4" />
                  <h3
                    className={`text-2xl font-semibold mb-4 ${
                      theme === "light" ? "text-gray-800" : "text-white"
                    }`}
                  >
                    Thank You!
                  </h3>
                  <p
                    className={
                      theme === "light" ? "text-gray-600" : "text-gray-300"
                    }
                  >
                    Your message has been sent successfully. I'll get back to
                    you soon!
                  </p>
                  <button
                    onClick={() => setStatus({ ...status, submitted: false })}
                    className="px-6 py-3 bg-[#90D5FF] text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#90D5FF] mb-2">Name</label>
                      <input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className={`w-full px-4 py-2 rounded-lg focus:border-[#90D5FF] focus:outline-none focus:ring-1 focus:ring-[#90D5FF] transition-all duration-300 ${
                          theme === "light"
                            ? "bg-white border border-gray-300 text-gray-800"
                            : "bg-[#1e1e1e] border border-[#444444] text-white"
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-[#90D5FF] mb-2">Email</label>
                      <input
                        type="email"
                        name="reply_to"
                        value={formData.reply_to}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className={`w-full px-4 py-2 rounded-lg focus:border-[#90D5FF] focus:outline-none focus:ring-1 focus:ring-[#90D5FF] transition-all duration-300 ${
                          theme === "light"
                            ? "bg-white border border-gray-300 text-gray-800"
                            : "bg-[#1e1e1e] border border-[#444444] text-white"
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#90D5FF] mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                      className={`w-full px-4 py-2 rounded-lg focus:border-[#90D5FF] focus:outline-none focus:ring-1 focus:ring-[#90D5FF] transition-all duration-300 ${
                        theme === "light"
                          ? "bg-white border border-gray-300 text-gray-800"
                          : "bg-[#1e1e1e] border border-[#444444] text-white"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[#90D5FF] mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      required
                      className={`w-full px-4 py-2 rounded-lg focus:border-[#90D5FF] focus:outline-none focus:ring-1 focus:ring-[#90D5FF] transition-all duration-300 ${
                        theme === "light"
                          ? "bg-white border border-gray-300 text-gray-800"
                          : "bg-[#1e1e1e] border border-[#444444] text-white"
                      }`}
                      rows="4"
                    ></textarea>
                  </div>

                  {status.info.msg && (
                    <div
                      className={`flex items-center gap-2 p-3 rounded-lg ${
                        status.info.error
                          ? theme === "light"
                            ? "bg-red-100 text-red-800 border border-red-200"
                            : "bg-red-900/50 text-red-200 border border-red-700"
                          : theme === "light"
                          ? "bg-green-100 text-green-800 border border-green-200"
                          : "bg-green-900/50 text-green-200 border border-green-700"
                      }`}
                    >
                      {status.info.error ? (
                        <AlertCircle
                          size={20}
                          className={
                            theme === "light" ? "text-red-600" : "text-red-300"
                          }
                        />
                      ) : (
                        <CheckCircle
                          size={20}
                          className={
                            theme === "light"
                              ? "text-green-600"
                              : "text-green-300"
                          }
                        />
                      )}
                      <span>{status.info.msg}</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status.submitting}
                      className="w-full sm:w-auto px-6 py-3 bg-[#90D5FF] text-white rounded-lg hover:opacity-90 transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2 disabled:opacity-70 hover:scale-105"
                    >
                      <span className="relative z-10">
                        {status.submitting ? "Sending..." : "Send Message"}
                      </span>
                      {!status.submitting && (
                        <Send size={18} className="relative z-10" />
                      )}
                      <div className="absolute inset-0 bg-[#90D5FF] shadow-[0_0_15px_5px_rgba(144,213,255,0.5)] transition-all duration-300 group-hover:shadow-none"></div>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
