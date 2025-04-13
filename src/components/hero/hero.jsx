import Herosection from "./herosection";
import HeroSectionImg from "./herosection-img";

const Hero = () => {
  return (
    <>
      <div className="  flex justify-between">
        <Herosection />
        <HeroSectionImg />
      </div>
    </>
  );
};
export default Hero;
