import { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const NavButtons = () => {
  const [theme, settheme] = useState(true);
  return (
    <div className="flex items-center">
      {theme}
      <MdOutlineLightMode />
      <MdOutlineDarkMode />

      <button className="py-[6px] px-4 bg-black text-white rounded-xl">
        Download CV
      </button>
    </div>
  );
};
export default NavButtons;
