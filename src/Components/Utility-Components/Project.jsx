import { useState } from 'react';
import { motion } from "framer-motion";

function Project({ project ,pop}) {
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

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
                : " rotate-[270deg] left-[1px] opacity-0 "
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
}

export default Project