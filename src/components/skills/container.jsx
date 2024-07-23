import RowIMG from "./row";

const Container = () => {
  return (
    <>
      <div className=" flex flex-col items-center pt-24">
        <p className="bg-slate-300 rounded-md px-3">Skills</p>
        <p className="pt-4">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <RowIMG />
    </>
  );
};
export default Container;
