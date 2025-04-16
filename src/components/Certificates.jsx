/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import CertificateCard from "./CertificateCard";
import { useTheme } from "../context/ThemeContext";

const Certificates = ({ certificates, variants }) => {
  const { theme } = useTheme();

  return (
    <div className="mb-8">
      <motion.h2
        className={`text-xl font-bold text-[#90D5FF] border-b pb-2 mb-4 ${
          theme === "light" ? "border-gray-300" : "border-gray-700"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certificates
      </motion.h2>

      <div className="overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={variants}
              whileHover="hover"
              className="flex-shrink-0"
              style={{ width: "300px" }}
            >
              <CertificateCard certificate={certificate} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
