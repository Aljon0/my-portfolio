import { Download, X } from "lucide-react";
import React, { useEffect } from "react";
import styles from "./Resume.module.css";

const Resume = ({ isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Aljon_Santiago_CV.pdf";
    link.download = "Aljon_Santiago_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${styles.resumeOverlay}`}
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Resume modal */}
      <div
        className={`${styles.resumeModal} w-full max-w-6xl rounded-3xl backdrop-blur-xs overflow-hidden mx-4 md:mx-8`}
      >
        <div className={styles.resumeModalContent}>
          <div className="p-6 md:p-8 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500/20 hover:bg-red-500/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                My Resume
              </h2>
              <p className="text-xl text-[#90D5FF] font-serif italic">
                "View and download my professional resume"
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {/* Download Section */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-[#90D5FF]/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto rounded-xl overflow-hidden mb-4 border-2 border-[#90D5FF]/30 flex items-center justify-center bg-[#90D5FF]/10">
                      <Download size={32} className="text-[#90D5FF]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Download Resume
                    </h3>
                    <p className="text-[#90D5FF] text-sm mb-4">
                      Get a copy of my resume
                    </p>
                    <button
                      onClick={handleDownload}
                      className={`${styles.downloadButton} w-full px-4 py-3 text-white rounded-xl font-semibold flex items-center justify-center gap-2 backdrop-filter backdrop-blur-lg`}
                    >
                      <Download size={18} />
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="md:col-span-3 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-6 border border-[#90D5FF]/20">
                <div
                  className={`${styles.pdfContainer} w-full rounded-xl overflow-hidden border border-[#90D5FF]/20`}
                  style={{ height: "70vh" }}
                >
                  <iframe
                    src="/Aljon_Santiago_CV.pdf#toolbar=0&navpanes=0&scrollbar=1"
                    width="100%"
                    height="100%"
                    className="rounded-xl"
                    title="Resume PDF"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
