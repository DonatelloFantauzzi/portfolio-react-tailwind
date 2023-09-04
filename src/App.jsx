import Home from "./components/Home";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contatti from "./components/Contatti";
import Footer from "./components/Footer";
import Petting from "./image/Petting.svg";
import Zombie from "./image/ZombieingDoodle.svg";
import Swinging from "./image/SwingingDoodle.svg";

import { motion, useAnimation, useInView } from "framer-motion";
// import { useEffect, useRef } from "react";

function App() {
  // if (
  //   localStorage.theme === "dark" ||
  //   (!("theme" in localStorage) &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches)
  // ) {
  //   document.documentElement.classList.add("dark");
  // } else {
  //   document.documentElement.classList.remove("dark");
  // }

  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true }, { treshold: 1 });
  // console.log(isInView);

  // const mainControls = useAnimation();

  // useEffect(() => {
  //   if (isInView) {
  //     mainControls.start("visible");
  //   }
  // }, [isInView]);

  return (
    <main
      // ref={ref}
      className=" h-full  overflow-hidden bg-background dark:bg-darkBackground "
    >
      <Nav />

      <Home />
      {/* <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      > */}
      <img
        src={Petting}
        alt="immagine donna con cane"
        className=" mx-auto w-56 rounded-[50%] dark:border-[7px] dark:border-darkSecondary md:w-[20rem] lg:w-[24rem]"
      />

      <Skills />

      <img
        src={Zombie}
        loading="lazy"
        alt=""
        className=" mx-auto  w-56 rounded-[50%] dark:border-[7px] dark:border-darkSecondary md:w-[20rem] lg:w-[24rem]"
      />

      <Portfolio />

      <img
        src={Swinging}
        loading="lazy"
        alt=""
        className="mx-auto w-56 dark:rounded-[50%] dark:border-[7px]  dark:border-darkSecondary md:w-[20rem] lg:w-[24rem]"
      />

      <Contatti />
      <Footer />
      {/* </motion.div> */}
    </main>
  );
}

export default App;
