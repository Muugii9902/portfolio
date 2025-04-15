import { IoLocationOutline } from "react-icons/io5";
import { LuHandMetal } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
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
          Би Fullstake Developer чиглэлээр 2024 ос 2025 онд Pinecone Academy
          сурж төгссөн. Javascript хэл дээр ажиллаж сурсан. Одоо Frontend болон
          Backend аль нэг чиглэлээр нь ажиллах сонирхолтой байгаа мөн сурах
          суралцах зүйл их байгаа.
        </p>
        <div className="flex items-center gap-2 py-3">
          <IoLocationOutline className="size-5  text-gray-600 dark:text-white" />

          <p className=" text-gray-600 dark:text-white">
            {" "}
            Ulaanbaatar, Mongolia
          </p>
        </div>
        {/* <div className="flex items-center gap-2">
          <GoDotFill className="text-green-400" />
          <p className=" text-gray-600 dark:text-white">
            Available for new projects
          </p>
        </div> */}
        <div className="flex py-14 gap-3">
          <a href="https://github.com/Muugii9902">
            <FiGithub className="size-5  text-gray-500 dark:text-white" />
          </a>
          <a href="https://www.instagram.com/muugii.ganbaatar.7/">
            <FaInstagram className="size-5  text-gray-500 dark:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Herosection;
