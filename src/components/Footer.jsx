const Footer = () => {
  return (
    <footer className="bg-[#333333] text-[#fefffe] py-6 shadow-md z-10 relative">
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
