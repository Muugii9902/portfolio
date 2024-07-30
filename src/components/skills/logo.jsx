const skillicon = [
  {
    name: "React",
    icon: "/image/icon1.png",
  },
  {
    name: "Next.js",
    icon: "/image/icon1.png",
  },
  {
    name: "Node.js",
    icon: "/image/icon1.png",
  },
  {
    name: "Tailwind",
    icon: "/image/icon1.png",
  },
  {
    name: "Typescript",
    icon: "/image/icon1.png",
  },
  {
    name: "Javascript",
    icon: "/image/icon1.png",
  },
  {
    name: "React",
    icon: "/image/icon1.png",
  },
  {
    name: "Next.js",
    icon: "/image/icon1.png",
  },
  {
    name: "Node.js",
    icon: "/image/icon1.png",
  },
  {
    name: "Tailwind",
    icon: "/image/icon1.png",
  },
];
const Icons = () => {
  return (
    <div className="flex container m-auto mt-12">
      {skillicon.map((logo) => {
        return (
          <div className="w-[88px] h-[100px] flex flex-col items-center m-auto">
            <img src={logo.icon} alt="photo" />
            <p className="text-[18px] font-[400] text-gray-600 dark:text-white">
              {logo.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Icons;
