const skillicon = [
  {
    name: "React",
    icon: "/image/react.png",
  },
  {
    name: "Next.js",
    icon: "/image/nextjs.png",
  },
  {
    name: "Node.js",
    icon: "/image/nodejs.png",
  },
  {
    name: "Tailwind.css",
    icon: "/image/tailwind.png",
  },
  {
    name: "Typescript",
    icon: "/image/type.png",
  },
  {
    name: "Javascript",
    icon: "/image/javascript.png",
  },
  {
    name: "GraphQL",
    icon: "/image/Graphql.png",
  },
  {
    name: "MongoDB",
    icon: "/image/mongodb.png",
  },
  {
    name: "PostgreSQL ",
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
