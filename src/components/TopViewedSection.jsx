import TopViewedCarousel from "./TopViewedCarousel";

const TopViewedSection = () => {
  return (
    <div className="w-full flex items-center gap-3 md:gap-5 lg:gap-8 xl:gap-10">
      <h1 className="w-[20%] text-lg md:text-2xl lg:text-4xl xl:text-6xl">
        Top Viewed
      </h1>
      <div className="w-[80%]">
        <TopViewedCarousel />
      </div>
    </div>
  );
};
export default TopViewedSection;
