import MenuCard from "../ui/MenuCard";
import { categories, menuItems } from "../data/menuItems";

function Menu() {
  return (
    <div className="bg-cream py-12 md:py-16" id="menu">
      <div className="container mx-auto px-4 md:px-6">
        <div className="title text-center leading-10 md:leading-12">
          <h4 className="text-accent text-sm md:text-[16px] tracking-wider">
            THE MENU
          </h4>
          <h2 className="text-2xl md:text-[36px] text-dark">
            Simple food, done with care
          </h2>
          <p className="text-dark text-sm md:text-[16px]">
            A few favorites from our all-day brunch and coffee menu.
          </p>
        </div>
        <div className="sorts-btn flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 md:mt-8">
          {categories.map((category) => (
            <button
              key={category}
              className="sort-btn bg-brand-accent text-white px-4 sm:px-6 py-2 sm:py-3 rounded-3xl text-sm sm:text-base hover:bg-brand-accent-hover transition duration-300"
            >
              {category}
            </button>
          ))}
        </div>
        <div className="menu-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
          {menuItems.map((item) => (
            <MenuCard
              key={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
        <div className="mt-8 md:mt-10 text-center">
          <a href="#" className="text-brand-accent hover:underline">
            View Full Menu <span>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
