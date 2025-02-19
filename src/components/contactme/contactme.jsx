import Label from "./label";
import { MdOutlineEmail } from "react-icons/md";
import { TbBoxMultiple } from "react-icons/tb";
import { LuPhone } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { FaFigma } from "react-icons/fa";

const Contactme = () => {
  return (
    <section className="container m-auto flex flex-col justify-center items-center gap-4 p-16 dark:text-white">
      <Label text="Get in Touch" />
      <p>
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      <div className="flex gap-8  items-center text-4xl font-semibold">
        <MdOutlineEmail />
        <p>Muugii9902@gmail.com</p>
        <TbBoxMultiple />
      </div>
      <div className="flex gap-8  items-center text-4xl font-semibold">
        <LuPhone />
        <p>+976 99871929</p>
        <TbBoxMultiple />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <p>You may also find me on these platforms!</p>
        <div className="flex gap-3">
          <a href="">
            <FiGithub className="size-5" />
          </a>
          <a href="">
            <LuTwitter className="size-5" />
          </a>
          <a href="">
            <FaFigma className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contactme;
