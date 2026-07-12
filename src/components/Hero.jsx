import heroImage from "../assets/images/hero.png";

function Hero() {
  return (
    <section className="container mx-auto hero flex flex-col-reverse lg:flex-row justify-between items-center mb-8 mt-8 lg:mb-14 lg:mt-14 px-4 md:px-6 gap-8 lg:gap-12">
      <div className="hero-content lg:max-w-140 space-y-6 text-center lg:text-left">
        <div>
          <div className="flex items-center justify-center lg:justify-start gap-3 text-[#a84d2f] text-xs sm:text-sm font-semibold tracking-[3px] uppercase">
            <span className="w-2 h-2 bg-[#9C4A2B] rounded-full"></span>
            <span>Brunch • Coffee • Community</span>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-[#3A2A1E] leading-tight">
              Slow mornings, honest ingredients.
            </h1>
            <p className="text-sm sm:text-base lg:text-[18px] text-[#3A2A1E] font-light mt-3">
              Fig & Flour is a neighborhood cafe serving wood-fired brunch,
              single-origin coffee, and pastries baked from scratch every
              morning — a warm spot to gather, linger, and taste something real.
            </p>
          </div>
        </div>
        <div className="hero-btns flex flex-wrap justify-center lg:justify-start gap-3">
          <a
            href="#reservations"
            className="reserve-btn bg-[#C1613B] text-white px-5 sm:px-6 py-3 inline-block rounded-3xl hover:bg-[#c1613be9] transition duration-300"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="view-btn bg-transparent border border-[#3A2A1E] text-[#3A2A1E] px-5 sm:px-6 py-3 inline-block rounded-3xl hover:bg-[#C1613B] hover:text-white transition duration-300"
          >
            View Menu
          </a>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:space-x-16">
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-1">
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                  4.9
                </span>
                <span className="text-lg sm:text-xl text-yellow-500">★</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">300+ reviews</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                Est.
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">2019</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                Open
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                7am – 4pm daily
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image w-full lg:w-auto">
        <img
          src={heroImage}
          className="rounded h-64 sm:h-80 md:h-96 lg:h-125 w-full lg:w-225 object-cover"
          alt="Hero Image"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Hero;
