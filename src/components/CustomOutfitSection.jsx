import { IoMdAdd } from "react-icons/io";
import customOutfitImg from "../assets/imgs/customOutfit.jpg";
import Button from "./commonUi/Button";
const CustomOutfitSection = () => {
  return (
    <div className="relative flex w-full items-center justify-center bg-gray-100 top-20 pb-5 md:pb-0">
      <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10 lg:gap-20 px-3  md:px-5  lg:px-10  xl:px-20 ">
        <div className=" relative -top-10 -mb-10 ">
          <img src={customOutfitImg} alt="" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center gap-3 lg:gap-5 xl:max-w-[700px]">
          <p>CUSTOMIZATION</p>
          <h1 className=" font-semibold text-xl lg:text-2xl xl:text-4xl flex gap-5">
            Want to Order a Very Special Outfit?
          </h1>
          <p className="font-medium text-medium lg:text-lg xl:text-xl">
            We offer bespoke tailoring according to your sketches, as well as
            working together with our designers.
          </p>
          <div className="pt-4 lg:pt-6 flex flex-col items-start gap-5">
            <p className="text-gray-500">
              Are your needs beyond our range? We also offer bespoke tailoring
              and can create an exclusive outfit for you! If you have an idea,
              we will gladly implement it or work on it together with you.
            </p>
            <Button
              variant="primary"
              className="flex items-center justify-center gap-3 border-2 font-semibold"
            >
              Request a Quote
              <IoMdAdd />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomOutfitSection;
