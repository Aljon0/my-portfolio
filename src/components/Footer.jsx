import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-6 shadow-md z-10 relative transition-colors duration-300 ${
        theme === "light" ? "bg-white text-gray-800" : "bg-[#333333] text-white"
      }`}
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Al-jon Santiago. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
