export default function CardExperience({ data }) {
  return (
    <div className="m-auto flex justify-between w-[896px] mt-52 bg-slate-200 drop-shadow-2xl dark:bg-[#1F2937]">
      <div className="flex-1">{data.images}</div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold  text-gray-600 dark:text-white">
          {data.title}
        </h1>

        <p className="text-gray-600 dark:text-white">{data.p1}</p>
        <p className=" text-gray-600 dark:text-white">{data.p2}</p>
        <p className=" text-gray-600 dark:text-white">{data.p3}</p>
        <p className=" text-gray-600 dark:text-white">{data.p4}</p>
      </div>
      <div className="flex-1 flex justify-center">
        <p className=" text-gray-600 dark:text-white ">{data.dates}</p>
      </div>
    </div>
  );
}
