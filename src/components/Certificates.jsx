import React from "react";
import CertificateCard from "./CertificateCard";

const Certificates = ({ certificates }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-[#90D5FF] border-b border-gray-700 pb-2 mb-4">
        Certificates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
