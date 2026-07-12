import ourStory from "../assets/images/ourStory.png";
import port from "../assets/images/port.jpg";

function OurStory() {
  return (
    <div className="bg-[#3A2A1E]" id="our-story">
      <div className="ourStory container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 items-center py-12 lg:h-[70vh]">
          <div className="image w-full lg:w-auto">
            <img
              src={ourStory}
              alt="StoryImage"
              className="rounded-2xl object-cover w-full h-64 sm:h-80 lg:h-full"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-6 text-center lg:text-left">
            <h3 className="text-[#D9A441]">OUR STORY</h3>
            <h1 className="text-2xl md:text-[36px] text-[#FBF2E4] font-semibold leading-tight">
              Started with one oven and a Sunday market stall
            </h1>
            <p className="text-[#EBD9BF] text-sm md:text-[16px]">
              In 2019, chef Amara Reyes began selling sourdough and shakshuka
              out of a farmers-market stall. Fig & Flour grew from that same
              idea: cook seasonal, source locally, and make people feel like
              they're eating in someone's kitchen. Every loaf is still baked
              in-house, every menu changes with the season, and every table is
              treated like a regular's.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <img
                src={port}
                alt="Founder Image"
                className="founderImage w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <h1 className="text-[#FBF2E4] font-semibold text-sm md:text-base">
                  Mohammed Bader
                </h1>
                <h3 className="text-[#C7AD8F] text-xs md:text-sm">
                  Software Engineer
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
