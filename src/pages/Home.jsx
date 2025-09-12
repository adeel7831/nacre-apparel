import Carousel from "../components/Carousel";
import CategorySection from "../components/CategorySection";
import CustomOutfitSection from "../components/CustomOutfitSection";
import TopViewedSection from "../components/TopViewedSection";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="px-3 py-5 md:px-5 md:py-8 lg:px-10 lg:py-10 xl:px-20 ">
        <TopViewedSection />
      </div>
      <div className="px-3 py-5 md:px-5 md:py-8 lg:px-10 lg:py-10 xl:px-20 ">
        <CategorySection />
      </div>
      <div className="py-5 md:py-8 lg:py-10 ">
        <CustomOutfitSection />
      </div>
    </>
  );
};
export default Home;
