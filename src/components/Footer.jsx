function Footer() {
  return (
    <footer className="bg-[#3A2A1E] text-white py-4">
      <div className="container mx-auto text-center px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs sm:text-[14px] text-[#C7AD8F]">
            &copy; {new Date().getFullYear()} Fig & Flour. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-xs sm:text-[14px] text-[#C7AD8F]">
            <a href="#" className="cursor-pointer hover:text-[#e5c6a3]">
              Privacy Policy
            </a>
            <a href="#" className="cursor-pointer hover:text-[#e5c6a3]">
              Accessibility
            </a>
            <a href="#" className="cursor-pointer hover:text-[#e5c6a3]">
              Careers
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
