import Icons from "./logo";
import Label from "../label";

const Skills = () => {
  return (
    <div className="container m-auto py-24 mb-24">
      <div className="flex items-center justify-center flex-col gap-4">
        <Label text="Skills" />
        <p className="text-[20px] text-gray-600 dark:text-white">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <Icons />
    </div>
  );
};
export default Skills;
