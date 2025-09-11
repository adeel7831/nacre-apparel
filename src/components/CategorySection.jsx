import menCategoryImg from "../assets/imgs/menCategory.jpg";
import womenCategoryImg from "../assets/imgs/womenCategory.jpg";
import boysCategoryImg from "../assets/imgs/boysCategory.jpg";
import girlsCategoryImg from "../assets/imgs/girlsCategory.jpg";

const CategorySection = () => {
  return (
    <>
      <div className="flex place-content-center py-3 md:py-5 lg:py-6 xl:py-10 pb-5 md:pb-8 lg:pb-10">
        <h1 className="text-lg md:text-2xl xl:text-4xl font-semibold border-b  pb-1 lg:pb-2">
          Explore By Category
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 items-center justify-center">
        <div>
          <div className="overflow-hidden h-[200px] md:h-[450px] lg:h-[300px] xl:h-[450px] cursor-pointer">
            <img
              src={menCategoryImg}
              alt=""
              className="transition-all ease-in-out hover:scale-105"
            />
          </div>
          <p className="text-center md:text-lg xl:text-xl font-medium">MEN</p>
        </div>
        <div>
          <div className="overflow-hidden h-[200px] md:h-[450px] lg:h-[300px] xl:h-[450px] cursor-pointer">
            <img
              src={womenCategoryImg}
              alt=""
              className="transition-all ease-in-out hover:scale-105"
            />
          </div>
          <p className="text-center md:text-lg xl:text-xl font-medium">WOMEN</p>
        </div>
        <div>
          <div className="overflow-hidden h-[200px] md:h-[450px] lg:h-[300px] xl:h-[450px] cursor-pointer">
            <img
              src={boysCategoryImg}
              alt=""
              className="transition-all ease-in-out hover:scale-105"
            />
          </div>
          <p className="text-center  md:text-lg xl:text-xl font-medium">BOYS</p>
        </div>
        <div>
          <div className="overflow-hidden h-[200px] md:h-[450px] lg:h-[300px] xl:h-[450px] cursor-pointer">
            <img
              src={girlsCategoryImg}
              alt=""
              className="transition-all ease-in-out hover:scale-105"
            />
          </div>
          <p className="text-center md:text-lg xl:text-xl font-medium">GIRLS</p>
        </div>
      </div>
    </>
  );
};
export default CategorySection;
