
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import LineGradient from "./Utility-Components/LineGradient";


function Skills() {

    const isAboveLarge = useMediaQuery("(min-width: 1060px)");


  return (
    <section id="skills" className="pt-10 pb-24 ">

        {/* Headings and Image Section*/}
        
        <div
        className="flex justify-between gap-16 mt-12 md:mt-32"
        >

            {/* Headings */}

            <motion.div
                className="  md:w-1/3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
                }}
            >
                <h2 className="font-Poppins font-semibold text-4xl mb-5 text-center md:text-start">
                    MY <span className="text-pink">SKILLS</span>

                </h2>
                <div className="flex justify-center md:justify-start">
                <LineGradient width= "w-1/3"/>

                </div>

                <h3 className="mt-10 mb-7 font-Poppins font-medium italic text-xl text-light-grey  text-center md:text-start">
                Excels at creating pixel-perfect designs and working with cross-browser compatibility issues. 
                </h3>

            </motion.div>


            {/* Image */}
                { isAboveLarge && (
                    <div  
                    className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                        before:w-full before:h-full before:border-2 before:border-pink before:z-[-1]"
                        >
                          <img alt="skills" className="z-10" src="assets/skills-image.png" />
                    </div>
                ) 
                }
            
        </div>



        {/* Skills Section*/}
        <div className="md:flex md:justify-between mt-16 gap-32">

            {/* Web Development*/}
            <motion.div
              className="md:w-1/3 mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              >
                <div className="relative h-32">
                    <div className="z-10">
                        <h3 className="font-Inter font-semibold text-5xl">01</h3>
                        <h3 className="font-Inter font-semibold text-3xl mt-3">
                        Web Development
                        </h3>
                    </div>

                    <div className=" w-1/2 md:w-3/4 absolute h-32 top-0 right-0 bg-pink z-[-1]"/>
                </div>

                <h3 className="mt-5 font-Poppins font-regular italic text-md text-light-grey text-start">
                Web development is the work involved in developing a website for the Internet, and it can range from developing a simple single static page of plain text to complex web applications.
                </h3>

            
            </motion.div>

            {/* UI Design*/}
            <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="relative h-32">
                    <div className="z-10">
                        <h3 className="font-Inter font-semibold text-5xl">02</h3>
                        <h3 className="font-Inter font-semibold text-3xl mt-3">
                        UI Design                        </h3>
                    </div>

                    <div className=" w-1/2 md:w-3/4 absolute h-32 top-0 right-0 bg-yellow z-[-1]"/>
                </div>

                <h3 className="mt-5 font-Poppins font-regular italic text-md text-light-grey text-start">
                UI design stands for user experience design. UX design is the process of designing the look, feel, and interactivity of a digital product.
                </h3>

            
            </motion.div>


            {/* UX Design*/}
            <motion.div
              className="md:w-1/3 mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              >
                <div className="relative h-32">
                    <div className="z-10">
                        <h3 className="font-Inter font-semibold text-5xl">03</h3>
                        <h3 className="font-Inter font-semibold text-3xl mt-3">
                        UX Design                       
                         </h3>
                    </div>

                    <div className=" w-1/2 md:w-3/4 absolute h-32 top-0 right-0 bg-fuchsia-500 z-[-1]"/>
                </div>

                <h3 className="mt-5 font-Poppins font-regular italic text-md text-light-grey text-start">
                UX design stands for user experience design. UX design is the process of designing products that are easy and fun to use.
                </h3>

            
            </motion.div>
            
        </div>

    </section>
  )
}

export default Skills