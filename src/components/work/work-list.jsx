import WorkCard from "./work-card";
import { workcard } from "./work-data";

const WorkList = () => {
  return (
    <div>
      {workcard.map((a, i) => (
        <WorkCard card={a} swap={i % 2 === 0} />
      ))}
    </div>
  );
};
export default WorkList;
