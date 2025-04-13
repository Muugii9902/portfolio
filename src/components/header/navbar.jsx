import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import MobileMenu from "./mobile-menu";
import Navlink from "./navlinks";
const Navlinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
const Navbar = () => {
  const [theme, setTheme] = useState(true);
  return (
    <nav className="flex items-center gap-6 dark:text-white">
      <div className="flex gap-6 items-center text-gray-600 text-[16px] dark:text-white ">
        {Navlinks.map((link, index) => (
          <li key={index}>
            <Navlink href={link.path} title={link.title} />
          </li>
        ))}
      </div>
      <div className="bg-gray-100 h-6 w-[1px]"></div>
      <div className="flex justify-center items-center gap-4">
        <button>
          {theme ? (
            <MdOutlineWbSunny
              onClick={() => {
                setTheme(false);
                document.documentElement.classList.add("dark");
              }}
            />
          ) : (
            <IoMoonOutline
              onClick={() => {
                setTheme(true);
                document.documentElement.classList.remove("dark");
              }}
            />
          )}
        </button>
        <button className=" btn dark:bg-white dark:text-black">
          Download CV
        </button>
      </div>
      <MobileMenu />
    </nav>
  );
};
export default Navbar;
