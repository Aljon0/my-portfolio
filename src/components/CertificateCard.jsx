import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const CertificateCard = ({ certificate, accentColor, handleViewCertificate }) => {
  const { theme } = useTheme();

  // Card styles with better contrast for both themes
  const cardBackgroundClass = theme === "light" ? "bg-white" : "bg-[#2a2a2a]";
  const textColorClass = theme === "light" ? "text-gray-800" : "text-white";
  const secondaryTextColorClass = theme === "light" ? "text-gray-600" : "text-gray-300";

  return (
    <div
      className={`certificate-card rounded-lg overflow-hidden shadow-lg ${cardBackgroundClass} border ${
        theme === "light" ? "border-gray-200" : "border-[#444444]"
      }`}
    >
      <div className="h-32 relative overflow-hidden">
        {certificate.image ? (
          <motion.div
            className="absolute inset-0 w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ) : (
          <div
            className={`absolute inset-0 opacity-10 ${
              theme === "light"
                ? "bg-[radial-gradient(#333333_1px,transparent_1px)]"
                : "bg-[radial-gradient(#90D5FF_1px,transparent_1px)]"
            } bg-[size:16px_16px]`}
          ></div>
        )}

        <div
          className="absolute top-2 right-2 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
          style={{
            backgroundColor: accentColor,
            color: theme === "light" ? "white" : "#333333",
          }}
        >
          <FaCertificate size={12} />
          {certificate.issuer}
        </div>
      </div>

      <div className="p-4">
        <h3 className={`text-lg font-semibold mb-2 ${textColorClass}`}>
          {certificate.title}
        </h3>
        
        <div className="flex justify-between items-center">
          <span className={`text-xs ${secondaryTextColorClass}`}>
            {certificate.date}
          </span>
          
          <motion.button
            onClick={(e) => handleViewCertificate(certificate, e)}
            className="text-sm px-3 py-1.5 rounded-md font-medium hover:opacity-90 transition-colors cursor-pointer"
            style={{
              backgroundColor: accentColor,
              color: theme === "light" ? "white" : "#333333",
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Certificate
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;