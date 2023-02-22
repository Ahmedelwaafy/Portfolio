import { motion } from "framer-motion";
import LineGradient from "./Utility-Components/LineGradient";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const src = title.split(" ").join("-");
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-light-grey z-30 flex flex-col justify-center items-center text-center p-16 md:p-8 text-dark-blue `;
  console.log(src);
  return (
    <motion.div variants={projectVariant} className="relative">
      {/*Hover Content */}
      {/**<div className={overlayStyles}>
          <h3 className="text-2xl font-Poppins font-semibold"> {title}</h3>
          <p className="text-md font-Poppins font-medium italic text-light-blue mt-7">
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Nulla porttitor accumsan tincidunt.
          </p>
          <div className="flex  justify-between gap-8 mt-7">
            <a
              className="p-3 bg-pink rounded-3xl hover:text-pink hover:bg-transparent transition duration-500 "
              href="https://github.com/Ahmedelwaafy"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="p-3 bg-dark-blue text-light-grey rounded-3xl hover:text-dark-blue hover:bg-transparent transition duration-500 "
              href="https://github.com/Ahmedelwaafy"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div> */}

      {/*Actual Image */}
      <div
        className="bg-cover bg-top hover:bg-bottom border border-pink cursor-pointer "
        style={{
          backgroundImage: `url(../assets/${src}.jpg)`,
          transition: "all 5s ease-in-out",
        }}
      ></div>
    </motion.div>
  );
};

function MyProjects() {
  return (
    <section id="projects" className="pt-10 pb-24 ">
      {/* HEADINGS */}

      <motion.div
        className="   mt-12 md:mt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className="font-Poppins font-semibold text-4xl mb-5 text-center">
          PRO<span className="text-pink">JECTS</span>
        </h2>
        <div className="flex justify-center md:mx-52">
          <LineGradient width="w-1/3" />
        </div>

        <h3 className="mt-10 mb-10 font-Poppins font-medium italic text-xl text-light-grey  text-center ">
          Sample Projects
        </h3>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        {/* Grid Container */}
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* col 1 */}
          <div>
            <div className="flex justify-center items-center text-center p-10 bg-pink max-w-[400px] max-h-[400px]  text-2xl font-Inter font-semibold ">
              BEAUTIFUL USER INTERFACES
            </div>
          </div>
          <div
            className="bg-cover bg-top hover:bg-bottom border border-pink cursor-pointer h-96"
            style={{
              backgroundImage: `url(../assets/Nike-Ecommerce.jpg)`,
              transition: "all 5s ease-in-out",
            }}
          ></div>

          <Project title="Nike Ecommerce" />

          {/* col 3 */}
          <div>
            <div className=" md:col-span-2 lg:col-span-1 flex justify-center items-center text-center p-10 bg-fuchsia-500 max-w-[400px] max-h-[400px] md:max-w-[800px] lg:max-w-[400px] text-2xl font-Inter font-semibold md: ">
              SMOOTH USER EXPERIENCE
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MyProjects;
