import { motion } from "framer-motion";

const HomeContent = () => {
  const container = {
    hidden: { opacity: 0, x: "+100%" },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        type: "spring",
        bounce: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className=" flex  basis-2/5 flex-col  items-center justify-center md:grow-[2] md:items-start"
    >
      <h1 className=" mb dark:text-darkSecondary mb-[-6px]  text-4xl font-normal text-secondary md:text-5xl ">
        Ciao, sono
      </h1>
      <h1 className=" dark:text-darkPrimary text-5xl font-bold text-primary md:text-7xl ">
        Donatello!
      </h1>
      <h2 className=" dark:text-darkSecondary  text-xl font-semibold text-secondary md:text-2xl ">
        Front-end Developer
      </h2>
      <a
        href="DonatelloFantauzziResume.pdf"
        download="DonatelloFantauzziResume.pdf"
        className=" dark:border-darkSecondary dark:hover:bg-darkSecondary dark:hover:text-darkBackground mb-7 mt-2 rounded-full border-2 border-solid border-secondary px-6 py-2 opacity-70 duration-500  hover:scale-110 hover:bg-secondary hover:text-background active:scale-95"
      >
        <button className=" dark:text-darkPrimary font-normal text-primary md:text-lg">
          Download CV
        </button>
      </a>
      <p className=" dark:text-darkPrimary text-center text-lg  text-primary  md:text-start md:text-xl md:leading-7">
        Laureato in Scienze naturali con la passione per l'informatica e la
        programmazione. Negli ultimi anni ho deciso di trasformare questa
        passione in un lavoro e ho approfondito le mie conoscenze dedicandomi
        allo studio del front-end.
      </p>
    </motion.div>
  );
};
export default HomeContent;
