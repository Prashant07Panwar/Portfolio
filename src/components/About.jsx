import aboutImg from "../assets/AIimage.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex items-center gap-8">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 "
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl h-[60vh] w-[50vw]" src={aboutImg} alt="about image" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center items-center lg:justify-start">
            <div className="my-2 max-w-xl py-6">
              {ABOUT_TEXT.map((text, index) => (
                <p key={index} className="mb-4 text-neutral-400 text-xl">
                  {text}
                </p>
              ))}
              </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
