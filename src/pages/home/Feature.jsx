import { Link } from "react-router-dom";

const Feature = ({ img, title,href="#" }) => {
  return (
    <Link to={href} className="flex group items-center gap-1 sm:gap-4 rounded px-2 sm:px-4 py-2 border border-gray-50 bg-[#FFFFFF66]">
      <img className="w-10 h-10 group-hover:animate-wiggle" src={img} alt="feature" />
      <h4 className="text-white font-poppins text-center text-sm sm:text-lg">{title}</h4>
    </Link>
  );
};

export default Feature;
