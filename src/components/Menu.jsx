import MenuCard from "../ui/MenuCard";
import avocado from "../assets/avocado.png";
import blueberry from "../assets/blueberry.png";
import cappuccino from "../assets/cappuccino.png";
import curs from "../assets/curs.png";
import salad from "../assets/salad.jpg";
import granola from "../assets/granola.png";

function Menu() {
  return (
    <div className="bg-[#F3E6D2] py-16" id="menu">
      <div className="container mx-auto">
        <div className="title text-center leading-12">
          <h4 className="text-[#9C4A2B] text-[16px]  tracking-wider">
            THE MENU
          </h4>
          <h2 className="text-[36px] text-[#3A2A1E] ">
            Simple food, done with care
          </h2>
          <p className="text-[#3A2A1E] text-[16px] ">
            A few favorites from our all-day brunch and coffee menu.
          </p>
        </div>
        <div className="sorts-btn flex justify-center gap-4 mt-8">
          <button className="sort-btn bg-[#C1613B] text-white px-6 py-3 rounded-3xl hover:bg-[#c1613be9] transition duration-300 ">
            Breakfast & Brunch
          </button>
          <button className="sort-btn bg-transparent border border-[#3A2A1E] text-[#3A2A1E] px-6 py-3 rounded-3xl hover:bg-[#c1613be9] hover:text-white transition duration-300 ">
            Coffee & Drinks
          </button>
          <button className="sort-btn bg-transparent border border-[#3A2A1E] text-[#3A2A1E] px-6 py-3 rounded-3xl hover:bg-[#c1613be9] hover:text-white transition duration-300 ">
            Pastries
          </button>
          <button className="sort-btn bg-transparent border border-[#3A2A1E] text-[#3A2A1E] px-6 py-3 rounded-3xl hover:bg-[#c1613be9] hover:text-white transition duration-300 ">
            Sides
          </button>
        </div>
        <div className="menu-cards grid grid-cols-3 gap-8 mt-12">
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
        <div className="mt-10 text-center">
          <a
            href="#"
            className="text-[#C1613B]  hover:underline"
          >
            View Full Menu <span className="">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
