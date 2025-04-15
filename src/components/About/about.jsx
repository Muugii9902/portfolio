import Label from "../label";
import Abtext from "./aboutText";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="  bg-gray-50 dark:bg-[#111827] dark:text-white ">
          <div className="container m-auto p-10">
            <div className="flex items-center justify-center pt-4 ">
              <Label text="About me" />
            </div>
            <div className="flex justify-between mt-12">
              <div className="h-[450px] w-[340px] border-white border-8 dark:border-black bg-cover bg-center bg-[url('/image/12.png')]"></div>
              <div className="">
                <Abtext />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
