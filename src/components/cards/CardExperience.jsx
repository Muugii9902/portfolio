export default function CardExperience({ data }) {
  return (
    <div className="m-auto flex justify-between w-[896px] mt-52 bg-slate-200 drop-shadow-2xl">
      <div className="flex-1">{data.images}</div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold ">{data.title}</h1>
        <p>{data.p1}</p>
        <p>{data.p2}</p>
        <p>{data.p3}</p>
        <p>{data.p4}</p>
      </div>
      <div className="flex-1">
        <p>{data.dates}</p>
      </div>
    </div>
  );
}
