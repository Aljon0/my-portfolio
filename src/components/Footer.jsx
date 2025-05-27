import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <div>
      <style jsx>{`
        .footer-3d {
          background: linear-gradient(
            135deg,
            rgba(20, 20, 20, 0.95) 0%,
            rgba(35, 35, 35, 0.98) 100%
          );
          border-top: 1px solid rgba(144, 213, 255, 0.2);
          box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.6),
            0 0 20px rgba(144, 213, 255, 0.1);
          backdrop-filter: blur(15px);
        }
      `}</style>

      <footer className="footer-3d py-6 z-10 relative transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Al-jon Santiago. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
