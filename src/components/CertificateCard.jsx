import React from "react";
import { FaCertificate } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const CertificateCard = ({ certificate, accentColor }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`group rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] ${
        theme === "light"
          ? "bg-gradient-to-b from-gray-100 to-gray-200"
          : "bg-gradient-to-b from-[#2a2a2a] to-[#333333]"
      }`}
    >
      <div
        className={`h-24 relative overflow-hidden ${
          theme === "light"
            ? "bg-gradient-to-r from-gray-100 to-gray-200"
            : "bg-gradient-to-r from-[#2a2a2a] to-[#444444]"
        }`}
      >
        {certificate.image ? (
          <img
            src={certificate.image}
            alt={certificate.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.1] transition-transform duration-300"
          />
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
          className="absolute top-2 right-2 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 hover:scale-[1.1] transition-transform"
          style={{
            backgroundColor: accentColor,
            color: theme === "light" ? "white" : "#333333",
          }}
        >
          <FaCertificate size={12} />
          {certificate.issuer}
        </div>
      </div>

      <div className="p-3">
        <h3
          className={`text-lg font-semibold mb-1 ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          {certificate.title}
        </h3>
        <p
          className={`text-xs mb-2 line-clamp-2 ${
            theme === "light" ? "text-gray-600" : "text-gray-300"
          }`}
        >
          {certificate.description}
        </p>

        <div className="flex justify-between items-center">
          <span
            className={`text-xs ${
              theme === "light" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            {certificate.date}
          </span>
          {certificate.link && (
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-2 py-1 rounded-md font-medium hover:opacity-90 transition-colors flex items-center gap-1 hover:scale-[1.05]"
              style={{
                backgroundColor: accentColor,
                color: theme === "light" ? "white" : "#333333",
              }}
            >
              View Certificate
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
