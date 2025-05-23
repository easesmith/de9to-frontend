import React from "react";

const Feature = ({ img, title }) => {
  return (
    <div className="flex items-center gap-4 rounded px-4 py-2 border border-gray-50 bg-[#FFFFFF66]">
      <img src={img} alt="feature" />
      <h4 className="text-white font-poppins text-lg">{title}</h4>
    </div>
  );
};

export default Feature;
