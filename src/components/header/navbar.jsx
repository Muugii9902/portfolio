import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import MobileMenu from "./mobile-menu";
const tags = [
  { name: "About", link: "#about" },
  { name: "Work", link: "#work" },
  { name: "Testimonials", link: "#Testimonials" },
  { name: "Contact", link: "#Contact" },
];
const Navbar = () => {
  const [theme, setTheme] = useState(true);
  return (
    <nav className="flex items-center gap-6 dark:text-white">
      <div className="flex gap-6 items-center text-gray-600 text-[16px] dark:text-white ">
        {tags.map((value) => {
          return <a href={value.link}>{value.name}</a>;
        })}
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
