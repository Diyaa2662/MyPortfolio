import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-100 py-8 border-t border-white/10">
      <div className="container-custom text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Diyaa Altaweel. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm mt-2 flex items-center justify-center gap-1">
          Made with <FaHeart className="text-red-500" /> by Diyaa
        </p>
      </div>
    </footer>
  );
};

export default Footer;
