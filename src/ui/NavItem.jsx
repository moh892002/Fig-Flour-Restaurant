function NavItem({ name }) {
  return (
    <li>
      <a
        href={"#" + name.toLowerCase().replace(/\s+/g, "-")}
        className="text-[18px] font-light text-[#3A2A1E] hover:text-[#C1613B] transition duration-300 "
      >
        {name}
      </a>
    </li>
  );
}

export default NavItem;
