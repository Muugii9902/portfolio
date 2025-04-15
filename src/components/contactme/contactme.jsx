import Label from "./label";
import { MdOutlineEmail } from "react-icons/md";

import { LuPhone } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { FaFigma } from "react-icons/fa";

const Contactme = () => {
  return (
    <section
      id="contact"
      className="container m-auto flex flex-col justify-center items-center gap-4 p-16 dark:text-white"
    >
      <Label text="Contact" />
      <p>Хамтын ажиллагаанд нээлттэй байна хүсвэл чөлөөтэй холбогдоорой.</p>
      <div className="flex gap-8  items-center text-4xl font-semibold">
        <MdOutlineEmail />
        <p>Muugii9902@gmail.com</p>
      </div>
      <div className="flex gap-8  items-center text-4xl font-semibold">
        <LuPhone />
        <p>+976 99871929</p>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex gap-3">
          <a href="https://github.com/Muugii9902">
            <FiGithub className="size-5  text-gray-500 dark:text-white" />
          </a>
          <a href="https://www.instagram.com/muugii.ganbaatar.7/">
            <FaInstagram className="size-5  text-gray-500 dark:text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contactme;
