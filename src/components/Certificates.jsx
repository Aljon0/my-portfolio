/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CertificateCard from "./CertificateCard";
import { useTheme } from "../context/ThemeContext";

const Certificates = ({ certificates, accentColor }) => {
  const { theme } = useTheme();
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const clickPositionRef = useRef({ x: 0, y: 0 });

  // Handle viewing certificate (zoom in)
  const handleViewCertificate = (certificate, event) => {
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      clickPositionRef.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      setModalPosition({
        x: viewportWidth / 2 - clickPositionRef.current.x,
        y: viewportHeight / 2 - clickPositionRef.current.y,
      });
    }

    setSelectedCertificate(certificate);
  };

  const closeOverlay = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="mb-8">
      <h2
        className={`text-xl font-bold border-b pb-2 mb-4 ${
          theme === "light" ? "border-gray-300" : "border-gray-700"
        }`}
        style={{ color: accentColor }}
      >
        Certificates
      </h2>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${selectedCertificate ? "blur-sm" : ""}`}>
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            accentColor={accentColor}
            handleViewCertificate={handleViewCertificate}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 bg-opacity-75 backdrop-blur-xs z-50 flex items-center justify-center p-4 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeOverlay();
            }}
          >
            <motion.div
              className={`rounded-lg max-w-4xl w-full relative shadow-xl overflow-hidden ${
                theme === "light" ? "bg-white" : "bg-[#2a2a2a]"
              }`}
              initial={{
                scale: 0.2,
                x: -modalPosition.x,
                y: -modalPosition.y,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                },
              }}
              exit={{
                scale: 0.2,
                x: -modalPosition.x,
                y: -modalPosition.y,
                opacity: 0,
                transition: { duration: 0.2 },
              }}
            >
              {/* Close button */}
              <div
                className="absolute top-2 right-2 z-20"
              >
                <button
                  onClick={closeOverlay}
                  className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md cursor-pointer ${
                    theme === "light"
                      ? "bg-white text-gray-800 hover:bg-gray-100"
                      : "bg-[#333333] text-white hover:bg-[#444444]"
                  }`}
                  style={{ fontSize: "24px" }}
                >
                  &times;
                </button>
              </div>

              {/* Certificate image */}
              {selectedCertificate.image && (
                <div className="w-full max-h-[80vh] overflow-hidden">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {/* Certificate info */}
              <div className="p-6">
                <h2
                  className={`text-2xl font-bold mb-2 ${
                    theme === "light" ? "text-gray-800" : "text-white"
                  }`}
                >
                  {selectedCertificate.title}
                </h2>
                
                <div className="flex justify-between items-center">
                  <span
                    className={`text-sm ${
                      theme === "light" ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    {selectedCertificate.date}
                  </span>
                  
                  <span
                    className="text-sm px-3 py-1.5 rounded-full font-medium"
                    style={{
                      backgroundColor: accentColor,
                      color: theme === "light" ? "white" : "#333333",
                    }}
                  >
                    {selectedCertificate.issuer}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;