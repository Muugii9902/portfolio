import AboutImg from "./aboutimg";
import AboutText from "./aboutText";

const About = () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className="flex justify-center  bg-gray-50">
          <p className="bg-slate-300 rounded-md px-3">About me</p>
        </div>
        <div className="flex justify-evenly">
          <AboutImg />
          <AboutText />
        </div>
      </div>
    </>
  );
};
export default About;
