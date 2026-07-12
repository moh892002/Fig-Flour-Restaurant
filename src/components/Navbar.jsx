import { useState } from "react";
import NavItem from "../ui/NavItem";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
      <h1 className="logo text-xl md:text-2xl">Fig & Flour</h1>

      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <NavItem name="Menu" />
          <NavItem name="Our Story" />
          <NavItem name="Reservations" />
          <NavItem name="Visit Us" />
        </ul>
      </nav>

      <a
        href="#reservations"
        className="book-btn hidden md:inline-block bg-[#C1613B] text-white px-4 py-2 rounded-3xl hover:bg-[#c1613be9] transition duration-300"
      >
        Book a Table
      </a>

      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-[#3A2A1E] transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-[#3A2A1E] transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-[#3A2A1E] transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#FBF2E4] shadow-lg z-50 md:hidden">
          <ul className="flex flex-col items-center py-6 space-y-4">
            <NavItem name="Menu" />
            <NavItem name="Our Story" />
            <NavItem name="Reservations" />
            <NavItem name="Visit Us" />
          </ul>
          <div className="pb-6 text-center">
            <a
              href="#reservations"
              className="bg-[#C1613B] text-white px-6 py-2 rounded-3xl hover:bg-[#c1613be9] transition duration-300"
              onClick={() => setMobileOpen(false)}
            >
              Book a Table
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
