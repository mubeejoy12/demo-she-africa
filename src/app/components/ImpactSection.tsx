import React from "react";
import Image from "next/image";

const ImpactSection: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center px-6 py-12">
      {/* Centered Image */}
      <Image
        src="/Frame 20.png" // Ensure the correct filename and location
        alt="Impact Section"
        width={1170} // Adjust width if needed
        height={423} // Adjust height if needed
        className="w-full max-w-4xl mx-auto"
      />
    </section>
  );
};

export default ImpactSection;
