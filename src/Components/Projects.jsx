import { motion } from "framer-motion";
import { useState } from "react";
import LineGradient from "./Utility-Components/LineGradient";
import { Splide, SplideSlide } from "@splidejs/react-splide";

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
const splideOptions = {
  perPage: 6,
  perMove: 2,
  type: "loop",
  rewind: true,
  keyboard: "global",
  gap: "1rem",
  pagination: false,
  padding: "2rem",
  breakpoints: {
    1200: { perPage: 5 },
    991: { perPage: 4 },
    768: { perPage: 3 },
    500: { perPage: 2 },
    425: { perPage: 1 },
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
const Project = ({ project ,pop}) => {
  const [inverse, setInverse] = useState(false);
  const [showSide, setShowSide] = useState(false);
  const { title, description, technologies, github, live } = project;
  const src = title.split(" ").join("-");

  
  return (
    <motion.div
      variants={projectVariant}
      className={`relative max-w-[400px] ${
        pop ? "h-[500px] " : "h-[370px]"
      }  bg-cover bg-top hover:bg-bottom border border-simon cursor-pointer `}
      style={{
        backgroundImage: `url(../assets/${src}.jpg)`,
        transition: "all 5s ease-in-out",
      }}
    >
      <div
        className={`h-full bg-pink  z-1  bg-right duration-[1.5s] ${
          inverse ? "w-full " : "w-0 "
        }  `}
      >
        <div
          className={` delay-300 duration-500 ${
            inverse ? " opacity-100 text-[] " : "opacity-0 text-[2px] "
          } flex flex-col  justify-center items-center px-7 py-3 gap-4 h-full  w-full`}
        >
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="opacity-90 text-center">{description}</p>
          <h3 className="font-semibold">Technologies</h3>
          <ul className="grid grid-cols-2 opacity-90 gap-2 ">
            {technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
          <div
            className="flex justify-center items-center gap-10 mt-2
            "
          >
            <a
              className="px-3 py-1 bg-[#0D1117] rounded-xl hover:text-white text-white hover:bg-[#161B22] shadowy transition duration-500 "
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="px-3 py-1 bg-simon text-pink  rounded-xl hover:text-pink hover:bg-white shadowy transition duration-500 "
              href={live}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
          <div
            onClick={() => setInverse(!inverse)}
            className={` transition duration-[2s] absolute top-[45%]   ${
              inverse
                ? "-rotate-[270deg] right-[6px] opacity-100"
                : " rotate-[270deg] left-1 opacity-0"
            } `}
          >
            <lord-icon
              src="https://cdn.lordicon.com/albqovim.json"
              trigger="hover"
              colors="primary:#FFEE95"
              state="hover-2"
              style={{ width: "25px", height: "25px" }}
            ></lord-icon>
          </div>
        </div>
      </div>

      <div
        onClick={() => setShowSide(!showSide)}
        className={`w-full h-full z-10 absolute top-0 hover:opacity-100  ${
          showSide ? "opacity-100" : "opacity-0"
        }  ease-in-out duration-[1s] ${inverse ? "invisible " : " visible "} `}
      >
        <div
          className=" w-full h-full bg-pink"
          style={{
            clipPath: "polygon(0 100%, 0 0, 3% 0, 7% 50%, 3% 100%)",
          }}
        ></div>
        <div
          onClick={() => setInverse(!inverse)}
          className={` transition  duration-[2s] absolute top-[45%]   ${
            inverse ? "opacity-0 -rotate-[270deg]" : " rotate-[270deg] left-1"
          } `}
        >
          <lord-icon
            src="https://cdn.lordicon.com/albqovim.json"
            trigger="hover"
            colors="primary:#FFEE95"
            state="hover-2"
            style={{ width: "25px", height: "25px" }}
          ></lord-icon>
        </div>
      </div>
    </motion.div>
  );
};

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
