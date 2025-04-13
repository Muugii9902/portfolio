import Image from "next/image";

const HeroSectionImg = () => {
  return (
    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
      <Image
        src="/image/mmm.jpg"
        alt="hero image"
        className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        width={300}
        height={300}
      />
    </div>
  );
};
export default HeroSectionImg;
