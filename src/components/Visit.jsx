import ContactMap from "./Map";

function Visit() {
  return (
    <div className="bg-[#F3E6D2] py-15 px-4">
      <div className="container mx-auto">
        <div className="flex justify-around items-center gap-8" id="visit">
          <div className="w-156">
            <ContactMap />
          </div>
          <div className="space-y-8 w-156">
            <h1 className="text-[#3A2A1E] text-[34px] font-semibold">
              Visit us
            </h1>
            <div className="address">
              <p className="uppercase text-[#9C4A2B] text-[13px] font-bold tracking-[1.5px]">
                address
              </p>
              <p className="text-[16px] text-[#3A2A1E]">
                214 Orchard Lane, Riverside District
              </p>
            </div>
            <div className="hours">
              <p className="uppercase text-[#9C4A2B] text-[13px] font-bold tracking-[1.5px]">
                hours
              </p>
              <p className="text-[16px] text-[#3A2A1E]">
                Mon–Fri 7am–4pm · Sat–Sun 8am–5pm
              </p>
            </div>
            <div className="phone">
              <p className="uppercase text-[#9C4A2B] text-[13px] font-bold tracking-[1.5px]">
                phone
              </p>
              <p className="text-[16px] text-[#3A2A1E]">(555) 123-4567</p>
            </div>
            <div className="email">
              <p className="uppercase text-[#9C4A2B] text-[13px] font-bold tracking-[1.5px]">
                email
              </p>
              <p className="text-[16px] text-[#3A2A1E]">info@restaurant.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visit;
