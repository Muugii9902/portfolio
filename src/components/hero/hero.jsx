import Herosection from "./herosection";
import HeroSectionImg from "./herosection-img";

const Hero = () => {
  return (
    <>
      <div className="flex justify-evenly">
        <Herosection />
        <HeroSectionImg />
      </div>
    </>
  );
};
export default Hero;
