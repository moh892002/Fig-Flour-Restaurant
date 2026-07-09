import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="container mx-auto hero flex justify-between items-center mb-14 mt-14">
      <div className="hero-content max-w-140 space-y-6">
        <div className="">
          <div className="flex items-center gap-3 text-[#a84d2f] text-sm font-semibold tracking-[3px] uppercase">
            <span className="w-2 h-2 bg-[#9C4A2B] rounded-full"></span>
            <span>Brunch • Coffee • Community</span>
          </div>
          <div className="">
            <h1 className="text-[60px] text-[#3A2A1E] ">
              Slow mornings, honest ingredients.
            </h1>
            <p className="text-[18px] text-[#3A2A1E] font-light">
              Fig & Flour is a neighborhood cafe serving wood-fired brunch,
              single-origin coffee, and pastries baked from scratch every
              morning — a warm spot to gather, linger, and taste something real.
            </p>
          </div>
        </div>
        <div className="hero-btns space-x-1">
          <a
            href="#reservation"
            className="reserve-btn bg-[#C1613B] text-white px-6 py-3 inline-block rounded-3xl hover:bg-[#c1613be9] transition duration-300 "
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="view-btn bg-transparent border border-[#3A2A1E] text-[#3A2A1E] px-6 py-3 inline-block rounded-3xl hover:bg-[#C1613B] hover:text-white transition duration-300 "
          >
            View Menu
          </a>
        </div>
        <div className="">
          <div className="grid grid-cols-3 divide-x divide-gray-400 space-x-16">
            <div>
              <div className="flex items-center gap-1">
                <span className="text-3xl font-semibold">4.9</span>
                <span className="text-xl text-yellow-500">★</span>
              </div>
              <p className="text-sm text-gray-600">300+ reviews</p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold">Est.</h3>
              <p className="text-sm text-gray-600">2019</p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold">Open</h3>
              <p className="text-sm text-gray-600">7am – 4pm daily</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img
          src={heroImage}
          className="rounded h-125 w-225   object-cover"
          alt="Hero Image"
        />
      </div>
    </section>
  );
}

export default Hero;
