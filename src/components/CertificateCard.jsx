import React from "react";
import { FaCertificate } from "react-icons/fa";

const CertificateCard = ({ certificate }) => (
  <div className="certificate-card group bg-gradient-to-b from-[#2a2a2a] to-[#333333] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105">
    <div className="h-24 bg-gradient-to-r from-[#2a2a2a] to-[#444444] relative overflow-hidden">
      {certificate.image ? (
        <img
          src={certificate.image}
          alt={certificate.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      ) : (
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#90D5FF_1px,transparent_1px)] bg-[size:16px_16px]"></div>
      )}

      {/* Certificate badge */}
      <div className="absolute top-2 right-2 bg-[#90D5FF] text-[#333333] text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
        <FaCertificate size={12} />
        {certificate.issuer}
      </div>
    </div>

    <div className="p-3">
      <h3 className="text-lg font-semibold text-white mb-1">
        {certificate.title}
      </h3>
      <p className="text-gray-300 text-xs mb-2 line-clamp-2">
        {certificate.description}
      </p>

      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-xs">{certificate.date}</span>
        {certificate.link && (
          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-[#90D5FF] text-[#333333] px-2 py-1 rounded-md font-medium hover:bg-[#7bc8ff] transition-colors flex items-center gap-1"
          >
            View Certificate
          </a>
        )}
      </div>
    </div>
  </div>
);

export default CertificateCard;
