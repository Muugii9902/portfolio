import { BsBoxArrowUpRight } from "react-icons/bs";
import Label from "./label";
const WorkCard = ({ card, swap }) => {
  return (
    <section id="projects">
      <div
        className={` flex w-[1440x] h-[480px] mt-12 ${
          swap ? "" : "flex-row-reverse"
        }`}
      >
        <div className="flex-1 bg-gray-100 flex items-center justify-center dark:bg-[#1F2937]">
          <img
            className="w-[580px] h-[385px] rounded-xl"
            src={card.image}
            alt=""
          />
        </div>
        <div className=" flex-1 p-12 flex flex-col gap-6 dark:bg-[#111827]">
          <h1 className="text-xl dark:text-white">{card.name}</h1>
          <h1 className="text-xl dark:text-white">{card.wedname}</h1>
          <p className="text-gray-600 dark:text-gray-400">{card.text}</p>
          <div className="flex flex-wrap gap-1">
            {card.skills.map((skill) => {
              return <Label text={skill} />;
            })}
          </div>
          <div className="text-2xl font-semibold dark:text-white">
            <BsBoxArrowUpRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCard;
