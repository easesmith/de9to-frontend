
const Feature = ({ img, title }) => {
  return (
    <div className="flex  items-center gap-1 sm:gap-4 rounded px-2 sm:px-4 py-2 border border-gray-50 bg-[#FFFFFF66]">
      <img className="w-10 h-10" src={img} alt="feature" />
      <h4 className="text-white font-poppins text-center text-sm sm:text-lg">{title}</h4>
    </div>
  );
};

export default Feature;
