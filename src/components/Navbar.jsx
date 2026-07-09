import NavItem from "../ui/NavItem";

function Navbar() {
  return (
    <div className="container mx-auto flex justify-between items-center py-4">
      <h1 className="logo  text-2xl">Fig & Flour</h1>
      <nav>
        <ul className="flex space-x-6 ">
          <NavItem name="Menu" />
          <NavItem name="Our Story" />
          <NavItem name="Reservations" />
          <NavItem name="Visit Us" />
        </ul>
      </nav>
      <a
        href="#reservations"
        className="book-btn bg-[#C1613B] text-white px-4 py-2 rounded-3xl hover:bg-[#c1613be9] transition duration-300 "
      >
        Book a Table
      </a>
    </div>
  );
}

export default Navbar;
