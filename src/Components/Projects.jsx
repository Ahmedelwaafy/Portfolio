import { motion } from "framer-motion";
import LineGradient from "./Utility-Components/LineGradient";
import Project from "./Utility-Components/Project";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projects = [
  {
    title: "Portfolio",
    description:
      "It is a Simple Single Page Portfolio for Me to Showcase My Projects and Contact Information.",
    technologies: [
      "React.",
      "Tailwind CSS.",
      "Framer Motion.",
      "React Hook From.",
    ],
    github: "https://github.com/Ahmedelwaafy/Portfolio",
    live: "https://portfolio-ahmedelwaafy.vercel.app/",
  },
  {
    title: "DTD Blog",
    description:
      "It is a Fully Responsive Blog Website Dedicated to All Things Web Development, With Abilities to Sign In and Create, Update and Delete Posts.",
    technologies: [
      "React.",
      "React Router.",
      "Firebase.",
      "SASS.",
      "React Hook From.",
    ],
    github: "https://github.com/Ahmedelwaafy/DTD-Blog",
    live: "https://dtd-blog-8bed5.web.app/",
  },
  {
    title: "Nike E-Commerce",
    description:
      "It is a Fully Responsive Ecommerce Website, A Re-Design for Nike, With Multiple Products Pages, for Women, Men Kids, and Collections, And Nice Animations.",
    technologies: [
      "React.",
      "Redux.",
      "React Router.",
      "Splide.js.",
      "Tailwind CSS.",
      "React Hook From.",
      "React Query & Axios.",
    ],
    github: "https://github.com/Ahmedelwaafy/Nike-Ecommerce",
    live: "https://nike-ecommerce-wafy.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="pt-10 pb-24 ">
      {/* HEADINGS */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="   mt-12 md:mt-32"
      >
        <h2 className="font-Poppins font-semibold text-4xl mb-5 text-center">
          PRO<span className="text-pink">JECTS</span>
        </h2>
        <div className="flex justify-center md:mx-52">
          <LineGradient width="w-1/3" />
        </div>

        <h3 className="mt-10 mb-10 font-Poppins font-medium italic text-xl text-white  text-center ">
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
          <div className="max-w-[400px]">
            <div className="flex justify-center items-center text-center p-10 bg-cyan-400  h-[130px] w-full  text-2xl font-Inter font-semibold ">
              BEAUTIFUL USER INTERFACES
            </div>
            <Project project={projects[0]} />
          </div>

          {/* col 2 */}
          <Project pop project={projects[2]} />

          {/* col 3 */}
          <div className="max-w-[400px]">
            <Project project={projects[1]} />
            <div className=" md:col-span-2 lg:col-span-1 flex justify-center items-center text-center p-10 bg-fuchsia-500 w-full h-[130px]  md:max-w-[800px] lg:max-w-[400px] text-2xl font-Inter font-semibold md: ">
              SMOOTH USER EXPERIENCE
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
