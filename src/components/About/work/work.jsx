const WorkList = () => {
  return (
    <div>
      {workCard.map((a) => (
        <WorkList data={a} />
      ))}
    </div>
  );
};
