function NavItem({ name }) {
  return (
    <li>
      <a
        href={"#" + name.toLowerCase().replace(/\s+/g, "-")}
        className="text-[18px] font-light text-dark hover:text-brand-accent transition duration-300 "
      >
        {name}
      </a>
    </li>
  );
}

export default NavItem;
