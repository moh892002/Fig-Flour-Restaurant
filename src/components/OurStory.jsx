import { storyData } from "../data/story";

function OurStory() {
  return (
    <div className="bg-dark" id="our-story">
      <div className="ourStory container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 items-center py-12 lg:h-[70vh]">
          <div className="image w-full lg:w-auto">
            <img
              src={storyData.image}
              alt="StoryImage"
              className="rounded-2xl object-cover w-full h-64 sm:h-80 lg:h-full"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-6 text-center lg:text-left">
            <h3 className="text-accent-gold">{storyData.title}</h3>
            <h1 className="text-2xl md:text-[36px] text-cream font-semibold leading-tight">
              {storyData.heading}
            </h1>
            <p className="text-story text-sm md:text-[16px]">
              {storyData.content}
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <img
                src={storyData.founder.image}
                alt="Founder Image"
                className="founderImage w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <h1 className="text-cream font-semibold text-sm md:text-base">
                  {storyData.founder.name}
                </h1>
                <h3 className="text-muted text-xs md:text-sm">
                  {storyData.founder.title}
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
