import { IoLocationOutline } from "react-icons/io5";
import { LuHandMetal } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { FaFigma } from "react-icons/fa";

const Herosection = () => {
  return (
    <div>
      <div className="w-2/5 px-28 py-24">
        <div className="flex gap-3 py-4">
          <h1 className="font-bold text-4xl  text-gray-900 dark:text-white">
            HI,IM' Muugii
          </h1>
          <LuHandMetal className="size-9 text-yellow-300" />
        </div>
        <p className="text-[16px] text-gray-600 dark:text-white">
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </p>
        <div className="flex items-center gap-2 py-3">
          <IoLocationOutline className="size-5" />
          <p className=" text-gray-600 dark:text-white">
            {" "}
            Ulaanbaatar, Mongolia
          </p>
        </div>
        <div className="flex items-center gap-2">
          <GoDotFill className="text-green-400" />
          <p className=" text-gray-600 dark:text-white">
            Available for new projects
          </p>
        </div>
        <div className="flex py-14 gap-3">
          <a href="">
            <FiGithub className="size-5  text-gray-500 dark:text-white" />
          </a>
          <a href="">
            <LuTwitter className="size-5  text-gray-500 dark:text-white" />
          </a>
          <a href="">
            <FaFigma className="size-5  text-gray-500 dark:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Herosection;
