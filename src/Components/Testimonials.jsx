import { motion } from "framer-motion";
import LineGradient from "./Utility-Components/LineGradient";

function Testimonials() {
  return (
    <section id="testimonials" className="pt-10 pb-24 ">

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
                TESTI<span className="text-pink">MONIALS</span>

                </h2>
                <div className="flex justify-center md:mx-52">
                <LineGradient width= "w-1/3"/>
                </div>

                <h3 className="mt-10 mb-10 font-Poppins font-medium italic text-xl text-light-grey  text-center ">
                Sample Testimonials 
                </h3>

            </motion.div>

                 {/* Testimonials */}
                 <div className="flex flex-wrap gap-8 justify-evenly">

                    <motion.div
                        className=" relative bg-pink max-w-[300px] h-[250px] flex flex-col justify-end p-8 mt-48
                            before:absolute before:top-[-120px] before:-ml-[75px] before:left-1/2 before:content-person1"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                        >
                            <p className="font-Inter text-6xl">“</p>
                            <p className="text-center font-Inter text-xl">
                                A auctor pharetra hendrerit mattis amet etiam interdum platea.
                            </p>
                     </motion.div>

                     <motion.div
          className=" relative bg-yellow max-w-[300px] h-[250px] flex flex-col justify-end p-8 mt-48
          before:absolute before:top-[-120px] before:-ml-[75px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
         <p className="font-Inter text-6xl">“</p>
         <p className="text-center font-Inter text-xl">
            Aliquam aliquet integer ut fames  in at. At magna ornare dictum
            lectus.
          </p>
        </motion.div>

        <motion.div
          className=" relative bg-fuchsia-500 max-w-[300px] h-[250px] flex flex-col justify-end p-8 mt-48
          before:absolute before:top-[-120px] before:-ml-[75px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
        
        <p className="font-Inter text-6xl">“</p>
        <p className="text-center font-Inter text-xl">
            Fames odio in at. At magna ornare dictum lectus.
          </p>
        </motion.div>



                 </div>




    </section>
  )
}

export default Testimonials