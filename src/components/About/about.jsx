import AboutImg from "./aboutimg";
import AboutText from "./aboutText";

const About = () => {
  return (
    <>
      <div className="flex justify-center">
        <p className="bg-slate-300 rounded-md px-3">About me</p>
      </div>
      <div className="flex">
        <AboutImg />
        <AboutText />
      </div>
    </>
  );
};
export default About;
