const { workCard } = require("@/components/cards/cardData");

const WorkList = () => {
  return (
    <div>
      {workCard.map((a) => (
        <WorkList data={a} />
      ))}
    </div>
  );
};
