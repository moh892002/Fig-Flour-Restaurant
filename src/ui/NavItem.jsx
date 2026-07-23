function NavItem({ name }) {
  return (
    <li>
      <a
        href={"#" + name.toLowerCase().replace(/\s+/g, "-")}
        className="relative text-[18px] font-light text-dark hover:text-brand-accent transition-colors duration-300 inline-block group"
      >
        {name}
        <span className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </a>
    </li>
  );
}

export default NavItem;
