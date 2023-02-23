import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import LineGradient from "./Utility-Components/LineGradient";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Contact() {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = () => {
    setTimeout(() => reset(), 3000);
  };

  return (
    <section id="contact" className="pt-10 pb-20 ">
      {/* Headings and Form Section*/}

      <div className="flex justify-center gap-16  mt-12 md:mt-32">
        <div className="  md:w-3/5">
          {/* Headings  */}
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
            <h2 className="font-Poppins font-semibold xs:text-2xl sm:text-4xl md:text-3xl lg:text-4xl mb-5 text-center md:text-start">
              CONTACT ME T<span className="text-pink">O GET STARTED</span>
            </h2>
            <div className="flex justify-center md:justify-start">
              <LineGradient width="w-4/5" />
            </div>
          </motion.div>

          {/* Form  */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/794389acd4c216be8cf1e23ff2eddb18"
              className="mt-16 text-dark-blue"
            >
              <input
                type="text"
                placeholder="NAME"
                required
                name="formname"
                {...register("name", { required: true, maxLength: 100 })}
                className="w-full bg-light-grey font-Inter font-semibold placeholder-dark-grey p-3 "
              />
              {errors.name && (
                <p className="text-pink mt-1">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                type="email"
                required
                placeholder="EMAIL"
                name="formemail"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className="w-full bg-light-grey font-Inter font-semibold placeholder-dark-grey p-3 mt-7"
              />
              {errors.email && (
                <p className="text-pink mt-1">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                name="formmessage"
                required
                rows="4"
                cols="50"
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
                className="w-full bg-light-grey font-Inter font-semibold placeholder-dark-grey p-3 mt-7"
              />
              {errors.message && (
                <p className="text-pink mt-1">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="p-5 bg-pink font-semibold font-Inter text-lg text-simon mt-5 hover:bg-simon hover:text-dark-blue transition duration-500  "
              >
                SEND ME A MESSAGE
              </button>
            </form>
          </motion.div>
        </div>

        {/* Image */}
        {isAboveLarge && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative md:w-2/5 z-0 ml-20 before:absolute before:-top-10 before:-left-10
            before:w-full before:h-full before:border-2 before:border-pink before:z-[-1] md:before:max-h-[350px] lg:before:max-h-[500px]   "
          >
            <img
              alt="Contact"
              className="z-10"
              src="assets/contact-image.png"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Contact;
