import Label from "./label";
import Workcard from "./work-list";

const Work = () => {
  return (
    <section className="m-auto container py-24 ">
      <div className="flex items-center justify-center flex-col gap-4 ">
        <Label text="Projects" />
      </div>
      <Workcard />
    </section>
  );
};
export default Work;
