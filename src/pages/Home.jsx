import Carousel from "../components/Carousel";
import TopViewedSection from "../components/TopViewedSection";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="px-3 py-5 md:px-5 md:py-8 lg:px-10 lg:py-10 xl:px-20 ">
        <TopViewedSection />
      </div>
      
    </>
  );
};
export default Home;
