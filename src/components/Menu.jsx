import MenuCard from "../ui/MenuCard";
import avocado from "../assets/images/avocado.png";
import blueberry from "../assets/images/blueberry.png";
import cappuccino from "../assets/images/cappuccino.png";
import curs from "../assets/images/curs.png";
import salad from "../assets/images/salad.jpg";
import granola from "../assets/images/granola.png";

function Menu() {
  return (
    <div className="bg-[#F3E6D2] py-12 md:py-16" id="menu">
      <div className="container mx-auto px-4 md:px-6">
        <div className="title text-center leading-10 md:leading-12">
          <h4 className="text-[#9C4A2B] text-sm md:text-[16px] tracking-wider">
            THE MENU
          </h4>
          <h2 className="text-2xl md:text-[36px] text-[#3A2A1E]">
            Simple food, done with care
          </h2>
          <p className="text-[#3A2A1E] text-sm md:text-[16px]">
            A few favorites from our all-day brunch and coffee menu.
          </p>
        </div>
        <div className="sorts-btn flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 md:mt-8">
          <button className="sort-btn bg-[#C1613B] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-3xl text-sm sm:text-base hover:bg-[#c1613be9] transition duration-300">
            Breakfast & Brunch
          </button>
          <button className="sort-btn bg-transparent border border-[#3A2A1E] text-[#3A2A1E] px-4 sm:px-6 py-2 sm:py-3 rounded-3xl text-sm sm:text-base hover:bg-[#c1613be9] hover:text-white transition duration-300">
            Coffee & Drinks
          </button>
          <button className="sort-btn bg-transparent border border-[#3A2A1E] text-[#3A2A1E] px-4 sm:px-6 py-2 sm:py-3 rounded-3xl text-sm sm:text-base hover:bg-[#c1613be9] hover:text-white transition duration-300">
            Pastries
          </button>
          <button className="sort-btn bg-transparent border border-[#3A2A1E] text-[#3A2A1E] px-4 sm:px-6 py-2 sm:py-3 rounded-3xl text-sm sm:text-base hover:bg-[#c1613be9] hover:text-white transition duration-300">
            Sides
          </button>
        </div>
        <div className="menu-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
          <MenuCard
            image={avocado}
            name="Avocado Toast"
            description="Smashed avocado on sourdough with a poached egg"
            price="12.99"
          />
          <MenuCard
            image={blueberry}
            name="Blueberry Muffin"
            description="Fresh blueberries in a moist muffin"
            price="4.99"
          />
          <MenuCard
            image={cappuccino}
            name="Cappuccino"
            description="Rich espresso with steamed milk"
            price="4.99"
          />
          <MenuCard
            image={curs}
            name="Croissant"
            description="Buttery, flaky pastry"
            price="3.99"
          />
          <MenuCard
            image={salad}
            name="Green Salad"
            description="Mixed greens with vinaigrette"
            price="8.99"
          />
          <MenuCard
            image={granola}
            name="Granola Bowl"
            description="Oats with nuts and fresh fruit"
            price="7.99"
          />
        </div>
        <div className="mt-8 md:mt-10 text-center">
          <a href="#" className="text-[#C1613B] hover:underline">
            View Full Menu <span>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
