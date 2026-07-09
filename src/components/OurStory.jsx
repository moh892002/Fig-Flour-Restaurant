import ourStory from "../assets/ourStory.png";
import port from "../assets/port.jpg";

function OurStory() {
  return (
    <div className="bg-[#3A2A1E]">
      <div className="ourStory container mx-auto ">
        <div className="flex justify-between gap-20 items-center h-[70vh]">
          <div className="image">
            <img
              src={ourStory}
              alt="StoryImage"
              className="rounded-2xl object-cover w-full"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-[#D9A441] ">OUR STORY</h3>
            <h1 className="text-[36px] text-[#FBF2E4] font-semibold">
              Started with one oven and a Sunday market stall
            </h1>
            <p className="text-[#EBD9BF] text-[16px]">
              In 2019, chef Amara Reyes began selling sourdough and shakshuka
              out of a farmers-market stall. Fig & Flour grew from that same
              idea: cook seasonal, source locally, and make people feel like
              they're eating in someone's kitchen. Every loaf is still baked
              in-house, every menu changes with the season, and every table is
              treated like a regular's.
            </p>
            <div className="flex items-center gap-4">
              <img
                src={port}
                alt="Founder Image"
                className="founderImage w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h1 className="text-[#FBF2E4] font-semibold">Mohammed Bader</h1>
                <h3 className="text-[#C7AD8F]">Software Engineer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
