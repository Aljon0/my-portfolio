const Footer = () => {
  return (
    <footer className="bg-gray-900 text-[#fefffe] py-6 shadow-md">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
