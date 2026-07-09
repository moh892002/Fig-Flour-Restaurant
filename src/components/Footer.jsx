function Footer() {
  return (
    <footer className="bg-[#3A2A1E] text-white py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-between items-center">
          <p className="text-[14px] text-[#C7AD8F]">
            &copy; {new Date().getFullYear()} Fig & Flour. All rights reserved.
          </p>

          <div className="flex justify-between items-center mt-2 space-x-4 text-[14px] text-[#C7AD8F]">
            <p className="cursor-pointer hover:text-[#e5c6a3]">
              Privacy Policy
            </p>
            <p className="cursor-pointer hover:text-[#e5c6a3]">Accessibility</p>
            <p className="cursor-pointer hover:text-[#e5c6a3]">Careers</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
