import Html from "../image/html-5-svgrepo-com.svg";
import Css from "../image/css-3-svgrepo-com.svg";
import Git from "../image/git-svgrepo-com.svg";
import JavaScript from "../image/js-svgrepo-com.svg";
import React from "../image/react-svgrepo-com.svg";
import Tailwind from "../image/tailwind-css-icon.svg";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const tecs = [
  {
    id: 1,
    title: "HTML",
    src: Html,
    style: "shadow-[#e44d26]",
  },
  {
    id: 2,
    title: "CSS",
    src: Css,
    style: "shadow-[#1172b8]",
  },
  {
    id: 3,
    title: "Git",
    src: Git,
    style: "shadow-[#ee513b]",
  },
  {
    id: 4,
    title: "JavaScript",
    src: JavaScript,
    style: "shadow-[#ffca28]",
  },
  {
    id: 5,
    title: "React",
    src: React,
    style: "shadow-[#00d8ff]",
  },
  {
    id: 6,
    title: "Tailwind",
    src: Tailwind,
    style: "shadow-[rgb(6,182,212)]",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  console.log(isInView);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <section
        id="skills"
        className=" dark:bg-darkBackground relative mx-auto mb-28 flex h-full max-w-7xl flex-col bg-background p-8   md:justify-evenly "
      >
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p className=" dark:text-darkPrimary text-center text-lg font-bold text-secondary">
            Ecco le mie
          </p>
          <h1 className=" dark:text-darkSecondary text-center text-4xl text-primary  md:text-6xl">
            Top Skills
          </h1>
        </motion.div>

        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25, delayChildren: 1 }}
          className=" mt-12 grid grid-cols-2 gap-8 gap-y-12  sm:grid-cols-3"
        >
          {tecs.map((tec) => {
            return (
              <div
                key={tec.id}
                className={`${tec.style} dark:${tec.style} flex flex-col items-center justify-center rounded-lg py-2 shadow-lg`}
              >
                <figure
                  className={`dark:bg-darkBackground flex h-full w-[90%] flex-col  items-center justify-center bg-background `}
                >
                  <img
                    src={tec.src}
                    alt={tec.title}
                    loading="lazy"
                    className=" dark:bg-darkBackground mx-auto w-24 bg-background"
                  />
                </figure>
                <p className=" dark:text-darkPrimary text-center text-lg text-primary">
                  {tec.title}
                </p>
              </div>
            );
          })}
        </motion.div>
      </section>
    </>
  );
};
export default Skills;
