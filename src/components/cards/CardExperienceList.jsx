import { cardData } from "./cardData";
import CardExperience from "./CardExperience";

const CardExperienceList = () => {
  return (
    <div>
      {cardData.map((a) => (
        <CardExperience data={a} />
      ))}
    </div>
  );
};

export default CardExperienceList;
