import React from "react";
import VisibilityLoader from "../ui/VisibilityLoader";
import { contactInfo } from "../data/contact";

const ContactMap = React.lazy(() => import("./Map"));

function Visit() {
  return (
    <div className="bg-cream py-10 md:py-15 px-4">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row justify-around items-center gap-8 lg:gap-8"
          id="visit-us"
        >
          <div className="w-full lg:w-auto">
            <VisibilityLoader
              fallback={
                <div className="h-64 md:h-125 animate-pulse rounded-xl bg-gray-200 w-full" />
              }
            >
              <ContactMap />
            </VisibilityLoader>
          </div>
          <div className="space-y-6 md:space-y-8 w-full lg:w-156 text-center lg:text-left">
            <h1 className="text-dark text-2xl md:text-[34px] font-semibold">
              Visit us
            </h1>
            <div className="address">
              <p className="uppercase text-accent text-[13px] font-bold tracking-[1.5px]">
                address
              </p>
              <p className="text-sm md:text-[16px] text-dark">
                {contactInfo.address}
              </p>
            </div>
            <div className="hours">
              <p className="uppercase text-accent text-[13px] font-bold tracking-[1.5px]">
                hours
              </p>
              <p className="text-sm md:text-[16px] text-dark">
                {contactInfo.hours}
              </p>
            </div>
            <div className="phone">
              <p className="uppercase text-accent text-[13px] font-bold tracking-[1.5px]">
                phone
              </p>
              <p className="text-sm md:text-[16px] text-dark">
                {contactInfo.phone}
              </p>
            </div>
            <div className="email">
              <p className="uppercase text-accent text-[13px] font-bold tracking-[1.5px]">
                email
              </p>
              <p className="text-sm md:text-[16px] text-dark">
                {contactInfo.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visit;
