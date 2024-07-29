const skillicon = [
  {
    name: "React",
    icon: "/image/2.png",
  },
  {
    name: "Next.js",
    icon: "/image/9.png",
  },
  {
    name: "Node.js",
    icon: "/image/4.png",
  },
  {
    name: "Tailwind",
    icon: "/image/2.png",
  },
  {
    name: "Typescript",
    icon: "/image/2.png",
  },
  {
    name: "Javascript",
    icon: "/image/2.png",
  },
  {
    name: "React",
    icon: "/image/2.png",
  },
  {
    name: "Next.js",
    icon: "/image/9.png",
  },
  {
    name: "Node.js",
    icon: "/image/4.png",
  },
  {
    name: "Tailwind",
    icon: "/image/2.png",
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
