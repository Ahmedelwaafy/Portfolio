import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "./Utility-Components/SocialMediaIcons";

function Hero({setSelectedPage}) {
 
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    const imgBorder = `relative z-0 ml-20 before:absolute
     before:-top-20 before:-left-20 before:rounded-t-[400px]
    before:w-full before:max-w-[350px] 
    before:h-full before:border-2 before:border-pink
     before:z-[-1] `
    return (
      <section
        id="home"
        className=" md:flex md:justify-between md:items-center gap-16 md:h-full py-10 "
      >
        {/* Image */}
        <div className="basis-2/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
          {isAboveLarge ? (
            <div className={`${imgBorder}`}>
              <img
                className="z-10 w-full max-w-[350px]  hover:saturate-150 transition duration-500  "
                src="assets/profile-image.svg"
                alt="profile"
              />
            </div>
          ) : (
            <img
              className="z-10 w-full max-w-[400px] sm:max-w-[500px]"
              src="assets/profile-image.svg"
              alt="profile"
            />
          )}
        </div>

        {/* Content */}
        <div className="basis-3/5 z-30 mt-20 md:mt-32">
          {/* Headings */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className="text-6xl font-Poppins font-semibold z-10 text-center md:text-start">
              AHMED {""}
              <span className="xs:relative xs:text-pink ss:text-dark-blue xs:font-bold z-20 ss:before:content-brush before:absolute before:-left-[35px] before:-top-[80px] before:z-[-1]">
                ElWAFY
              </span>
            </h1>

            <h2 className=" text-light-grey font-Poppins mt-10 mb-7 text-2xl text-center md:text-start font-medium italic">
              Passionate front-end developer skilled in most in-demand
              technologies. With an eye on UI/UX principles.
            </h2>
          </motion.div>

          {/* Call To Action */}
          <motion.div
            className="flex mt-10 gap-8 justify-center 
            items-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <button
              className="contact"
              onClick={() => setSelectedPage("contact")}
            >
              {" "}
              <a href="#contact">Contact Me</a>
            </button>
            <button className="download-button font-Inter">
              <a
                href="../assets/Ahmed ElWafy - Front-End Developer.pdf"
                download
              >
                <div className="docs">
                  <svg
                    class="css-i6dzq1"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    fill="none"
                    stroke-width="2"
                    stroke="currentColor"
                    height="20"
                    width="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line y2="13" x2="8" y1="13" x1="16"></line>
                    <line y2="17" x2="8" y1="17" x1="16"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>{" "}
                  Download My CV
                </div>
              </a>
              <a
                href="../assets/Ahmed ElWafy - Front-End Developer.pdf"
                download
              >
                <div className="download">
                  <svg
                    class="css-i6dzq1"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    fill="none"
                    stroke-width="2"
                    stroke="currentColor"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line y2="3" x2="12" y1="15" x1="12"></line>
                  </svg>
                </div>
              </a>
            </button>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>
      </section>
    );
}

export default Hero
