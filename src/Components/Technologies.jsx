import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/default";
import LineGradient from "./Utility-Components/LineGradient";
import { motion } from "framer-motion";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const TechnologyVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
function Technologies() {
  const splideOptions = {
    perPage: 5,
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

  const Technologies = [
    { title: "HTML", src: "../assets/html.svg" },
    { title: "CSS", src: "../assets/css.svg" },
    { title: "JavaScript", src: "../assets/JavaScript.svg" },
    { title: "SASS", src: "../assets/sass.svg" },
    { title: "Bootstrap", src: "../assets/bootstrap.svg" },
    { title: "Tailwind CSS", src: "../assets/tailwind-css.svg" },
    { title: "React.js", src: "../assets/react.svg" },
    { title: "React Router", src: "../assets/react-router.svg" },
    { title: "React Query", src: "../assets/react-query.svg" },
    { title: "Redux", src: "../assets/redux.svg" },
    { title: "Typescript", src: "../assets/typescript.svg" },
    { title: "Next.js", src: "../assets/nextjs.svg" },
  ];
  return (
    <section
      id="technologies"
      className="pt-10 pb-24 flex flex-col justify-center gap-14 h-[100vh]"
    >
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
          TECHNO<span className="text-pink">LOGIES</span>
        </h2>
        <div className="flex justify-center md:mx-52">
          <LineGradient width="w-1/3" />
        </div>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Splide options={splideOptions}>
          {Technologies.map((Technology, index) => (
            <SplideSlide key={index}>
              <motion.div
                variants={TechnologyVariant}
                className="flex flex-col items-center justify-center gap-8"
              >
                <img
                  src={Technology.src}
                  alt={Technology.src}
                  className="cursor-pointer"
                />
                <h3 className="font-bold text-xl">{Technology.title}</h3>
              </motion.div>
            </SplideSlide>
          ))}
        </Splide>
      </motion.div>
    </section>
  );
}

export default Technologies;
