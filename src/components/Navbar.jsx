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
        className="book-btn hidden md:inline-block bg-brand-accent text-white px-4 py-2 rounded-3xl hover:bg-brand-accent-hover transition duration-300"
      >
        Book a Table
      </a>

      <button
        className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[6px]"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
      >
        <span
          className={`block w-6 h-0.5 bg-brand-primary rounded-full transition-all duration-300 ease-in-out origin-center ${
            mobileOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-brand-primary rounded-full transition-all duration-300 ease-in-out ${
            mobileOpen ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-brand-primary rounded-full transition-all duration-300 ease-in-out origin-center ${
            mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>

      <div
        className={`absolute top-16 left-0 right-0 bg-cream-light shadow-lg z-50 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-6 space-y-4">
          <NavItem name="Menu" />
          <NavItem name="Our Story" />
          <NavItem name="Reservations" />
          <NavItem name="Visit Us" />
        </ul>
        <div className="pb-6 text-center">
          <a
            href="#reservations"
            className="bg-brand-accent text-white px-6 py-2 rounded-3xl hover:bg-brand-accent-hover transition duration-300"
            onClick={() => setMobileOpen(false)}
          >
            Book a Table
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
